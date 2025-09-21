import { ProgressCircular } from '@/index';

export default function ProgressCircularTest() {
	return (
		<ProgressCircular data-testid="root">
			<ProgressCircular.Label data-testid="label" />
			<ProgressCircular.Circle data-testid="circle">
				<ProgressCircular.Track data-testid="track" />
				<ProgressCircular.Range data-testid="range" />
			</ProgressCircular.Circle>
		</ProgressCircular>
	);
}
