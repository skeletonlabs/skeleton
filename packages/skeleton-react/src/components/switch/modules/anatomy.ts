import Root from '../anatomy/root';
import RootContext from '../anatomy/root-context';
import HiddenInput from '../anatomy/hidden-input';
import Control from '../anatomy/control';
import Thumb from '../anatomy/thumb';
import Label from '../anatomy/label';

export const Switch = Object.assign(Root, {
	Context: RootContext,
	HiddenInput: HiddenInput,
	Control: Control,
	Thumb: Thumb,
	Label: Label
});
