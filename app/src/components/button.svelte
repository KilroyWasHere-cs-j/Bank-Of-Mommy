<script lang="ts">
    export let text: string;
</script>

<div class="flex justify-center">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-6" on:click>{text}</button>
</div>