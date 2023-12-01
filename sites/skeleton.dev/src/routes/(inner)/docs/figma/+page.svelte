<script lang="ts">
	import LayoutPage from '$lib/layouts/LayoutPage/LayoutPage.svelte';
</script>

<LayoutPage>
	<!-- Header -->
	<header class="space-y-4">
		<h1 class="h1">Figma</h1>
		<!-- prettier-ignore -->
		<div>
			<div class="!flex flex-col md:flex-row justify-between items-start space-y-4 md:space-y-0 md:space-x-4">
                <!-- prettier-ignore -->
				<p>
                    Design kit for Skeleton built with Figma. You can install it from the Figma Community.
                </p>
				
				<a class="btn variant-filled-secondary" href="https://www.figma.com/community/file/1266774078142216791" target="_blank">
					<i class="fa-brands fa-figma" />
					<span>View on Figma</span>
				</a>
			</div>
		</div>
	</header>

	<hr />

	<section class="space-y-4">
		<h2 class="h2">Introduction</h2>
		<p>
			The Figma kit is designed to match the structure of the components and properties in Skeleton. This helps designers & developers create stunning user interfaces faster.
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
					<span class="flex-auto">Tutorial (Only Alerts at the moment)</span>
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
			This <a class="anchor" href="https://www.figma.com/community/file/1266774078142216791" target="_blank" rel="noreferrer">UI kit</a> is maintained by <a class="anchor" href="https://github.com/mmailaender" target="_blank" rel="noreferrer">Micha</a> and <a class="anchor" href="https://github.com/bohdank1995" target="_blank" rel="noreferrer">Bohdan</a>.
		</p>
		<p>
			If you have any questions or feedback, please feel free to share it in Discord with a ping to <code class="code">@Micha</code> or <code class="code">@Bodya</code>
		</p>
	</section>
</LayoutPage>
