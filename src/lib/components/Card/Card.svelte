<script lang="ts">
	// Props
	export let background: string = 'bg-surface-200 dark:bg-surface-800';
	export let color: string | undefined = '';
	export let padding: string = 'p-4';
	export let space: string = 'space-y-4';
	export let ringWidth: string = 'ring-[1px]';
	export let ringColor: string = 'ring-black/5 dark:ring-white/5';
	export let ringInset: string = 'ring-inset';
	export let rounded: string = 'rounded-lg';
	// Props (slots)
	export let slotHeader: string | undefined = '';
	export let slotBody: string | undefined = '';
	export let slotFooter: string | undefined = '';

	// Local
	const tag: string = $$props.href ? 'a' : 'div';

	// Reactive
	$: classesCard = `${background} ${color} ${padding} ${space} ${ringWidth} ${ringColor} ${ringInset} ${rounded} ${$$props.class || ''}`;
	$: classesHeader = `${slotHeader}`;
	$: classesBody = `${slotBody}`;
	$: classesFooter = `${slotFooter}`;
</script>

<svelte:element this={tag} href={$$props.href} target={$$props.target} class="comp-card {classesCard}" data-testid="card">
	<!-- Header -->
	{#if $$slots.header}
		<header class="comp-card-header {classesHeader}"><slot name="header" /></header>
	{/if}
	<!-- Body -->
	<section class="comp-card-body {classesBody}"><slot /></section>
	<!-- Footer -->
	{#if $$slots.footer}
		<footer class="comp-card-footer {classesFooter}"><slot name="footer" /></footer>
	{/if}
</svelte:element>
