import ComboboxRoot from '../anatomy/combobox-root.svelte';
import ComboboxRootContext from '../anatomy/combobox-root-context.svelte';
import ComboboxLabel from '../anatomy/combobox-label.svelte';
import ComboboxControl from '../anatomy/combobox-control.svelte';
import ComboboxInput from '../anatomy/combobox-input.svelte';
import ComboboxTrigger from '../anatomy/combobox-trigger.svelte';
import ComboboxPositioner from '../anatomy/combobox-positioner.svelte';
import ComboboxContent from '../anatomy/combobox-content.svelte';
import ComboboxItemGroup from '../anatomy/combobox-item-group.svelte';
import ComboboxItemGroupLabel from '../anatomy/combobox-item-group-label.svelte';
import ComboboxItem from '../anatomy/combobox-item.svelte';
import ComboboxItemContext from '../anatomy/combobox-item-context.svelte';

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
