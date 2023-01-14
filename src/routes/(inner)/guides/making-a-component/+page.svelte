<script lang="ts">
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	import { menu } from '$lib/utilities/Menu/menu';
	const dummyText = "There's a skeleton inside you!";
	const extendedDummyText = `${dummyText} It's wet and not dry! You can't touch it but it's in there!`;
	const basicSizing = 'font-extrabold tracking-wide py-2 text-2xl';
	const defaultClasses = basicSizing + ' bg-gradient-to-r from-primary-500 to-secondary-500';
</script>

<div class="page-container">
	<header class="space-y-4">
		<h1>Extending Skeleton</h1>
		<!-- prettier-ignore -->
		<p>
            It's inevitable that you'll want to extend Skeleton to fit your needs.
            This guide will walk you through the process of creating a custom component and using it in your app.
            In it, you will learn:
        </p>
		<ul class="list">
			<li>How to use <a href="https://tailwindcss.com/docs/adding-custom-styles#using-css-and-layer">Tailwind <code>@layers</code></a></li>
			<li>How to create a basic gradient heading component that is easily customisable and extendable.</li>
			<li>When to use which method.</li>
		</ul>
	</header>

	<!-- Frameworks -->
	<section class="space-y-4">
		<h2>Getting Started on our Heading component</h2>
		<p>We're going to start by trying to recreate the following gradient heading component:</p>
		<div class="{defaultClasses} bg-clip-text text-transparent box-decoration-clone">
			{dummyText}
		</div>
		<p>
			Take a moment to have a notice how it reacts to changing the <button
				class="unstyled hover:bg-primary-hover-token rounded-token space-x-2"
				use:menu={{ menu: 'theme', interactive: true }}>theme</button
			>. First, let's approach it from the Tailwind perspective. We can first make our text nice and big, bold, and roomy. In a
			<code>+page.svelte</code>
			file, make a <code>{'<div>'}</code> with the following Tailwind classes:
		</p>
		<CodeBlock
			language="html"
			code={`<div class="${basicSizing}">
    ${dummyText}
</div>`}
		/>
		<p>That gives us this:</p>
		<div class="{basicSizing} text-green-500">{dummyText}</div>
		<p>
			Not bad. But ours doesn't respond to changing the theme- it's just green. That's a simple enough fix- try changing <code
				>text-green-500</code
			>
			to one of the <a href="/guides/themes/colors">Skeleton design token colors</a>.
		</p>
		<p>
			But we want to make a gradient- and the CSS <code>color</code> property does not take gradients. So let's approach from a different
			direction, and use the background, which <i>does</i> allow for gradients.
		</p>
		<p>Luckily for us, Tailwind has a whole <a href="https://tailwindcss.com/docs/gradient-color-stops">page on gradients!</a></p>
		<p>We just have to define the direction, and the colors that we want to use.</p>
		<CodeBlock
			language="html"
			code={`<div class="${defaultClasses} text-green-500">
    ${dummyText}
</div>`}
		/>
		<div class="{defaultClasses} text-green-500">
			{dummyText}
		</div>
		<p>Unfortunately, our green text is still very green, and sticks out like a sore thumb.</p>
		<p>Add <code>bg-clip-text</code>, and take a guess at what will happen.</p>
		<p>Then, try removing <code>text-green-500</code> (or whatever color you replaced it with).</p>
		<div class="{defaultClasses} bg-clip-text text-green-500">
			{dummyText}
		</div>
		<p>Augh! Our beautiful background has disappeared?!</p>
		<p>
			The secret sauce is that our <code>color</code> needs to be transparent- so let's do exactly that, and add
			<code>text-transparent</code>.
		</p>
		<div class="{defaultClasses} bg-clip-text text-transparent">
			{dummyText}
		</div>
		<p>Perfect! But what happens if we used a <code>span</code>, and it was a bit longer?</p>
		<div>
			<span class="{defaultClasses} bg-clip-text text-transparent max-w-[20rem]">
				{extendedDummyText}
			</span>
		</div>
		<p>
			Augh! Our beautiful gradient is ruined! For this, we need to add the <code>box-decoration-clone</code> property, to tell our CSS that
			we want our properties to be cloned. If you have styling issues related to line breaks, check out the
			<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/box-decoration-break">MDN article on box-decoration break</a>.
		</p>
		<p>Your final code should look something like this:</p>
		<CodeBlock
			language="html"
			code={`
<div class="${defaultClasses} bg-clip-text text-transparent box-decoration-clone">
    ${dummyText}
    </div>`}
		/>
		<div class="{defaultClasses} bg-clip-text text-transparent box-decoration-clone">
			{extendedDummyText}
		</div>
		Hmm... That's quite a lot of classes, but each of those is important! This is where the<code>@layer</code> directive comes in handy.
	</section>
	<section class="space-y-4">
		<h2>Tailwind @layer components</h2>
		<p>
			Atomic CSS has many benefits, but as more classes are added to an element, it can become verbose, and cumbersome to understand what is
			going on. This is when the <code>@layer</code> directive comes in handy. It allows you to group your CSS classes into logical groups. This
			is especially useful when you want to create a component that is easily customisable and extendable.
		</p>
		<div class="alert">
			<h3>Keep it DRY!</h3>
			<div>Don't Repeat Yourself! When you find yourself <kbd>Ctrl + C</kbd>ing, you might want to consider a refactor.</div>
		</div>
		<p>Let's take the classes that we made in the previous section, and then navigate to our <code>global.css</code> file.</p>
	</section>
</div>
