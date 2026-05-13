<script lang="ts">
	import PageHeader from '$lib/components/layout/page-header.svelte';
	import { CopyIcon, EllipsisVerticalIcon, EyeIcon, PlusIcon, RefreshCwIcon } from '@lucide/svelte';

	const apiKeys = [
		{
			name: 'Production',
			prefix: 'sk_live_4f7a',
			created: 'Apr 02, 2026',
			lastUsed: 'May 12, 2026',
		},
		{
			name: 'Staging',
			prefix: 'sk_test_9c2b',
			created: 'Mar 18, 2026',
			lastUsed: 'May 10, 2026',
		},
		{
			name: 'Local',
			prefix: 'sk_test_1e8d',
			created: 'Feb 27, 2026',
			lastUsed: 'Apr 21, 2026',
		},
	];

	const premiumThemes = [
		{ name: 'cerberus', summary: 'Crimson and slate, official Skeleton flagship.' },
		{ name: 'mona', summary: 'Soft pastels with a warm neutral base.' },
		{ name: 'vox', summary: 'High-contrast electric blue, designed for dashboards.' },
		{ name: 'pine', summary: 'Earth-tone palette inspired by Pacific Northwest forests.' },
	];

	const recentActivity = [
		{ endpoint: 'GET /v1/themes', status: 200, source: 'CLI', date: 'May 12, 2026 · 9:42 AM' },
		{ endpoint: 'POST /v1/themes/cerberus/install', status: 200, source: 'CLI', date: 'May 12, 2026 · 9:41 AM' },
		{ endpoint: 'GET /v1/account', status: 200, source: 'API', date: 'May 11, 2026 · 6:18 PM' },
		{ endpoint: 'GET /v1/themes/mona', status: 404, source: 'API', date: 'May 09, 2026 · 11:05 AM' },
	];
</script>

<div>
	<PageHeader title="API & CLI"></PageHeader>

	<div class="container-page space-y-4">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
			<!-- REST API -->
			<section class="card bg-surface-50-950 border border-surface-200-800 p-4 space-y-4">
				<header class="space-y-2">
					<h2 class="h3">REST API</h2>
					<p class="opacity-60">Authenticate requests with a Bearer token using one of your API keys.</p>
				</header>
				<div class="space-y-2">
					<p class="text-xs font-bold opacity-60">Base URL</p>
					<pre class="pre">https://api.skeleton.dev/v1</pre>
				</div>
				<div class="space-y-2">
					<p class="text-xs font-bold opacity-60">Example request</p>
					<pre class="pre">curl https://api.skeleton.dev/v1/themes \
  -H "Authorization: Bearer $SKELETON_API_KEY"</pre>
				</div>
			</section>

			<!-- CLI -->
			<section class="card bg-surface-50-950 border border-surface-200-800 p-4 space-y-4">
				<header class="space-y-2">
					<h2 class="h3">Skeleton CLI</h2>
					<p class="opacity-60">Install and manage premium themes from the command line.</p>
				</header>
				<div class="space-y-2">
					<p class="text-xs font-bold opacity-60">Install</p>
					<pre class="pre">pnpm add -D @skeletonlabs/cli</pre>
				</div>
				<div class="space-y-2">
					<p class="text-xs font-bold opacity-60">Authenticate</p>
					<pre class="pre">pnpm skeleton login</pre>
				</div>
				<div class="space-y-2">
					<p class="text-xs font-bold opacity-60">Add a theme</p>
					<pre class="pre">pnpm skeleton --add-theme=cerberus</pre>
				</div>
			</section>
		</div>

		<!-- API Keys -->
		<section class="card bg-surface-50-950 border border-surface-200-800 p-4 space-y-4">
			<header class="flex justify-between items-center gap-4">
				<div class="space-y-1">
					<h2 class="h3">API Keys</h2>
					<p class="opacity-60">Keys are shown only once at creation. Rotate any key you suspect has been exposed.</p>
				</div>
				<button type="button" class="btn preset-outlined-surface-200-800">
					<PlusIcon />
					<span>Key</span>
				</button>
			</header>
			<div class="table-wrap">
				<table class="table caption-bottom">
					<thead>
						<tr>
							<th>Name</th>
							<th>Key</th>
							<th>Created</th>
							<th>Last used</th>
							<th class="text-right!"></th>
						</tr>
					</thead>
					<tbody>
						{#each apiKeys as { name, prefix, created, lastUsed } (prefix)}
							<tr>
								<td class="font-bold">{name}</td>
								<td>
									<div class="flex items-center gap-2">
										<code class="code">{prefix}••••••••••••</code>
									</div>
								</td>
								<td>{created}</td>
								<td>{lastUsed}</td>
								<td class="flex justify-end items-center gap-2">
									<button type="button" class="btn-icon hover:preset-tonal" aria-label="Copy key">
										<CopyIcon class="size-elem-sm" />
									</button>
									<button type="button" class="btn-icon hover:preset-tonal" aria-label="Key actions">
										<EllipsisVerticalIcon />
									</button>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</section>
	</div>
</div>
