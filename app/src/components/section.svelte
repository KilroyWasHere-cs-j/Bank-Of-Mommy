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
        margin: 10px 0;
        width: 100%;
        height: 670px;
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