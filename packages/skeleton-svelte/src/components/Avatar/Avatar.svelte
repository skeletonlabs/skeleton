<script lang="ts">
	import * as avatar from '@zag-js/avatar';
	import { useMachine, normalizeProps } from '@zag-js/svelte';
	import type { AvatarProps } from './types.js';

	const {
		src,
		srcset,
		name,
		initials = [0, -1],
		// Root
		base = 'overflow-hidden isolate',
		background = 'bg-surface-400-600',
		size = 'size-16',
		font = '',
		border = '',
		rounded = 'rounded-full',
		shadow = '',
		classes = '',
		// Image
		imageBase = 'w-full object-cover',
		imageClasses = '',
		style = '',
		// Fallback
		fallbackBase = 'w-full h-full flex justify-center items-center',
		fallbackClasses = '',
		// Snippets
		children,
		// Zag
		...zagProps
	}: AvatarProps = $props();

	// Zag
	const id = $props.id();
	const service = useMachine(avatar.machine, () => ({
		id: id,
		...zagProps
	}));
	const api = $derived(avatar.connect(service, normalizeProps));

	// Generate Initials
	function getInitials() {
		const lettersArr = initials.map((index) => name.split(' ').at(index)?.charAt(0).toUpperCase());
		return lettersArr.join('');
	}
</script>

<!-- @component An image with a fallback for representing a single user. -->

<figure
	{...api.getRootProps()}
	class="{base} {background} {size} {font} {border} {rounded} {shadow} {classes}"
	{style}
	data-testid="avatar"
>
	<!-- Fallback -->
	<span {...api.getFallbackProps()} class="{fallbackBase} {fallbackClasses}" data-testid="avatar-fallback">
		{#if children}
			{@render children()}
		{:else}
			{getInitials()}
		{/if}
	</span>
	<!-- Image -->
	{#if src || srcset}
		<img {...api.getImageProps()} {src} {srcset} alt={name} class="{imageBase} {imageClasses}" data-testid="avatar-image" />
	{/if}
</figure>
