import Content from '../anatomy/content.svelte';
import Footer from '../anatomy/footer.svelte';
import Group from '../anatomy/group.svelte';
import Header from '../anatomy/header.svelte';
import Label from '../anatomy/label.svelte';
import Menu from '../anatomy/menu.svelte';
import TriggerAnchor from '../anatomy/trigger-anchor.svelte';
import Trigger from '../anatomy/trigger.svelte';
import TriggerText from '../anatomy/trigger-text.svelte';
import Root from '../anatomy/root.svelte';

export const Navigation = Object.assign(Root, {
	Header: Header,
	Content: Content,
	Group: Group,
	Label: Label,
	Menu: Menu,
	Trigger: Trigger,
	TriggerAnchor: TriggerAnchor,
	TriggerText: TriggerText,
	Footer: Footer,
});
