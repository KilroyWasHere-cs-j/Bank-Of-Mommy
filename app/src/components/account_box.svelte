<script lang="ts">
    export let first_name:string = "first";
    export let last_name:string = "last";

    export let account_balance:number = 0;
    export let adjustment_value:number;
    export let intrest:number;
    export let allowence:number;

    function adjust_account_balance(){
        if(adjustment_value > 0){
            account_balance = +account_balance + +adjustment_value;
        }
        else{
          account_balance = +account_balance - -adjustment_value;
        }
    }

    function save() {
      alert("The account changes have been saved");

      adjustment_value = 0;
    }
</script>

<div class="bg-sky-300 m-4 rounded-xl">
    <h1 class="text-xl m-2">Account holder: {first_name} {last_name}</h1>
    <p class="text-lg m-2">Balance: $ {account_balance}</p>

    <p class="text-xl m-2">Add to account:</p>
    <button class="m-6 p-2 bg-blue-500 text-white rounded-md" on:click={() => adjust_account_balance()}>Adjust account balance</button>
    <input type="text" bind:value={adjustment_value} placeholder="Value" class="m-6 p-2 border-2 border-gray-300 rounded-md"/>
    <input type="text" bind:value={intrest} placeholder="Intrest" class="m-6 p-2 border-2 border-gray-300 rounded-md"/>
    <input type="text" bind:value={allowence} placeholder="Allowence" class="m-6 p-2 border-2 border-gray-300 rounded-md"/>

    <button class="m-6 p-2 bg-blue-500 text-white rounded-md" on:click={() => save()}>Save</button>
</div>
