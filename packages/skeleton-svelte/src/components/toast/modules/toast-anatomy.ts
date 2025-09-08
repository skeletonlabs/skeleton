import ToastRoot from '../anatomy/toast-root.svelte';
import ToastRootContext from '../anatomy/toast-root-context.svelte';
import ToastGroup from '../anatomy/toast-group.svelte';
import ToastGroupContext from '../anatomy/toast-group-context.svelte';
import ToastTitle from '../anatomy/toast-title.svelte';
import ToastDescription from '../anatomy/toast-description.svelte';
import ToastCloseTrigger from '../anatomy/toast-close-trigger.svelte';

export const Toast = Object.assign(ToastRoot, {
	Context: ToastRootContext,
	Group: ToastGroup,
	GroupContext: ToastGroupContext,
	Title: ToastTitle,
	Description: ToastDescription,
	CloseTrigger: ToastCloseTrigger
});
