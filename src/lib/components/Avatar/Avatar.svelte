<script lang="ts">
	// Props
	/** Provide classes to set background styles.*/
	export let background: string = 'bg-surface-400-500-token';
	/** Provide classes to set avatar width.*/
	export let width: string = 'w-12';
	/** Provide classes to set border styles.*/
	export let border: string = '';
	/** Provide classes to set rounded style.*/
	export let rounded: string = 'rounded-full';
	/** Provide classes to set shadow styles.*/
	export let shadow: string = '';
	/** Provide classes to set cursor styles.*/
	export let cursor: string = '';

	// Props (initials)
	/** Initials only - Provide up to two text characters.*/
	export let initials: string = 'AB';
	/** Initials only - Provide classes to set the SVG text fill color.*/
	export let fill: string = 'fill-token';

	// Props (actions)
	//AUDIT do we export src as a prop rather than getting it from the $$props.src? Also action and actionParams are getting wonk.
	/** Image only - Provide an Svelte action reference, such as <code>filter</code>.*/
	export let action: any = () => {};
	/** Image only - Provide Svelte action params, such as <code>Apollo.</code>*/
	export let actionParams: any = undefined;

	// Base Classes
	let cBase: string = 'flex aspect-square text-surface-50 font-semibold justify-center items-center overflow-hidden isolate';
	let cImage: string = 'w-full h-full object-cover';

	// Reactive Classes
	$: classesBase = `${cBase} ${background} ${width} ${border} ${rounded} ${shadow} ${cursor} ${$$props.class ?? ''}`;
</script>

<figure on:click class="avatar {classesBase}" data-testid="avatar">
	{#if $$props.src}
		<img class="avatar-image {cImage}" src={$$props.src} alt={$$props.alt || ''} use:action={actionParams} />
	{:else}
		<svg class="avatar-initials w-full h-full" viewBox="0 0 512 512">
			<text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-weight="bold" font-size={150} class="avatar-text {fill}">
				{initials.substring(0, 2).toUpperCase()}
			</text>
		</svg>
	{/if}
</figure>
