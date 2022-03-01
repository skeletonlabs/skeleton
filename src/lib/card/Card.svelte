<div class="card {$$props.class}">
    <slot />
</div>

<!-- https://github.com/svelte-add/svelte-add/issues/92 -->
<style lang="postcss" global>
    :local(.card) {
        @apply bg-surface-200 p-5 rounded-lg dark:bg-surface-800;
    }
</style>