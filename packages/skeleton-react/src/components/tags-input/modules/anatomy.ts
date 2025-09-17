import ClearTrigger from '../anatomy/clear-trigger';
import Control from '../anatomy/control';
import HiddenInput from '../anatomy/hidden-input';
import Input from '../anatomy/input';
import Item from '../anatomy/item';
import ItemDeleteTrigger from '../anatomy/item-delete-trigger';
import ItemInput from '../anatomy/item-input';
import ItemPreview from '../anatomy/item-preview';
import ItemText from '../anatomy/item-text';
import Label from '../anatomy/label';
import Root from '../anatomy/root';
import RootContext from '../anatomy/root-context';
import RootProvider from '../anatomy/root-provider';

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
