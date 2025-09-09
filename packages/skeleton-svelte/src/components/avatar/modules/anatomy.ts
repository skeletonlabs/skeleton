import Root from '../anatomy/root.svelte';
import RootContext from '../anatomy/root-context.svelte';
import Image from '../anatomy/image.svelte';
import Fallback from '../anatomy/fallback.svelte';

export const Avatar = Object.assign(Root, {
	Context: RootContext,
	Image: Image,
	Fallback: Fallback
});
