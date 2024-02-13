<script lang="ts">
    export let title: string;
    export let text: string;
    export let background: string;
</script>

<div class="mt-20" style:background>
    <h1 class="flex justify-center text-stone-500 text-6xl">{title}</h1>
    <p class="flex justify-center text-stone-500 text-2xl m-4">{text}</p>
    <slot />
</div>