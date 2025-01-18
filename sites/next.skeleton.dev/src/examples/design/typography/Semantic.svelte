<!-- All HTML markup is a suggestion. -->
<div class="table-wrap">
	<table class="table">
		<thead>
			<tr>
				<th>Class</th>
				<th>Preview</th>
			</tr>
		</thead>
		<tbody>
			<!-- type-display-4 -->
			<tr>
				<td><code class="code">type-display-4</code></td>
				<td><h1 class="type-display-4">Aa</h1></td>
			</tr>
			<!-- type-display-3 -->
			<tr>
				<td><code class="code">type-display-3</code></td>
				<td><h2 class="type-display-3">Aa</h2></td>
			</tr>
			<!-- type-display-2 -->
			<tr>
				<td><code class="code">type-display-2</code></td>
				<td><h3 class="type-display-2">Aa</h3></td>
			</tr>
			<!-- type-display-1 -->
			<tr>
				<td><code class="code">type-display-1</code></td>
				<td><h4 class="type-display-1">Aa</h4></td>
			</tr>
			<!-- type-headline -->
			<tr>
				<td><code class="code">type-headline</code></td>
				<td><p class="type-headline">Headline</p></td>
			</tr>
			<!-- type-title -->
			<tr>
				<td><code class="code">type-title</code></td>
				<td><p class="type-title">Title</p></td>
			</tr>
			<!-- type-subtitle -->
			<tr>
				<td><code class="code">type-subtitle</code></td>
				<td><p class="type-subtitle">Subtitle</p></td>
			</tr>
			<!-- type-body-1 -->
			<tr>
				<td><code class="code">type-body-1</code></td>
				<td>
					<p class="type-body-1">Body 1</p>
				</td>
			</tr>
			<!-- type-body-2 -->
			<tr>
				<td><code class="code">type-body-2</code></td>
				<td>
					<p class="type-body-2">Body 2</p>
				</td>
			</tr>
			<!-- type-caption -->
			<tr>
				<td><code class="code">type-caption</code></td>
				<td><span class="type-caption">Caption</span></td>
			</tr>
			<!-- type-menu -->
			<tr>
				<td><code class="code">type-menu</code></td>
				<td><span class="type-menu">Menu</span></td>
			</tr>
			<!-- type-button -->
			<tr>
				<td><code class="code">type-button</code></td>
				<td><span class="type-button">Button</span></td>
			</tr>
		</tbody>
	</table>
</div>

<!--
	Copy the following classes to your global stylesheet. Rename and modify as desired.
	Reference: http://skeleton.dev/docs/get-started/plugin#typography
-->
<style lang="postcss">
	.type-display-4 {
		@apply type-scale-11 md:type-scale-12 lg:type-scale-13;
		@apply heading-font-color dark:heading-font-color-dark;
		@apply heading-font-family heading-font-weight;
	}
	.type-display-3 {
		@apply type-scale-10 md:type-scale-11 lg:type-scale-12;
		@apply heading-font-color dark:heading-font-color-dark;
		@apply heading-font-family heading-font-weight;
	}
	.type-display-2 {
		@apply type-scale-9 md:type-scale-10 lg:type-scale-11;
		@apply heading-font-color dark:heading-font-color-dark;
		@apply heading-font-family heading-font-weight;
	}
	.type-display-1 {
		@apply type-scale-8 md:type-scale-9 lg:type-scale-10;
		@apply heading-font-color dark:heading-font-color-dark;
		@apply heading-font-family heading-font-weight;
	}
	.type-headline {
		@apply type-scale-6 md:type-scale-7 lg:type-scale-8;
		@apply heading-font-color dark:heading-font-color-dark;
		@apply heading-font-family heading-font-weight;
	}
	.type-title {
		@apply type-scale-5 md:type-scale-6 lg:type-scale-7;
		@apply heading-font-color dark:heading-font-color-dark;
		@apply heading-font-family heading-font-weight;
	}
	.type-subtitle {
		@apply type-scale-3 md:type-scale-4 lg:type-scale-5;
		@apply heading-font-color dark:heading-font-color-dark;
		@apply heading-font-family;
		@apply opacity-60;
	}
	/* --- */
	.type-body-1 {
		@apply type-scale-5 md:type-scale-6 lg:type-scale-7;
	}
	.type-body-2 {
		@apply type-scale-4 lg:type-scale-5;
	}
	.type-caption {
		@apply type-scale-2;
		@apply italic opacity-60;
	}
	.type-menu {
		@apply type-scale-3;
		@apply font-bold;
	}
	.type-button {
		@apply type-scale-3;
	}
</style>
