'use client';

import { Check as IconCheck, X as IconX, Moon as IconMoon, Sun as IconSun, Frown as IconFrown, Smile as IconSmile } from 'lucide-react';
import { useState } from 'react';

import { Switch } from '@skeletonlabs/skeleton-react';

export default function Page() {
	const [disturb, setDisturb] = useState(false);
	const [notifications, setNotifications] = useState(true);
	const [disabled, setDisabled] = useState(false);
	const [icons, setIcons] = useState(true);
	const [lightswitch, setLightswitch] = useState(false);
	const [compact, setCompact] = useState(false);

	return (
		<div className="space-y-10">
			<header>
				<h1 className="h1">Switch</h1>
			</header>
			<pre className="pre">{JSON.stringify({ disturb, notifications, disabled, icons, lightswitch, compact }, null, 2)}</pre>
			<section className="space-y-4">
				<Switch name="disturb" checked={disturb} onCheckedChange={(e) => setDisturb(e.checked)}>
					<p>Defaults to inactive state.</p>
				</Switch>
				<hr className="hr" />
				<Switch name="notifications" checked={notifications} onCheckedChange={(e) => setNotifications(e.checked)}>
					<p>Defaults to active state.</p>
				</Switch>
				<hr className="hr" />
				<Switch name="disabled" checked={disabled} onCheckedChange={(e) => setDisabled(e.checked)} disabled>
					<p>Uses the disabled state.</p>
				</Switch>
				<hr className="hr" />
				<Switch
					name="icons"
					controlActive="bg-secondary-500"
					checked={icons}
					onCheckedChange={(e) => setIcons(e.checked)}
					inactiveChild={<IconX size="14" />}
					activeChild={<IconCheck size="14" />}
				>
					<p>Custom Icons</p>
				</Switch>
				<hr className="hr" />
				<Switch
					name="mode"
					controlActive="bg-surface-200"
					checked={lightswitch}
					onCheckedChange={(e) => setLightswitch(e.checked)}
					inactiveChild={<IconMoon size="14" />}
					activeChild={<IconSun size="14" />}
				>
					<p>Lightswitch</p>
				</Switch>
				<hr className="hr" />
				<Switch
					name="compact"
					checked={compact}
					onCheckedChange={(e) => setCompact(e.checked)}
					controlWidth="w-9"
					compact
					inactiveChild={<IconFrown size="18" />}
					activeChild={<IconSmile size="18" />}
				>
					<p>Compact</p>
				</Switch>
			</section>
		</div>
	);
}
