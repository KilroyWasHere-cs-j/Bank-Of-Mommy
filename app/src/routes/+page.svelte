<script>
    import { onMount } from 'svelte';
    import Button from '../components/button.svelte';
    onMount(() => {
        document.title = 'Bank of Mommy';
    });

    import Hero from '../components/hero.svelte';
    import Footer from '../components/footer.svelte';
</script>

<div>
    <Hero title="Welcome to the Bank of Mommy"/>

    <div class="bg-sky-50">
        <h1>Our Misson</h1>
        <p>We aim to give parents a simple a fun way to teacher thier kids about money and how to be responcable with it.</p>
        <h1>Our Services</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A diam maecenas sed enim ut. Sed euismod nisi porta lorem. A diam sollicitudin tempor id eu nisl. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Sapien et ligula ullamcorper malesuada proin libero nunc consequat. Duis convallis convallis tellus id interdum velit laoreet id. Laoreet non curabitur gravida arcu ac tortor dignissim convallis. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Ut ornare lectus sit amet est placerat in egestas erat.</p>

        <br>

        <h1>How The Bank Of Mommy Works</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A diam maecenas sed enim ut. Sed euismod nisi porta lorem. A diam sollicitudin tempor id eu nisl. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Sapien et ligula ullamcorper malesuada proin libero nunc consequat. Duis convallis convallis tellus id interdum velit laoreet id. Laoreet non curabitur gravida arcu ac tortor dignissim convallis. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Ut ornare lectus sit amet est placerat in egestas erat.</p>
        <br>

        <div class="flex justify-center">
            <Button text="Learn More" on:click={() => window.location.href = '/getting_started'}/>
        </div>
        <br>
    </div>

    <Footer title="Contact Us" text="If you have any questions, please contact us at 1-800-123-4567." background="white"/>
</div>

<style>
    h1 {
        margin: 2%;
        color: gray;
        font-size: 3rem;
        text-align: center;
    }

    p {
        margin: 5%;
        color: gray;
        font-size: 1.5rem;
        text-align: center;
    }
</style>