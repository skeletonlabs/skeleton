/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Switch } from '@skeletonlabs/skeleton-react';

export const Page: React.FC = () => {
	const [disturb, setDisturb] = React.useState(false);
	const [notifications, setNotifications] = React.useState(true);
	const [disabled, setDisabled] = React.useState(false);

	return (
		<section className="w-full space-y-4">
			<label className="label flex items-center justify-between gap-4">
				<p>Default to the inactive state.</p>
				<Switch id="disturb" name="disturb" checked={disturb} onCheckedChange={setDisturb} />
			</label>
			<hr className="hr" />
			<label className="label flex items-center justify-between gap-4">
				<p>Default to the active state.</p>
				<Switch id="notifications" name="notifications" checked={notifications} onCheckedChange={setNotifications} />
			</label>
			<hr className="hr" />
			<label className="label flex items-center justify-between gap-4">
				<p>Shown in disabled mode.</p>
				<Switch id="disabled" name="disabled" checked={disabled} onCheckedChange={setDisabled} disabled />
			</label>
		</section>
	);
};
