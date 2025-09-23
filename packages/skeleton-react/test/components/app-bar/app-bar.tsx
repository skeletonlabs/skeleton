import { AppBar } from '@/index';

export default function AppBarTest() {
	return (
		<AppBar data-testid="root">
			<AppBar.Toolbar data-testid="toolbar">
				<AppBar.Lead data-testid="lead">Icon</AppBar.Lead>
				<AppBar.Headline data-testid="headline">Headline</AppBar.Headline>
				<AppBar.Trail data-testid="trail">Buttons</AppBar.Trail>
			</AppBar.Toolbar>
		</AppBar>
	);
}
