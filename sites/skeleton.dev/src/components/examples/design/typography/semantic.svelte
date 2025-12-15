<div class="table-wrap">
	<table class="table">
		<thead>
			<tr>
				<th>Class</th>
				<th>Preview</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><code class="code">preset-typo-display-4</code></td>
				<td><h1 class="preset-typo-display-4">Aa</h1></td>
			</tr>
			<!-- --- -->
			<tr>
				<td><code class="code">preset-typo-display-3</code></td>
				<td><h2 class="preset-typo-display-3">Aa</h2></td>
			</tr>
			<!-- --- -->
			<tr>
				<td><code class="code">preset-typo-display-2</code></td>
				<td><h3 class="preset-typo-display-2">Aa</h3></td>
			</tr>
			<!-- --- -->
			<tr>
				<td><code class="code">preset-typo-display-1</code></td>
				<td><h4 class="preset-typo-display-1">Aa</h4></td>
			</tr>
			<!-- --- -->
			<tr>
				<td><code class="code">preset-typo-headline</code></td>
				<td><p class="preset-typo-headline">Headline</p></td>
			</tr>
			<!-- --- -->
			<tr>
				<td><code class="code">preset-typo-title</code></td>
				<td><p class="preset-typo-title">Title</p></td>
			</tr>
			<!-- --- -->
			<tr>
				<td><code class="code">preset-typo-subtitle</code></td>
				<td><p class="preset-typo-subtitle">Subtitle</p></td>
			</tr>
			<!-- --- -->
			<tr>
				<td><code class="code">preset-typo-body-1</code></td>
				<td>
					<p class="preset-typo-body-1">Body 1</p>
				</td>
			</tr>
			<!-- --- -->
			<tr>
				<td><code class="code">preset-typo-body-2</code></td>
				<td>
					<p class="preset-typo-body-2">Body 2</p>
				</td>
			</tr>
			<!-- --- -->
			<tr>
				<td><code class="code">preset-typo-caption</code></td>
				<td><span class="preset-typo-caption">Caption</span></td>
			</tr>
			<!-- --- -->
			<tr>
				<td><code class="code">preset-typo-menu</code></td>
				<td><span class="preset-typo-menu">Menu</span></td>
			</tr>
			<!-- --- -->
			<tr>
				<td><code class="code">preset-typo-button</code></td>
				<td><span class="preset-typo-button">Button</span></td>
			</tr>
		</tbody>
	</table>
</div>

<style lang="postcss">
	/* IGNORE THIS: this is only required for our example <style> block. */
	/* https://tailwindcss.com/docs/functions-and-directives#reference-directive */
	@reference '../../../../..app.css';

	/*
		In a real world project, copy the following into your global stylesheet.
		Then rename, adjust the styles, and otherwise modify as desired.

		For a quick reference for these theme variables, see the Core API:
		http://skeleton.dev/docs/get-started/core-api#typography
	*/

	/* Headings */
	.preset-typo-display-4,
	.preset-typo-display-3,
	.preset-typo-display-2,
	.preset-typo-display-1,
	.preset-typo-headline,
	.preset-typo-title,
	.preset-typo-subtitle,
	.preset-typo-caption,
	.preset-typo-menu,
	.preset-typo-button {
		color: var(--heading-font-color);
		font-family: var(--heading-font-family);
		font-weight: var(--heading-font-weight);
		@variant dark {
			color: var(--heading-font-color-dark);
		}
	}

	/* Body */
	.preset-typo-body-1,
	.preset-typo-body-2,
	.preset-typo-caption,
	.preset-typo-menu,
	.preset-typo-button {
		color: var(--heading-font-color);
		@variant dark {
			color: var(--heading-font-color-dark);
		}
	}

	/* Unique Properties */
	.preset-typo-display-4 {
		font-size: var(--text-7xl);
		@variant lg {
			font-size: var(--text-9xl);
		}
	}
	.preset-typo-display-3 {
		font-size: var(--text-6xl);
		@variant lg {
			font-size: var(--text-8xl);
		}
	}
	.preset-typo-display-2 {
		font-size: var(--text-5xl);
		@variant lg {
			font-size: var(--text-7xl);
		}
	}
	.preset-typo-display-1 {
		font-size: var(--text-4xl);
		@variant lg {
			font-size: var(--text-6xl);
		}
	}
	.preset-typo-headline {
		font-size: var(--text-2xl);
		@variant lg {
			font-size: var(--text-4xl);
		}
	}
	.preset-typo-title {
		font-size: var(--text-xl);
		@variant lg {
			font-size: var(--text-3xl);
		}
	}
	.preset-typo-subtitle {
		font-size: var(--text-base);
		font-family: var(--heading-font-family);
		color: var(--color-surface-700-300);
		@variant lg {
			font-size: var(--text-xl);
		}
	}
	.preset-typo-body-1 {
		font-size: var(--text-xl);
		@variant lg {
			font-size: var(--text-3xl);
		}
	}
	.preset-typo-body-2 {
		font-size: var(--text-lg);
		@variant lg {
			font-size: var(--text-xl);
		}
	}
	.preset-typo-caption {
		font-size: var(--text-sm);
		color: var(--color-surface-700-300);
	}
	.preset-typo-menu {
		font-weight: bold;
	}
	.preset-typo-button {
		font-weight: bold;
	}
</style>
