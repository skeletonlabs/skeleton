import { useState } from 'react';
import { Slider } from '@skeletonlabs/skeleton-react';

export const Page: React.FC = () => {
	const [value, setValue] = useState([40]);

	return <Slider value={value} onValueChange={(e) => setValue(e.value)} markers={[25, 50, 75]} />;
};
