<script lang="ts">
	import { MinusIcon, PlusIcon } from "@lucide/svelte";
	import ArrowRightIcon from "@lucide/svelte/icons/arrow-right";
	import CheckIcon from "@lucide/svelte/icons/check";
	import { Accordion } from "@skeletonlabs/skeleton-svelte";

	const freeFeatures = [
		"Studio tools",
		"Save & manage themes",
		"All free blocks",
		"All free templates",
		"Community tools",
		"Fundamental tutorials",
		"Community tools",
	];

	const individualFeatures = [
		"Everything in Free",
		"Expanded theme storage",
		"All premium blocks",
		"All premium templates",
		"Figma UI kit",
		"Advanced tutorials",
		"Priority support",
	];

	const teamFeatures = [
		"Everything in Individual",
		"Up to 25 team seats",
		"Shared theme collections",
		"Admin controls",
		"Dedicated support",
	];

	const compareRows = [
		{ feature: "Studio tools", free: "✓", individual: "✓", team: "✓" },
		{ feature: "Community themes", free: "✓", individual: "✓", team: "✓" },
		{
			feature: "Save & manage themes",
			free: "Max of 5",
			individual: "Unlimited",
			team: "Unlimited",
		},
		{ feature: "Blocks", free: "Limited", individual: "All", team: "All" },
		{ feature: "Templates", free: "2 Free", individual: "All", team: "All" },
		{ feature: "Tutorials", free: "Fundamentals", individual: "All", team: "All" },
		{ feature: "Figma UI Kit", free: "", individual: "✓", team: "✓" },
		{ feature: "Community tools", free: "✓", individual: "✓", team: "✓" },
		{ feature: "Team seats", free: "", individual: "", team: "25" },
		{ feature: "Shared theme collections", free: "", individual: "", team: "✓" },
		{ feature: "Admin controls", free: "", individual: "", team: "✓" },
		{ feature: "Priority support", free: "", individual: "✓", team: "✓" },
		{ feature: "Dedicated support", free: "", individual: "", team: "✓" },
	];

	export const faqs = [
		{
			value: "free-tier",
			question: "What do I get for free?",
			answer: "Full access to all Studio tools, the ability to save and manage up to 5 themes, all free blocks and templates, community tools, and our fundamentals tutorial library. Free forever with a basic Plus account. No credit card required.",
		},
		{
			value: "lifetime-updates",
			question: 'Does "lifetime updates" really mean lifetime?',
			answer: "Yes. A one-time purchase of any Plus tier grants you access to all future updates to the assets and features included in that tier, with no recurring subscription fee. As Skeleton evolves, your Plus license evolves with it.",
		},
		{
			value: "team-seats",
			question: "How do team seats work?",
			answer: "A Plus Team license covers up to 25 individual seats. Each seat holder gets their own Plus Individual benefits plus access to shared team features like theme collections and admin controls. Seats are managed by the account owner through the team admin panel.",
		},
		{
			value: "upgrade",
			question: "Can I upgrade from Individual to Team later?",
			answer: "Yes. You can upgrade your license at any time. When upgrading from Plus Individual to Plus Team, you will only be charged the difference in price. Your existing themes, blocks, and templates remain intact.",
		},
	];
</script>

<!-- Warning -->
<section class="container-page preset-tonal-warning space-y-2! text-center">
	<p>
		<strong>WARNING</strong>: this page is a <u>work in progress</u> and may not represent the final
		tier information.
	</p>
</section>

<!-- Header -->
<section class="container-page border-surface-200-800 space-y-2! border-b text-center lg:py-20!">
	<h1 class="h1 text-balance">Purchase once. Access forever.</h1>
	<p class="opacity-60">
		Access a variety of free and premium features to level up your Skeleton applications.
	</p>
</section>

