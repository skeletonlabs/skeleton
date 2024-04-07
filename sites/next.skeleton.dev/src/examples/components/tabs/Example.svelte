<script lang="ts">
	import { Tabs } from '@skeletonlabs/skeleton-svelte';
    
	let group = $state('books');
</script>

<Tabs>
    {#snippet list()}
        <Tabs.Control bind:group name="books">Books</Tabs.Control>
        <Tabs.Control bind:group name="movies">Movies</Tabs.Control>
        <Tabs.Control bind:group name="Television">television</Tabs.Control>
    {/snippet}
    {#snippet panels()}
        <Tabs.Panel bind:group value="books">
            Books are like magical portals that take you on adventures, teach you new things, and make your imagination soar!
        </Tabs.Panel>
        <Tabs.Panel bind:group value="movies">
            Movies are like colorful, moving storybooks that come to life on a screen, showing exciting adventures and characters!
        </Tabs.Panel>
        <Tabs.Panel bind:group value="Television">
            Television is like a window to a world of entertaining shows and educational programs that can spark curiosity and creativity in young minds.
        </Tabs.Panel>
    {/snippet}
</Tabs>