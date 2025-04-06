import AvatarRoot from '../anatomy/avatar-root.js';
import AvatarImage from '../anatomy/avatar-image.js';
import AvatarFallback from '../anatomy/avatar-fallback.js';

const Avatar = Object.assign(AvatarRoot, {
	Image: AvatarImage,
	Fallback: AvatarFallback
});

export { Avatar };
