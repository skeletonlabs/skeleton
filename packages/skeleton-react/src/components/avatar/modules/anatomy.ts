import Fallback from '../anatomy/fallback';
import Image from '../anatomy/image';
import Root from '../anatomy/root';
import RootContext from '../anatomy/root-context';
import RootProvider from '../anatomy/root-provider';

export const Avatar = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	Image: Image,
	Fallback: Fallback,
});
