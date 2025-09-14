import Control from '../anatomy/control';
import HiddenInput from '../anatomy/hidden-input';
import Label from '../anatomy/label';
import Root from '../anatomy/root';
import RootContext from '../anatomy/root-context';
import Thumb from '../anatomy/thumb';

export const Switch = Object.assign(Root, {
	Context: RootContext,
	Control: Control,
	Thumb: Thumb,
	Label: Label,
	HiddenInput: HiddenInput,
});
