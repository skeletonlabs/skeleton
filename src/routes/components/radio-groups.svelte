<script lang="ts">
    import CodeBlock from "$lib/CodeBlock/CodeBlock.svelte";
    import Card from "$lib/Card/Card.svelte";
    import RadioGroup from "$lib/RadioGroup/RadioGroup.svelte";
    import RadioItem from "$lib/RadioGroup/RadioItem.svelte";

    let aNumber: number = 0;
    let aDir: string = 'horz';
</script>

<div class="space-y-8">

	<!-- Header -->
	<header class="space-y-4">
		<h1>Radio Groups</h1>
		<p>Allows you to select an option from a group.</p>
		<CodeBlock language="js" code={`<script>import {RadioGroup} from '@brainandbones/skeleton';</\script>`}></CodeBlock>
	</header>

    <!-- Sandbox -->
	<section class="flex space-x-4">
        <Card class="flex-auto space-y-2 text-center">
            <RadioGroup>
                <RadioItem value={0} bind:active={aNumber}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H256C273.7 32 288 46.33 288 64C288 81.67 273.7 96 256 96zM256 352H32C14.33 352 0 337.7 0 320C0 302.3 14.33 288 32 288H256C273.7 288 288 302.3 288 320C288 337.7 273.7 352 256 352zM0 192C0 174.3 14.33 160 32 160H416C433.7 160 448 174.3 448 192C448 209.7 433.7 224 416 224H32C14.33 224 0 209.7 0 192zM416 480H32C14.33 480 0 465.7 0 448C0 430.3 14.33 416 32 416H416C433.7 416 448 430.3 448 448C448 465.7 433.7 480 416 480z"/></svg>
                </RadioItem>
                <RadioItem value={1} bind:active={aNumber}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M320 96H128C110.3 96 96 81.67 96 64C96 46.33 110.3 32 128 32H320C337.7 32 352 46.33 352 64C352 81.67 337.7 96 320 96zM416 224H32C14.33 224 0 209.7 0 192C0 174.3 14.33 160 32 160H416C433.7 160 448 174.3 448 192C448 209.7 433.7 224 416 224zM0 448C0 430.3 14.33 416 32 416H416C433.7 416 448 430.3 448 448C448 465.7 433.7 480 416 480H32C14.33 480 0 465.7 0 448zM320 352H128C110.3 352 96 337.7 96 320C96 302.3 110.3 288 128 288H320C337.7 288 352 302.3 352 320C352 337.7 337.7 352 320 352z"/></svg>
                </RadioItem>
                <RadioItem value={2} bind:active={aNumber}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 96H192C174.3 96 160 81.67 160 64C160 46.33 174.3 32 192 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96zM416 352H192C174.3 352 160 337.7 160 320C160 302.3 174.3 288 192 288H416C433.7 288 448 302.3 448 320C448 337.7 433.7 352 416 352zM0 192C0 174.3 14.33 160 32 160H416C433.7 160 448 174.3 448 192C448 209.7 433.7 224 416 224H32C14.33 224 0 209.7 0 192zM416 480H32C14.33 480 0 465.7 0 448C0 430.3 14.33 416 32 416H416C433.7 416 448 430.3 448 448C448 465.7 433.7 480 416 480z"/></svg>
                </RadioItem>
            </RadioGroup>
            <p>Active: {aNumber}</p>
        </Card>
        <Card class="flex-auto space-y-2 text-center">
            <RadioGroup background="bg-purple-500" color="text-yellow-300">
                <RadioItem value="horz" bind:active={aDir}>Horizontal</RadioItem>
                <RadioItem value="vert" bind:active={aDir}>Vertical</RadioItem>
            </RadioGroup>
            <p>Active: {aDir}</p>
        </Card>
    </section>

    <!-- Usage -->
    <CodeBlock language="html" code={`<RadioGroup>\n\t<RadioItem value="skeleton" bind:active={ref}>Skeleton</RadioItem>\n</RadioGroup>`}></CodeBlock>

</div>

<style lang="postcss">
    svg { @apply h-[24px] fill-white; }
</style>