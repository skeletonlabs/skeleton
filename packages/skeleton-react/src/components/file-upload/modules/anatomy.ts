import Dropzone from '../anatomy/dropzone.jsx';
import HiddenInput from '../anatomy/hidden-input.jsx';
import ItemDeleteTrigger from '../anatomy/item-delete-trigger.jsx';
import ItemGroup from '../anatomy/item-group.jsx';
import ItemName from '../anatomy/item-name.jsx';
import ItemSizeText from '../anatomy/item-size-text.jsx';
import Item from '../anatomy/item.jsx';
import Label from '../anatomy/label.jsx';
import RootContext from '../anatomy/root-context.jsx';
import RootProvider from '../anatomy/root-provider.jsx';
import Root from '../anatomy/root.jsx';
import Trigger from '../anatomy/trigger.jsx';

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
