<script>
	import { XIcon } from '@lucide/svelte';
	import { Avatar, Popover, Portal } from '@skeletonlabs/skeleton-svelte';
</script>

<Popover>
	<div class="flex items-center gap-4">
		<Popover.Anchor>
			<Avatar>
				<Avatar.Image
					src="https://cdn.bsky.app/img/avatar/plain/did:plc:whtgi5zx7ylmdw2i76vq7vq4/bafkreibgoxuqahwcpiah22yfovqszh33x2u4sysmqoyuk5j54aoakt7364@jpeg"
					alt="Skeleton Labs"
				/>
			</Avatar>
		</Popover.Anchor>
		<Popover.Trigger class="btn preset-filled">Show Profile</Popover.Trigger>
	</div>
	<Portal>
		<Popover.Positioner>
			<Popover.Content class="card w-96 p-4 bg-surface-100-900 shadow-xl">
				<div class="space-y-4">
					<header class="grid grid-cols-[auto_1fr_auto] gap-4 items-center">
						<Avatar>
							<Avatar.Image
								src="https://cdn.bsky.app/img/avatar/plain/did:plc:whtgi5zx7ylmdw2i76vq7vq4/bafkreibgoxuqahwcpiah22yfovqszh33x2u4sysmqoyuk5j54aoakt7364@jpeg"
								alt="Skeleton Labs"
							/>
						</Avatar>
						<div>
							<Popover.Title class="text-lg font-bold">Skeleton Labs</Popover.Title>
							<a href="https://bsky.app/profile/skeleton.dev" target="_blank" class="anchor">@skeletonlabs.dev</a>
						</div>
						<Popover.CloseTrigger class="btn-icon hover:preset-tonal self-start">
							<XIcon class="size-4" />
						</Popover.CloseTrigger>
					</header>
					<Popover.Description>Your friendly neighborhood open source maintainers. Creators of Skeleton.</Popover.Description>
					<div class="flex gap-4">
						<p class="text-sm">800 <span class="opacity-60">Followers</span></p>
						<p class="text-sm">120 <span class="opacity-60">Following</span></p>
						<p class="text-sm">100 <span class="opacity-60">Posts</span></p>
					</div>
				</div>
				<Popover.Arrow style="--arrow-size: calc(var(--spacing) * 2); --arrow-background: var(--color-surface-100-900);">
					<Popover.ArrowTip />
				</Popover.Arrow>
			</Popover.Content>
		</Popover.Positioner>
	</Portal>
</Popover>
