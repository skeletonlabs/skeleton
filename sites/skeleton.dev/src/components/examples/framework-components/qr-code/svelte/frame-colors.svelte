<script lang="ts">
	import { QrCode } from '@skeletonlabs/skeleton-svelte';
</script>

<QrCode value="https://skeleton.dev">
	<QrCode.Frame class="size-full max-size-36 bg-brand-dark">
		<QrCode.Pattern class="fill-brand-contrast-dark" />
	</QrCode.Frame>
	<QrCode.Overlay />
</QrCode>
