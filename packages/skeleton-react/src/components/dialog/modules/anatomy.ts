import Backdrop from '../anatomy/backdrop';
import CloseTrigger from '../anatomy/close-trigger';
import Content from '../anatomy/content';
import Description from '../anatomy/description';
import Positioner from '../anatomy/positioner';
import Root from '../anatomy/root';
import RootContext from '../anatomy/root-context';
import RootProvider from '../anatomy/root-provider';
import Title from '../anatomy/title';
import Trigger from '../anatomy/trigger';

export const Dialog = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	Trigger: Trigger,
	Backdrop: Backdrop,
	Positioner: Positioner,
	Content: Content,
	Title: Title,
	Description: Description,
	CloseTrigger: CloseTrigger,
});
