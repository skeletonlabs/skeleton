import { AppBar } from '../../src/index.js';

export default function Test() {
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
