import { useState } from 'react';
import { Slider } from '@skeletonlabs/skeleton-react';

export const Page: React.FC = () => {
	const [value, setValue] = useState([40]);

	return <Slider value={value} onValueChange={setValue} markers={[25, 50, 75]} />;
};
