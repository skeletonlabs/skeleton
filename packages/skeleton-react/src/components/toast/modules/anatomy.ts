import ActionTrigger from '../anatomy/action-trigger.jsx';
import CloseTrigger from '../anatomy/close-trigger.jsx';
import Description from '../anatomy/description.jsx';
import Group from '../anatomy/group.jsx';
import Message from '../anatomy/message.jsx';
import Root from '../anatomy/root.jsx';
import RootContext from '../anatomy/root-context.jsx';
import Title from '../anatomy/title.jsx';

export const Toast = Object.assign(Root, {
	Context: RootContext,
	Group: Group,
	Message: Message,
	Title: Title,
	Description: Description,
	ActionTrigger: ActionTrigger,
	CloseTrigger: CloseTrigger,
});
