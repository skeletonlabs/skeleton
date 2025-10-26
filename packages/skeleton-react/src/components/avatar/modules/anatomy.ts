import Fallback from '../anatomy/fallback.jsx';
import Image from '../anatomy/image.jsx';
import Root from '../anatomy/root.jsx';
import RootContext from '../anatomy/root-context.jsx';
import RootProvider from '../anatomy/root-provider.jsx';

export const Avatar = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	Image: Image,
	Fallback: Fallback,
});
