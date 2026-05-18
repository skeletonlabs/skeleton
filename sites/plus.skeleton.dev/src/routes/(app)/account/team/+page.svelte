<script lang="ts">
	import PageHeader from '$lib/components/layout/page-header.svelte';
	import { EllipsisVerticalIcon, PlusIcon } from '@lucide/svelte';
	import { Avatar } from '@skeletonlabs/skeleton-svelte';

	const teamMembers = [
		{
			firstName: 'Ada',
			lastName: 'Lovelace',
			email: 'ada@skeleton.dev',
			image: 'https://i.pravatar.cc/150?img=1',
		},
		{
			firstName: 'Alan',
			lastName: 'Turing',
			email: 'alan@skeleton.dev',
			image: 'https://i.pravatar.cc/150?img=12',
		},
		{
			firstName: 'Grace',
			lastName: 'Hopper',
			email: 'grace@skeleton.dev',
			image: 'https://i.pravatar.cc/150?img=5',
		},
		{
			firstName: 'Linus',
			lastName: 'Torvalds',
			email: 'linus@skeleton.dev',
			image: 'https://i.pravatar.cc/150?img=15',
		},
		{
			firstName: 'Margaret',
			lastName: 'Hamilton',
			email: 'margaret@skeleton.dev',
			image: 'https://i.pravatar.cc/150?img=9',
		},
	];
</script>

<div>
	<PageHeader title="Team">
		{#snippet trail()}
			<button type="button" class="btn lg:btn-lg preset-filled">
				<PlusIcon />
				<span>Invite</span>
			</button>
		{/snippet}
	</PageHeader>

	<div class="container-page">
		<div class="table-wrap">
			<table class="table caption-bottom">
				<thead>
					<tr>
						<th></th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Email</th>
						<th class="text-right!"></th>
					</tr>
				</thead>
				<tbody>
					{#each teamMembers as { firstName, lastName, email, image } (email)}
						<tr>
							<td>
								<Avatar class="size-10">
									<Avatar.Image src={image} alt="{firstName} {lastName}" />
									<Avatar.Fallback>{firstName[0]}{lastName[0]}</Avatar.Fallback>
								</Avatar>
							</td>
							<td class="font-bold">{firstName}</td>
							<td>{lastName}</td>
							<td>{email}</td>
							<td class="text-right">
								<button type="button" class="btn-icon hover:preset-tonal" aria-label="Member actions">
									<EllipsisVerticalIcon />
								</button>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</div>
