import ClearTrigger from '../anatomy/clear-trigger.jsx';
import Control from '../anatomy/control.jsx';
import HiddenInput from '../anatomy/hidden-input.jsx';
import Input from '../anatomy/input.jsx';
import Item from '../anatomy/item.jsx';
import ItemDeleteTrigger from '../anatomy/item-delete-trigger.jsx';
import ItemInput from '../anatomy/item-input.jsx';
import ItemPreview from '../anatomy/item-preview.jsx';
import ItemText from '../anatomy/item-text.jsx';
import Label from '../anatomy/label.jsx';
import Root from '../anatomy/root.jsx';
import RootContext from '../anatomy/root-context.jsx';
import RootProvider from '../anatomy/root-provider.jsx';

export const TagsInput = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	Label: Label,
	Control: Control,
	Item: Item,
	ItemPreview: ItemPreview,
	ItemText: ItemText,
	ItemDeleteTrigger: ItemDeleteTrigger,
	ItemInput: ItemInput,
	Input: Input,
	ClearTrigger: ClearTrigger,
	HiddenInput: HiddenInput,
});
