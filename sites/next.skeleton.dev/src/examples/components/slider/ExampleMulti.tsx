import { useState } from 'react';
import { Slider } from '@skeletonlabs/skeleton-react';

export const Page: React.FC = () => {
	const [valueMulti, setValueMulti] = useState([40, 60]);

	return <Slider value={valueMulti} onValueChange={(e) => setValueMulti(e.value)} />;
};
