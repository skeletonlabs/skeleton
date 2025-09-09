import AvatarRoot from '../anatomy/root.svelte';
import AvatarRootContext from '../anatomy/root-context.svelte';
import AvatarImage from '../anatomy/image.svelte';
import AvatarFallback from '../anatomy/fallback.svelte';

export const Avatar = Object.assign(AvatarRoot, {
	Context: AvatarRootContext,
	Image: AvatarImage,
	Fallback: AvatarFallback
});
