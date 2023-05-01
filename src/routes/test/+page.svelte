<script>
	import { enhance } from "$app/forms";
	import { InputChip } from "@skeletonlabs/skeleton";
</script>
    
<div class="card p-4">
    <p>Nested forms:</p>
    <form class="outline p-2 m-2" method="post" use:enhance id="form-outer">
        <InputChip name="test-outer" required form="form-outer"/>
        <form class="outline p-2 m-2" method="post"  use:enhance id="form-inner">
            <InputChip name="test-inner" required form="form-inner" />
            <button>Inner Submit</button>
        </form>
        <button>Outer Submit</button>
    </form>
</div>

<div class="card p-4 Nested form test" >
    <p>Singular form:</p>
    <form class="outline p-2 m-2" method="post" use:enhance id="form">
        <InputChip name="test" required form="form"/>
        <button>Submit</button>
    </form>
</div>


