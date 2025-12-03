<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';

	export interface AvatarImageProps extends PropsWithElement<'img'>, HTMLAttributes<'img'> {}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: AvatarImageProps = $props();

	const avatar = RootContext.consume();

	const { element, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(avatar().getImageProps(), rest));
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<img {...attributes} />
{/if}
