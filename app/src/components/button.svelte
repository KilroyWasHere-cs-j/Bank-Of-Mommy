<script lang="ts">
    export let text: string;
</script>

<button on:click>{text}</button>

<style>
    button {
        background-color: lightseagreen;
        color: white;
        font-size: 1.5rem;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        border-radius: 1rem;
        transform-origin: center;
        box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
        margin: 10px 46% 50px;
    }

    button:hover {
        cursor: pointer;
        transform: scale(0.975);
        box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
    }
</style>