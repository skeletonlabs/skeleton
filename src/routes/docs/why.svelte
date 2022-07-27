<script lang="ts">
    import Divider from "$lib/Divider/Divider.svelte";
    import Button from "$lib/Button/Button.svelte";
</script>

<div class="space-y-8">

	<!-- Header -->
	<header class="space-y-4">
		<h1>Why Skeleton</h1>
        <p>See below to learn more about what Skeleton is, and what problems it solves.</p>
	</header>

    <Divider />

    <!-- xxx -->
    <section class="space-y-4">
        <h2>What is Skeleton?</h2>
        <p>Skeleton is a brand new UI component library, featuring tight integration between <a href="https://svelte.dev/" target="_blank">Svelte</a> and <a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a>. In short, the library utilizes Tailwind’s utility class-based design system to quickly and easily customize and extend the look and feel of each component. Paired with Svelte’s powerful component architecture, Skeleton creates customized, responsive, and reactive interfaces for any size project.</p>
        <p>The library is fully featured and covers everything from simple buttons and tabs to more complex and interactive elements, such as data tables and popup dialog modals. It includes built-in support for both <a href="/guides/themes">themes and dark mode</a>, while providing access to bleeding edge features such as <a href="/utilities/filters">SVG filters</a>.</p>
        <p>Skeleton was founded by the team at <a href="https://www.brainandbonesllc.com/" target="_blank">Brain & Bones</a> and is publicly available in early access. The project is <a href="https://github.com/Brain-Bones/skeleton" target="_blank">open source</a> and provided for use in all projects under the <a href="https://github.com/Brain-Bones/skeleton/blob/master/LICENSE" target="_blank">MIT License</a>.</p>
    </section>

    <Divider />

    <!-- xxx -->
    <section class="space-y-4">
        <h2>The Problems</h2>
        <p>Let’s face it - creating consistent and responsive interfaces for the web can be quite a challenge. This has led to the emergence of UI toolkits such as <a href="https://getbootstrap.com/" target="_blank">Bootstrap</a>, <a href="https://material.io/design" target="_blank">Material Design</a>, and <a href="https://bulma.io/" target="_blank">Bulma</a>. These allow developers to generate consistent UI for web apps within any frontend tech stack. However, these toolkits only solve half the problem - they provide beautiful UI, but in most cases lack the accompanying functionality needed to make interactive components for your preferred framework, leaving that burden on you. In some cases, they may also require extra dependencies. Which can introduce choice paralysis when filtering through the plethora of options in modern frontend development.</p>
        <p>This has given rise to the framework-specific component libraries such as: <a href="https://material.angular.io/" target="_blank">Angular Material</a> for Angular, <a href="https://vuetifyjs.com/en/" target="_blank">Vuetify</a> for Vue, and <a href="https://mantine.dev/" target="_blank">Mantine</a> for React. These tools aim to be a complete solution that goes beyond the surface level and allow for direct integration of framework features, while providing fully interactive components, typically without the need to introduce extra packages and depedencies.</p>
        <p>Like many in the frontend development community, we have been impressed with the introduction of <a href="https://svelte.dev/" target="_blank">Svelte</a> - which provides a modern and powerful component system. We've also kept a eye on Rich Harris and his team's up-and-coming app framework, called <a href="https://kit.svelte.dev/" target="_blank">SvelteKit</a>, that provides a turnkey solution for building and iterating on web projects using Svelte and next generation tooling such as <a href="https://vitejs.dev/" target="_blank">Vite</a>. However, we’ve noted a lack of mature Svelte-focused UI component libraries. While there’s plenty of <a href="https://www.youtube.com/watch?v=RkD88ARvucM" target="_blank">options</a>, most tend to focus on Material Design guidelines and aesthetics. While a completely valid approach, we felt there was still room for a batteries included toolkit that pairs the very best of what Svelte and Tailwind have to offer. This is the reason we've introduced Skeleton.</p>
    </section>

</div>