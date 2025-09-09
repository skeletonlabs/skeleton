import AvatarRoot from '../anatomy/root';
import AvatarImage from '../anatomy/image';
import AvatarFallback from '../anatomy/fallback';
import AvatarRootContext from '../anatomy/root-context';

const Avatar = Object.assign(AvatarRoot, {
	Context: AvatarRootContext,
	Image: AvatarImage,
	Fallback: AvatarFallback
});

export { Avatar };
