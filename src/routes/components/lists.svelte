
<script lang="ts">
    import Card from "$lib/Card/Card.svelte";
    import ListGroup from "$lib/Lists/ListGroup.svelte";
    import ListGroupItem from "$lib/Lists/ListGroupItem.svelte";

</script>

<!-- Testing -->
<section class="space-y-4">
    <h4 class='space-y-4'>Basic</h4>
    <Card>
        <h5 class='mb-4'>EXAMPLE A</h5>
        <div class='w-1/2'>
            <ListGroup role='nav'>
                <ListGroupItem>Item A</ListGroupItem>
                <ListGroupItem>Item B</ListGroupItem>
                <ListGroupItem>Item C</ListGroupItem>
            </ListGroup>
        </div>
    </Card>
    <Card>
        <h5 class='mb-4'>EXAMPLE B</h5>
        <div class='w-1/2'>
            <ListGroup divided role='nav'>
                <ListGroupItem>Item A</ListGroupItem>
                <ListGroupItem>Item B</ListGroupItem>
                <ListGroupItem>Item C</ListGroupItem>
            </ListGroup>
        </div>
    </Card>

</section>
