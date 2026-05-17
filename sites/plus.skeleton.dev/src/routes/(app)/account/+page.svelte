<script lang="ts">
	import { supportedOAuthProviders } from '$lib/auth/supported-oauth-providers';
	import LinkAccountButton from '$lib/components/auth/link-account-button.svelte';
	import UnlinkAccountButton from '$lib/components/auth/unlink-account-button.svelte';
	import PageHeader from '$lib/components/layout/page-header.svelte';
	import { getAccounts } from '$lib/remote/auth/get-accounts.remote';

	const accounts = $derived(await getAccounts());
</script>

<div>
	<PageHeader title="Profile">
		{#snippet description()}
			<p class="opacity-60">Adjust settings related to your account.</p>
		{/snippet}
	</PageHeader>

	<div class="container-page">
		<section class="card bg-surface-50-950 border border-surface-200-800 p-4 space-y-4">
			<h2 class="h3">Connected Accounts</h2>
			<p class="opacity-60">Connect your account to one or more oAuth providers.</p>
			<div class="table-wrap">
				<table class="table caption-bottom">
					<thead>
						<tr>
							<th>Provider</th>
							<th class="text-right!"></th>
						</tr>
					</thead>
					<tbody>
						{#each supportedOAuthProviders as provider}
							<tr>
								<td class="font-bold flex items-center gap-2">
									<provider.Icon />
									{provider.name}
								</td>
								<td class="text-right">
									{#if accounts.find((account) => account.providerId === provider.id)}
										<UnlinkAccountButton
											providerId={provider.id}
											class="btn preset-outlined-surface-200-800 ml-2"
											disabled={accounts.length <= 1}
										>
											Disconnect
										</UnlinkAccountButton>
									{:else}
										<LinkAccountButton providerId={provider.id} callbackURL="/account" class="btn preset-filled">Connect</LinkAccountButton>
									{/if}
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</section>
	</div>
</div>
