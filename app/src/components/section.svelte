<script lang="ts">
    export let title: string;
    export let text: string;
    export let background: string;
</script>

<div class="section" style:background>
    <h1>{title}</h1>
    <p>{text}</p>
    <slot />
</div>

<style>
    .section {
        margin-top: 500px;
        width: 100%;
        height: 300px;
    }

    h1 {
        color: white; 
        font-size: 3rem;
        text-align: center;
    }

    p {
        color: white;
        font-size: 1.5rem;
        text-align: center;
    }
</style>