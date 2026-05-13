<script lang="ts">
	import { resolve } from '$app/paths';
	import PageHeader from '$lib/components/layout/page-header.svelte';
	import { ArrowDownIcon } from '@lucide/svelte';
	import VisaIcon from 'virtual:icons/simple-icons/visa';

	const currentPlan = {
		tier: 'Individual',
		badge: 'PLUS',
		summary: 'Lifetime access · purchased Jan 14, 2026 · $XX USD',
	};

	const paymentMethod = {
		brand: 'Visa',
		Icon: VisaIcon,
		last4: '4242',
		expiry: '09/29',
	};

	const purchases = [
		{ date: 'Jan 14, 2026', description: 'Plus - Individual', amount: '$XX.XX', status: 'PAID' },
		{ date: 'Aug 02, 2025', description: 'Theme Pack - Cosmic', amount: '$XX.XX', status: 'PAID' },
		{ date: 'Mar 21, 2025', description: 'UI Kit Add-on', amount: '$XX.XX', status: 'PAID' },
		{ date: 'Nov 10, 2024', description: 'Tempalte - Portfolio', amount: '$XX.XX', status: 'PAID' },
	];
</script>

<div>
	<PageHeader title="Billing"></PageHeader>

	<div class="container-page space-y-4">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
			<!-- Current Plan -->
			<section class="card bg-surface-50-950 border border-surface-200-800 p-4 space-y-4">
				<p class="text-xs uppercase opacity-60">Current plan</p>
				<div class="flex items-center gap-2 text-sm">
					<h2 class="h3">{currentPlan.tier}</h2>
					<span class="badge preset-filled-primary-500">{currentPlan.badge}</span>
				</div>
				<p class="opacity-60">{currentPlan.summary}</p>
				<button type="button" class="btn preset-filled">Upgrade to Team</button>
			</section>

			<!-- Payment Method -->
			<section class="card bg-surface-50-950 border border-surface-200-800 p-4 space-y-4">
				<h2 class="h3">Payment method</h2>
				<div class="flex items-center justify-between gap-4">
					<div class="flex items-center gap-3">
						<paymentMethod.Icon class="size-10" aria-label={paymentMethod.brand} />
						<div>
							<p class="font-mono">•••• •••• •••• {paymentMethod.last4}</p>
							<p class="text-xs opacity-60">Exp {paymentMethod.expiry}</p>
						</div>
					</div>
					<button type="button" class="btn preset-outlined-surface-200-800">Update</button>
				</div>
				<hr class="hr" />
				<div class="flex justify-between items-center gap-4">
					<div class="space-y-1">
						<p class="text-xs font-bold">Tax / VAT</p>
						<p class="opacity-60">No tax info on file</p>
					</div>
					<a href={resolve('/account/billing')} class="btn preset-outlined-surface-200-800">Add</a>
				</div>
			</section>
		</div>

		<!-- Purchases -->
		<section class="card bg-surface-50-950 border border-surface-200-800 p-4 space-y-4">
			<div class="flex items-center justify-between gap-4">
				<h2 class="h3">Purchases</h2>
				<button type="button" class="btn preset-outlined-surface-200-800">Download all</button>
			</div>
			<div class="table-wrap">
				<table class="table caption-bottom">
					<thead>
						<tr>
							<th>Date</th>
							<th>Description</th>
							<th>Amount</th>
							<th>Status</th>
							<th class="text-right!"></th>
						</tr>
					</thead>
					<tbody>
						{#each purchases as { date, description, amount, status } (date + description)}
							<tr>
								<td>{date}</td>
								<td>{description}</td>
								<td class="font-bold">{amount}</td>
								<td><span class="text-xs opacity-60">{status}</span></td>
								<td class="text-right">
									<button type="button" class="btn preset-outlined-surface-200-800">
										<ArrowDownIcon class="size-elem-sm" />
										<span>Receipt</span>
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
