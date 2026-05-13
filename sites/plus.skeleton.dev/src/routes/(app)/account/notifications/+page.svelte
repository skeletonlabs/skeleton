<script lang="ts">
	import PageHeader from '$lib/components/layout/page-header.svelte';
	import { Switch } from '@skeletonlabs/skeleton-svelte';

	const settings = $state([
		{
			id: 'product-updates',
			label: 'Product updates',
			description: 'New releases, features, and changelog highlights.',
			checked: true,
		},
		{
			id: 'security-alerts',
			label: 'Security alerts',
			description: 'Sign-in activity and account security notices.',
			checked: true,
		},
		{
			id: 'billing-receipts',
			label: 'Billing & receipts',
			description: 'Invoices, renewals, and payment confirmations.',
			checked: true,
		},
		{
			id: 'community-digest',
			label: 'Community digest',
			description: 'Weekly summary of Discord, GitHub, and showcase activity.',
			checked: false,
		},
		{
			id: 'marketing',
			label: 'Marketing & promotions',
			description: 'Occasional offers, surveys, and partner announcements.',
			checked: false,
		},
	]);

	const recent = [
		{
			type: 'Billing',
			message: 'Receipt for your Plus subscription is ready.',
			date: 'May 12, 2026 · 9:42 AM',
		},
		{
			type: 'Security',
			message: 'New sign-in from Chrome on macOS.',
			date: 'May 10, 2026 · 6:18 PM',
		},
		{
			type: 'Product',
			message: 'Skeleton v4.2 is now available.',
			date: 'May 08, 2026 · 11:05 AM',
		},
		{
			type: 'Team',
			message: 'Grace Hopper accepted your invitation.',
			date: 'May 03, 2026 · 2:27 PM',
		},
		{
			type: 'Community',
			message: 'Your weekly community digest is here.',
			date: 'Apr 28, 2026 · 7:00 AM',
		},
	];
</script>

<div>
	<PageHeader title="Notifications"></PageHeader>

	<div class="container-page space-y-4">
		<!-- Settings -->
		<section class="card bg-surface-50-950 border border-surface-200-800 p-4 space-y-4">
			<header class="space-y-2">
				<h2 class="h3">Preferences</h2>
				<p class="opacity-60">Choose which emails and in-app alerts you want to receive.</p>
			</header>
			<hr class="hr" />
			<div class="grid gap-2">
				{#each settings as setting, i (setting.id)}
					<Switch
						class="flex justify-between gap-4 p-2"
						checked={setting.checked}
						onCheckedChange={(details) => (setting.checked = details.checked)}
					>
						<div class="space-y-1">
							<Switch.Label class="font-bold">{setting.label}</Switch.Label>
							<p class="text-xs opacity-60">{setting.description}</p>
						</div>
						<Switch.Control>
							<Switch.Thumb />
						</Switch.Control>
						<Switch.HiddenInput />
					</Switch>
					{#if i < settings.length - 1}
						<hr class="hr" />
					{/if}
				{/each}
			</div>
		</section>

		<!-- Recent -->
		<section class="card bg-surface-50-950 border border-surface-200-800 p-4 space-y-4">
			<header class="space-y-2">
				<h2 class="h3">Recent</h2>
				<p class="opacity-60">Shows a log of recent activity.</p>
			</header>
			<div class="table-wrap">
				<table class="table caption-bottom">
					<thead>
						<tr>
							<th>Type</th>
							<th>Message</th>
							<th>Date</th>
						</tr>
					</thead>
					<tbody>
						{#each recent as { type, message, date } (date + message)}
							<tr>
								<td><span class="badge preset-tonal">{type}</span></td>
								<td>{message}</td>
								<td class="whitespace-nowrap">{date}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</section>
	</div>
</div>
