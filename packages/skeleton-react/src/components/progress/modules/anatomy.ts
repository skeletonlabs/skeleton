import Circle from '../anatomy/circle';
import CircleRange from '../anatomy/circle-range';
import CircleTrack from '../anatomy/circle-track';
import Label from '../anatomy/label';
import Range from '../anatomy/range';
import Root from '../anatomy/root';
import RootContext from '../anatomy/root-context';
import RootProvider from '../anatomy/root-provider';
import Track from '../anatomy/track';
import ValueText from '../anatomy/value-text';

export const Progress = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	Label: Label,
	ValueText: ValueText,
	Track: Track,
	Range: Range,
	Circle: Circle,
	CircleTrack: CircleTrack,
	CircleRange: CircleRange,
});
