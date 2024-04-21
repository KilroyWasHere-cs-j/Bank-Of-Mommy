<script lang="ts">
    import { onMount } from 'svelte';
    import {get} from 'svelte/store'
    import AccountBox from '../../components/account_box.svelte';
    import Button from '../../components/button.svelte';

    import { user_account_number, user_password_hash, user_username, user_first_name, user_last_name, user_account_balance, user_age, user_allowance, user_interest } from '../data';

    let username : String = "username";
    let account_number = 0;
    let first_name = "first_name";
    let last_name = "last_name";
    let age = 0;
    let allowance = 0.00;
    let interest = 0.00;
    let account_balance = 0.00;

    onMount(() => {
        username = get(user_username);
        account_number = get(user_account_number);
        first_name = get(user_first_name);
        last_name = get(user_last_name);
        age = get(user_age);
        account_balance = get(user_account_balance);
        interest = get(user_interest);
        allowance = get(user_allowance);
    })
    
</script>

<div class="bg-white m-10 rounded-xl drop-shadow-xl">
    <p class="flex justify-center text-lg mt-2">Welcome {username}!</p>
    <p class="flex justify-center">{account_number}</p>
    <br>

    <p class="flex justify-center">Accounts Overview</p>
    <div class="grid grid-cols-4">
        <div class="m-4 border-r-2 border-t-2 border-l-2 border-b-2">
            <p class="m-1">Account Total Balance</p>
            <p class="m-1">$ {account_balance}</p>
        </div>

        <div class="m-4 border-r-2 border-t-2 border-l-2 border-b-2">
            <p class="m-1">Interest</p>
            <p class="m-1">${interest}</p>
        </div>
        <div class="m-4 border-r-2 border-t-2 border-l-2 border-b-2">
            <p class="m-1">Allowance</p>
            <p class="m-1">${allowance}</p>
        </div>
        <div class="m-4 border-r-2 border-t-2 border-l-2 border-b-2">
            <p class="m-1">Account issues</p>
            <p class="m-1">0</p>
        </div>
    </div>

    <div class="flex justify-center">
        <Button text="Update account information." on:click={() => console.log("update information")}/>
        <Button text="Adjust account balance." on:click={() => console.log("adjust balance")}/>
    </div>

    <!-- <div>
        <AccountBox first_name="David" last_name="D"/>
        <AccountBox first_name="Gillian" last_name="A"/>
    </div> -->

    <br>

</div>
