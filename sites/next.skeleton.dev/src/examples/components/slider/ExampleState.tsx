import { useState } from 'react';
import { Slider } from '@skeletonlabs/skeleton-react';

export const Page: React.FC = () => {
	const [value, setValue] = useState([40]);

	return (
		<div className="w-full space-y-4">
			<p>Disabled</p>
			<Slider name="value" value={value} onValueChange={setValue} disabled />
			<p>Read-Only</p>
			<Slider name="value" value={value} onValueChange={setValue} readOnly />
		</div>
	);
};
