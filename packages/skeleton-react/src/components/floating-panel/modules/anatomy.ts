import Body from '../anatomy/body.jsx';
import CloseTrigger from '../anatomy/close-trigger.jsx';
import Content from '../anatomy/content.jsx';
import Control from '../anatomy/control.jsx';
import DragTrigger from '../anatomy/drag-trigger.jsx';
import Header from '../anatomy/header.jsx';
import Positioner from '../anatomy/positioner.jsx';
import ResizeTrigger from '../anatomy/resize-trigger.jsx';
import RootContext from '../anatomy/root-context.jsx';
import RootProvider from '../anatomy/root-provider.jsx';
import Root from '../anatomy/root.jsx';
import StageTrigger from '../anatomy/stage-trigger.jsx';
import Title from '../anatomy/title.jsx';
import Trigger from '../anatomy/trigger.jsx';

export const FloatingPanel = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	Trigger: Trigger,
	Positioner: Positioner,
	Content: Content,
	Header: Header,
	Body: Body,
	Title: Title,
	ResizeTrigger: ResizeTrigger,
	DragTrigger: DragTrigger,
	StageTrigger: StageTrigger,
	CloseTrigger: CloseTrigger,
	Control: Control,
});
