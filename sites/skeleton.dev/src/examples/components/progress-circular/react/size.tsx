import { Progress } from '@skeletonlabs/skeleton-react';
import type { CSSProperties } from 'react';

export default function Size() {
	return (
		<div className="flex gap-4 justify-evenly items-center w-full">
			<Progress value={75} className="w-fit">
				<Progress.Circle style={{ '--size': '48px', '--thickness': '6px' } as CSSProperties}>
					<Progress.CircleTrack />
					<Progress.CircleRange />
				</Progress.Circle>
			</Progress>
			<Progress value={75} className="w-fit">
				<Progress.Circle>
					<Progress.CircleTrack />
					<Progress.CircleRange />
				</Progress.Circle>
			</Progress>
			<Progress value={75} className="w-fit">
				<Progress.Circle style={{ '--size': '125px', '--thickness': '12px' } as CSSProperties}>
					<Progress.CircleTrack />
					<Progress.CircleRange />
				</Progress.Circle>
			</Progress>
		</div>
	);
}
