<script lang="ts" module>
	import type { HTMLAttributes } from '../../../internal/html-attributes.js';
	import type { PropsWithElement } from '../../../internal/props-with-element.js';
	import type { Props } from '@zag-js/menu';

	export interface MenuRootProps extends Omit<Props, 'id'>, PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir' | 'aria-label'> {}
</script>

<script lang="ts">
	import { useMenu } from '../modules/provider.svelte';
	import { RootContext } from '../modules/root-context.js';
	import { TriggerItemContext } from '../modules/trigger-item-context.js';
	import { splitProps } from '@zag-js/menu';
	import { untrack } from 'svelte';

	const props: MenuRootProps = $props();

	const parentMenu = RootContext.consume();

	const [menuProps, componentProps] = $derived(splitProps(props));
	const { children } = $derived(componentProps);

	const id = $props.id();
	const menu = useMenu(() => ({
		...menuProps,
		id: id,
	}));

	$effect(() =>
		untrack(() => {
			if (!parentMenu) {
				return;
			}
			menu().setParent(parentMenu().service);
			parentMenu().setChild(menu().service);
		}),
	);

	RootContext.provide(() => menu());
	TriggerItemContext.provide(() => parentMenu?.().getTriggerItemProps(menu()));
</script>

{@render children?.()}
