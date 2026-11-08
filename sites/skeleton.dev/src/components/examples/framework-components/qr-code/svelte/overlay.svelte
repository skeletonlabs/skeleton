<script lang="ts">
	import favicon from "@/assets/favicon.png";
	import { QrCode } from "@skeletonlabs/skeleton-svelte";
</script>

<QrCode value="https://skeleton.dev">
	<QrCode.Frame class="max-size-36">
		<QrCode.Pattern />
	</QrCode.Frame>
	<QrCode.Overlay class="rounded-full bg-white p-1">
		<img src={favicon.src} alt="Skeleton Logo" class="size-12" />
	</QrCode.Overlay>
</QrCode>
