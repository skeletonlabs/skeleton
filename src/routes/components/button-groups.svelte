<script lang="ts">
    import CodeBlock from "$lib/CodeBlock/CodeBlock.svelte";
    import Card from "$lib/Card/Card.svelte";
    import ButtonGroup from "$lib/Button/ButtonGroup.svelte";
    import Button from "$lib/Button/Button.svelte";

    let a = 0;
    $: active = (i: number): boolean => { return i === a; }
</script>

<div class="space-y-8">

	<!-- Header -->
	<header class="space-y-4">
		<h1>Button Groups</h1>
		<p>Button groups house a set of related actions.</p>
		<CodeBlock language="js" code={`<script>import {Button} from '@brainandbones/skeleton';</\script>`}></CodeBlock>
	</header>

    <!-- Sandbox -->
	<section class="space-y-4">
        <Card class="space-y-4">
            <ButtonGroup>
                <Button on:click={()=>{a=0}} active={active(0)}>0</Button>
                <Button on:click={()=>{a=1}} active={active(1)}>1</Button>
                <Button on:click={()=>{a=2}} active={active(2)}>2</Button>
                <Button on:click={()=>{a=3}} active={active(3)}>3</Button>
            </ButtonGroup>
            <p>Active: {a}</p>
        </Card>
        <pre>{JSON.stringify(active(0), null, 2)}</pre>
        <pre>{JSON.stringify(active(1), null, 2)}</pre>
        <pre>{JSON.stringify(active(2), null, 2)}</pre>
        <pre>{JSON.stringify(active(3), null, 2)}</pre>
    </section>

</div>