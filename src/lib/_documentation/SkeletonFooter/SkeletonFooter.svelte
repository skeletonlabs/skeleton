<script lang="ts">
    import Button from "$lib/Button/Button.svelte";
    import SvgIcon from "$lib/SvgIcon/SvgIcon.svelte";

    // Base Classes
    const cBase: string = 'bg-neutral-100 dark:bg-neutral-900 text-xs mx-auto p-4 md:p-10 flex justify-between items-center';
</script>

<div class="{cBase}">

    <!-- Text -->
    <section class="text-xs">
        <p><a href="https://github.com/Brain-Bones/skeleton/blob/master/LICENSE" target="_blank">MIT License</a></p>
    </section>

    <!-- Community -->
    <section class="flex space-x-4">
        <Button background="bg-[#7289da]" color="!text-white" href="https://discord.gg/EXqV7W8MtY" target="_blank">
            <SvgIcon name="discord" fill="fill-white" viewBox="0 0 640 512" class="-translate-y-[2px]" />
            <span class="hidden md:inline-block ml-2">Join Discord Community</span>
        </Button>
        <Button background="bg-[#1da1f2]" color="!text-white" href="https://twitter.com/SkeletonUI" target="_blank">
            <SvgIcon name="twitter" fill="fill-white" class="-translate-y-[2px]" />
            <span class="hidden md:inline-block ml-2">Follow on Twitter</span>
        </Button>
        <Button background="bg-[#6e5494]" color="!text-white" href="https://github.com/Brain-Bones/skeleton" target="_blank">
            <SvgIcon name="github" fill="fill-white" class="-translate-y-[2px]" />
            <span class="hidden md:inline-block ml-2">Visit Github</span>
        </Button>
    </section>
    
</div>