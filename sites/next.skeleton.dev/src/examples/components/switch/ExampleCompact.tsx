import React from 'react';
import { Switch } from '@skeletonlabs/skeleton-react';
import { Frown as IconFrown, Smile as IconSmile } from 'lucide-react';

export const Page: React.FC = () => {
	const [compact, setCompact] = React.useState(false);

	return (
		<Switch
			name="compact"
			checked={compact}
			onCheckedChange={(e) => setCompact(e.checked)}
			controlWidth="w-9"
			controlActive="preset-filled-tertiary-500"
			compact
			inactiveChild={<IconFrown size="18" />}
			activeChild={<IconSmile size="18" />}
		/>
	);
};
