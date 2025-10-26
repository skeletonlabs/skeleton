import Content from '../anatomy/content.jsx';
import Footer from '../anatomy/footer.jsx';
import Group from '../anatomy/group.jsx';
import Header from '../anatomy/header.jsx';
import Label from '../anatomy/label.jsx';
import Menu from '../anatomy/menu.jsx';
import Root from '../anatomy/root.jsx';

export const Navigation = Object.assign(Root, {
	Header: Header,
	Content: Content,
	Group: Group,
	Label: Label,
	Menu: Menu,
	Footer: Footer,
});
