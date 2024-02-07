<script lang="ts">
    let {} = $props<any>()

    const colors = ['red', 'blue', 'green']
    let color = $state('red')

    function onClickHandler(selectedColor: string) {
        color = selectedColor
    }
</script>

<div class="flex gap-2">
    {#each colors as c}
        <button class="chip {color === c ? 'preset-filled' : 'preset-tonal'}" on:click={() => onClickHandler(c)}>
            <span>{c}</span>
        </button>
    {/each}
</div>
