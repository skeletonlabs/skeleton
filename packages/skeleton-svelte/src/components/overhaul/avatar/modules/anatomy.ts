import AvatarRoot from '../anatomy/avatar-root.svelte';
import AvatarImage from '../anatomy/avatar-image.svelte';
import AvatarFallback from '../anatomy/avatar-fallback.svelte';

const Avatar = Object.assign(AvatarRoot, {
	Image: AvatarImage,
	Fallback: AvatarFallback
});

export { Avatar };
