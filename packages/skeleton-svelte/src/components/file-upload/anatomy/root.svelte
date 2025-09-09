<script lang="ts" module>
	import type { HTMLAttributes } from 'svelte/elements';
	import type { PropsWithElement } from '@/internal/props-with-element';
	import type { Props } from '@zag-js/file-upload';

	export interface FileUploadRootProps extends PropsWithElement, Omit<Props, 'id'>, Omit<HTMLAttributes<HTMLDivElement>, 'id' | 'dir'> {}
</script>

<script lang="ts">
	import { useMachine, normalizeProps, mergeProps } from '@zag-js/svelte';
	import { classesFileUpload } from '@skeletonlabs/skeleton-common';
	import { FileUploadRootContext } from '../modules/root-context';
	import { connect, machine, splitProps } from '@zag-js/file-upload';

	const props: FileUploadRootProps = $props();

	const [machineProps, componentProps] = $derived(splitProps(props));
	const { element, children, ...restAttributes } = $derived(componentProps);

	const id = $props.id();
	const service = useMachine(machine, () => ({
		id: id,
		...machineProps
	}));
	const api = $derived(connect(service, normalizeProps));

	const attributes = $derived(mergeProps(api.getRootProps(), { class: classesFileUpload.root }, restAttributes));

	FileUploadRootContext.provide({
		get api() {
			return api;
		}
	});
</script>

{#if element}
	{@render element({ attributes })}
{:else}
	<div {...attributes}>
		{@render children?.()}
	</div>
{/if}
