import { useState } from 'react';
import { ProgressRing } from '@skeletonlabs/skeleton-react';

export const Page = () => {
	const [value, setValue] = useState(25);
	const [max] = useState(100);

	return (
		<div className="grid grid-cols-1 justify-center gap-4">
			{/* Progress */}
			<ProgressRing value={value} max={max} />
			{/* Range Input */}
			<input type="range" className="input max-w-32" value={value} onInput={(e) => setValue(e.currentTarget.valueAsNumber)} max={max} />
		</div>
	);
};
