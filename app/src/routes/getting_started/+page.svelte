<script lang="ts">
  import Button from "../../components/button.svelte";

  let background = "";
</script>

<div class="bg-white m-10 rounded-xl drop-shadow-xl">

    <br>

    <h1 class="flex justify-center text-stone-500 text-6xl m-6">Getting Started</h1>

    <p class="flex justify-center text-stone-500 text-lg">Already have an account with us?</p>

    <div class="flex justify-center">
      <button class="m-6 p-2 bg-blue-500 text-white rounded-md" on:click={() => window.location.href = "/login"}>Login</button>
    </div>

    <p class="flex justify-center text-stone-500 text-lg">No account yet? Wanna make one?</p>

    <div class="flex justify-center">
      <button class="m-6 p-2 bg-blue-500 text-white rounded-md" on:click={() => window.location.href = "/create_account"}>Create Account</button>
    </div>
</div>