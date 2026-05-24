import Control from '../anatomy/control.jsx';
import HiddenInput from '../anatomy/hidden-input.jsx';
import Label from '../anatomy/label.jsx';
import SwitchRootContext from '../anatomy/root-context.jsx';
import RootProvider from '../anatomy/root-provider.jsx';
import Root from '../anatomy/root.jsx';
import Thumb from '../anatomy/thumb.jsx';

export const Switch = Object.assign(Root, {
	Provider: RootProvider,
	Context: SwitchRootContext,
	Control: Control,
	Thumb: Thumb,
	Label: Label,
	HiddenInput: HiddenInput,
});