<!-- Pricing Tiers -->
<section class="border-surface-200-800 border-b">
	<!-- Tier columns -->
	<div
		class="divide-surface-200-800 grid grid-cols-1 divide-y lg:grid-cols-3 lg:divide-x lg:divide-y-0"
	>
		<!-- Basic -->
		<div class="container-cell flex flex-col gap-6 p-10! lg:p-16!">
			<div class="space-y-2">
				<p class="text-xs font-semibold tracking-widest uppercase opacity-60">Basic</p>
				<div class="flex items-end gap-2">
					<p class="text-5xl font-bold">FREE</p>
				</div>
				<p class="text-sm opacity-60">For everyone, forever.</p>
			</div>
			<a href="/auth/sign-in" class="btn btn-lg preset-outlined-surface-200-800 w-full">
				<span>Get Plus</span>
				<ArrowRightIcon />
			</a>
			<ul class="space-y-3">
				{#each freeFeatures as feature}
					<li class="flex items-center gap-3">
						<CheckIcon class="size-4 shrink-0 opacity-60" />
						<span class="text-sm">{feature}</span>
					</li>
				{/each}
			</ul>
		</div>

		<!-- Individual -->
		<div class="preset-tonal-primary container-cell flex flex-col gap-6 p-10! lg:p-16!">
			<!-- <span class="badge preset-filled text-xs uppercase tracking-widest">Recommended</span> -->
			<div class="space-y-2">
				<p class="text-xs font-semibold tracking-widest uppercase opacity-60">Individual</p>
				<div class="flex items-end gap-2">
					<p class="text-5xl font-bold">$XXX</p>
					<div>
						<p>USD</p>
						<p>One-Time</p>
					</div>
				</div>
				<p class="text-sm opacity-60">One-time payment. Lifetime updates for you.</p>
			</div>
			<a href="/#" class="btn btn-lg preset-filled w-full">
				<span>Get Plus</span>
				<ArrowRightIcon />
			</a>
			<ul class="space-y-3">
				{#each individualFeatures as feature}
					<li class="flex items-center gap-3">
						<CheckIcon class="size-4 shrink-0 opacity-60" />
						<span class="text-sm">{feature}</span>
					</li>
				{/each}
			</ul>
		</div>

		<!-- Team -->
		<div class="container-cell flex flex-col gap-6 p-10! lg:p-16!">
			<div class="space-y-2">
				<p class="text-xs font-semibold tracking-widest uppercase opacity-60">Team</p>
				<div class="flex items-end gap-2">
					<p class="text-5xl font-bold">$XXX</p>
					<div>
						<p>USD</p>
						<p>One-Time</p>
					</div>
				</div>
				<p class="text-sm opacity-60">One-time payment. Lifetime updates for your team.</p>
			</div>
			<a href="/#" class="btn btn-lg preset-filled w-full">
				<span>Get Plus</span>
				<ArrowRightIcon />
			</a>
			<ul class="space-y-3">
				{#each teamFeatures as feature}
					<li class="flex items-center gap-3">
						<CheckIcon class="size-4 shrink-0 opacity-60" />
						<span class="text-sm">{feature}</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<!-- Compare Features -->
<section class="container-page border-surface-200-800 border-b">
	<div class="card preset-filled-surface-50-950 border-surface-200-800 table-wrap border">
		<table class="table caption-bottom">
			<thead>
				<tr>
					<th class="text-surface-950-50">&nbsp;</th>
					<th class="text-surface-950-50 text-center">Basic</th>
					<th class="text-surface-950-50 text-center">Individual</th>
					<th class="text-surface-950-50 text-center">Team</th>
				</tr>
			</thead>
			<tbody class="[&>tr]:hover:preset-filled-surface-100-900">
				{#each compareRows as row}
					<tr>
						<td class="p-4 font-bold">{row.feature}</td>
						<td class="p-4 text-center opacity-60">{row.free}</td>
						<td class="p-4 text-center opacity-60">{row.individual}</td>
						<td class="p-4 text-center opacity-60">{row.team}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</section>

<!-- FAQS -->
<section class="container-page mx-auto grid grid-cols-1 gap-4 md:grid-cols-[320px_1fr] md:gap-10">
	<h2 class="h2 text-balance">Frequently Asked Questions.</h2>
	<Accordion collapsible>
		{#each faqs as faq, i}
			<Accordion.Item value={faq.value}>
				<h3>
					<Accordion.ItemTrigger
						class="type-scale-5 flex items-center justify-between font-bold"
					>
						<span class="h5">{faq.question}</span>
						<Accordion.ItemIndicator class="group">
							<MinusIcon class="hidden size-4 group-data-[state=open]:block" />
							<PlusIcon class="block size-4 group-data-[state=open]:hidden" />
						</Accordion.ItemIndicator>
					</Accordion.ItemTrigger>
				</h3>
				<Accordion.ItemContent class="opacity-60">{faq.answer}</Accordion.ItemContent>
			</Accordion.Item>
			{#if i < faqs.length - 1}<hr class="hr" />{/if}
		{/each}
	</Accordion>
</section>
