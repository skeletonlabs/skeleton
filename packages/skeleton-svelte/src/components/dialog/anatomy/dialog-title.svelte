<script lang="ts" module>
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { HTMLAttributes } from 'svelte/elements';

	export interface DialogTitleProps extends PropsWithElement, HTMLAttributes<HTMLDivElement> {}
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';
	import { classesDialog } from '@skeletonlabs/skeleton-common';
	import { DialogRootContext } from '../modules/dialog-root-context';

	const props: DialogTitleProps = $props();
	const rootContext = DialogRootContext.consume();
	const { element, children, ...restAttributes } = $derived(props);
	const attributes = $derived(mergeProps(rootContext.api.getTitleProps(), { class: classesDialog.title }, restAttributes));
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
