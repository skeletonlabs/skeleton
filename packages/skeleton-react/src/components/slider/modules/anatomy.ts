import Control from '../anatomy/control.jsx';
import HiddenInput from '../anatomy/hidden-input.jsx';
import Label from '../anatomy/label.jsx';
import Marker from '../anatomy/marker.jsx';
import MarkerGroup from '../anatomy/marker-group.jsx';
import Range from '../anatomy/range.jsx';
import Root from '../anatomy/root.jsx';
import RootContext from '../anatomy/root-context.jsx';
import RootProvider from '../anatomy/root-provider.jsx';
import Thumb from '../anatomy/thumb.jsx';
import Track from '../anatomy/track.jsx';
import ValueText from '../anatomy/value-text.jsx';

export const Slider = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	Label: Label,
	ValueText: ValueText,
	Control: Control,
	Track: Track,
	Range: Range,
	Thumb: Thumb,
	HiddenInput: HiddenInput,
	MarkerGroup: MarkerGroup,
	Marker: Marker,
});
