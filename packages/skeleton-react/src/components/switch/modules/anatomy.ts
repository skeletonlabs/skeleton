import Root from '../anatomy/root';
import RootContext from '../anatomy/root-context';
import Control from '../anatomy/control';
import Thumb from '../anatomy/thumb';
import Label from '../anatomy/label';
import HiddenInput from '../anatomy/hidden-input';

export const Switch = Object.assign(Root, {
	Context: RootContext,
	Control: Control,
	Thumb: Thumb,
	Label: Label,
	HiddenInput: HiddenInput
});
