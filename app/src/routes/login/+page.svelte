<script lang="ts">
  import Button from "../../components/button.svelte";

  let username = "";
  let password = "";

  let isValid = () => {
    return username.length > 0 && password.length > 0;
  };

</script>

<br>

<h1 class="flex justify-center text-6xl m-6">Login</h1>

<div class="flex justify-center">
    <input type="text" bind:value={username} placeholder="Username" class="flex justify-center m-6 p-2 border-2 border-gray-300 rounded-md"/>
    <input type="password" bind:value={password} placeholder="Password" class="flex justify-center m-6 p-2 border-2 border-gray-300 rounded-md"/>
</div>

<div class="flex justify-center">
  <button class="m-6 p-2 bg-blue-500 text-white rounded-md" disabled={!isValid} on:click={() => alert("Debug")}>Login</button>
</div>
