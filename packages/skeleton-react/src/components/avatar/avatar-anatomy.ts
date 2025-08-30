import AvatarRoot from './avatar-root';
import AvatarImage from './avatar-image';
import AvatarFallback from './avatar-fallback';
import AvatarRootContext from './avatar-root-context';

const Avatar = Object.assign(AvatarRoot, {
	Context: AvatarRootContext,
	Image: AvatarImage,
	Fallback: AvatarFallback
});

export { Avatar };
