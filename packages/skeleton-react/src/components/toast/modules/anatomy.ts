import ActionTrigger from '../anatomy/action-trigger';
import CloseTrigger from '../anatomy/close-trigger';
import Description from '../anatomy/description';
import Group from '../anatomy/group';
import Message from '../anatomy/message';
import Root from '../anatomy/root';
import RootContext from '../anatomy/root-context';
import Title from '../anatomy/title';

export const Toast = Object.assign(Root, {
	Context: RootContext,
	Group: Group,
	Message: Message,
	Title: Title,
	Description: Description,
	ActionTrigger: ActionTrigger,
	CloseTrigger: CloseTrigger,
});
