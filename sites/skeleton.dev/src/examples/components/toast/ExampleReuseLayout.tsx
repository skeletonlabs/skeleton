import { Toaster } from '@skeletonlabs/skeleton-react';
import { toaster } from './toaster-react';

export default function () {
	return (
		<>
			<Toaster toaster={toaster}></Toaster>

			{/* ...layout content... */}
		</>
	);
}
