<script lang="ts">
    import Button from '$lib/button/Button.svelte';
    import Card from '$lib/card/Card.svelte';
</script>

<h2 class="text-3xl font-bold mb-4">
    <span class="bg-clip-text text-transparent bg-gradient-to-br from-primary-500 to-accent-500">Buttons</span>
</h2>
<Card class="flex justify-center space-x-4">
    <div>
        <h2 class="text-lg mb-4">Default</h2>
        <nav class="flex flex-col space-y-4">
            <Button on:click="{_=>{alert('Hello World')}}">Default</Button>
        </nav>
    </div>
    <div>
        <h2 class="text-lg mb-4">Filled</h2>
        <nav class="flex flex-col space-y-4">
            <Button filled>Button</Button>
            <Button href="http://www.google.com" target="_blank" filled>Anchor</Button>
            <Button filled primary>Primary</Button>
            <Button filled accent>Accent</Button>
            <Button filled disabled>Disabled</Button>
        </nav>
    </div>
    <div>
        <h2 class="text-lg mb-4">Outlined</h2>
        <nav class="flex flex-col space-y-4">
            <Button outlined>Button</Button>
            <Button href="http://www.google.com" target="_blank" outlined>Anchor</Button>
            <Button outlined primary>Primary</Button>
            <Button outlined accent>Accent</Button>
            <Button outlined disabled>Disabled</Button>
        </nav>
    </div>
    <div>
        <h2 class="text-lg mb-4">Text</h2>
        <nav class="flex flex-col space-y-4">
            <Button text>Button</Button>
            <Button href="http://www.google.com" target="_blank" text>Anchor</Button>
            <Button text primary>Primary</Button>
            <Button text accent>Accent</Button>
            <Button text disabled>Disabled</Button>
        </nav>
    </div>
    <div>
        <h2 class="text-lg mb-4">Icon</h2>
        <nav class="flex flex-col space-y-4">
            <Button text>&#9733;</Button>
            <Button href="http://www.google.com" target="_blank" text>&#9733;</Button>
            <Button text primary>&#9733;</Button>
            <Button text accent>&#9733;</Button>
            <Button text disabled>&#9733;</Button>
        </nav>
    </div>
</Card>