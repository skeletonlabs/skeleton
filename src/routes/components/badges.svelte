
<script>
    import Card from "$lib/Card/Card.svelte";
    import Badge from "$lib/Badge/Badge.svelte";
    import Avatar from "$lib/Avatar/Avatar.svelte";
    import Button from "$lib/Button/Button.svelte"
    let icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM384 288H205.3l49.38 49.38c12.5 12.5 12.5 32.75 0 45.25s-32.75 12.5-45.25 0L105.4 278.6C97.4 270.7 96 260.9 96 256c0-4.883 1.391-14.66 9.398-22.65l103.1-103.1c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L205.3 224H384c17.69 0 32 14.33 32 32S401.7 288 384 288z"/></svg>'
</script>

<div class='space-y-8'>
    <Card class='space-y-4'>      
        <h6>Basic</h6>
        <div class='flex-row flex'>
            <Badge variant=''>Avatar</Badge>
            <Badge background='bg-primary-200'>Button</Badge>
            <Badge background='bg-blue-400'>Card</Badge>
            <Badge background='bg-warning-400'>CodeBlock</Badge>
        </div>
   
    </Card>

    <Card class='space-y-4'>
        <h6>Leading slot</h6>
        <div class='flex-row flex'>
            <Badge variant=''>
                Avatar
                <svelte:fragment slot='lead'>{@html icon}</svelte:fragment>
            </Badge>
        </div>
    </Card>

    <Card class='space-y-4'>
        <h6>Trailing slot</h6>
        <div class='flex-row flex'>
            <Badge background='bg-yellow-400'>Badge
                <svelte:fragment slot='trail'>
                    {@html icon}
                </svelte:fragment>
            </Badge>
        </div>
    </Card>

    <Card class='space-y-4'>
        <h6>Super/Subscript Position</h6>
        <div class='flex-row flex items-center'>
            <h4>Badge</h4> <Badge class='-ml-0' background='bg-accent-200' variant='sub'>New</Badge>
            <h4>Badge</h4> <Badge class='-ml-0' background='bg-primary-200' variant='sup'>New</Badge>
        </div>
    </Card>

    <Card class='space-y-4'>
        <h6>Icon prop + added to components with custom margins</h6>
        <div class='flex-row flex items-center'>
            <Avatar size='md' /> <Badge class='-ml-4 -mt-4' icon variant='sup' background='bg-warning-400'>2</Badge>
            <Avatar size='md' /> <Badge class='-ml-4 -mb-4' icon variant='sub' background='bg-primary-400'>{@html icon}</Badge>
            <Button size='sm' variant='filled-accent'>Component</Button>
            <Badge variant='sub' class='-ml-4 -mb-4'>5k</Badge>
        </div>
    </Card>
</div>