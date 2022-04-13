
<script>
    import Card from "$lib/Card/Card.svelte";
    import Badge from "$lib/Badge/Badge.svelte";
    $: showBadge = true;
    let icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM384 288H205.3l49.38 49.38c12.5 12.5 12.5 32.75 0 45.25s-32.75 12.5-45.25 0L105.4 278.6C97.4 270.7 96 260.9 96 256c0-4.883 1.391-14.66 9.398-22.65l103.1-103.1c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L205.3 224H384c17.69 0 32 14.33 32 32S401.7 288 384 288z"/></svg>'
</script>

<div class='space-y-8'>
    <Card class='space-y-4'>      
        <h6>Basic</h6>
        <div class='flex-row flex'>
            <Badge variant=''>Avatar</Badge>
            <Badge background='bg-primary-200'>Button</Badge>
            <Badge background='bg-accent-300'>Card</Badge>
            <Badge background='bg-purple-400'>CodeBlock</Badge>
        </div>

        <h6>Leading slot</h6>
        <div class='flex-row flex'>
            <Badge variant=''>
                Avatar
                <svelte:fragment slot='lead'>{@html icon}</svelte:fragment>
            </Badge>
            <Badge background='bg-primary-200'>Button</Badge>
            <Badge background='bg-accent-300'>Card</Badge>
            <Badge background='bg-purple-400'>CodeBlock</Badge>
        </div>
        <h6>Trailing slot</h6>
        <div class='flex-row flex'>
            <Badge background='bg-yellow-400'>Badge
                <svelte:fragment slot='trail'>
                    <button>X</button>
                </svelte:fragment>
            </Badge>
        </div>
        
        <h6>Icon Variant</h6>
        <div class='flex-row flex'>
            <Badge variant='icon' background='bg-accent-400'>{@html icon}</Badge>
        </div>

        <h6>Super/Subscript Position</h6>
        <div class='flex-row flex'>
            <h1>Hello</h1> <Badge variant='icon'>Badge</Badge>
        </div>

    </Card>
</div>