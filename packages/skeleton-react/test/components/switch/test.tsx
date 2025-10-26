import { Switch } from '@/index.js';

export default function Test() {
	return (
		<Switch data-testid="root">
			<Switch.HiddenInput data-testid="hidden-input" />
			<Switch.Control data-testid="control">
				<Switch.Thumb data-testid="thumb" />
			</Switch.Control>
			<Switch.Label data-testid="label" />
		</Switch>
	);
}
