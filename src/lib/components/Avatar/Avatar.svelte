<script lang="ts">
	// Props
	export let background: string = 'bg-surface-500';
	export let width: string = 'w-12';
	export let border: string = '';
	export let rounded: string = 'rounded-full';
	export let shadow: string | undefined = undefined;
	// Props (initials)
	export let initials: string = 'AB';
	export let text: string = 'text-xl';
	export let color: string = 'text-white';
	// Props (actions)
	export let action: any = () => {};
	export let actionParams: any = undefined;

	// Base Classes
	let cBase: string = 'flex aspect-square text-surface-50 font-semibold justify-center items-center overflow-hidden isolate';
	let cImage: string = 'w-full h-full object-cover';

	// Reactive Classes
	$: classesBase = `${cBase} ${background} ${width} ${border} ${rounded} ${shadow} ${$$props.class || ''}`;
	$: classesText = `${text} ${color}`;
</script>

<figure on:click class="avatar {classesBase}" data-testid="avatar">
	{#if $$props.src}
		<img class="avatar-image {cImage}" src={$$props.src} alt={$$props.alt || ''} use:action={actionParams} />
	{:else}
		<span class="avatar-initials {classesText}">{initials.substring(0, 2).toUpperCase()}</span>
	{/if}
</figure>
