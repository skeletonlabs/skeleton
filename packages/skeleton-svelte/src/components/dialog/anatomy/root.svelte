<script lang="ts" module>
	import type { PropsWithChildren } from '@/internal/props-with-children';
	import type { Props } from '@zag-js/dialog';

	export interface DialogRootProps extends Omit<Props, 'id'>, PropsWithChildren {}
</script>

<script lang="ts">
	import { DialogRootContext } from '../modules/root-context';
	import { useDialog } from '../modules/use-dialog.svelte';
	import { splitProps } from '@zag-js/dialog';

	const props: DialogRootProps = $props();

	const [machineProps, componentProps] = $derived(splitProps(props));
	const { children } = $derived(componentProps);

	const id = $props.id();
	const dialog = useDialog(() => ({
		id: id,
		...machineProps,
	}));

	DialogRootContext.provide(() => dialog());
</script>

{@render children?.()}
