import Backdrop from '../anatomy/backdrop.jsx';
import CloseTrigger from '../anatomy/close-trigger.jsx';
import Content from '../anatomy/content.jsx';
import Description from '../anatomy/description.jsx';
import Positioner from '../anatomy/positioner.jsx';
import Root from '../anatomy/root.jsx';
import RootContext from '../anatomy/root-context.jsx';
import RootProvider from '../anatomy/root-provider.jsx';
import Title from '../anatomy/title.jsx';
import Trigger from '../anatomy/trigger.jsx';

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
