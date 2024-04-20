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
        <h1 class="flex justify-center text-4xl m-4">Our Misson</h1>
        <p class="flex justify-center text-xl m-4">We aim to give families a fun and simple way to track their kids' money, to teach kids the basics of banking, and to encourage them to develop healthy financial habits.</p>
        <h1 class="flex justify-center text-4xl m-4">Our Services</h1>
        <p class="flex justify-center text-xl m-4">We are not an actual bank - you keep your kids' money, and we just help you keep track of each account.  With our help, you can be a safe place to store your kids money, give them allowance and interest, buy any gift cards from them, help them make purchases with their own money, and show them their current balance at any time.</p>

        <br>

        <h1 class="flex justify-center text-4xl m-4">How The Bank Of Mommy Works</h1>
        
        <div class="flex justify-center">
            <ol type="1" class="max-w-md space-y-1 text-zinc-950 list-disc list-inside dark:text-zinc-950">
                <li>Your kids give you all their cash</li>
                <li>The Bank of Mommy will keep track of how much money each kid has</li>
                <li>You determine weather you want to give your kids allowance, birthday, and other gifts, and a monthly interest payment on their savings. Bank of Mommy will keep track of that too.</li>
                <li>When your want to purchase something, you buy it for them, and debut that amount from their Bank of Mommy account.</li>
                <li>When your kids decide to save their money, they can watch the balance go out each month thanks to the interest payments.</li>
            </ol>
        </div>  

        <br>

        <div class="flex justify-center">
            <Button text="Learn More" on:click={() => window.location.href = '/getting_started'}/>
        </div>
        <br>
    </div>

    <Footer/>
</div>

