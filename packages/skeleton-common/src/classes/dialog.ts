import { defineSkeletonClasses } from '../internal/define-skeleton-classes.js' with { type: 'macro' };

export const classesDialog = defineSkeletonClasses({
	trigger: '',
	backdrop: '',
	positioner: '',
	content: '',
	title: '',
	description: '',
	closeTrigger: '',
});
