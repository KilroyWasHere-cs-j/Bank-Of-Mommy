<script>
    import { onMount } from 'svelte';
    import Button from '../components/button.svelte';
    onMount(() => {
        document.title = 'Bank of Mommy';
    });

    import Section from '../components/section.svelte';
    import Hero from '../components/hero.svelte';
</script>

<div>
    <Hero title="Welcome to the Bank of Mommy"/>

    <Section title="What is the Bank of Mommy?" text="The Bank of Mommy is a financial institution that provides loans to children. The Bank of Mommy is not a real bank, but it is a fun way to teach children about money and responsibility." background="lightblue"/>  

    <Section title="How does the Bank of Mommy work?" text="The Bank of Mommy provides loans to children. The children must pay back the loans with interest. The Bank of Mommy also provides a savings account for children. The children can deposit money into their savings account and earn interest." background="lightseagreen"/>

    <Section title="Getting started" text="To get started, click the 'Get Started' button below." background="lightblue">
        <Button text="Get Started" on:click={()=> window.location.href = '/getting_started'}/>
    </Section>
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

    img {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }
</style>