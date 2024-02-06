<script lang="ts">
    let {} = $props<any>()

    let color = $state('red')

    function onClickHandler(c: string): void {
        color = c
    }
</script>

<div class="flex gap-2">
    {#each ['red', 'blue', 'green'] as c}
        <button class="chip {color === c ? 'preset-filled' : 'preset-tonal'}" on:click={() => onClickHandler(c)}>
            {#if color === c}<span>&check;</span>{/if}
            <span>{c}</span>
        </button>
    {/each}
</div>
