<script lang="ts">
    export let title: string;
</script>

<div class="hero">
    <h1>{title}</h1>
</div>

<style>
    .hero {
        margin-top: 300px;
        width: 100%;
        height: 300px;
    }

    h1 {
        color: white;
        font-size: 8rem;
        text-align: center;
    }
</style>