<script lang="ts" module>
	import type { SignInSchema } from '$lib/schemas/auth/sign-in-schema';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import type { InferInput } from 'valibot';

	export interface Props extends InferInput<typeof SignInSchema>, HTMLButtonAttributes {}
</script>

<script lang="ts">
	import { signIn } from '$lib/remote/auth/sign-in.remote';

	const { children, providerId, ...attributes }: Props = $props();
</script>

<form {...signIn.for(providerId)}>
	<input {...signIn.fields.providerId.as('hidden', providerId)} />
	<button {...attributes}>{@render children?.()}</button>
</form>
