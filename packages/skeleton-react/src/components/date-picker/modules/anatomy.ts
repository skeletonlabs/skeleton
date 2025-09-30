import Control from '../anatomy/control';
import Input from '../anatomy/input';
import Label from '../anatomy/label';
import Root from '../anatomy/root';
import RootContext from '../anatomy/root-context';
import RootProvider from '../anatomy/root-provider';
import Trigger from '../anatomy/trigger';

export const DatePicker = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	Label: Label,
	Control: Control,
	Input: Input,
	Trigger: Trigger,
});
