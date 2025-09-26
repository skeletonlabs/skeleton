import { ProgressLinear } from '@/index';

export default function Test() {
	return (
		<ProgressLinear data-testid="root">
			<ProgressLinear.Label data-testid="label" />
			<ProgressLinear.Track data-testid="track">
				<ProgressLinear.Range data-testid="range" />
			</ProgressLinear.Track>
		</ProgressLinear>
	);
}
