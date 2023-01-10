<script lang="ts">
	/** Define the semantic element tag. */
	export let tag = 'h1';
	/** Provide classes to set gradient direction. */
	export let direction = 'bg-gradient-to-r';
	/** Provide classes to set "from" gradient color. */
	export let from = 'from-primary-500';
	/** Provide classes to set "to" gradient color. */
	export let to = 'to-secondary-500';

	// Base Clases
	let cBaseHeading = 'bg-clip-text text-transparent box-decoration-clone';

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
