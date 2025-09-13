import Root from '../anatomy/root';
import RootProvider from '../anatomy/root-provider';
import RootContext from '../anatomy/root-context';
import Trigger from '../anatomy/trigger';
import Backdrop from '../anatomy/backdrop';
import Positioner from '../anatomy/positioner';
import Content from '../anatomy/content';
import Title from '../anatomy/title';
import Description from '../anatomy/description';
import CloseTrigger from '../anatomy/close-trigger';

export const Dialog = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	Trigger: Trigger,
	Backdrop: Backdrop,
	Positioner: Positioner,
	Content: Content,
	Title: Title,
	Description: Description,
	CloseTrigger: CloseTrigger
});
