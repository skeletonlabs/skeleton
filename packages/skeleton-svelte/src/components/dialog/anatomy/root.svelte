<script lang="ts" module>
	import type { PropsWithChildren } from '../../../internal/props-with-children.js';
	import type { Props } from '@zag-js/dialog';

	export interface DialogRootProps extends Omit<Props, 'id'>, PropsWithChildren {}
</script>

<script lang="ts">
	import { useDialog } from '../modules/provider.svelte';
	import { RootContext } from '../modules/root-context.js';
	import { splitProps } from '@zag-js/dialog';

	const props: DialogRootProps = $props();

	const [dialogProps, componentProps] = $derived(splitProps(props));
	const { children } = $derived(componentProps);

	const id = $props.id();
	const dialog = useDialog(() => ({
		...dialogProps,
		id: id,
	}));

	RootContext.provide(() => dialog());
</script>

{@render children?.()}
