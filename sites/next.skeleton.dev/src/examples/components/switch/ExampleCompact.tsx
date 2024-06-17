import React from 'react';
import { Switch } from '@skeletonlabs/skeleton-react';
import { Frown as IconFrown, Smile as IconSmile } from 'lucide-react';

export const Page: React.FC = () => {
	const [compact, setCompact] = React.useState(false);

	return (
		<Switch
			id="compact"
			name="compact"
			checked={compact}
			onCheckedChange={setCompact}
			width="w-9"
			stateActive="preset-filled-tertiary-500"
			compact
			inactiveChild={<IconFrown size="18" />}
			activeChild={<IconSmile size="18" />}
		/>
	);
};
