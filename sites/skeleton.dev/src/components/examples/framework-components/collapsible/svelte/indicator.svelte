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
		Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam assumenda veritatis modi repellendus enim accusantium inventore
		architecto maxime voluptates quibusdam velit perferendis mollitia, quas, aliquam sapiente adipisci illo nostrum vitae?
	</Collapsible.Content>
</Collapsible>
