<script lang="ts">

import Avatar from "$lib/Avatar/Avatar.svelte";
import Card from "$lib/Card/Card.svelte";

function allOK(){
    console.log('AllOk')
}

</script>

<header class="mb-4">
	<h2 class="text-3xl font-bold mb-4">Avatars</h2>
	<p class="text-base opacity-70">
		Avatars .... describe here..
	</p>
</header>

<Card>
    <h2>Non-interactive</h2>
    <div class='flex justify-evenly'>

        <Avatar size='xlarge' />
        <Avatar size='xlarge' img='https://i.pravatar.cc/512' />
    </div>
</Card>

<div class='mb-6'></div>

<Card>
    <h2>Sizes</h2>
    <div class='flex justify-evenly items-center'>
        <Avatar rounded size='small' />
        <Avatar rounded size='medium' />
        <Avatar rounded size='large' />
        <Avatar rounded size='xlarge' />
        <br>
        <Avatar rounded size='small' img='https://i.pravatar.cc/512' />
        <Avatar rounded size='medium' img='https://i.pravatar.cc/512' />
        <Avatar rounded size='large' img='https://i.pravatar.cc/512' />
        <Avatar rounded size='xlarge' img='https://i.pravatar.cc/512' />
    </div>
</Card>
