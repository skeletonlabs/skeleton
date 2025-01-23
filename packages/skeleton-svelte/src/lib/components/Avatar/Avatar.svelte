<script lang="ts">
	import * as avatar from '@zag-js/avatar';
	import { useMachine, normalizeProps } from '@zag-js/svelte';
	import type { AvatarProps } from './types.js';
	import { useId } from '$lib/internal/use-id.js';

	let {
		src,
		srcset,
		name,
		filter,
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
		children
	}: AvatarProps = $props();

	// Zag
	const [snapshot, send] = useMachine(avatar.machine({ id: useId() }));
	const api = $derived(avatar.connect(snapshot, send, normalizeProps));

	// Generate Initials
	function getInitials(name: string) {
		return name
			.split(' ')
			.map((word) => word[0])
			.join('');
	}
</script>

<!-- @component An image with a fallback for representing a single user. -->

<figure {...api.getRootProps()} class="{base} {background} {size} {font} {border} {rounded} {shadow} {classes}" data-testid="avatar">
	<!-- Image -->
	{#if src || srcset}
		<img
			{...api.getImageProps()}
			{src}
			{srcset}
			alt={name}
			class="{imageBase} {imageClasses}"
			style:filter={filter && `url(${filter})`}
			data-testid="avatar-image"
			{style}
		/>
	{/if}
	<!-- Fallback -->
	<span {...api.getFallbackProps()} class="{fallbackBase} {fallbackClasses}" data-testid="avatar-fallback">
		{#if children}
			{@render children()}
		{:else}
			{getInitials(name)}
		{/if}
	</span>
</figure>
