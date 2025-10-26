import CircleRange from '../anatomy/circle-range.jsx';
import CircleTrack from '../anatomy/circle-track.jsx';
import Circle from '../anatomy/circle.jsx';
import Label from '../anatomy/label.jsx';
import Range from '../anatomy/range.jsx';
import RootContext from '../anatomy/root-context.jsx';
import RootProvider from '../anatomy/root-provider.jsx';
import Root from '../anatomy/root.jsx';
import Track from '../anatomy/track.jsx';
import ValueText from '../anatomy/value-text.jsx';

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
