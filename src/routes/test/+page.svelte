<script>
	import { enhance } from "$app/forms";
	import { InputChip } from "@skeletonlabs/skeleton";
</script>

<form method="post" use:enhance>
    <InputChip name="test" required value={['some', 'default', 'values']} restToInitialValue={true} />
    <button>Submit</button>
</form>
