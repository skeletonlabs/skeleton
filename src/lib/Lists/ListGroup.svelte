<script lang='ts'>

    export let role = 'nav'; // nav, ol, ul
    export let hover: boolean = false;
    export let divided: boolean = false;
    export let variant: string = 'compact'; // Relaxed, compact, dense

</script>

<div data-testid='listGroup' class='listGroup'>    
    <nav> <slot /> </nav>
</div>