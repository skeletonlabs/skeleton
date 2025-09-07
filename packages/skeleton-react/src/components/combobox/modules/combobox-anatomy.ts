import ComboboxRoot from '../anatomy/combobox-root';
import ComboboxRootContext from '../anatomy/combobox-root-context';
import ComboboxLabel from '../anatomy/combobox-label';
import ComboboxControl from '../anatomy/combobox-control';
import ComboboxInput from '../anatomy/combobox-input';
import ComboboxTrigger from '../anatomy/combobox-trigger';
import ComboboxPositioner from '../anatomy/combobox-positioner';
import ComboboxContent from '../anatomy/combobox-content';
import ComboboxItemGroup from '../anatomy/combobox-item-group';
import ComboboxItemGroupLabel from '../anatomy/combobox-item-group-label';
import ComboboxItem from '../anatomy/combobox-item';
import ComboboxItemContext from '../anatomy/combobox-item-context';

export const Combobox = Object.assign(ComboboxRoot, {
	Root: ComboboxRoot,
	RootContext: ComboboxRootContext,
	Label: ComboboxLabel,
	Control: ComboboxControl,
	Input: ComboboxInput,
	Trigger: ComboboxTrigger,
	Positioner: ComboboxPositioner,
	Content: ComboboxContent,
	ItemGroup: ComboboxItemGroup,
	ItemGroupLabel: ComboboxItemGroupLabel,
	Item: ComboboxItem,
	ItemContext: ComboboxItemContext
});
