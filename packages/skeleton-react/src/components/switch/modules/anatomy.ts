import Control from '../anatomy/control';
import HiddenInput from '../anatomy/hidden-input';
import Label from '../anatomy/label';
import Root from '../anatomy/root';
import RootContext from '../anatomy/root-context';
import RootProvider from '../anatomy/root-provider';
import Thumb from '../anatomy/thumb';

export const Switch = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	Control: Control,
	Thumb: Thumb,
	Label: Label,
	HiddenInput: HiddenInput,
});
