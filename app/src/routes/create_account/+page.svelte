<script lang="ts">
    let account_name;
    let age;
    let starting_balance;
    let allowence;
    let intrest;

    let account_status = "...";

    function create_account(){
    }
</script>

<div class="bg-white m-10 rounded-xl drop-shadow-xl">
    <br>
    <h1 class="flex justify-center text-stone-500 text-4xl m-4">Interested in opening an account?</h1>

    <p class="flex justify-center text-stone-500 text-lg m-4">Fill in your information and we'll get you sorted.</p>

    <input type="text" bind:value={account_name} placeholder="Account Holder Name" class="m-6 p-2 border-2 border-gray-300 rounded-md"/>
    <input type="number" bind:value={age} placeholder="Account Holder Age" class="m-6 p-2 border-2 border-gray-300 rounded-md"/>
    <input type="number" bind:value={starting_balance} placeholder="Starting Account Balance" class="m-6 p-2 border-2 border-gray-300 rounded-md"/>
    <input type="number" bind:value={allowence} placeholder="Monthly Allowence" class="m-6 p-2 border-2 border-gray-300 rounded-md"/>
    <input type="numbers" bind:value={intrest} placeholder="Monthly Interest" class="m-6 p-2 border-2 border-gray-300 rounded-md"/>

    <p class="flex justify-center">{account_status}</p>
    <div class="flex justify-center">
        <button class="m-6 p-2 bg-blue-500 text-white rounded-md" on:click={() => create_account()}>Create Account</button>
    </div>
</div>