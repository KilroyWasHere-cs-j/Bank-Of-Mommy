<script lang="ts">
    import AccountBox from '../../components/account_box.svelte';
    import { onMount } from 'svelte';

    // TODO move the API code to a dedicated file

    // Define your GraphQL endpoint
    const graphqlEndpoint = 'https://bank-of-mommy.hasura.app/v1/graphql';

    // ! Needs to be secret 
    const apiKey = 'rVimQoSnkyIOlsPFkKJC8VX5ZuLP0XtoI8vdvYe3BmqEEPPY5yO7s48AX39mlY2E';

    // Define headers with the API key
    const headers = {
        'x-hasura-admin-secret': apiKey, // Change to 'x-hasura-access-key' if needed
    };

    export let username: string = "user";

    let account_number = 123456;

    let total_account_balance = 0.00;
    let total_children_accounts = 0;
    let total_account_issues = 0;
    let hold = 0;

    let receivedData = {};

    onMount(() => {
        // Parse the data from the URL parameters
        const urlParams = new URLSearchParams(window.location.search);
        const dataString = urlParams.get('data');
        if (dataString) {
            try {
                receivedData = JSON.parse(decodeURIComponent(dataString));
            } catch (error) {
                console.error('Error parsing data from URL:', error);
            }
        }
    });

    function getUserData() : void {
    }
    
</script>

<div class="bg-white m-10 rounded-xl drop-shadow-xl">
    <p class="flex justify-center text-lg mt-2">Welcome {username}!</p>
    <p class="flex justify-center">{account_number}</p>
    <br>

    <p class="flex justify-center">Accounts Overview</p>
    <div class="grid grid-cols-4">
        <div class="m-4 border-r-2 border-t-2 border-l-2 border-b-2">
            <p class="m-1">Account Total Balance</p>
            <p class="m-1">$ {total_account_balance}</p>
        </div>

        <div class="m-4 border-r-2 border-t-2 border-l-2 border-b-2">
            <p class="m-1">Total Child Accounts</p>
            <p class="m-1">{total_children_accounts}</p>
        </div>
        <div class="m-4 border-r-2 border-t-2 border-l-2 border-b-2">
            <p class="m-1">Account Number</p>
            <p class="m-1">{account_number}</p>
        </div>
        <div class="m-4 border-r-2 bcorder-t-2 border-l-2 border-b-2">
            <p class="m-1">Account issues</p>
            <p class="m-1">{total_account_issues}</p>
        </div>
    </div>

    <div>
        <!-- <AccountBox first_name="David" last_name="D"/>
        <AccountBox first_name="Gillian" last_name="A"/> -->
    </div>

    <br>

</div>
