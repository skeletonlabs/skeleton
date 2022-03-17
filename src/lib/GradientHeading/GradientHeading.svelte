<script lang="ts">

    export let direction: String = "r";
    export let size: String = "4xl";
    export let bright: boolean = false;

    let cBase = 'lg:leading-tight font-bold';
    let spanStyle = 'bg-clip-text text-transparent';

    if(bright) { spanStyle += ' from-primary-300 to-accent-300'; }
    else{ spanStyle += ' from-primary-500 to-accent-500'; }

    switch(size){
        case('sm'): {  cBase += ' text-sm'; break;}
        case('md'): {  cBase += ' text-md'; break;}
        case('lg'): {  cBase += ' text-lg'; break;}
        case('xl'): {  cBase += ' text-xl'; break;}
        case('2xl'): { cBase += ' text-2xl'; break;}
        case('3xl'): { cBase += ' text-3xl'; break;}
        case('4xl'): { cBase += ' text-4xl'; break;}
        case('5xl'): { cBase += ' text-5xl'; break;}
        case('6xl'): { cBase += ' text-6xl'; break;}
        case('7xl'): { cBase += ' text-7xl'; break;}
        case('8xl'): { cBase += ' text-8xl'; break;}
        case('9xl'): { cBase += ' text-9xl'; break;}
    }

    switch(direction){
        case('t'):  {spanStyle += ' bg-gradient-to-t'; break;}
        case('b'):  {spanStyle += ' bg-gradient-to-b'; break;}
        case('l'):  {spanStyle += ' bg-gradient-to-l'; break;}
        case('r'):  {spanStyle += ' bg-gradient-to-r'; break;}
        case('tl'): {spanStyle += ' bg-gradient-to-tl'; break;}
        case('tr'): {spanStyle += ' bg-gradient-to-tr'; break;}
        case('bl'): {spanStyle += ' bg-gradient-to-bl'; break;}
        case('br'): {spanStyle += ' bg-gradient-to-br'; break;}
    }
</script>

<h2 data-testid="gradientHeading" class="{cBase} lg:leading-tight font-bold ${$$props.class}">
    <span data-testid='span' class="{spanStyle}">
        <slot />
    </span>
</h2>