import AvatarRoot from '../anatomy/avatar-root.svelte';
import AvatarImage from '../anatomy/avatar-image.svelte';
import AvatarFallback from '../anatomy/avatar-fallback.svelte';
import AvatarRootContext from '../anatomy/avatar-root-context.svelte';

export const Avatar = Object.assign(AvatarRoot, {
	Context: AvatarRootContext,
	Image: AvatarImage,
	Fallback: AvatarFallback
});
