import React from 'react';
import { Switch } from '@skeletonlabs/skeleton-react';

export const Page: React.FC = () => {
	const [disturb, setDisturb] = React.useState(false);
	const [notifications, setNotifications] = React.useState(true);
	const [disabled, setDisabled] = React.useState(false);

	return (
		<section className="w-full space-y-4">
			<Switch name="disturb" checked={disturb} onChange={setDisturb}>
				<p>Default to the inactive state.</p>
			</Switch>
			<hr className="hr" />
			<Switch name="notifications" checked={notifications} onChange={setNotifications}>
				<p>Default to the active state.</p>
			</Switch>
			<hr className="hr" />
			<Switch name="disabled" checked={disabled} onChange={setDisabled} disabled>
				<p>Shown in disabled mode.</p>
			</Switch>
		</section>
	);
};
