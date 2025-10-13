import Item from './anatomy/item.svelte';
import RootContext from './anatomy/root-context.svelte';
import RootProvider from './anatomy/root-provider.svelte';
import Root from './anatomy/root.svelte';
import { useToggleGroup } from './modules/provider.svelte';

export const ToggleGroup = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	Item: Item,
});

export { useToggleGroup };
export type { ToggleGroupRootProps } from './anatomy/root.svelte';
export type { ToggleGroupRootContextProps } from './anatomy/root-context.svelte';
export type { ToggleGroupRootProviderProps } from './anatomy/root-provider.svelte';
export type { ToggleGroupItemProps } from './anatomy/item.svelte';
