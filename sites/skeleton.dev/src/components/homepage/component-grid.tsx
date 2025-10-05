import { Avatar, Switch, Slider, Progress, SegmentedControl } from '@skeletonlabs/skeleton-react';
import {
	ArrowUpRightIcon,
	CheckIcon,
	AudioLinesIcon,
	FastForwardIcon,
	AudioWaveform,
	Headphones,
	PlayIcon,
	RewindIcon,
	UsersIcon,
	Volume2Icon,
	ChartNoAxesColumnIncreasingIcon,
} from 'lucide-react';
import { Fragment, useState } from 'react';

const cardClasses = 'card preset-outlined-surface-200-800 bg-surface-50-950 p-5 space-y-5';

function camelCaseToReadable(str: string) {
	return str
		.replace(/([A-Z])/g, ' $1')
		.replace(/^./, (s) => s.toUpperCase())
		.trim();
}

const teamData = [
	{ name: 'Janet Rosenbell', email: 'jrosenbell@email.com' },
	{ name: 'Jason Greene', email: 'jgreene@email.com' },
	{ name: 'Lucas Gamble', email: 'lgamble@email.com' },
	{ name: 'Murray Henderson', email: 'mhenderson@email.com' },
];

const tableData = [
	{ position: '0', name: 'Iron', symbol: 'Fe', atomic_no: '26' },
	{ position: '1', name: 'Rhodium', symbol: 'Rh', atomic_no: '45' },
	{ position: '2', name: 'Iodine', symbol: 'I', atomic_no: '53' },
	{ position: '3', name: 'Radon', symbol: 'Rn', atomic_no: '86' },
	{ position: '4', name: 'Technetium', symbol: 'Tc', atomic_no: '43' },
];

