import Content from '../anatomy/content.svelte';
import Edge from '../anatomy/edge.svelte';
import RootContext from '../anatomy/root-context.svelte';
import RootProvider from '../anatomy/root-provider.svelte';
import Root from '../anatomy/root.svelte';
import Viewport from '../anatomy/viewport.svelte';

export const Marquee = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	Viewport: Viewport,
	Content: Content,
	Edge: Edge,
});
