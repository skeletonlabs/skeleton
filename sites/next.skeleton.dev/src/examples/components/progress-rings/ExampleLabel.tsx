import { useState } from 'react';
import { ProgressRing } from '@skeletonlabs/skeleton-react';

export const Page = () => {
	const [value, setValue] = useState(25);
	const [max] = useState(100);

	return (
		<div className="grid grid-cols-1 gap-4 justify-center">
			{/* Progress */}
			<ProgressRing value={value} max={max} showLabel />
			{/* Range Input */}
			<input type="range" className="input max-w-32" value={value} onInput={(e) => setValue(e.currentTarget.valueAsNumber)} max={max} />
		</div>
	);
};
