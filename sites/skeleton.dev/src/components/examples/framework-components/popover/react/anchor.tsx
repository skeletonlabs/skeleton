import { Avatar, Popover, Portal } from '@skeletonlabs/skeleton-react';
import { XIcon } from 'lucide-react';

export default function Anchor() {
	return (
		<Popover>
			<div className="flex items-center gap-4">
				<Popover.Anchor>
					<Avatar>
						<Avatar.Image
							src="https://cdn.bsky.app/img/avatar/plain/did:plc:whtgi5zx7ylmdw2i76vq7vq4/bafkreibgoxuqahwcpiah22yfovqszh33x2u4sysmqoyuk5j54aoakt7364@jpeg"
							alt="Skeleton Labs"
						/>
					</Avatar>
				</Popover.Anchor>
				<Popover.Trigger className="btn preset-filled">Show Profile</Popover.Trigger>
			</div>
			<Portal>
				<Popover.Positioner>
					<Popover.Content className="card w-96 p-4 bg-surface-100-900 shadow-xl">
						<div className="space-y-4">
							<header className="grid grid-cols-[auto_1fr_auto] gap-4 items-center">
								<Avatar>
									<Avatar.Image
										src="https://cdn.bsky.app/img/avatar/plain/did:plc:whtgi5zx7ylmdw2i76vq7vq4/bafkreibgoxuqahwcpiah22yfovqszh33x2u4sysmqoyuk5j54aoakt7364@jpeg"
										alt="Skeleton Labs"
									/>
								</Avatar>
								<div>
									<Popover.Title className="text-lg font-bold">Skeleton Labs</Popover.Title>
									<a href="https://bsky.app/profile/skeleton.dev" target="_blank" rel="noopener noreferrer" className="anchor">
										@skeletonlabs.dev
									</a>
								</div>
								<Popover.CloseTrigger className="btn-icon hover:preset-tonal self-start">
									<XIcon className="size-4" />
								</Popover.CloseTrigger>
							</header>
							<Popover.Description>Your friendly neighborhood open source maintainers. Creators of Skeleton.</Popover.Description>
							<div className="flex gap-4">
								<p className="text-sm">
									800 <span className="opacity-60">Followers</span>
								</p>
								<p className="text-sm">
									120 <span className="opacity-60">Following</span>
								</p>
								<p className="text-sm">
									100 <span className="opacity-60">Posts</span>
								</p>
							</div>
						</div>
						<Popover.Arrow className="[--arrow-size:--spacing(2)] [--arrow-background:var(--color-surface-100-900)]">
							<Popover.ArrowTip />
						</Popover.Arrow>
					</Popover.Content>
				</Popover.Positioner>
			</Portal>
		</Popover>
	);
}
