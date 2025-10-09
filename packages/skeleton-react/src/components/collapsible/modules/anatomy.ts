import Content from '../anatomy/content';
import Root from '../anatomy/root';
import RootContext from '../anatomy/root-context';
import RootProvider from '../anatomy/root-provider';
import Trigger from '../anatomy/trigger';

export const Collapsible = Object.assign(Root, {
	Provider: RootProvider,
	Context: RootContext,
	Trigger: Trigger,
	Content: Content,
});
