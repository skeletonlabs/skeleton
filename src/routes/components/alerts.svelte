<script lang='ts'>
    import Alert from "$lib/Alert/Alert.svelte";
    import Card from "$lib/Card/Card.svelte";
    import Table from "$lib/_Table/Table.svelte"

    let icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 32V51.2C329 66.03 384 130.6 384 208V226.8C384 273.9 401.3 319.2 432.5 354.4L439.9 362.7C448.3 372.2 450.4 385.6 445.2 397.1C440 408.6 428.6 416 416 416H32C19.4 416 7.971 408.6 2.809 397.1C-2.353 385.6-.2883 372.2 8.084 362.7L15.5 354.4C46.74 319.2 64 273.9 64 226.8V208C64 130.6 118.1 66.03 192 51.2V32C192 14.33 206.3 0 224 0C241.7 0 256 14.33 256 32H256zM224 512C207 512 190.7 505.3 178.7 493.3C166.7 481.3 160 464.1 160 448H288C288 464.1 281.3 481.3 269.3 493.3C257.3 505.3 240.1 512 224 512z"/></svg>'

    function ActionFunction(){
        alert('ActionFunction informed me to do this!');
    }

    const tableProps: any = {
        columns: ['Prop', 'Type', 'Values', 'Default', 'Description'],
        data: [
            ['from', 'string', '(class name)', 'from-primary-500', 'Insert the standard Tailwind "from-" class name'],
        ],
    };

</script>

<div class="space-y-8">

    <!-- Header -->
    <header class="space-y-4">
        <h1>Alerts</h1>
        <p>Make alerts that stand out with different warning levels.</p>
    </header>
    
    <!-- Examples -->
    <section class="space-y-4">
        <Card class="space-y-4">
            <h6>Basic</h6>
        </Card>
        
    </section>
    
    <!-- Usage -->
    <section class="space-y-4">
        <h2>Usage</h2>
        
    </section>
    
    <!-- Properties -->
    <section class="space-y-4">
        <h2>Properties</h2>
        <Table source="{tableProps}"></Table>
    </section>

</div>