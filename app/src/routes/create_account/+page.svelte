<script lang="ts">
    import Button from "../../components/button.svelte";
    import TextInput from "../../components/text_input.svelte";
</script>

<div>
    <h1>Interested in opening an account?</h1>

    <p>Fill in your information and we'll get you sorted.</p>


    <Button text="Create new account with us!" on:click={() => window.location.href = '/create_account'}/>
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

    input {
        width: 100%;
        height: 50px;
        margin: 10px 0;
        padding: 10px;
        font-size: 1.5rem;
    }
</style>