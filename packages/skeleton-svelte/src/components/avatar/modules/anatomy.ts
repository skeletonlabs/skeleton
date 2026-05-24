import Fallback from '../anatomy/fallback.svelte';
import Image from '../anatomy/image.svelte';
import RootContext from '../anatomy/root-context.svelte';
import RootProvider from '../anatomy/root-provider.svelte';
import Root from '../anatomy/root.svelte';

export const Avatar = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	Image: Image,
	Fallback: Fallback,
});
