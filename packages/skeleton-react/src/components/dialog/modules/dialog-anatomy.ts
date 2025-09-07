import DialogRoot from '../anatomy/dialog-root';
import DialogRootContext from '../anatomy/dialog-root-context';
import DialogTrigger from '../anatomy/dialog-trigger';
import DialogPositioner from '../anatomy/dialog-positioner';
import DialogContent from '../anatomy/dialog-content';
import DialogTitle from '../anatomy/dialog-title';
import DialogDescription from '../anatomy/dialog-description';
import DialogCloseTrigger from '../anatomy/dialog-close-trigger';

export const Dialog = Object.assign(DialogRoot, {
	Root: DialogRoot,
	Context: DialogRootContext,
	Trigger: DialogTrigger,
	Positioner: DialogPositioner,
	Content: DialogContent,
	Title: DialogTitle,
	Description: DialogDescription,
	CloseTrigger: DialogCloseTrigger
});
