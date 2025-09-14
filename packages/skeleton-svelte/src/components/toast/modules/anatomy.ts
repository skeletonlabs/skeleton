import Root from '../anatomy/root.svelte';
import RootContext from '../anatomy/root-context.svelte';
import Group from '../anatomy/group.svelte';
import Message from '../anatomy/message.svelte';
import Title from '../anatomy/title.svelte';
import Description from '../anatomy/description.svelte';
import ActionTrigger from '../anatomy/action-trigger.svelte';
import CloseTrigger from '../anatomy/close-trigger.svelte';

export const Toast = Object.assign(Root, {
	Context: RootContext,
	Group: Group,
	Message: Message,
	Title: Title,
	Description: Description,
	ActionTrigger: ActionTrigger,
	CloseTrigger: CloseTrigger,
});
