<script lang="ts">
	import massiveAttackMezzanine from '@/assets/landing-page/massive-attack-mezzanine.webp';
	import { ArrowUpRight, Check, Music, FastForward, Sliders, Headphones, Play, Rewind, Users, Volume2, ChartBar } from '@lucide/svelte';
	import { Avatar, Slider, Progress, SegmentedControl, Switch } from '@skeletonlabs/skeleton-svelte';

	const cardClasses = 'card preset-outlined-surface-200-800 bg-surface-50-950 p-5 space-y-5';

	function camelCaseToReadable(str: string) {
		return str
			.replace(/([A-Z])/g, ' $1')
			.replace(/^./, (s) => s.toUpperCase())
			.trim();
	}

	const notifications = $state({
		doNotDisturb: false,
		global: false,
		personal: false,
		priority: false,
		news: false,
	});

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
</script>

<div class="space-y-2">
	<div class="grid grid-cols-4 gap-4">
		<div class={cardClasses}>
			<header>
				<span class="h3">Create Account</span>
				<p class="opacity-60">Complete the form to get started.</p>
			</header>
			<nav class="grid grid-cols-2 gap-5">
				<button class="btn preset-outlined-surface-200-800 hover:preset-tonal">GitHub</button>
				<button class="btn preset-outlined-surface-200-800 hover:preset-tonal">Google</button>
			</nav>
			<hr class="hr" />
			<form class="grid grid-cols-1 gap-5">
				<label class="label">
					<span class="label-text">Email</span>
					<input type="email" class="input" placeholder="me@example.com" />
				</label>
				<label class="label">
					<span class="label-text">Password</span>
					<input type="password" class="input" placeholder="Enter your password..." />
				</label>
			</form>
			<button class="w-full btn preset-filled-primary-500">Create Account</button>
		</div>
		<div class={cardClasses}>
			<header class="space-y-1">
				<h2 class="h4">Notifications</h2>
				<p class="opacity-60">Review each available option.</p>
			</header>
			<section class="w-full space-y-5">
				{#each Object.entries(notifications) as [key, value], i (key)}
					{#if i > 0}
						<hr class="hr" />
					{/if}

					<Switch
						class="flex justify-between items-center gap-4"
						name={key}
						checked={key !== 'doNotDisturb' && notifications.doNotDisturb ? false : value}
						onCheckedChange={(details) => (notifications[key as keyof typeof notifications] = details.checked)}
						disabled={key !== 'doNotDisturb' && notifications.doNotDisturb}
					>
						<Switch.Label>{camelCaseToReadable(key)}</Switch.Label>
						<Switch.Control>
							<Switch.Thumb />
						</Switch.Control>
						<Switch.HiddenInput />
					</Switch>
				{/each}
			</section>
		</div>
		<div class="{cardClasses} row-span-2">
			<div class="space-y-4">
				<header>
					<h2 class="h4">Team</h2>
					<p class="opacity-60">View all members of the team, or filter using the search field provided.</p>
				</header>

				<input type="search" class="input" placeholder="Search Members..." />

				<div class="grid grid-cols-1 gap-2">
					{#each teamData as member, i}
						{#if i > 0}
							<hr class="hr" />
						{/if}
						<button type="button" class="card w-full grid grid-cols-[auto_1fr] items-center gap-4 p-3">
							<Avatar>
								<Avatar.Image src={`https://i.pravatar.cc/150?img=${i + 10}`} alt={`Avatar of ${member.name}`} class="grayscale" />
							</Avatar>
							<div class="text-left">
								<p class="font-bold">{member.name}</p>
								<p class="opacity-60 text-xs">{member.email}</p>
							</div>
						</button>
					{/each}
				</div>
			</div>
		</div>
		<div class="{cardClasses} row-span-2">
			<header class="flex justify-between items-center">
				<h2 class="h4">Music</h2>
				<p class="text-xs opacity-60">Harman Kardon Luna</p>
			</header>
			<img
				src={massiveAttackMezzanine.src}
				width={massiveAttackMezzanine.width}
				height={massiveAttackMezzanine.height}
				alt="Massive Attack"
				class="rounded-container border-[1px] border-surface-500/50"
			/>
			<div class="grid grid-cols-[auto_1fr] gap-2 items-center">
				<Play class="size-4 opacity-60" />
				<Slider name="volume" defaultValue={[70]}>
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
			<div class="grid grid-cols-4 gap-2 items-center">
				<button type="button" class="aspect-square flex flex-col justify-center items-center gap-2 rounded-container hover:preset-tonal">
					<div class="w-8 aspect-square rounded-full flex justify-center items-center preset-filled-primary-500">
						<Music class="size-4" />
					</div>
					<span class="text-[10px]">Normalize</span>
				</button>
				<button type="button" class="aspect-square flex flex-col justify-center items-center gap-2 rounded-container hover:preset-tonal">
					<div class="w-8 aspect-square rounded-full flex justify-center items-center preset-filled-primary-500">
						<Sliders class="size-4" />
					</div>
					<span class="text-[10px]">Equalizer</span>
				</button>
				<button type="button" class="aspect-square flex flex-col justify-center items-center gap-2 rounded-container hover:preset-tonal">
					<div class="w-8 aspect-square rounded-full flex justify-center items-center preset-filled-primary-500">
						<Headphones class="size-4" />
					</div>
					<span class="text-[10px]">3D Audio</span>
				</button>
				<button type="button" class="aspect-square flex flex-col justify-center items-center gap-2 rounded-container hover:preset-tonal">
					<div class="w-8 aspect-square rounded-full flex justify-center items-center preset-filled-primary-500">
						<ChartBar class="size-4" />
					</div>
					<span class="text-[10px]">Crossfade</span>
				</button>
			</div>
		</div>

		<div class={cardClasses}>
			<div class="flex justify-between items-center gap-4">
				<div>
					<h2 class="h4">Success</h2>
					<p class="text-xs opacity-60">Task was completed.</p>
				</div>
				<div class="flex gap-1">
					<button type="button" class="btn preset-outlined-surface-200-800 hover:preset-tonal">Dismiss</button>
				</div>
			</div>
		</div>

		<div class="{cardClasses} row-span-2">
			<h2 class="h4">Statistics</h2>
			<div class="card grid grid-cols-3 gap-5">
				<div class="flex flex-col items-start">
					<h2 class="text-3xl font-bold">64k+</h2>
					<div class="grid grid-cols-1 gap-2">
						<p class="text-xs opacity-60">Downloads</p>
						<span class="badge preset-tonal-success">&uarr; 4%</span>
					</div>
				</div>
				<div class="flex flex-col items-start">
					<h2 class="text-3xl font-bold">93k+</h2>
					<div class="grid grid-cols-1 gap-2">
						<p class="text-xs opacity-60">Views</p>
						<span class="badge preset-tonal-error">&darr; 2.4%</span>
					</div>
				</div>
				<div class="flex flex-col items-start">
					<h2 class="text-3xl font-bold">15k+</h2>
					<div class="grid grid-cols-1 gap-2">
						<p class="text-xs opacity-60">Members</p>
						<span class="badge preset-tonal-success">&uarr; 8%</span>
					</div>
				</div>
			</div>
			<hr class="hr" />
			<p class="opacity-60">Data represents quarterly metrics for the TPS reports. Updates every 24 hours.</p>
		</div>

		<div class="{cardClasses} row-span-2 row-start-3">
			<h2 class="h4 text-center">Progression</h2>
			<div class="grid grid-cols-[1fr_auto] grid-row-2 gap-5">
				<Progress value={32} class="relative items-center w-fit row-span-2">
					<Progress.Circle class="[--size:200px]">
						<Progress.CircleTrack />
						<Progress.CircleRange />
					</Progress.Circle>
					<Progress.ValueText class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl font-semibold" />
				</Progress>
				<Progress value={66} class="relative items-center w-fit self-center">
					<Progress.Circle class="[--size:75px]">
						<Progress.CircleTrack />
						<Progress.CircleRange />
					</Progress.Circle>
					<Progress.ValueText class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
				</Progress>
				<Progress value={35} class="relative items-center w-fit self-center">
					<Progress.Circle class="[--size:75px]">
						<Progress.CircleTrack />
						<Progress.CircleRange />
					</Progress.Circle>
					<Progress.ValueText class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
				</Progress>
			</div>
		</div>

		<div class="{cardClasses} col-span-2 row-span-2 col-start-3 row-start-3">
			<header class="flex justify-between">
				<div>
					<h2 class="h3">Revenue</h2>
					<p class="text-xs opacity-60">Posted April 1-13</p>
				</div>
				<button type="button" class="btn-icon rounded-full preset-tonal" title="Expand revenue details" aria-label="Expand revenue details">
					<ArrowUpRight class="size-4" />
				</button>
			</header>

			<hr class="hr" />

			<div class="space-y-1">
				<div class="flex justify-between items-center">
					<span class="text-xl font-bold">$3,900</span>
					<span class="badge preset-tonal-success">+20%</span>
				</div>
				<progress class="progress" value="39" max="100"></progress>
			</div>
			<div class="space-y-1">
				<div class="flex justify-between items-center">
					<span class="text-xl font-bold">$6,400</span>
					<span class="badge preset-tonal-error">-5%</span>
				</div>
				<progress class="progress" value="64" max="100"></progress>
			</div>
			<div class="space-y-1">
				<div class="flex justify-between items-center">
					<span class="text-xl font-bold">$1,300</span>
					<span class="badge preset-tonal-success">+8%</span>
				</div>
				<progress class="progress" value="13" max="100"></progress>
			</div>
		</div>

		<div class="{cardClasses} row-span-2 col-start-2 row-start-4">
			<div class="space-y-2">
				<p class="font-bold">Delivery</p>
				<nav class="grid grid-cols-2 gap-2">
					<button class="btn preset-outlined-surface-200-800 hover:preset-tonal">Tomorrow</button>
					<button class="btn preset-outlined-surface-200-800 hover:preset-tonal">Within 2 days</button>
				</nav>
			</div>
			<div class="space-y-2">
				<p class="font-bold">Size</p>
				<nav class="grid grid-cols-5 gap-2">
					<button class="btn preset-outlined-surface-200-800 hover:preset-tonal">5.5</button>
					<button class="btn preset-filled-primary-500">6</button>
					<button class="btn preset-outlined-surface-200-800 hover:preset-tonal">6.5</button>
					<button class="btn preset-outlined-surface-200-800 hover:preset-tonal">7</button>
					<button class="btn preset-outlined-surface-200-800 hover:preset-tonal">7.5</button>
					<button class="btn preset-outlined-surface-200-800 hover:preset-tonal">8</button>
					<button class="btn preset-outlined-surface-200-800 hover:preset-tonal">8.5</button>
					<button class="btn preset-outlined-surface-200-800 hover:preset-tonal">9</button>
					<button class="btn preset-outlined-surface-200-800 hover:preset-tonal">9.5</button>
					<button class="btn preset-outlined-surface-200-800 hover:preset-tonal">10</button>
				</nav>
			</div>
			<div class="space-y-2">
				<p class="font-bold">Material</p>
				<nav class="grid grid-cols-4 gap-2">
					<button class="btn preset-outlined-surface-200-800 hover:preset-tonal">Canvas</button>
					<button class="btn preset-outlined-surface-200-800 hover:preset-tonal">Mesh</button>
					<button class="btn preset-outlined-surface-200-800 hover:preset-tonal">Suede</button>
					<button class="btn preset-outlined-surface-200-800 hover:preset-tonal">Leather</button>
				</nav>
			</div>
		</div>

		<div class="{cardClasses} row-span-2 row-start-5 text-center">
			<div class="w-16 aspect-square preset-tonal-success flex justify-center items-center mx-auto rounded-full">
				<Check class="size-8" />
			</div>
			<div class="space-y-2 text-center">
				<h2 class="h2">Invoice Paid</h2>
				<p class="text-sm opacity-60">You paid $14,276. Receipt submitted to:</p>
				<p class="font-bold">me@email.com</p>
			</div>
			<nav class="grid grid-cols-1 gap-2">
				<button class="btn preset-filled-primary-500">Mark Completed</button>
				<button class="btn preset-outlined-surface-200-800 hover:preset-tonal">Cancel</button>
			</nav>
		</div>

		<div class="{cardClasses} col-span-2 row-span-2 col-start-3 row-start-5">
			<label>
				<span class="label-text">Filter</span>
				<input type="search" class="input" placeholder="Filter elements..." />
			</label>
			<div class="table-wrap">
				<table class="table">
					<thead>
						<tr>
							<th>Selected</th>
							<th>Symbol</th>
							<th>Name</th>
							<th class="text-right!">Weight</th>
						</tr>
					</thead>
					<tbody class="[&>tr]:hover:preset-tonal">
						{#each tableData as row, i}
							<tr>
								<td>
									<label>
										<span class="sr-only">Select {row.name}</span>
										<input type="checkbox" class="checkbox" checked={i === 1} />
									</label>
								</td>
								<td>{row.symbol}</td>
								<td>{row.name}</td>
								<td class="text-right">{row.atomic_no}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>

		<div class="{cardClasses} row-span-2 col-start-2 row-start-6 row-end-9">
			<h2 class="h4">Set Reminder</h2>
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

			<label class="label">
				<span class="label-text">Message</span>
				<textarea name="message" id="message" class="textarea rounded-container" placeholder="Provide a message..."></textarea>
			</label>
			<div class="flex justify-end">
				<button class="btn preset-filled-primary-500">Submit</button>
			</div>
		</div>

		<div class="{cardClasses} row-span-2 row-start-7">
			<div class="space-y-2">
				<header class="flex justify-between items-center gap-4">
					<h2 class="h6">Contributions</h2>
					<Users class="size-4 opacity-60" />
				</header>
				<h2 class="text-4xl font-bold">+1,248</h2>
				<p class="text-xs opacity-60"><span class="badge preset-tonal">+150% increase</span></p>
			</div>
		</div>

		<div class="{cardClasses} col-span-2 row-span-2 col-start-3 row-start-7">
			<div class="h-full grid grid-cols-[auto_2fr_0.5fr] items-center gap-2 px-5">
				<button
					type="button"
					class="btn-icon btn-icon-lg rounded-full preset-filled-primary-500 scale-150"
					title="Play music"
					aria-label="Play music"
				>
					<Play class="size-6 fill-current stroke-none" />
				</button>
				<div class="grid grid-cols-[auto_1fr_auto] gap-5 items-center px-10">
					<button type="button" class="btn hover:preset-tonal" aria-label="Rewind"><Rewind class="size-4 opacity-60" /></button>
					<div class="space-y-1">
						<p class="font-bold">Pink Floyd</p>
						<progress class="progress" value="75" max="100"></progress>
						<div class="flex justify-between items-end">
							<p class="text-xs opacity-60">Another Brick in the Wall</p>
							<p class="text-xs opacity-60">3:16</p>
						</div>
					</div>
					<button type="button" class="btn hover:preset-tonal" aria-label="Fast forward"><FastForward class="size-4 opacity-60" /></button>
				</div>
				<div class="grid grid-cols-[auto_1fr] gap-2 items-center">
					<Volume2 class="size-4 opacity-60" />
					<Slider name="volume" defaultValue={[70]}>
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
