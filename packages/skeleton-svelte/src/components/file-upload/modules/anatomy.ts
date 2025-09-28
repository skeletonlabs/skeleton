import Dropzone from '../anatomy/dropzone.svelte';
import HiddenInput from '../anatomy/hidden-input.svelte';
import ItemDeleteTrigger from '../anatomy/item-delete-trigger.svelte';
import ItemGroup from '../anatomy/item-group.svelte';
import ItemName from '../anatomy/item-name.svelte';
import ItemSizeText from '../anatomy/item-size-text.svelte';
import Item from '../anatomy/item.svelte';
import Label from '../anatomy/label.svelte';
import RootContext from '../anatomy/root-context.svelte';
import RootProvider from '../anatomy/root-provider.svelte';
import Root from '../anatomy/root.svelte';
import Trigger from '../anatomy/trigger.svelte';

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
