import { ProgressCircular } from '@/index';

export default function Test() {
	return (
		<ProgressCircular data-testid="root">
			<ProgressCircular.Label data-testid="label" />
			<ProgressCircular.Circle data-testid="circle">
				<ProgressCircular.Track data-testid="track" />
				<ProgressCircular.Range data-testid="range" />
			</ProgressCircular.Circle>
			<ProgressCircular.ValueText data-testid="value-text" />
		</ProgressCircular>
	);
}
