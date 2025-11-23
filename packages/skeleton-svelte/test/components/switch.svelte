<script lang="ts">
	import { Switch } from '../../../src/index.js';
</script>

<Switch data-testid="root">
	<Switch.HiddenInput data-testid="hidden-input" />
	<Switch.Control data-testid="control">
		<Switch.Thumb data-testid="thumb" />
	</Switch.Control>
	<Switch.Label data-testid="label" />
</Switch>
