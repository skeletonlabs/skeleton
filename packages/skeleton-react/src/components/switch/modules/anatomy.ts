import Control from '../anatomy/control.jsx';
import HiddenInput from '../anatomy/hidden-input.jsx';
import Label from '../anatomy/label.jsx';
import Root from '../anatomy/root.jsx';
import RootContext from '../anatomy/root-context.jsx';
import RootProvider from '../anatomy/root-provider.jsx';
import Thumb from '../anatomy/thumb.jsx';

export const Switch = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	Control: Control,
	Thumb: Thumb,
	Label: Label,
	HiddenInput: HiddenInput,
});
