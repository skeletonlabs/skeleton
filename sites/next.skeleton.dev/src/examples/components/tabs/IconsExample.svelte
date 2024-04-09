<script lang="ts">
	import { Tabs } from '@skeletonlabs/skeleton-svelte';
    import LibraryBig from 'lucide-svelte/icons/library-big';
    import Film from 'lucide-svelte/icons/film';
    import Tv from 'lucide-svelte/icons/tv';
    
	let group = $state('books');
</script>

<Tabs>
    {#snippet list()}
        <Tabs.Control bind:group name="books" title="Books">
            <LibraryBig size={20} />
            Books
        </Tabs.Control>
        <Tabs.Control bind:group name="movies" title="Film">
            <Film size={20} />
            Movies
        </Tabs.Control>
        <Tabs.Control bind:group name="Television" title="Television">
            <Tv size={20} />
            Television
        </Tabs.Control>
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