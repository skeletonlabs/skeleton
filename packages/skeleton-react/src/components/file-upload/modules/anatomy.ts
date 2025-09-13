import Root from '../anatomy/root';
import RootProvider from '../anatomy/root-provider';
import RootContext from '../anatomy/root-context';
import Dropzone from '../anatomy/dropzone';
import HiddenInput from '../anatomy/hidden-input';
import Trigger from '../anatomy/trigger';
import ItemGroup from '../anatomy/item-group';
import Item from '../anatomy/item';
import ItemName from '../anatomy/item-name';
import ItemSizeText from '../anatomy/item-size-text';
import ItemDeleteTrigger from '../anatomy/item-delete-trigger';

export const FileUpload = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	Dropzone: Dropzone,
	Trigger: Trigger,
	HiddenInput: HiddenInput,
	ItemGroup: ItemGroup,
	Item: Item,
	ItemName: ItemName,
	ItemSizeText: ItemSizeText,
	ItemDeleteTrigger: ItemDeleteTrigger
});
