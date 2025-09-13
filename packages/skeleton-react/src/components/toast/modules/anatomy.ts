import Root from '../anatomy/root';
import RootProvider from '../anatomy/root-provider';
import RootContext from '../anatomy/root-context';
import Group from '../anatomy/group';
import Message from '../anatomy/message';
import Title from '../anatomy/title';
import Description from '../anatomy/description';
import ActionTrigger from '../anatomy/action-trigger';
import CloseTrigger from '../anatomy/close-trigger';

export const Toast = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	Group: Group,
	Message: Message,
	Title: Title,
	Description: Description,
	ActionTrigger: ActionTrigger,
	CloseTrigger: CloseTrigger
});
