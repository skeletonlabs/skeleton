declare namespace svelteHTML {
	interface HTMLAttributes<T> {
		'on:copyComplete'?: () => void;
	}
}
