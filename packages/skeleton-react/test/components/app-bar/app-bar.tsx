import { AppBar } from '@/index';

export default function AppBarTest() {
	return (
		<AppBar data-testid="root">
			<AppBar.Toolbar data-testid="toolbar">
				<AppBar.Lead data-testid="lead" />
				<AppBar.Headline data-testid="headline" />
				<AppBar.Trail data-testid="trail" />
			</AppBar.Toolbar>
		</AppBar>
	);
}
