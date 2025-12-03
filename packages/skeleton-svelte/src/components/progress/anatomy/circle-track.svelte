<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';

	export interface ProgressCircleTrackProps extends PropsWithElement<'circle'>, HTMLAttributes<'circle', 'children'> {}
</script>

<script lang="ts">
	import { RootContext } from '../modules/root-context.js';
	import { mergeProps } from '@zag-js/svelte';

	const props: ProgressCircleTrackProps = $props();

	const progress = RootContext.consume();

	const { element, ...rest } = $derived(props);

	const attributes = $derived(mergeProps(progress().getCircleTrackProps(), rest));
</script>

{#if element}
	{@render element(attributes)}
{:else}
	<circle {...attributes} />
{/if}
