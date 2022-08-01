<script lang="ts">
    import Button from "$lib/Button/Button.svelte";
    let enabled: boolean = true;

    function toggleEnabled(): void { enabled = !enabled }
</script>

<div class="flex flex-col items-center space-y-4">
    <Button
        type="submit"
        variant="filled-primary"
        class="inline-flex ml-3"
        disabled={!enabled}
    >
        Save
    </Button>

    <button on:click={toggleEnabled}>Toggle</button>
</div>