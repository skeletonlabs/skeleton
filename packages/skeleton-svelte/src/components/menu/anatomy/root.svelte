<script lang="ts" module>
	import type { HTMLAttributes } from '@/internal/html-attributes.js';
	import type { PropsWithElement } from '@/internal/props-with-element.js';
	import type { Props } from '@zag-js/menu';

	export interface MenuRootProps extends Omit<Props, 'id'>, PropsWithElement<'div'>, HTMLAttributes<'div', 'id' | 'dir'> {}
</script>

<script lang="ts">
	import { useMenu } from '../modules/provider.svelte';
	import { MenuRootContext } from '../modules/root-context.js';
	import { splitProps } from '@zag-js/menu';

	const props: MenuRootProps = $props();

	const [menuProps, componentProps] = $derived(splitProps(props));
	const { children } = $derived(componentProps);

	const id = $props.id();
	const menu = useMenu(() => ({
		...menuProps,
		id: id,
	}));

	MenuRootContext.provide(() => menu());
</script>

{@render children?.()}
