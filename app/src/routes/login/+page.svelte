<script lang="ts">
  import axios from 'axios';
  import { goto } from '$app/navigation';

  import { user_account_number, user_username, user_first_name, user_last_name, user_account_balance, user_age, user_allowance, user_interest } from '../data';
  import { onMount } from 'svelte';
  import { get } from 'svelte/store';

  onMount(() => {
    username = get(user_username);
  });

  let username = "";
  let password = "";

  // Define your GraphQL endpoint
  const graphqlEndpoint = 'https://bank-of-mommy.hasura.app/v1/graphql';

  // ! Needs to be secret 
  const apiKey = 'rVimQoSnkyIOlsPFkKJC8VX5ZuLP0XtoI8vdvYe3BmqEEPPY5yO7s48AX39mlY2E';

  // Define headers with the API key
  const headers = {
    'x-hasura-admin-secret': apiKey, // Change to 'x-hasura-access-key' if needed
  };

  let login_status = "";
  let login_attempts = 0;
  let login_attempts_cap = 5;

  let login_valid = true;

  function login() : void {
    let query = `
    query Get_User_Data_With_User_Pass @cached {
      accounts(where: {Password_Hash: {_eq: "${password}"}, Username: {_eq: "${username}"}}) {
        Account_Num,
        Age
        Allowance
        First_Name
        Interest
        Last_Name
        Account_Balance
        Username
        Password_Hash
      }
    }
  `;
    if(login_attempts != login_attempts_cap){
      user_username.set(username);
      // Send the GraphQL query to the server using axios
      axios.post(graphqlEndpoint, { query }, { headers })
      .then((response) => {
        const accounts = response.data.data.accounts;
        if (accounts.length > 0) {
          const account = accounts[0]; // We only care about the first account
          const {
            Account_Num,
            First_Name,
            Last_Name,
            Interest,
            Age,
            Allowance,
            Account_Balance,
          } = account;
          user_account_number.set(Account_Num);
          user_first_name.set(First_Name);
          user_last_name.set(Last_Name);
          user_interest.set(Interest);
          user_age.set(Age);
          user_allowance.set(Allowance);
          user_account_balance.set(Account_Balance);
          goto("/dashboard");
        } else {
          console.log('No account found for the specified credentials.');
        }
      })
      .catch((error) => {
        alert("We could not locate your account. Please ensure that both the username and password are correct.");
        console.error('Error:', error); // Handle errors
      });
    }
  }

</script>

<br>

<div class="bg-white m-10 rounded-xl drop-shadow-xl">
  <h1 class="flex justify-center text-6xl m-6">Login</h1>

  <div class="flex justify-center">
    <input type="text" bind:value={username} placeholder="Username" class="flex justify-center m-6 p-2 border-2 border-gray-300 rounded-md"/>
    <input type="password" bind:value={password} placeholder="Password" class="flex justify-center m-6 p-2 border-2 border-gray-300 rounded-md"/>
  </div>

  <div class="flex justify-center">
    <button class="m-6 p-2 bg-amber-400 text-white rounded-md" disabled={!login_valid} on:click={() => login()}>Login</button>
  </div>
  <p class="flex justify-center">{login_status}</p>

</div>
