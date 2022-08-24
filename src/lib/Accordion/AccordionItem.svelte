<script lang="ts">
	import SvgIcon from '$lib/SvgIcon/SvgIcon.svelte';

	// Props
	export let open: boolean = false;
	export let hover: string = 'hover:bg-primary-500/10';
	export let spacing: string = 'space-y-2';
	// A11y
	export let summaryId: string | undefined = undefined;
	export let contentId: string | undefined = undefined;

	// Base Classes
	const cBaseDetails: string = '';
	const cBaseSummary: string = 'flex items-center space-x-4 px-4 py-2 cursor-pointer rounded';
	const cBaseIcon: string = 'flex justify-center items-center w-3 fill-black dark:fill-white transition-all duration-[100ms]';
	const cBaseDesc: string = 'px-4 py-2';

	// Reactive Classes
	$: classesDetails = `${cBaseDetails} ${spacing}`;
	$: classesSummary = `${cBaseSummary} ${hover}`;
	$: classesIconState = open ? '-rotate-180' : '';
	$: classesIcon = `${cBaseIcon} ${classesIconState}`;
	$: classesDesc = `${cBaseDesc}`;
</script>

<details bind:open class="accordion-item {classesDetails} {$$props.class}" data-testid="accordion-item">
	<!-- Summary -->
	<summary id={summaryId} class={classesSummary} aria-expanded={open} aria-controls={contentId}>
		<!-- Slot: Lead -->
		{#if $$slots.lead}<div><slot name="lead" /></div>{/if}
		<!-- Slot: Text -->
		<div class="flex-auto" role="button"><slot name="summary" /></div>
		<!-- Caret -->
		<div class={classesIcon}>
			<SvgIcon name="angle-down" class="opacity-50" />
		</div>
	</summary>

	<!-- Content -->
	<div id={contentId} role="region" aria-labelledby={summaryId} class={classesDesc}>
		<slot name="content" />
	</div>
</details>
