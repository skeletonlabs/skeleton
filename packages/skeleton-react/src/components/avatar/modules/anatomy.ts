import Root from '../anatomy/root';
import RootContext from '../anatomy/root-context';
import Image from '../anatomy/image';
import Fallback from '../anatomy/fallback';

export const Avatar = Object.assign(Root, {
	Context: RootContext,
	Image: Image,
	Fallback: Fallback
});
