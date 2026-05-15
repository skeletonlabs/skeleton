import { Marquee } from '@skeletonlabs/skeleton-react';

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

export default function MarqueeDefault() {
	return (
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
	);
}
