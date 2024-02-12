<script lang="ts">
  import Button from "../../components/button.svelte";

</script>

<div>
    <h1>Getting Started</h1>
    <p>Already have an account with us?</p>

    <Button text="Login" on:click={() => window.location.href = '/login'}/>

    <p>No account yet? Wanna make one?</p>
    
    <Button text="Create account" on:click={() => window.location.href = '/create_account'}/>
</div>

<style>
    :global(body){
        background-color: lightseagreen;
    }

    h1 {
        color: white;
        font-size: 3rem;
        text-align: center;
        margin-top: 10%;
    }

    p {
        color: white;
        font-size: 1.5rem;
        text-align: center;
    }
</style>