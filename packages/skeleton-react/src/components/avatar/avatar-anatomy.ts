import AvatarRoot from './avatar-root.jsx';
import AvatarImage from './avatar-image.jsx';
import AvatarFallback from './avatar-fallback.jsx';
import AvatarRootContext from './avatar-root-context.jsx';

const Avatar = Object.assign(AvatarRoot, {
	Context: AvatarRootContext,
	Image: AvatarImage,
	Fallback: AvatarFallback
});

export { Avatar };