export default function ComponentGrid() {
	const [notifications, setNotifications] = useState({
		doNotDisturb: false,
		global: false,
		personal: false,
		priority: false,
		news: false,
	});
	return (
		<div className="space-y-2">
			<div className="grid grid-cols-4 gap-4">
				<div className={`${cardClasses}`}>
					<header>
						<h3 className="h3">Create Account</h3>
						<p className="opacity-60">Complete the form to get started.</p>
					</header>
					<nav className="grid grid-cols-2 gap-5">
						<button className="btn preset-outlined-surface-200-800 hover:preset-tonal">GitHub</button>
						<button className="btn preset-outlined-surface-200-800 hover:preset-tonal">Google</button>
					</nav>
					<hr className="hr" />
					<article className="grid grid-cols-1 gap-5">
						<label className="label">
							<span className="label-text">Email</span>
							<input type="email" className="input" placeholder="me@example.com" />
						</label>
						<label className="label">
							<span className="label-text">Password</span>
							<input type="password" className="input" placeholder="me@example.com" />
						</label>
					</article>
					<button className="w-full btn preset-filled-primary-500">Create Account</button>
				</div>
				<div className={`${cardClasses}`}>
					<header className="space-y-1">
						<h2 className="h4">Notifications</h2>
						<p className="opacity-60">Review each available option.</p>
					</header>
					<section className="w-full space-y-5">
						{Object.entries(notifications).map(([key, value], i) => (
							<Fragment key={key}>
								{i > 0 && <hr className="hr" />}
								<Switch
									className="flex justify-between items-center gap-4"
									name={key}
									checked={key !== 'doNotDisturb' && notifications.doNotDisturb ? false : value}
									onCheckedChange={(e) =>
										setNotifications((prev) => ({
											...prev,
											[key]: e.checked,
										}))
									}
									disabled={key !== 'doNotDisturb' && notifications.doNotDisturb}
								>
									<Switch.Label>{camelCaseToReadable(key)}</Switch.Label>
									<Switch.Control>
										<Switch.Thumb />
									</Switch.Control>
									<Switch.HiddenInput />
								</Switch>
							</Fragment>
						))}
					</section>
				</div>
				<div className={`${cardClasses} row-span-2`}>
					<div className="space-y-4">
						<header>
							<h2 className="h4">Team</h2>
							<p className="opacity-60">View all members of the team, or filter using the search field provided.</p>
						</header>
						<input type="search" className="input" placeholder="Search Members..." />
						<div className="grid grid-cols-1 gap-2">
							{teamData.map((member, i) => (
								<Fragment key={member.email}>
									{i > 0 && <hr className="hr" />}
									<button type="button" className="card w-full grid grid-cols-[auto_1fr] items-center gap-4 p-3">
										<Avatar>
											<Avatar.Image src="https://i.pravatar.cc/150?img={i + 10}" className="grayscale" />
										</Avatar>
										<div className="text-left">
											<p className="font-bold">{member.name}</p>
											<p className="opacity-60 text-xs">{member.email}</p>
										</div>
									</button>
								</Fragment>
							))}
						</div>
					</div>
				</div>
				<div className={`${cardClasses} row-span-2`}>
					<header className="flex justify-between items-center">
						<h2 className="h4">Music</h2>
						<p className="text-xs opacity-60">Harman Kardon Luna</p>
					</header>
					<img
						src="https://i.imgur.com/kocJdtN.png"
						alt="Massive Attack"
						className="rounded-container border-[1px] border-surface-500/50"
					/>
					<div className="grid grid-cols-[auto_1fr] gap-2 items-center">
						<PlayIcon className="size-4 opacity-60" />
						<Slider defaultValue={[70]}>
							<Slider.Control>
								<Slider.Track>
									<Slider.Range />
								</Slider.Track>
								<Slider.Thumb index={0}>
									<Slider.HiddenInput />
								</Slider.Thumb>
							</Slider.Control>
						</Slider>
					</div>
					<div className="grid grid-cols-4 gap-2 items-center">
						<button
							type="button"
							className="aspect-square flex flex-col justify-center items-center gap-2 rounded-container hover:preset-tonal"
						>
							<div className="w-8 aspect-square rounded-full flex justify-center items-center preset-filled-primary-500">
								<AudioLinesIcon className="size-4" />
							</div>
							<span className="text-[10px]">Normalize</span>
						</button>
						<button
							type="button"
							className="aspect-square flex flex-col justify-center items-center gap-2 rounded-container hover:preset-tonal"
						>
							<div className="w-8 aspect-square rounded-full flex justify-center items-center preset-filled-primary-500">
								<AudioWaveform className="size-4" />
							</div>
							<span className="text-[10px]">Equalizer</span>
						</button>
						<button
							type="button"
							className="aspect-square flex flex-col justify-center items-center gap-2 rounded-container hover:preset-tonal"
						>
							<div className="w-8 aspect-square rounded-full flex justify-center items-center preset-filled-primary-500">
								<Headphones className="size-4" />
							</div>
							<span className="text-[10px]">3D Audio</span>
						</button>
						<button
							type="button"
							className="aspect-square flex flex-col justify-center items-center gap-2 rounded-container hover:preset-tonal"
						>
							<div className="w-8 aspect-square rounded-full flex justify-center items-center preset-filled-primary-500">
								<ChartNoAxesColumnIncreasingIcon className="size-4" />
							</div>
							<span className="text-[10px]">Crossfade</span>
						</button>
					</div>
				</div>
				<div className={`${cardClasses}`}>
					<div className="flex justify-between items-center gap-4">
						<div>
							<h2 className="h4">Success</h2>
							<p className="text-xs opacity-60">Task was completed.</p>
						</div>
						<div className="flex gap-1">
							<button type="button" className="btn preset-outlined-surface-200-800 hover:preset-tonal">
								Dismiss
							</button>
						</div>
					</div>
				</div>
				<div className={`${cardClasses} row-span-2`}>
					<h2 className="h4">Statistics</h2>
					<div className="card grid grid-cols-3 gap-5">
						<div className="flex flex-col items-start">
							<h2 className="text-3xl font-bold">64k+</h2>
							<div className="grid grid-cols-1 gap-2">
								<p className="text-xs opacity-60">Downloads</p>
								<span className="badge preset-tonal-success">&uarr; 4%</span>
							</div>
						</div>
						<div className="flex flex-col items-start">
							<h2 className="text-3xl font-bold">93k+</h2>
							<div className="grid grid-cols-1 gap-2">
								<p className="text-xs opacity-60">Views</p>
								<span className="badge preset-tonal-error">&darr; 2.4%</span>
							</div>
						</div>
						<div className="flex flex-col items-start">
							<h2 className="text-3xl font-bold">15k+</h2>
							<div className="grid grid-cols-1 gap-2">
								<p className="text-xs opacity-60">Members</p>
								<span className="badge preset-tonal-success">&uarr; 8%</span>
							</div>
						</div>
					</div>
					<hr className="hr" />
					<p className="opacity-60">Data represents quarterly metrics for the TPS reports. Updates every 24 hours.</p>
				</div>
				<div className={`${cardClasses} row-span-2 row-start-3`}>
					<h2 className="h4 text-center">Progression</h2>
					<div className="grid grid-cols-[1fr_auto] grid-row-2 gap-5">
						<Progress value={32} className="relative items-center w-fit row-span-2">
							<Progress.Circle style={{ ['--size' as string]: '200px' }}>
								<Progress.CircleTrack />
								<Progress.CircleRange />
							</Progress.Circle>
							<Progress.ValueText className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl font-semibold" />
						</Progress>
						<Progress value={66} className="relative items-center w-fit self-center">
							<Progress.Circle style={{ ['--size' as string]: '75px' }}>
								<Progress.CircleTrack />
								<Progress.CircleRange />
							</Progress.Circle>
							<Progress.ValueText className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
						</Progress>
						<Progress value={35} className="relative items-center w-fit self-center">
							<Progress.Circle style={{ ['--size' as string]: '75px' }}>
								<Progress.CircleTrack />
								<Progress.CircleRange />
							</Progress.Circle>
							<Progress.ValueText className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
						</Progress>
					</div>
				</div>
				<div className={`${cardClasses} col-span-2 row-span-2 col-start-3 row-start-3`}>
					<header className="flex justify-between">
						<div>
							<h2 className="h3">Revenue</h2>
							<p className="text-xs opacity-60">Posted April 1-13</p>
						</div>
						<button
							type="button"
							className="btn-icon rounded-full preset-tonal"
							title="Expand revenue details"
							aria-label="Expand revenue details"
						>
							<ArrowUpRightIcon className="size-4" />
						</button>
					</header>
					<hr className="hr" />
					<div className="space-y-1">
						<div className="flex justify-between items-center">
							<span className="text-xl font-bold">$3,900</span>
							<span className="badge preset-tonal-success">+20%</span>
						</div>
						<progress className="progress" value="39" max="100"></progress>
					</div>
					<div className="space-y-1">
						<div className="flex justify-between items-center">
							<span className="text-xl font-bold">$6,400</span>
							<span className="badge preset-tonal-error">-5%</span>
						</div>
						<progress className="progress" value="64" max="100"></progress>
					</div>
					<div className="space-y-1">
						<div className="flex justify-between items-center">
							<span className="text-xl font-bold">$1,300</span>
							<span className="badge preset-tonal-success">+8%</span>
						</div>
						<progress className="progress" value="13" max="100"></progress>
					</div>
				</div>
				<div className={`${cardClasses} row-span-2 col-start-2 row-start-4`}>
					<div className="space-y-2">
						<p className="font-bold">Delivery</p>
						<nav className="grid grid-cols-2 gap-2">
							<button className="btn preset-outlined-surface-200-800 hover:preset-tonal">Tomorrow</button>
							<button className="btn preset-outlined-surface-200-800 hover:preset-tonal">Within 2 days</button>
						</nav>
					</div>
					<div className="space-y-2">
						<p className="font-bold">Size</p>
						<nav className="grid grid-cols-5 gap-2">
							<button className="btn preset-outlined-surface-200-800 hover:preset-tonal">5.5</button>
							<button className="btn preset-filled-primary-500">6</button>
							<button className="btn preset-outlined-surface-200-800 hover:preset-tonal">6.5</button>
							<button className="btn preset-outlined-surface-200-800 hover:preset-tonal">7</button>
							<button className="btn preset-outlined-surface-200-800 hover:preset-tonal">7.5</button>
							<button className="btn preset-outlined-surface-200-800 hover:preset-tonal">8</button>
							<button className="btn preset-outlined-surface-200-800 hover:preset-tonal">8.5</button>
							<button className="btn preset-outlined-surface-200-800 hover:preset-tonal">9</button>
							<button className="btn preset-outlined-surface-200-800 hover:preset-tonal">9.5</button>
							<button className="btn preset-outlined-surface-200-800 hover:preset-tonal">10</button>
						</nav>
					</div>
					<div className="space-y-2">
						<p className="font-bold">Material</p>
						<nav className="grid grid-cols-4 gap-2">
							<button className="btn preset-outlined-surface-200-800 hover:preset-tonal">Canvas</button>
							<button className="btn preset-outlined-surface-200-800 hover:preset-tonal">Mesh</button>
							<button className="btn preset-outlined-surface-200-800 hover:preset-tonal">Suede</button>
							<button className="btn preset-outlined-surface-200-800 hover:preset-tonal">Leather</button>
						</nav>
					</div>
				</div>
				<div className={`${cardClasses} row-span-2 row-start-5 text-center`}>
					<button type="button" className="w-16 aspect-square preset-tonal-success flex justify-center items-center mx-auto rounded-full">
						<CheckIcon className="size-8" />
					</button>
					<div className="space-y-2 text-center">
						<h2 className="h2">Invoice Paid</h2>
						<p className="text-sm opacity-60">You paid $14,276. Receipt submitted to:</p>
						<p className="font-bold">me@email.com</p>
					</div>
					<nav className="grid grid-cols-1 gap-2">
						<button className="btn preset-filled-primary-500">Mark Completed</button>
						<button className="btn preset-outlined-surface-200-800 hover:preset-tonal">Cancel</button>
					</nav>
				</div>
				<div className={`${cardClasses} col-span-2 row-span-2 col-start-3 row-start-5`}>
					<input type="search" className="input" placeholder="Filter elements..." />
					<div className="table-wrap">
						<table className="table">
							<thead>
								<tr>
									<th>
										<input type="checkbox" className="checkbox" />
									</th>
									<th>Symbol</th>
									<th>Name</th>
									<th className="!text-right">Weight</th>
								</tr>
							</thead>
							<tbody className="[&>tr]:hover:preset-tonal">
								{tableData.map((row, i) => (
									<tr key={row.atomic_no}>
										<td>
											<input type="checkbox" className="checkbox" checked={i === 1} />
										</td>
										<td>{row.symbol}</td>
										<td>{row.name}</td>
										<td className="text-right">{row.atomic_no}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
				<div className={`${cardClasses} row-span-2 col-start-2 row-start-6 row-end-9`}>
					<h2 className="h4">Set Reminder</h2>
					<SegmentedControl name="time" defaultValue="15">
						<SegmentedControl.Label>Time</SegmentedControl.Label>
						<SegmentedControl.Control>
							<SegmentedControl.Indicator />
							<SegmentedControl.Item value="15">
								<SegmentedControl.ItemText>5 mins</SegmentedControl.ItemText>
								<SegmentedControl.ItemHiddenInput />
							</SegmentedControl.Item>
							<SegmentedControl.Item value="60">
								<SegmentedControl.ItemText>15 mins</SegmentedControl.ItemText>
								<SegmentedControl.ItemHiddenInput />
							</SegmentedControl.Item>
							<SegmentedControl.Item value="240">
								<SegmentedControl.ItemText>30 mins</SegmentedControl.ItemText>
								<SegmentedControl.ItemHiddenInput />
							</SegmentedControl.Item>
						</SegmentedControl.Control>
					</SegmentedControl>
					<label className="label">
						<span className="label-text">Message</span>
						<textarea name="message" id="message" className="textarea rounded-container" placeholder="Provide a message..."></textarea>
					</label>
					<div className="flex justify-end">
						<button className="btn preset-filled-primary-500">Submit</button>
					</div>
				</div>
				<div className={`${cardClasses} row-span-2 row-start-7`}>
					<div className="space-y-2">
						<header className="flex justify-between items-center gap-4">
							<h2 className="h6">Contributions</h2>
							<UsersIcon className="size-4 opacity-60" />
						</header>
						<h2 className="text-4xl font-bold">+1,248</h2>
						<p className="text-xs opacity-60">
							<span className="badge preset-tonal">+150% increase</span>
						</p>
					</div>
				</div>
				<div className={`${cardClasses} col-span-2 row-span-2 col-start-3 row-start-7`}>
					<div className="h-full grid grid-cols-[auto_2fr_0.5fr] items-center gap-2 px-5">
						<button
							type="button"
							className="btn-icon btn-icon-lg rounded-full preset-filled-primary-500 scale-150"
							title="Play music"
							aria-label="Play music"
						>
							<PlayIcon className="size-6 fill-current stroke-none" />
						</button>
						<div className="grid grid-cols-[auto_1fr_auto] gap-5 items-center px-10">
							<button type="button" className="btn hover:preset-tonal">
								<RewindIcon className="size-4 opacity-60" />
							</button>
							<div className="space-y-1">
								<p className="font-bold">Pink Floyd</p>
								<progress className="progress" value={75} max={100}></progress>
								<div className="flex justify-between items-end">
									<p className="text-xs opacity-60">Another Brick in the Wall</p>
									<p className="text-xs opacity-60">3:16</p>
								</div>
							</div>
							<button type="button" className="btn hover:preset-tonal">
								<FastForwardIcon className="size-4 opacity-60" />
							</button>
						</div>
						<div className="grid grid-cols-[auto_1fr] gap-2 items-center">
							<Volume2Icon className="size-4 opacity-60" />
							<Slider defaultValue={[70]}>
								<Slider.Control>
									<Slider.Track>
										<Slider.Range />
									</Slider.Track>
									<Slider.Thumb index={0}>
										<Slider.HiddenInput />
									</Slider.Thumb>
								</Slider.Control>
							</Slider>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
