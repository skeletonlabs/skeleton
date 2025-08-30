export function defineSkeletonClasses(anatomy: Record<string, string>) {
	const PREFIX = 'skb:';
	const ESCAPE_PREFIX = 'not-skb:';
	return Object.fromEntries(
		Object.entries(anatomy).map(([key, value]) => [
			key,
			value
				.split(' ')
				.map((cls) => {
					if (cls.startsWith(ESCAPE_PREFIX)) {
						return cls.slice(ESCAPE_PREFIX.length);
					}
					return `${PREFIX}${cls}`;
				})
				.join(' ')
		])
	);
}
