import { Switch } from '@/index';

export default function SwitchTest() {
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
