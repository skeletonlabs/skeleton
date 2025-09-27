import Content from '../anatomy/content.svelte';
import Footer from '../anatomy/footer.svelte';
import Group from '../anatomy/group.svelte';
import Header from '../anatomy/header.svelte';
import Label from '../anatomy/label.svelte';
import Menu from '../anatomy/menu.svelte';
import Root from '../anatomy/root.svelte';

export const Navigation = Object.assign(Root, {
	Header: Header,
	Content: Content,
	Group: Group,
	Label: Label,
	Menu: Menu,
	Footer: Footer,
});
