import { ProgressLinear } from '@skeletonlabs/skeleton-react';
import { useState } from 'react';

export default function () {
	const [value, setValue] = useState(75);
	return (
		<ProgressLinear value={value} onValueChange={(e) => setValue(e.value)}>
			<ProgressLinear.Label>{value}%</ProgressLinear.Label>
			<ProgressLinear.Track>
				<ProgressLinear.Range />
			</ProgressLinear.Track>
		</ProgressLinear>
	);
}
