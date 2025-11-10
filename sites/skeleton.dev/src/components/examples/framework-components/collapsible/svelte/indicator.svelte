<script lang="ts">
	import { MinusIcon, PlusIcon } from '@lucide/svelte';
	import { Collapsible } from '@skeletonlabs/skeleton-svelte';
</script>

<Collapsible>
	<Collapsible.Trigger class="btn preset-filled">
		<span>Toggle</span>
		<Collapsible.Indicator class="group">
			<MinusIcon class="size-4 group-data-[state=open]:block hidden" />
			<PlusIcon class="size-4 group-data-[state=open]:hidden block" />
		</Collapsible.Indicator>
	</Collapsible.Trigger>
	<Collapsible.Content>
		The world dies over and over again, but the skeleton always gets up and walks. Every heart has its own skeletons. The bones of the
		skeleton which support the body can become the bars of the cage which imprison the spirit.
	</Collapsible.Content>
</Collapsible>
