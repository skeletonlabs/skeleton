<script lang="ts">
	import { ClubIcon, DiamondIcon, HeartIcon, SpadeIcon } from '@lucide/svelte';
	import { Accordion } from '@skeletonlabs/skeleton-svelte';
</script>

<Accordion>
	<Accordion.Item value="club">
		<h3>
			<Accordion.ItemTrigger class="grid grid-cols-[1fr_auto]">
				<span>Club</span>
				<ClubIcon />
			</Accordion.ItemTrigger>
		</h3>
		<Accordion.ItemContent>Content for Item 1</Accordion.ItemContent>
	</Accordion.Item>
	<hr class="hr" />
	<Accordion.Item value="diamond">
		<h3>
			<Accordion.ItemTrigger class="grid grid-cols-[1fr_auto]">
				<span>Diamond</span>
				<DiamondIcon />
			</Accordion.ItemTrigger>
		</h3>
		<Accordion.ItemContent>Content for Item 2</Accordion.ItemContent>
	</Accordion.Item>
	<hr class="hr" />
	<Accordion.Item value="heart">
		<h3>
			<Accordion.ItemTrigger class="grid grid-cols-[1fr_auto]">
				<span>Heart</span>
				<HeartIcon />
			</Accordion.ItemTrigger>
		</h3>
		<Accordion.ItemContent>Content for Item 3</Accordion.ItemContent>
	</Accordion.Item>
	<hr class="hr" />
	<Accordion.Item value="spade">
		<h3>
			<Accordion.ItemTrigger class="grid grid-cols-[1fr_auto]">
				<span>Spade</span>
				<SpadeIcon />
			</Accordion.ItemTrigger>
		</h3>
		<Accordion.ItemContent>Content for Item 4</Accordion.ItemContent>
	</Accordion.Item>
</Accordion>
