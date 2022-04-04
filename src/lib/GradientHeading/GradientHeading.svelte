<script lang="ts">
    import { afterUpdate } from "svelte";

    export let size: String = "6xl";
    export let direction: String = "r";
    export let from: string = 'from-primary-500';
    export let to: string = 'to-accent-500';

    let cBase = 'lg:leading-tight font-bold';
    let cSize: string;
    let cDirection: string;

    // Prop: Size
    function setSize(): void {
        switch(size){
            case('sm'):  cSize = 'text-sm'; break;
            case('md'):  cSize = 'text-md'; break;
            case('lg'):  cSize = 'text-lg'; break;
            case('xl'):  cSize = 'text-xl'; break;
            case('2xl'): cSize = 'text-2xl'; break;
            case('3xl'): cSize = 'text-3xl'; break;
            case('4xl'): cSize = 'text-4xl'; break;
            case('5xl'): cSize = 'text-5xl'; break;
            case('6xl'): cSize = 'text-6xl'; break;
            case('7xl'): cSize = 'text-7xl'; break;
            case('8xl'): cSize = 'text-8xl'; break;
            case('9xl'): cSize = 'text-9xl'; break;
            default:     cSize = 'text-4xl';
        }
    }

    // Prop: Direction
    function setDirection(): void {
        switch(direction){
            case('t'):  cDirection = 'bg-gradient-to-t'; break;
            case('b'):  cDirection = 'bg-gradient-to-b'; break;
            case('l'):  cDirection = 'bg-gradient-to-l'; break;
            case('r'):  cDirection = 'bg-gradient-to-r'; break;
            case('tl'): cDirection = 'bg-gradient-to-tl'; break;
            case('tr'): cDirection = 'bg-gradient-to-tr'; break;
            case('bl'): cDirection = 'bg-gradient-to-bl'; break;
            case('br'): cDirection = 'bg-gradient-to-br'; break;
            default:    cDirection = 'bg-gradient-to-r';
        }
    }

    // Reactive
    afterUpdate(() => {
        setSize();
        setDirection();
    });
    $: classes = `${cBase} ${cSize}`;
    $: spanClasses = `${from} ${to} ${cDirection}`;
</script>

<div data-testid="gradient-heading" class="gradient-heading {classes} ${$$props.class}">
    <span data-testid='span' class="bg-clip-text text-transparent box-decoration-clone {spanClasses}">
        <slot />
    </span>
</div>