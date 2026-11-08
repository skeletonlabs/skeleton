<script lang="ts">
	import MinusIcon from "@lucide/svelte/icons/minus";
	import PlusIcon from "@lucide/svelte/icons/plus";
	import { Collapsible } from "@skeletonlabs/skeleton-svelte";
</script>

<Collapsible>
	<Collapsible.Content>
		The world dies over and over again, but the skeleton always gets up and walks. Every heart
		has its own skeletons. The bones of the skeleton which support the body can become the bars
		of the cage which imprison the spirit.
	</Collapsible.Content>
	<Collapsible.Trigger class="btn preset-filled">
		<span>Toggle</span>
		<Collapsible.Indicator class="group">
			<MinusIcon class="hidden size-4 group-data-[state=open]:block" />
			<PlusIcon class="block size-4 group-data-[state=open]:hidden" />
		</Collapsible.Indicator>
	</Collapsible.Trigger>
</Collapsible>
