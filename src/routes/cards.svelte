<script lang="ts">
    import Card from "$lib/Card/Card.svelte";
    import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
    import Avatar from "$lib/Avatar/Avatar.svelte";
</script>

<div class="space-y-8">

    <!-- Header -->
    <header class="space-y-4">
        <h2>Cards</h2>
        <p>Container elements that wrap and seperate your content.</p>
    </header>

    <!-- Examples -->
    <section class="grid grid-cols-2 gap-4">
        <Card><p>Minimal</p></Card>
        <Card class="cursor-pointer h-full space-y-8 transition-transform hover:-translate-y-1 hover:shadow-xl">
            <header class="-m-5 mb-5">
                <img src="https://source.unsplash.com/random/960x540" class="bg-white aspect-video mb-4 rounded-tl-lg rounded-tr-lg w-full" alt="Post">
            </header>
            <h6 class="text-primary-500">Announcements</h6>
            <h4>Mixing Tailwind classes and adding body content.</h4>
            <article class="text-surface-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aspernatur provident eveniet eligendi cumque consequatur tempore sint nisi sapiente. Iste beatae laboriosam iure molestias cum expedita architecto itaque quae rem.</article>
            <div class="flex justify-start items-center space-x-4">
                <Avatar outlined size="sm" src="https://i.pravatar.cc/160" />
                <div>
                    <p class="font-bold">By Someone</p>
                    <p>On October 1st, 1983</p>
                </div>
            </div>
        </Card>
    </section>

    <!-- Usage -->
    <section class="space-y-4">
        <h3 class="text-2xl font-bold">Usage</h3>
        <CodeBlock language="javascript" code={`<script>import {card} from '@brainandbones/skeleton';</\script>`}></CodeBlock>
        <CodeBlock language="html" code={`<Card>Minimal</Card>`}></CodeBlock>
        <CodeBlock language="html" code={`<Card class="shadow-xl">Styled</Card>`}></CodeBlock>
    </section>
    
</div>
