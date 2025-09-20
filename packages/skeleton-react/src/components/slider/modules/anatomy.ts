import Control from '../anatomy/control';
import HiddenInput from '../anatomy/hidden-input';
import Label from '../anatomy/label';
import Marker from '../anatomy/marker';
import MarkerGroup from '../anatomy/marker-group';
import Range from '../anatomy/range';
import Root from '../anatomy/root';
import RootContext from '../anatomy/root-context';
import RootProvider from '../anatomy/root-provider';
import Thumb from '../anatomy/thumb';
import Track from '../anatomy/track';
import ValueText from '../anatomy/value-text';

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
