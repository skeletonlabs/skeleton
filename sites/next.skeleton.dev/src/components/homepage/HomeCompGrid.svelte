<script lang="ts">
	import { Avatar, Switch, ProgressRing } from '@skeletonlabs/skeleton-svelte';

	// Classes
	const cardClasses = 'card preset-outlined-surface-200-800 bg-surface-50-950 p-5 space-y-5';

	// State
	let notifications = $state({
		disturb: true,
		global: false,
		personal: false,
		priority: false,
		news: false
	});

	// Seed Data
	const avatar =
		'https://images.unsplash.com/photo-1620122303020-87ec826cf70d?q=80&w=256&h=256&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
	const tableData = [
		{ position: '0', name: 'Iron', symbol: 'Fe', atomic_no: '26' },
		{ position: '1', name: 'Rhodium', symbol: 'Rh', atomic_no: '45' },
		{ position: '2', name: 'Iodine', symbol: 'I', atomic_no: '53' },
		{ position: '3', name: 'Radon', symbol: 'Rn', atomic_no: '86' },
		{ position: '4', name: 'Technetium', symbol: 'Tc', atomic_no: '43' }
	];
</script>

<div class="grid grid-cols-4 gap-4">
	<!-- 1 -->
	<div class={`${cardClasses}`}>
		<header>
			<h3 class="h3">Create Account.</h3>
			<p class="opacity-60">Complete the form below to get started.</p>
		</header>
		<nav class="grid grid-cols-2 gap-5">
			<button class="btn preset-outlined-surface-200-800 hover:preset-tonal">GitHub</button>
			<button class="btn preset-outlined-surface-200-800 hover:preset-tonal">Google</button>
		</nav>
		<hr class="hr" />
		<article class="grid grid-cols-1 gap-5">
			<label class="label">
				<span class="label-text">Email</span>
				<input type="email" class="input" placeholder="me@example.com" />
			</label>
			<label class="label">
				<span class="label-text">Password</span>
				<input type="password" class="input" placeholder="me@example.com" />
			</label>
		</article>
		<hr class="hr" />
		<button class="w-full btn preset-filled-primary-500">Create Account</button>
	</div>
	<!-- 2 -->
	<div class={`${cardClasses}`}>
		<header class="space-y-1">
			<h2 class="h4">Notifications.</h2>
			<p class="opacity-60">Toggle each available notification.</p>
		</header>
		<hr class="hr" />
		<section class="w-full space-y-4">
			<div class="flex justify-between items-center gap-4">
				<p>Enable do not distrurb.</p>
				<Switch name="disturb" bind:checked={notifications.disturb}></Switch>
			</div>
			<hr class="hr" />
			<div class="flex justify-between items-center gap-4">
				<p>Enable global notifications.</p>
				<Switch name="notifications" bind:checked={notifications.global} disabled={!notifications.disturb}></Switch>
			</div>
			<hr class="hr" />
			<div class="flex justify-between items-center gap-4">
				<p>Enable personal notifications.</p>
				<Switch name="disabled" bind:checked={notifications.personal} disabled={!notifications.disturb}></Switch>
			</div>
			<hr class="hr" />
			<div class="flex justify-between items-center gap-4">
				<p>Enable priority notifications.</p>
				<Switch name="disturb" bind:checked={notifications.priority} disabled={!notifications.disturb}></Switch>
			</div>
			<hr class="hr" />
			<div class="flex justify-between items-center gap-4">
				<p>Enable news alerts.</p>
				<Switch name="notifications" bind:checked={notifications.news} disabled={!notifications.disturb}></Switch>
			</div>
		</section>
	</div>
	<!-- 3 -->
	<div class={`${cardClasses} row-span-2`}>
		<div class="space-y-4">
			<header>
				<h2 class="h5">Team</h2>
				<p class="opacity-60">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam impedit.</p>
			</header>
			<hr class="hr" />
			<input type="search" class="input" placeholder="Search Members..." />
			{#each [0, 0, 0] as user}
				<div class="card preset-outlined-surface-200-800 grid grid-cols-[auto_1fr] items-center gap-4 p-4">
					<Avatar src={avatar} name="" size="size-14" imageClasses="grayscale" />
					<div>
						<p class="font-bold">Janet Rosenbell</p>
						<p class="opacity-60 type-scale-1">jrosenbell@example.com</p>
					</div>
				</div>
			{/each}
			<p class="text-xs opacity-60 text-center">Now viewing <strong>3</strong> members of <strong>100</strong>.</p>
		</div>
	</div>
	<!-- 4 -->
	<div class={`${cardClasses} row-span-2`}>4</div>
	<!-- 5 -->
	<div class={`${cardClasses}`}>
		<div class="flex justify-between items-center gap-4">
			<div>
				<h2 class="h6">Success</h2>
				<p class="text-xs opacity-60">Task was completed.</p>
			</div>
			<div class="flex gap-1">
				<button type="button" class="btn preset-outlined-surface-200-800 hover:preset-tonal">Dismiss</button>
			</div>
		</div>
	</div>
	<!-- 6 -->
	<div class={`${cardClasses} row-span-2`}>
		<header>
			<h2 class="h5">Statistic Overview</h2>
			<p class="opacity-60">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam impedit.</p>
		</header>
		<hr class="hr" />
		<div class="card grid grid-cols-3 gap-5">
			<div class="flex flex-col items-start">
				<h2 class="text-3xl font-bold">64k+</h2>
				<p class="type-scale-1 opacity-60">Downloads</p>
			</div>
			<div class="flex flex-col items-start">
				<h2 class="text-3xl font-bold">93k+</h2>
				<p class="type-scale-1 opacity-60">Views</p>
			</div>
			<div class="flex flex-col items-start">
				<h2 class="text-3xl font-bold">15k+</h2>
				<p class="type-scale-1 opacity-60">Members</p>
			</div>
		</div>
	</div>
	<!-- 7 -->
	<div class={`${cardClasses} row-span-2 row-start-3`}>
		<header>
			<h2 class="h3">Fuel Level</h2>
			<p class="opacity-60">Lorem, ipsum dolor sit amet adipisicing.</p>
		</header>
		<div class="flex justify-center items-center">
			<ProgressRing value={32} max={100} showLabel size="size-48" />
		</div>
	</div>
	<!-- 8 -->
	<div class={`${cardClasses} col-span-2 row-span-2 col-start-3 row-start-3`}>
		<header class="flex justify-between">
			<div>
				<h2 class="h3">Revenue</h2>
				<p class="text-xs opacity-60">April 1-13</p>
			</div>
			<button type="button" class="btn-icon rounded-full preset-tonal -rotate-45">&rarr;</button>
		</header>
		<hr class="hr" />
		<div class="space-y-4">
			<div class="flex justify-between items-center">
				<span class="text-4xl">$2,900<span class="opacity-60">.00</span></span>
				<span class="badge preset-tonal">+20%</span>
			</div>
			<progress class="progress" value="66" max="100"></progress>
		</div>
		<div class="space-y-4">
			<div class="flex justify-between items-center">
				<span class="text-4xl">$1,400<span class="opacity-60">.00</span></span>
				<span class="badge preset-tonal">-5%</span>
			</div>
			<progress class="progress" value="28" max="100"></progress>
		</div>
	</div>
	<!-- 9 -->
	<div class={`${cardClasses} row-span-2 col-start-2 row-start-4`}>9</div>
	<!-- 10 -->
	<div class={`${cardClasses} row-span-2 row-start-5`}>10</div>
	<!-- 11 -->
	<div class={`${cardClasses} col-span-2 row-span-2 col-start-3 row-start-5`}>
		<div class="table-wrap">
			<table class="table">
				<thead>
					<tr>
						<th>Position</th>
						<th>Symbol</th>
						<th>Name</th>
						<th class="!text-right">Weight</th>
					</tr>
				</thead>
				<tbody class="hover:[&>tr]:preset-tonal-primary">
					{#each tableData as row}
						<tr>
							<td>{row.position}</td>
							<td>{row.symbol}</td>
							<td>{row.name}</td>
							<td class="text-right">{row.atomic_no}</td>
						</tr>
					{/each}
				</tbody>
				<tfoot>
					<tr>
						<td colspan="3">Total</td>
						<td class="text-right">{tableData.length} Elements</td>
					</tr>
				</tfoot>
			</table>
		</div>
	</div>
	<!-- 12 -->
	<div class={`${cardClasses} row-span-2 col-start-2 row-start-6`}>12</div>
	<!-- 13 -->
	<div class={`${cardClasses} row-span-2 row-start-7`}>13</div>
	<!-- 14 -->
	<div class={`${cardClasses} col-start-2 row-start-8`}>14</div>
	<!-- 15 -->
	<div class={`${cardClasses} col-span-2 row-span-2 col-start-3 row-start-7`}>15</div>
</div>
