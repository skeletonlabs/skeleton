<div class="flex-auto text-center bg-surface-200 py-10 space-x-4 dark:bg-surface-800">
    <!-- Default -->
    {#if !$$slots.icon && !$$slots.label}
        <slot />
    {/if}
    <!-- Icon -->
    {#if $$slots.icon}
        <slot name="icon"></slot>
    {/if}
    <!-- Label -->
    {#if $$slots.label}
        <span class="text-lg">
            <slot name="label"></slot>
        </span>
    {/if}
</div>