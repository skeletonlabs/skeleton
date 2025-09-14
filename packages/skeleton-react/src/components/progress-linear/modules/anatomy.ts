import Label from '../anatomy/label';
import Range from '../anatomy/range';
import Root from '../anatomy/root';
import RootContext from '../anatomy/root-context';
import RootProvider from '../anatomy/root-provider';
import Track from '../anatomy/track';

export const ProgressLinear = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	Label: Label,
	Track: Track,
	Range: Range,
});
