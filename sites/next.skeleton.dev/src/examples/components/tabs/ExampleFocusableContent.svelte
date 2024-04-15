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
            <button type="button" class="btn preset-filled">Book tab Content</button>
        </Tabs.Panel>
        <Tabs.Panel bind:group value="movies">
            <button type="button" class="btn preset-filled">Movies tab content</button>
        </Tabs.Panel>
        <Tabs.Panel bind:group value="Television">
            <button type="button" class="btn preset-filled">Television tab content</button>
        </Tabs.Panel>
    {/snippet}
</Tabs>