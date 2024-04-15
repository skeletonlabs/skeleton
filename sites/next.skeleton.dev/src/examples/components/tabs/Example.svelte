<script lang="ts">
	import { Tabs } from '@skeletonlabs/skeleton-svelte';
    
	let group = $state('books');
</script>

<Tabs>
    {#snippet list()}
        <Tabs.Control bind:group name="books">Books</Tabs.Control>
        <Tabs.Control bind:group name="movies">Movies</Tabs.Control>
        <Tabs.Control bind:group name="Television">Television</Tabs.Control>
    {/snippet}
    {#snippet panels()}
        <Tabs.Panel bind:group value="books">
            Books tab content
        </Tabs.Panel>
        <Tabs.Panel bind:group value="movies">
            Movies tab content
        </Tabs.Panel>
        <Tabs.Panel bind:group value="Television">
            Television tab content
        </Tabs.Panel>
    {/snippet}
</Tabs>