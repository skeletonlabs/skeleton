import DialogRoot from '../anatomy/dialog-root.svelte';
import DialogRootContext from '../anatomy/dialog-root-context.svelte';
import DialogTrigger from '../anatomy/dialog-trigger.svelte';
import DialogPositioner from '../anatomy/dialog-positioner.svelte';
import DialogContent from '../anatomy/dialog-content.svelte';
import DialogTitle from '../anatomy/dialog-title.svelte';
import DialogDescription from '../anatomy/dialog-description.svelte';
import DialogCloseTrigger from '../anatomy/dialog-close-trigger.svelte';

export const Dialog = Object.assign(DialogRoot, {
	Context: DialogRootContext,
	Trigger: DialogTrigger,
	Positioner: DialogPositioner,
	Content: DialogContent,
	Title: DialogTitle,
	Description: DialogDescription,
	CloseTrigger: DialogCloseTrigger
});
