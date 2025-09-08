import ToastRoot from '../anatomy/toast-root';
import ToastRootContext from '../anatomy/toast-root-context';
import ToastGroup from '../anatomy/toast-group';
import ToastGroupContext from '../anatomy/toast-group-context';
import ToastTitle from '../anatomy/toast-title';
import ToastDescription from '../anatomy/toast-description';
import ToastCloseTrigger from '../anatomy/toast-close-trigger';

export const Toast = Object.assign(ToastRoot, {
	Context: ToastRootContext,
	Group: ToastGroup,
	GroupContext: ToastGroupContext,
	Title: ToastTitle,
	Description: ToastDescription,
	CloseTrigger: ToastCloseTrigger
});
