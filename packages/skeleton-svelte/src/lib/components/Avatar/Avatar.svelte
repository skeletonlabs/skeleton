<script lang="ts">
	import type { AvatarProps } from './types.js';

	let {
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
		imageSrc = '',
		imageAlt = '',
		imageFilter = '',
		imageBase = 'w-full object-cover',
		imageClasses = '',
		// Snippets
		children
	} = $props<AvatarProps>();
</script>

<!-- @component An Avatar component. -->

<figure class="{base} {background} {size} {font} {border} {rounded} {shadow} {classes}" data-testId="avatar">
	{#if imageSrc}
		<img class="{imageBase} {imageClasses}" src={imageSrc} alt={imageAlt} style={imageFilter && `filter:url(${imageFilter})`} />
	{:else if children}
		{@render children()}
	{/if}
</figure>