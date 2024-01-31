<script lang="ts">
    interface Props {}
    let {} = $props<Props>()

    let color = $state('red')

    function section(c: string): void {
        color = c
    }
</script>

<div class="flex gap-2">
    {#each ['red', 'blue', 'green'] as c}
        <button class="chip {color === c ? 'preset-filled' : 'preset-tonal'}" on:click={() => section(c)} on:keypress>
            {#if color === c}<span>✓</span>{/if}
            <span>{c}</span>
        </button>
    {/each}
</div>
