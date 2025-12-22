export default function Bubbles() {
	const messageFeed = [
		{
			id: 0,
			host: true,
			avatar: 48,
			name: 'Jane',
			timestamp: 'Yesterday @ 2:30pm',
			message: 'Some message text.',
			color: 'preset-tonal-primary',
		},
		{
			id: 1,
			host: false,
			avatar: 14,
			name: 'Michael',
			timestamp: 'Yesterday @ 2:45pm',
			message: 'Some message text.',
			color: 'preset-tonal-primary',
		},
	];

	return (
		<section className="w-full max-h-[400px] overflow-y-auto space-y-4">
			{/* Loop through the messageFeed array */}
			{messageFeed.map((bubble) => {
				return bubble.host ? (
					// Host Bubble
					<div key={bubble.id} className="grid grid-cols-[auto_1fr] gap-2">
						{/* <Avatar src={`https://i.pravatar.cc/?img=${bubble.avatar}`} name={bubble.name} size="size-12" /> */}
						<div className="card p-4 preset-tonal rounded-tl-none space-y-2">
							<header className="flex justify-between items-center">
								<p className="font-bold">{bubble.name}</p>
								<small className="opacity-50">{bubble.timestamp}</small>
							</header>
							<p>{bubble.message}</p>
						</div>
					</div>
				) : (
					// Guest Bubble
					<div key={bubble.id} className="grid grid-cols-[1fr_auto] gap-2">
						<div className={`card p-4 rounded-tr-none space-y-2 ${bubble.color}`}>
							<header className="flex justify-between items-center">
								<p className="font-bold">{bubble.name}</p>
								<small className="opacity-50">{bubble.timestamp}</small>
							</header>
							<p>{bubble.message}</p>
						</div>
						{/* <Avatar src={`https://i.pravatar.cc/?img=${bubble.avatar}`} name={bubble.name} size="size-12" /> */}
					</div>
				);
			})}
		</section>
	);
}
