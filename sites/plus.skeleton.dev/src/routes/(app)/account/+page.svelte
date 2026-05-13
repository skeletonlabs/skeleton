<script lang="ts">
	const oauthAccounts: { provider: string; username: string; email: string; connected: boolean }[] = [
		{ provider: 'Github', username: '@placeholder', email: 'placeholder@emailcom', connected: true },
		{ provider: 'Discord', username: '@placeholder', email: 'placeholder@emailcom', connected: false },
	];
</script>

<div>
	<!-- TODO: convert this to a reusable <PageHeader> component -->
	<header class="container-page border-b border-surface-200-800 space-y-2!">
		<p class="text-sm opacity-60">Account</p>
		<h1 class="h1">Profile</h1>
	</header>

	<div class="container-page">
		<!-- oAuth Accounts -->
		<section class="card bg-surface-50-950 border border-surface-200-800 p-4 space-y-4">
			<h2 class="h3">oAuth Accounts</h2>
			<p class="opacity-60">Connect your account to one or more oAuth providers.</p>
			<div class="table-wrap">
				<table class="table caption-bottom">
					<thead>
						<tr>
							<th>Provider</th>
							<th>Username</th>
							<th>Email</th>
							<th class="text-right!"></th>
						</tr>
					</thead>
					<tbody>
						{#each oauthAccounts as { provider, username, email, connected } (provider)}
							<tr>
								<td class="font-bold">{provider}</td>
								<td>{username}</td>
								<td>{email}</td>
								<td class="text-right">
									{#if connected}
										<button type="button" class="btn preset-outlined-surface-200-800">Disconnect</button>
									{:else}
										<button type="button" class="btn preset-filled">Connect</button>
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
