import AvatarRoot from './avatar-root.svelte';
import AvatarImage from './avatar-image.svelte';
import AvatarFallback from './avatar-fallback.svelte';
import AvatarRootContext from './avatar-root-context.svelte';

const Avatar = Object.assign(AvatarRoot, {
	Image: AvatarImage,
	Fallback: AvatarFallback,
	Context: AvatarRootContext
});

export { Avatar };
