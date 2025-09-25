import { ProgressLinear } from '@/index';

export default function ProgressLinearTest() {
	return (
		<ProgressLinear data-testid="root">
			<ProgressLinear.Label data-testid="label" />
			<ProgressLinear.Track data-testid="track">
				<ProgressLinear.Range data-testid="range" />
			</ProgressLinear.Track>
		</ProgressLinear>
	);
}
