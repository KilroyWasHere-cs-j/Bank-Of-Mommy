<script lang="ts">
    export let first_name = "first";
    export let last_name = "last";
    export let account_balance = "0.00";

    let adjustment_value = 0.00;

    function adjust_account_balance(){
        alert("Adjusting account by");
    }
</script>

<div class="bg-sky-300 m-4 rounded-xl">
    <h1 class="text-xl m-2">Account holder: {first_name} {last_name}</h1>
    <p class="text-lg m-2">Balance: $ {account_balance}</p>

    <p class="text-xl m-2">Add to account:</p>
    <button class="m-6 p-2 bg-blue-500 text-white rounded-md" on:click={() => adjust_account_balance()}>Adjust account balance</button>
    <input type="text" bind:value={adjustment_value} placeholder="Password" class="m-6 p-2 border-2 border-gray-300 rounded-md"/>
</div>