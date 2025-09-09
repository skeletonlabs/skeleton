import Root from '../anatomy/root.svelte';
import RootContext from '../anatomy/root-context.svelte';
import Group from '../anatomy/group.svelte';
import GroupContext from '../anatomy/group-context.svelte';
import Title from '../anatomy/title.svelte';
import Description from '../anatomy/description.svelte';
import CloseTrigger from '../anatomy/close-trigger.svelte';

export const Toast = Object.assign(Root, {
	Context: RootContext,
	Group: Group,
	GroupContext: GroupContext,
	Title: Title,
	Description: Description,
	CloseTrigger: CloseTrigger
});
