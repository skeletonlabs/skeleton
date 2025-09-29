import { Progress } from '@skeletonlabs/skeleton-react';
import type { CSSProperties } from 'react';

export default function Size() {
	return (
		<div className="flex gap-4 justify-evenly items-center w-full">
			<Progress className="w-fit">
				<Progress.Circle style={{ '--size': '50px', '--thickness': '5px' } as CSSProperties}>
					<Progress.CircleTrack />
					<Progress.CircleRange />
				</Progress.Circle>
			</Progress>
			<Progress className="w-fit">
				<Progress.Circle>
					<Progress.CircleTrack />
					<Progress.CircleRange />
				</Progress.Circle>
			</Progress>
			<Progress className="w-fit">
				<Progress.Circle style={{ '--size': '150px', '--thickness': '15px' } as CSSProperties}>
					<Progress.CircleTrack />
					<Progress.CircleRange />
				</Progress.Circle>
			</Progress>
		</div>
	);
}
