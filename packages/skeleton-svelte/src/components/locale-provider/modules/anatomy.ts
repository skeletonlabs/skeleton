import Root from '../anatomy/root.svelte';
import RootContext from '../anatomy/root-context.svelte';

export const LocaleProvider = Object.assign(Root, {
	Context: RootContext,
});
