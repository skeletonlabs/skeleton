import Content from '../anatomy/content';
import Footer from '../anatomy/footer';
import Group from '../anatomy/group';
import Header from '../anatomy/header';
import Label from '../anatomy/label';
import Menu from '../anatomy/menu';
import Root from '../anatomy/root';

export const Navigation = Object.assign(Root, {
	Header: Header,
	Content: Content,
	Group: Group,
	Label: Label,
	Menu: Menu,
	Footer: Footer,
});
