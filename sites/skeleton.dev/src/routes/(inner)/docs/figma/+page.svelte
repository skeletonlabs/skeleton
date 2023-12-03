<script lang="ts">
	import LayoutPage from '$lib/layouts/LayoutPage/LayoutPage.svelte';
</script>

<LayoutPage>
	<!-- Header -->
	<header class="!flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
		<div class="space-y-4">
			<h1 class="h1">Figma</h1>
			<p>A community-maintained Figma design kit for Skeleton.</p>
		</div>
		<a class="btn variant-filled-secondary" href="https://www.figma.com/community/file/1266774078142216791" target="_blank">
			<i class="fa-brands fa-figma" />
			<span>View on Figma Community</span>
		</a>
	</header>

	<hr />

	<section class="space-y-4">
		<h2 class="h2">Introduction</h2>
		<p>
			The Figma kit is designed to match the structure of the components and properties in Skeleton. This can assist both designers and
			developers in create and mocking stunning user interfaces.
		</p>
		<h3 class="h3">Features</h3>
		<ol class="list">
			<ul class="list-dl">
				<li>
					<span>•</span>
					<span class="flex-auto">Made with Autolayout</span>
				</li>
				<li>
					<span>•</span>
					<span class="flex-auto">Theme support with variables</span>
				</li>
				<li>
					<span>•</span>
					<span class="flex-auto">Composable with slots</span>
				</li>
				<li>
					<span>•</span>
					<span class="flex-auto">Tutorial (limited to Alerts at the moment)</span>
				</li>
				<li>
					<span>•</span>
					<span class="flex-auto">Playground</span>
				</li>
			</ul>
		</ol>
	</section>

	<hr />

	<section class="space-y-4">
		<h2 class="h2">Attribution</h2>
		<!-- prettier-ignore -->
		<p>
			This <a class="anchor" href="https://www.figma.com/community/file/1266774078142216791" target="_blank" rel="noreferrer">Figma UI kit</a> is maintained by <a class="anchor" href="https://github.com/mmailaender" target="_blank" rel="noreferrer">Micha</a> and <a class="anchor" href="https://github.com/bohdank1995" target="_blank" rel="noreferrer">Bohdan</a>. If you have any questions or feedback, please feel free ping these members on the Skeleton community discord via <code class="code">@Micha</code> or
			<code class="code">@Bodya</code>.
		</p>
	</section>
</LayoutPage>
