import Root from '../anatomy/root.svelte';
import RootContext from '../anatomy/root-context.svelte';
import Trigger from '../anatomy/trigger.svelte';
import Backdrop from '../anatomy/backdrop.svelte';
import Positioner from '../anatomy/positioner.svelte';
import Content from '../anatomy/content.svelte';
import Title from '../anatomy/title.svelte';
import Description from '../anatomy/description.svelte';
import CloseTrigger from '../anatomy/close-trigger.svelte';

export const Dialog = Object.assign(Root, {
	Context: RootContext,
	Trigger: Trigger,
	Backdrop: Backdrop,
	Positioner: Positioner,
	Content: Content,
	Title: Title,
	Description: Description,
	CloseTrigger: CloseTrigger
});
