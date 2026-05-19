'use client';

import { Marquee } from '@skeletonlabs/skeleton-react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/components/marquee/')({
	component: Page,
});

const items = [
	{ emoji: '🐉', label: 'Dragon' },
	{ emoji: '🧙', label: 'Wizard' },
	{ emoji: '⚔️', label: 'Knight' },
	{ emoji: '💀', label: 'Skeleton' },
	{ emoji: '🏰', label: 'Castle' },
	{ emoji: '🧝', label: 'Elf' },
	{ emoji: '🗡️', label: 'Rogue' },
	{ emoji: '🛡️', label: 'Paladin' },
];

function Page() {
	return (
		<div className="space-y-10">
			<header>
				<h1 className="h1">Marquee</h1>
			</header>

			<section className="space-y-4">
				<h2 className="h2">Default</h2>
				<Marquee autoFill pauseOnInteraction>
					<Marquee.Edge side="start" />
					<Marquee.Viewport>
						<Marquee.Context>
							{(marquee) =>
								Array.from({ length: marquee.contentCount }).map((_, index) => (
									<Marquee.Content key={index} index={index}>
										{items.map((item) => (
											<div key={item.label} className="card bg-surface-100-900 flex items-center gap-3 px-6 py-4 whitespace-nowrap">
												<span className="text-3xl">{item.emoji}</span>
												<span className="font-medium">{item.label}</span>
											</div>
										))}
									</Marquee.Content>
								))
							}
						</Marquee.Context>
					</Marquee.Viewport>
					<Marquee.Edge side="end" />
				</Marquee>
			</section>
		</div>
	);
}
