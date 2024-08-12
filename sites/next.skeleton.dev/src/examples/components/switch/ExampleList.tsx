import React from 'react';
import { Switch } from '@skeletonlabs/skeleton-react';

export const Page: React.FC = () => {
	const [disturb, setDisturb] = React.useState(false);
	const [notifications, setNotifications] = React.useState(true);
	const [disabled, setDisabled] = React.useState(false);

	return (
		<section className="w-full space-y-4">
			<div className="flex justify-between items-center gap-4">
				<p>Default to the inactive state.</p>
				<Switch name="disturb" checked={disturb} onCheckedChange={setDisturb}></Switch>
			</div>
			<hr className="hr" />
			<div className="flex justify-between items-center gap-4">
				<p>Default to the active state.</p>
				<Switch name="notifications" checked={notifications} onCheckedChange={setNotifications}></Switch>
			</div>
			<hr className="hr" />
			<div className="flex justify-between items-center gap-4">
				<p>Shown in disabled mode.</p>
				<Switch name="disabled" checked={disabled} onCheckedChange={setDisabled} disabled></Switch>
			</div>
		</section>
	);
};
