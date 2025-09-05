import AvatarRoot from '../anatomy/avatar-root';
import AvatarImage from '../anatomy/avatar-image';
import AvatarFallback from '../anatomy/avatar-fallback';
import AvatarRootContext from '../anatomy/avatar-root-context';

const Avatar = Object.assign(AvatarRoot, {
	Context: AvatarRootContext,
	Image: AvatarImage,
	Fallback: AvatarFallback
});

export { Avatar };
