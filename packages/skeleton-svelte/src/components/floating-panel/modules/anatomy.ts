import Body from '../anatomy/body.svelte';
import CloseTrigger from '../anatomy/close-trigger.svelte';
import Content from '../anatomy/content.svelte';
import Control from '../anatomy/control.svelte';
import DragTrigger from '../anatomy/drag-trigger.svelte';
import Header from '../anatomy/header.svelte';
import Positioner from '../anatomy/positioner.svelte';
import ResizeTrigger from '../anatomy/resize-trigger.svelte';
import RootContext from '../anatomy/root-context.svelte';
import RootProvider from '../anatomy/root-provider.svelte';
import Root from '../anatomy/root.svelte';
import StageTrigger from '../anatomy/stage-trigger.svelte';
import Title from '../anatomy/title.svelte';
import Trigger from '../anatomy/trigger.svelte';

export const FloatingPanel = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	Trigger: Trigger,
	Positioner: Positioner,
	Content: Content,
	DragTrigger: DragTrigger,
	Header: Header,
	Title: Title,
	Control: Control,
	StageTrigger: StageTrigger,
	CloseTrigger: CloseTrigger,
	Body: Body,
	ResizeTrigger: ResizeTrigger,
});
