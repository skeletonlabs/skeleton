<script lang="ts">
    import Button from "$lib/Button/Button.svelte";
    import Card from "$lib/Card/Card.svelte";
</script>

<main class="text-center space-y-8 lg:text-left">
    <div class="bg-primary-500 p-8 rounded-2xl w-56">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path class="fill-surface-50" d="M207.1 136C207.1 149.3 197.3 160 183.1 160C170.7 160 159.1 149.3 159.1 136C159.1 122.7 170.7 112 183.1 112C197.3 112 207.1 122.7 207.1 136zM240 136C240 122.7 250.7 112 264 112C277.3 112 288 122.7 288 136C288 149.3 277.3 160 264 160C250.7 160 240 149.3 240 136zM264 288H183.1C153.1 288 127.1 262.9 127.1 232V223.4C98.54 199.1 79.1 165.9 79.1 128C79.1 57.31 144.5 0 223.1 0C303.5 0 368 57.31 368 128C368 165.9 349.5 199.1 320 223.4V232C320 262.9 294.9 288 264 288zM320 128C320 88.98 282.5 48 223.1 48C165.5 48 127.1 88.98 127.1 128C127.1 149.5 138.4 170.4 157.9 185.8L175.1 200.3V232C175.1 236.4 179.6 240 183.1 240H264C268.4 240 272 236.4 272 232V200.3L290.1 185.8C309.6 170.4 320 149.5 320 128zM2.706 268.9C8.821 257.2 23.31 252.6 35.07 258.7L223.1 356.1L412.9 258.7C424.7 252.6 439.2 257.2 445.3 268.9C451.4 280.7 446.8 295.2 435.1 301.3L276 384L435.1 466.7C446.8 472.8 451.4 487.3 445.3 499.1C439.2 510.8 424.7 515.4 412.9 509.3L223.1 411.1L35.07 509.3C23.31 515.4 8.821 510.8 2.706 499.1C-3.409 487.3 1.167 472.8 12.93 466.7L171.1 384L12.93 301.3C1.167 295.2-3.409 280.7 2.706 268.9V268.9z"/>
        </svg>
    </div>

    <Card>
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold">Build web apps faster with the power of Svelte and Tailwind.</h1>
        <p class="my-6 text-base sm:text-xl text-surface-400">Start developing with a huge library of component that pair well with Tailwind's powerful theme system.</p>
        <div class="flex space-x-4 justify-center lg:justify-start">
            <Button display="filled" color="primary" href="/company">Get Started</Button>
        </div>
    </Card>
</main>

<!--
    Get Started:
    1. Install Tailwind - use Svelte Add
    2. Install Skeleton - use "--save-dev"
    3. Setup Tailwind config - add context, plugin
    4. Add your CSS variable color theme
-->
