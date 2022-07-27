<script lang="ts">
    import Card from "$lib/Card/Card.svelte";
    import Button from "$lib/Button/Button.svelte";
    import Divider from "$lib/Divider/Divider.svelte";
    import CodeBlock from "$lib/CodeBlock/CodeBlock.svelte";
    import Badge from "$lib/Badge/Badge.svelte";
</script>

<div class="space-y-8">

	<!-- Header -->
	<header class="space-y-4">
		<h1>
            Forms
            <Badge background="bg-accent-500" class="-translate-y-3">Optional</Badge>
        </h1>
        <p>If you have experience with other UI component libraries, you may expect Skeleton to support components replacements for form inputs, select, checkboxes, and similar. However, this is not the case. The Skeleton team take the stance that this is generally a bad practice.</p>
        <p>Wrapping inputs within a component tends to hurt accessbility, limit error handling and validation, and make it much more difficult to customize inline attributes. While also dramatically impacting your ability to customize and style each element.</p>
        <p>However, given Skeleton's tight integration with Tailwind, an elgant solution is available via the <a href="https://github.com/tailwindlabs/tailwindcss-forms" target="_blank">official Tailwind Forms plugin</a>. This provides a no-nonsense approach to applying clean and modern styling to <em>most</em> inputs. Tailwind provides an example page to <a href="https://tailwindcss-forms.vercel.app/kitchen-sink.html" target="_blank">preview the default styles here</a>.</p>
	</header>

    <Divider />
    
    <!-- Forms and Input Styles -->
    <section class="space-y-4">
        <h2>Tailwind Forms Plugin</h2>
        <p>To get started, check out Tailwind's official YouTube video tutorial, as well as the step-by-step guide provided below.</p>
        <Card>
            <iframe class="w-full max-w-[800px] mx-auto aspect-video" src="https://www.youtube-nocookie.com/embed/pONeWAzDsQg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Card>
        <p>Install the plugin via NPM or similar package manager.</p>
        <CodeBlock language="console" code={`npm install -D @tailwindcss/forms`}></CodeBlock>
        <p>Add the <a href="https://tailwindcss.com/docs/plugins" target="_blank">plugin</a> to your <em>tailwind.config.cjs</em></p>
        <CodeBlock language="js" code={`
module.exports = {
    // ...
    plugins: [
        require('@tailwindcss/forms'),
        // ...
    ],
}
        `.trim()}></CodeBlock>
        <p>Implement any style overrides within <em>app.css</em>. Use the styles below as a starting point. These styles take advantage of your theme colors.</p>
        <CodeBlock language="css" code={`
fieldset { @apply block; }

/* Labels */
label { @apply block overflow-visible; }
label span, legend { @apply block text-surface-700 dark:text-surface-300 text-sm mb-2; }

/* Inputs */
[type="text"],
[type="email"],
[type="url"],
[type="password"],
[type="number"],
[type="date"],
[type="datetime-local"], 
[type="month"],
[type="search"],
[type="tel"],
[type="time"],
[type="week"],
[multiple],
textarea,
select {
    @apply w-full text-black bg-surface-50 border-surface-300 rounded-lg shadow-sm focus:border-accent-500 focus:ring-accent-500;
    @apply dark:text-white dark:bg-surface-600 dark:border-surface-500;
}

/* Selectable */
[type="checkbox"],
[type="radio"] {
    @apply border-surface-500 rounded text-accent-600 focus:ring-accent-500;
}

/* Invalid - https://www.bram.us/2021/01/28/form-validation-you-want-notfocusinvalid-not-invalid/ */
input:not(:focus):not(:placeholder-shown):invalid {
    @apply bg-warning-300 border-warning-500;
}

/* Placeholders */
input::-moz-placeholder, textarea::-moz-placeholder { @apply text-surface-400; }
input:-ms-input-placeholder, textarea:-ms-input-placeholder { @apply text-surface-400; }
input::placeholder, textarea::placeholder { @apply text-surface-400; }

/* Accent Color - https://developer.mozilla.org/en-US/docs/Web/CSS/accent-color */
[type="range"]:not(.range-input) { @apply w-full accent-accent-500; }
        `.trim()}></CodeBlock>
        <p>Finally, implement your form elements using standard markup and Svelte directives. Note the examples below use a <em>span</em> element for label text.</p>
        <CodeBlock language="html" code={`
<label for="name">
    <span>Name</span>
    <input type="text" id="name" bind:value={name} minlength="2" required>
</label>
        `.trim()}></CodeBlock>
        <CodeBlock language="html" code={`
<label for="color">
    <span>Color</span>
    <select name="color" id="color" bind:value={color}>
        <option value="red">red</option>
        <option value="green">green</option>
        <option value="blue">blue</option>
    </select>
</label>
        `.trim()}></CodeBlock>
        
    </section>

    <Divider />

    <!-- Non-Supported -->
    <section class="space-y-4">
        <h2>Non-Supported Inputs</h2>
        <p>While the Tailwind Forms plugin covers most common inputs, there are a few <a href="https://tailwindcss-forms.vercel.app/kitchen-sink.html" target="_blank">exceptions</a> (see page bottom). However, Skeleton provides a robust <a href="/components/range-sliders">Range Slider</a> alternative, as well as non-native components for <a href="/components/slide-toggles">Slide Toggles</a> and <a href="/components/radio-groups">Radio Groups</a>. Expect to see more of these in the future.</p>
    </section>

    <Divider />

    <!-- Next Steps -->
    <Card class="flex justify-between items-center space-x-4 space-y-0">
        <div class="flex-1 space-y-4">
            <p>Finally, let's follow the documentation to add our first component.</p>
        </div>
        <Button variant="filled-accent" href="/components/buttons">Add a Component</Button>
    </Card>

</div>