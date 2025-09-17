import Backdrop from '../anatomy/backdrop.svelte';
import CloseTrigger from '../anatomy/close-trigger.svelte';
import Content from '../anatomy/content.svelte';
import Description from '../anatomy/description.svelte';
import Positioner from '../anatomy/positioner.svelte';
import RootContext from '../anatomy/root-context.svelte';
import RootProvider from '../anatomy/root-provider.svelte';
import Root from '../anatomy/root.svelte';
import Title from '../anatomy/title.svelte';
import Trigger from '../anatomy/trigger.svelte';

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
