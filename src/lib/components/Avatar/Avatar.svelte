<script lang="ts">
	// Props
	export let background: string = 'bg-surface-500';
	export let width: string = 'w-12';
	export let border: string = '';
	export let rounded: string = 'rounded-full';
	export let shadow: string | undefined = undefined;
	export let cursor: string | undefined = undefined;
	// Props (initials)
	export let initials: string = 'AB';
	export let fill: string = 'fill-theme';
	// Props (actions)
	export let action: any = () => {};
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
