import Root from '../anatomy/root';
import RootContext from '../anatomy/root-context';
import Label from '../anatomy/label';
import Track from '../anatomy/track';
import Range from '../anatomy/range';

export const ProgressLinear = Object.assign(Root, {
	Context: RootContext,
	Label: Label,
	Track: Track,
	Range: Range
});
