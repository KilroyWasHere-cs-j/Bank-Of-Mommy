<script lang="ts">
    export let placeholder = "";
    export let value = "";
</script>

<input bind:value={value} placeholder={placeholder} />