import Footer from '../anatomy/footer.svelte';
import Header from '../anatomy/header.svelte';
import Menu from '../anatomy/menu.svelte';
import Root from '../anatomy/root.svelte';

export const Navigation = Object.assign(Root, {
	Menu: Menu,
	Header: Header,
	Footer: Footer,
});
