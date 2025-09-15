import ClearTrigger from '../anatomy/clear-trigger';
import Control from '../anatomy/control';
import Item from '../anatomy/item';
import ItemDeleteTrigger from '../anatomy/item-delete-trigger';
import ItemInput from '../anatomy/item-input';
import ItemPreview from '../anatomy/item-preview';
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
	ItemInput: ItemInput,
	ItemDeleteTrigger: ItemDeleteTrigger,
	Input: ItemInput,
	ClearTrigger: ClearTrigger,
});
