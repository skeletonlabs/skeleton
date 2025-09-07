export function defineSkeletonClasses<T extends Record<string, string>>(anatomy: T) {
	const PREFIX = 'skb:';
	const ESCAPE_PREFIX = 'not-skb:';
	return Object.fromEntries(
		Object.entries(anatomy).map(([key, value]) => [
			key,
			value
				.split(' ')
				.filter((cls) => cls.length > 0)
				.map((cls) => {
					if (cls.startsWith(ESCAPE_PREFIX)) {
						return cls.slice(ESCAPE_PREFIX.length);
					}
					return `${PREFIX}${cls}`;
				})
				.join(' ')
		])
	) as T;
}
