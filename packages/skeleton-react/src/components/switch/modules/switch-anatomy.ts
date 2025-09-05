import SwitchRoot from '../anatomy/switch-root';
import SwitchRootContext from '../anatomy/switch-root-context';
import SwitchHiddenInput from '../anatomy/switch-hidden-input';
import SwitchControl from '../anatomy/switch-control';
import SwitchThumb from '../anatomy/switch-thumb';
import SwitchLabel from '../anatomy/switch-label';

export const Switch = Object.assign(SwitchRoot, {
	Context: SwitchRootContext,
	HiddenInput: SwitchHiddenInput,
	Control: SwitchControl,
	Thumb: SwitchThumb,
	Label: SwitchLabel
});
