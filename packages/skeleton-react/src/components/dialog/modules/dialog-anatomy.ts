import DialogRoot from '../anatomy/dialog-root';
import DialogRootContext from '../anatomy/dialog-root-context';
import DialogTrigger from '../anatomy/dialog-trigger';
import DialogBackdrop from '../anatomy/dialog-backdrop';
import DialogPositioner from '../anatomy/dialog-positioner';
import DialogContent from '../anatomy/dialog-content';
import DialogTitle from '../anatomy/dialog-title';
import DialogDescription from '../anatomy/dialog-description';
import DialogCloseTrigger from '../anatomy/dialog-close-trigger';

export const Dialog = Object.assign(DialogRoot, {
	Context: DialogRootContext,
	Trigger: DialogTrigger,
	Backdrop: DialogBackdrop,
	Positioner: DialogPositioner,
	Content: DialogContent,
	Title: DialogTitle,
	Description: DialogDescription,
	CloseTrigger: DialogCloseTrigger
});
