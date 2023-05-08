declare namespace svelteHTML {
	interface HTMLAttributes<T> {
		'on:copyComplete'?: (event: any) => any;
	}
}
