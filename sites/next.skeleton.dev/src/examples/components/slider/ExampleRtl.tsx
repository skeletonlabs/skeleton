import { useState } from 'react';
import { Slider } from '@skeletonlabs/skeleton-react';

export const Page: React.FC = () => {
	const [value, setValue] = useState([40]);
	const [valueMulti, setValueMulti] = useState([40, 60]);

	return (
		<div className="w-full space-y-8">
			<Slider value={value} onValueChange={setValue} dir="rtl" />
			<Slider value={valueMulti} onValueChange={setValueMulti} dir="rtl" />
		</div>
	);
};
