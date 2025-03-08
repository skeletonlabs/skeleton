import React from 'react';
import { Switch } from '@skeletonlabs/skeleton-react';

export const Page: React.FC = () => {
	const [example, setExample] = React.useState(false);

	return <Switch name="example" checked={example} onCheckedChange={(e) => setExample(e.checked)} />;
};
