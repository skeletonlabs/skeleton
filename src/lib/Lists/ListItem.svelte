<script lang='ts'>
    import {getContext} from 'svelte';
    export let href = '';
    let cStyle = getContext('style');
    let selectable = getContext('selectable');
    let active = false;
</script>

<li>
    <a class='listItem cursor-default' href={href}>
        <div on:click class='listItem {cStyle} pl-4'>
            <slot />
        </div>
    </a>
</li>
