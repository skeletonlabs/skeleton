import React from 'react';
import { AppBar } from '@skeletonlabs/skeleton-react';

export const Page: React.FC<any> = () => {
	return (
		<AppBar>
			<AppBar.Headline base="text-center">
				<h2 className="h2">Headline</h2>
			</AppBar.Headline>
		</AppBar>
	);
};
