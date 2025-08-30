import AvatarRoot from './avatar-root.svelte';
import AvatarImage from './avatar-image.svelte';
import AvatarFallback from './avatar-fallback.svelte';
import AvatarRootContext from './avatar-root-context.svelte';

export const Avatar = Object.assign(AvatarRoot, {
	Context: AvatarRootContext,
	Image: AvatarImage,
	Fallback: AvatarFallback
});
