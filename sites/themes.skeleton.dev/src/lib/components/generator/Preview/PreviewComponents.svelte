<script lang="ts">
	// Components (Skeleton)
	import { AppBar, Avatar, Switch, Tabs } from '@skeletonlabs/skeleton-svelte';
	// Icons
	import IconSearch from 'lucide-svelte/icons/search';
	import IconSkull from 'lucide-svelte/icons/skull';
</script>

<div class="space-y-10">
	<!-- Header -->
	<header class="grid grid-cols-[1fr_auto] items-center gap-4">
		<div class="space-y-5">
			<h1 class="h1 text-balance">Big Headline Here.</h1>
			<p class="type-scale-5 opacity-60">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem recusandae neque est, aut nisi dolore quibusdam optio ex dicta
				ipsam, tempore eum, pariatur non consequatur consectetur veritatis.
			</p>
			<nav class="flex gap-4">
				<button type="button" class="btn btn-lg preset-filled-primary-500">Call to Action</button>
				<button type="button" class="btn btn-lg preset-tonal">Secondary Action</button>
			</nav>
		</div>
		<div>
			<!-- https://picsum.photos/ -->
			<img class="grayscale rounded-container overflow-hidden" src="https://picsum.photos/seed/picsum/320/320" alt="banner" />
		</div>
	</header>
	<hr class="hr" />
	<!-- App Bar -->
	<AppBar toolbarClasses="items-center" classes="shadow">
		{#snippet lead()}
			<IconSkull size={32} />
		{/snippet}
		{#snippet trail()}
			<nav class="flex items-center">
				<button type="button" class="btn hover:preset-tonal">Services</button>
				<button type="button" class="btn hover:preset-tonal">Prices</button>
				<button type="button" class="btn hover:preset-tonal">Blog</button>
				<button type="button" class="btn hover:preset-tonal">About</button>
			</nav>
			<button type="button" class="btn preset-filled-primary-500">Login</button>
		{/snippet}
	</AppBar>
	<!-- Masonary -->
	<div class="grid grid-cols-3 gap-10">
		<!-- Column 1 -->
		<div class="space-y-10">
			<!-- Tabs -->
			<Tabs value="planes" fluid>
				{#snippet list()}
					<Tabs.Control value="planes">Planes</Tabs.Control>
					<Tabs.Control value="trains">Trains</Tabs.Control>
					<Tabs.Control value="automobiles">Automobiles</Tabs.Control>
				{/snippet}
			</Tabs>
			<!-- Avatars -->
			<div class="grid grid-cols-6 gap-4">
				<Avatar src="https://avatar.iran.liara.run/public/34" name="" size="size-full" imageClasses="grayscale" />
				<Avatar src="https://avatar.iran.liara.run/public/53" name="" size="size-full" imageClasses="grayscale" />
				<Avatar name="Skeleton" size="size-full" background="preset-filled-primary-500" />
				<Avatar name="Kevin" size="size-full" background="preset-tonal-primary" />
				<Avatar name="Kevin" size="size-full" background="preset-filled-primary-500"><IconSkull size={24} /></Avatar>
				<Avatar name="Kevin" size="size-full" background="preset-tonal-primary"><IconSkull size={24} /></Avatar>
			</div>
			<!-- Checkboxes -->
			<div class="card border border-surface-200-800 grid grid-cols-[auto_1fr] items-center gap-4 p-4">
				<form class="space-y-2">
					<label class="flex items-center space-x-2">
						<input class="checkbox" type="checkbox" />
						<p>Respond to comment <a href="/themes/create" class="anchor">#354</a></p>
					</label>
					<label class="flex items-center space-x-2">
						<input class="checkbox" type="checkbox" />
						<p>Invite a <a href="/themes/create" class="anchor">Michael</a> to the platform</p>
					</label>
					<label class="flex items-center space-x-2">
						<input class="checkbox" type="checkbox" />
						<p>Create and <a href="/themes/create" class="anchor">file</a> a TPS report.</p>
					</label>
					<label class="flex items-center space-x-2">
						<input class="checkbox" type="checkbox" checked />
						<p class="line-through">Close Q4 financial report.</p>
					</label>
					<label class="flex items-center space-x-2">
						<input class="checkbox" type="checkbox" checked />
						<p class="line-through">Review all active invoices.</p>
					</label>
				</form>
			</div>
			<!-- Blockquote -->
			<blockquote class="blockquote border-primary-400-600">
				First, have a definite, clear, practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends: wisdom,
				money, materials, and methods. Third, adjust all your means to that end.
			</blockquote>
		</div>
		<!-- Column 2 -->
		<form class="card preset-filled-surface-100-900 border border-surface-200-800 p-5 space-y-5">
			<fieldset class="space-y-2">
				<h2 class="h2">Signup</h2>
				<p class="opacity-60">Get started for free.</p>
			</fieldset>
			<fieldset class="space-y-2">
				<label class="label">
					<span class="label-text">Full Name</span>
					<input class="input" type="text" placeholder="Enter your name" />
				</label>
				<label class="label">
					<span class="label-text">Email</span>
					<input class="input" type="text" placeholder="email@example.com" />
				</label>
				<label class="label">
					<span class="label-text">Password</span>
					<input class="input" type="password" value="skeleton" />
				</label>
			</fieldset>
			<fieldset class="space-y-5">
				<button type="button" class="btn preset-filled-primary-500 w-full">Create Account</button>
				<hr class="hr" />
				<button type="button" class="btn preset-outlined-surface-200-800 w-full">Continue with Github</button>
			</fieldset>
		</form>
		<!-- Column 3 -->
		<div class="space-y-10">
			<!-- Badges -->
			<div class="flex justify-between items-center gap-3">
				<span class="badge preset-filled">Badge</span>
				<span class="badge preset-filled-primary-500">Badge</span>
				<span class="badge preset-tonal-primary">Badge</span>
				<span class="badge preset-outlined-primary-500">Badge</span>
				<span class="badge">Badge</span>
			</div>
			<!-- Buttons -->
			<div class="flex justify-between items-center gap-4">
				<Switch name="example" checked={true} />
				<button type="button" class="btn-icon preset-filled"><IconSkull /></button>
				<button type="button" class="btn-icon preset-filled-primary-500"><IconSkull /></button>
				<button type="button" class="btn-icon preset-tonal"><IconSkull /></button>
				<button type="button" class="btn-icon preset-tonal-primary"><IconSkull /></button>
				<button type="button" class="btn-icon preset-outlined-surface-200-800"><IconSkull /></button>
			</div>
			<!-- Search -->
			<div class="input-group grid-cols-[auto_1fr]">
				<div class="input-group-cell">
					<IconSearch size={16} />
				</div>
				<input type="search" placeholder="Search..." />
			</div>
			<!-- Alert -->
			<div class="card preset-tonal-primary grid grid-cols-1 items-center gap-4 p-4 lg:grid-cols-[1fr_auto]">
				<div>
					<p class="font-bold">Success</p>
					<p>Task has been completed.</p>
				</div>
				<div class="flex gap-1">
					<button type="button" class="btn hover:preset-tonal">Dismiss</button>
				</div>
			</div>
			<!-- Cards -->
			<div class="space-y-2">
				<div class="card preset-filled-surface-100-900 border border-surface-200-800 grid grid-cols-[auto_1fr] items-center gap-4 p-4">
					<Avatar src="https://avatar.iran.liara.run/public/34" name="" size="size-14" imageClasses="grayscale" />
					<div>
						<p class="font-bold">Gregory Smith</p>
						<a href="mailto:gregory.smith@example.com" class="anchor type-scale-1">gregory.smith@example.com</a>
					</div>
				</div>
				<div class="card preset-filled-surface-100-900 border border-surface-200-800 grid grid-cols-[auto_1fr] items-center gap-4 p-4">
					<Avatar src="https://avatar.iran.liara.run/public/53" name="" size="size-14" imageClasses="grayscale" />
					<div>
						<p class="font-bold">Stephanie Collins</p>
						<a href="mailto:stephanie.collins@example.com" class="anchor type-scale-1">stephanie.collins@example.com</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
