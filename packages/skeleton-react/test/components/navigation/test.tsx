import { Navigation } from '@/index.js';

export default function Test() {
	return (
		<Navigation data-testid="root">
			<Navigation.Header data-testid="header" />
			<Navigation.Content data-testid="content" />
			<Navigation.Group data-testid="group" />
			<Navigation.Label data-testid="label" />
			<Navigation.Menu data-testid="menu" />
			<Navigation.Footer data-testid="footer" />
		</Navigation>
	);
}
