<script lang="ts">
	import type { AvatarProps } from './types.js';

	let {
		href = '',
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

{#snippet figure()}
	<figure class="{base} {background} {size} {font} {border} {rounded} {shadow} {classes}">
		{#if imageSrc}
			<img class="{imageBase} {imageClasses}" src={imageSrc} alt={imageAlt} style="filter:url({imageFilter})" />
		{:else if children}
			{@render children()}
		{/if}
	</figure>
{/snippet}

{#if href}
	<a {href} class={rounded}>
		{@render figure()}
	</a>
{:else}
	{@render figure()}
{/if}
