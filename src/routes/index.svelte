<script lang="ts">
    import Button from '$lib/button/Button.svelte';
    import Card from '$lib/card/Card.svelte';
</script>

<h1 class="text-3xl font-bold">Skeleton UI</h1>
<p class="text-base opacity-70">A component library by Brain &amp; Bones, LLC.</p>

<!-- Buttons -->
<Card class="mt-4">
    <h2 class="text-2xl font-bold mb-4">Buttons</h2>
    <Button>Default</Button>
    <hr class="border-t-1 border-surface-700 my-4">
    <div class="flex space-x-4">
        <div>
            <h2 class="text-lg mb-4">Filled</h2>
            <nav class="flex flex-col space-y-4">
                <Button filled>Button</Button>
                <Button href="http://www.google.com" filled>Anchor</Button>
                <Button filled primary>Primary</Button>
                <Button filled accent>Accent</Button>
                <Button filled disabled>Disabled</Button>
            </nav>
        </div>
        <div>
            <h2 class="text-lg mb-4">Outlined</h2>
            <nav class="flex flex-col space-y-4">
                <Button outlined>Button</Button>
                <Button href="http://www.google.com" outlined>Anchor</Button>
                <Button outlined primary>Primary</Button>
                <Button outlined accent>Accent</Button>
                <Button outlined disabled>Disabled</Button>
            </nav>
        </div>
        <div>
            <h2 class="text-lg mb-4">Text</h2>
            <nav class="flex flex-col space-y-4">
                <Button text>Button</Button>
                <Button href="http://www.google.com" text>Anchor</Button>
                <Button text primary>Primary</Button>
                <Button text accent>Accent</Button>
                <Button text disabled>Disabled</Button>
            </nav>
        </div>
        <div>
            <h2 class="text-lg mb-4">Icon</h2>
            <nav class="flex flex-col space-y-4">
                <Button text>
                    &#10022;
                </Button>
                <Button href="http://www.google.com" text>
                    &#10022;
                </Button>
                <Button text primary>
                    &#10022;
                </Button>
                <Button text accent>
                    &#10022;
                </Button>
                <Button text disabled>
                    &#10022;
                </Button>
            </nav>
        </div>
    </div>
</Card>