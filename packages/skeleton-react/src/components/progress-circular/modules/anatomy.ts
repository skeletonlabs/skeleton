import Circle from '../anatomy/circle';
import Label from '../anatomy/label';
import Range from '../anatomy/range';
import Root from '../anatomy/root';
import RootContext from '../anatomy/root-context';
import RootProvider from '../anatomy/root-provider';
import Track from '../anatomy/track';
import ValueText from '../anatomy/value-text';

export const ProgressCircular = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	Label: Label,
	Circle: Circle,
	Track: Track,
	Range: Range,
	ValueText: ValueText,
});
