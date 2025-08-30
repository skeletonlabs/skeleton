import AvatarRoot from '../anatomy/avatar-root.js';
import AvatarImage from '../anatomy/avatar-image.js';
import AvatarFallback from '../anatomy/avatar-fallback.js';
import AvatarRootContext from '../anatomy/avatar-root-context.js';

const Avatar = Object.assign(AvatarRoot, {
	Context: AvatarRootContext,
	Image: AvatarImage,
	Fallback: AvatarFallback
});

export { Avatar };
