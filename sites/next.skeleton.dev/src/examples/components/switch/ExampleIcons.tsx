import React from 'react';
import { Switch } from '@skeletonlabs/skeleton-react';
import { Check as IconCheck, X as IconX } from 'lucide-react';

export const Page: React.FC = () => {
	const [icons, setIcons] = React.useState(false);

	return (
		<Switch
			name="icons"
			controlActive="bg-secondary-500"
			checked={icons}
			onCheckedChange={(e) => setIcons(e.checked)}
			inactiveChild={<IconX size="14" />}
			activeChild={<IconCheck size="14" />}
		/>
	);
};
