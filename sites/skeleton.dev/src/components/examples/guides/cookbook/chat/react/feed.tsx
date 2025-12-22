export default function Feed() {
	const messageFeed = [
		{
			id: 0,
			host: true,
			avatar: 48,
			name: 'Jane',
			timestamp: 'Yesterday @ 2:30pm',
			message: 'Some message text.',
			color: 'variant-soft-primary',
		},
		{
			id: 1,
			host: false,
			avatar: 14,
			name: 'Michael',
			timestamp: 'Yesterday @ 2:45pm',
			message: 'Some message text.',
			color: 'variant-soft-primary',
		},
	];

	return (
		<section className="w-full max-h-[400px] overflow-y-auto space-y-4">
			{/* Loop through the messageFeed array */}
			{messageFeed.map((bubble) => {
				// Determine if host/guest role
				const role = bubble.host === true ? 'host' : 'guest';
				// Render the bubble template
				return (
					<pre key={bubble.id} className="pre">
						{JSON.stringify({ role, ...bubble }, null, 2)}
					</pre>
				);
			})}
		</section>
	);
}
