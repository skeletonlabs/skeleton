'use client';

import { Toaster } from '@skeletonlabs/skeleton-react';
import { appToaster } from './toaster-react';

export default function () {
	return (
		<>
			<Toaster toaster={appToaster}></Toaster>

			{/* ...layout content... */}
		</>
	);
}
