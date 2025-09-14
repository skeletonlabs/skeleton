import Fallback from '../anatomy/fallback';
import Image from '../anatomy/image';
import Root from '../anatomy/root';
import RootContext from '../anatomy/root-context';

export const Avatar = Object.assign(Root, {
	Context: RootContext,
	Image: Image,
	Fallback: Fallback,
});
