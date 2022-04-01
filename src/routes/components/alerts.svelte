<script>
    import Alert from "$lib/Alert/Alert.svelte";
    import Card from "$lib/Card/Card.svelte";
    let alertMessage = ''

    function ActionFunction(){
        alert('ActionFunction informed me to do this!');
    }

</script>

<div class='space-y-8'>
    <h1>Alerts</h1>
    <Alert dismissable actionFunction={ActionFunction}/>
    <Alert dismissable message='You can find new features here!' title="What's new in Skeleton UI?"/>
</div>