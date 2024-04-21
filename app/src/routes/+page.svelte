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
    <Hero title="Mother Tree Bank"/>

    <div class="bg-sky-50">
        <h1 class="flex justify-center text-4xl m-4">Our Misson</h1>
        <p class="flex justify-center text-xl m-4">We aim to give families a fun and simple way to track their kids' money, to teach kids the basics of banking, and to encourage them to develop healthy financial habits.</p>
        <h1 class="flex justify-center text-4xl m-4">Our Services</h1>
        <p class="flex justify-center text-xl m-4">We are not an actual bank - you keep your kids' money, and we just help you keep track of each account.  With our help, you can be a safe place to store your kids money, give them allowance and interest, buy any gift cards from them, help them make purchases with their own money, and show them their current balance at any time.</p>

        <br>

        <h1 class="flex justify-center text-4xl m-4">How The Bank Of Mommy Works</h1>

        <div class="grid grid-cols-4 gap-4 m-9">
            <div class="border-8 border-solid border-amber-400">
                <img src="https://thumbs.dreamstime.com/b/volunteer-money-help-icon-simple-vector-kid-care-parent-share-love-303099171.jpg" alt="Money Hand" height="200" width="120">
                <p class="m-2">Your kids give you all their cash</p>
            </div>
            <div class="border-8 border-solid border-amber-400">
                <img src="https://www.creativefabrica.com/wp-content/uploads/2018/12/Bank-icon-by-back1design1-3.jpg" alt="Bank" height="200" width="200">
                <p class="m-2">The Bank Of Mommy with track and manage your account.</p>
            </div>
            <div class="border-8 border-solid border-amber-400">
                <img src="https://media.istockphoto.com/id/1195858351/vector/cash-register-thin-line-icon.jpg?s=612x612&w=0&k=20&c=UVZRQeCCfHa7qjBqcnkyYzOb6nw20NSBClRFQ3uc1ZU=" alt="Cash Registar" height="200" width="150">
                <p class="m-2">When your kids make a purchase you pay and update their accounts to reflect the transaction</p>
            </div>
            <div class="border-8 border-solid border-amber-400">
                <img class="m-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnKRpuM2DqkYsI243nivLJ748GN0yYQEyMNw&usqp=CAU" alt="Money" height="200" width="150">
                <p class="m-2">When your kids decide to save their money, they can watch the balance go out each month thanks to the interest payments.</p>
            </div>
          </div>

        <br>

        <div class="flex justify-center">
            <Button text="Learn More" on:click={() => window.location.href = '/getting_started'}/>
        </div>
        <br>
    </div>

    <Footer/>
</div>

