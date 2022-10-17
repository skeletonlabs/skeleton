<script lang="ts">
	export let tag: string = 'h1';
	export let direction: String = 'bg-gradient-to-r';
	export let from: string = 'from-primary-500';
	export let to: string = 'to-accent-500';

	// Base Clases
	let cBaseHeading: string = 'bg-clip-text text-transparent box-decoration-clone';

	// Reactive
	$: classesBase = `${$$props.class ?? ''}`;
	$: clasesText = `${cBaseHeading} ${direction} ${from} ${to}`;
</script>

<!-- svelte-ignore a11y-role-has-required-aria-props-->
<svelte:element this={tag} class="gradient-heading {classesBase}" data-testid="gradient-heading" role="heading">
	<span class="gradient-heading-text {clasesText}">
		<slot />
	</span>
</svelte:element>
