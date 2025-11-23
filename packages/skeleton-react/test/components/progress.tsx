import { Progress } from '../../src/index.js';

export default function Test() {
	return (
		<Progress data-testid="root">
			<Progress.Label data-testid="label">
				<Progress.ValueText data-testid="value-text" />
			</Progress.Label>
			<Progress.Track data-testid="track">
				<Progress.Range data-testid="range" />
			</Progress.Track>
			<Progress.Circle data-testid="circle">
				<Progress.CircleTrack data-testid="circle-track" />
				<Progress.CircleRange data-testid="circle-range" />
			</Progress.Circle>
		</Progress>
	);
}
