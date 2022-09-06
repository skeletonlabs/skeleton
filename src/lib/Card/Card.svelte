<script lang="ts">
	// Props
	export let background: string = 'bg-surface-200 dark:bg-surface-800';
	export let color: string | undefined = undefined;
	export let padding: string = 'p-4';
	export let space: string = 'space-y-4';
	export let ringSize: string = 'ring-[1px]';
	export let ringColor: string = 'ring-black/5 dark:ring-white/5';
	export let ringInset: string = 'ring-inset';
	export let rounded: string = 'rounded-lg';
	// Props (per slot)
	export let header: string | undefined = undefined;
	export let body: string | undefined = undefined;
	export let footer: string | undefined = undefined;

	// Reactive
	$: classesCard = `${background} ${color} ${padding} ${space} ${ringSize} ${ringColor} ${ringInset} ${rounded}`;
	$: classesHeader = `${header}`;
	$: classesBody = `${body}`;
	$: classesFooter = `${footer}`;
</script>

<div class="card {classesCard} {$$props.class || ''}" data-testid="card">
	<!-- Header -->
	{#if $$slots.header}
		<header class="card-header {classesHeader}"><slot name="header" /></header>
	{/if}
	<!-- Body -->
	<section class="card-body {classesBody}"><slot /></section>
	<!-- Footer -->
	{#if $$slots.footer}
		<footer class="card-footer {classesFooter}"><slot name="footer" /></footer>
	{/if}
</div>
