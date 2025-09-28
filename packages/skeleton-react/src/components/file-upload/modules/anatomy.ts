import Dropzone from '../anatomy/dropzone';
import HiddenInput from '../anatomy/hidden-input';
import Item from '../anatomy/item';
import ItemDeleteTrigger from '../anatomy/item-delete-trigger';
import ItemGroup from '../anatomy/item-group';
import ItemName from '../anatomy/item-name';
import ItemSizeText from '../anatomy/item-size-text';
import Label from '../anatomy/label';
import Root from '../anatomy/root';
import RootContext from '../anatomy/root-context';
import RootProvider from '../anatomy/root-provider';
import Trigger from '../anatomy/trigger';

export const FileUpload = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	Label: Label,
	Dropzone: Dropzone,
	Trigger: Trigger,
	HiddenInput: HiddenInput,
	ItemGroup: ItemGroup,
	Item: Item,
	ItemName: ItemName,
	ItemSizeText: ItemSizeText,
	ItemDeleteTrigger: ItemDeleteTrigger,
});
