<script lang="ts">
	let count = $state(0);

	function counter() {
		count = count + 1;
	}
</script>

<button class="btn preset-filled" onclick={counter}>Count is {count}</button>
