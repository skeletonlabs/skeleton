import Root from '../anatomy/root';
import RootContext from '../anatomy/root-context';
import Group from '../anatomy/group';
import GroupContext from '../anatomy/group-context';
import Message from '../anatomy/message';
import Title from '../anatomy/title';
import Description from '../anatomy/description';
import ActionTrigger from '../anatomy/action-trigger';
import CloseTrigger from '../anatomy/close-trigger';

export const Toast = Object.assign(Root, {
	Context: RootContext,
	Group: Group,
	GroupContext: GroupContext,
	Message: Message,
	Title: Title,
	Description: Description,
	ActionTrigger: ActionTrigger,
	CloseTrigger: CloseTrigger
});
