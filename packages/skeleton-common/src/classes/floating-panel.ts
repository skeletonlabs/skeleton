import { defineSkeletonClasses } from '../internal/define-skeleton-classes.js' with { type: 'macro' };

export const classesFloatingPanel = defineSkeletonClasses({
	trigger: '',
	positioner: 'fixed',
	content: 'flex flex-col overflow-x-auto overflow-y-auto',
	header: 'w-full overflow-x-hidden',
	body: '',
	title: '',
	resizeTrigger: '',
	dragTrigger: '',
	stageTrigger: '',
	closeTrigger: '',
	control: '',
});
