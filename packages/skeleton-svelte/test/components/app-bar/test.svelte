<script lang="ts">
	import { AppBar } from '../../../src/index.js';
</script>

<AppBar data-testid="root">
	<AppBar.Toolbar data-testid="toolbar">
		<AppBar.Lead data-testid="lead" />
		<AppBar.Headline data-testid="headline" />
		<AppBar.Trail data-testid="trail" />
	</AppBar.Toolbar>
</AppBar>
