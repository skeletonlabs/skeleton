<script lang="ts">
    import Card from "$lib/Card/Card.svelte";
    import Button from "$lib/Button/Button.svelte";
    import CodeBlock from "$lib/CodeBlock/CodeBlock.svelte";
    import Divider from "$lib/Divider/Divider.svelte";
    import Alert from "$lib/Alert/Alert.svelte";
</script>

<div class="space-y-8 lg:text-left">

    <!-- Header -->
    <header class="flex items-center flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
        <!-- Logo -->
        <div class="bg-primary-500 bg-gradient-to-br from-primary-500 to-accent-500 p-8 rounded-2xl w-56">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.999 511.999">
                <path class="fill-surface-50 drop-shadow-xl" d="M511.9,353.522c-0.901-18.707-9.032-35.943-22.898-48.534c-12.93-11.742-29.664-18.21-47.119-18.21
                    c-16.304,0-32.055,5.717-44.516,15.937l-55.972-50.828l50.823-55.965c11.494,7.731,25.051,11.904,39.074,11.904
                    c19.737,0,38.663-8.376,51.924-22.979c12.591-13.864,19.029-31.802,18.128-50.509s-9.032-35.943-22.896-48.534
                    c-12.921-11.734-29.648-18.196-47.096-18.196c-1.469,0-2.937,0.046-4.401,0.137c-0.609-18.776-8.722-36.627-22.937-49.536
                    C391.083,6.467,374.349,0,356.894,0c-19.736,0-38.662,8.376-51.923,22.979c-12.591,13.864-19.029,31.802-18.128,50.509
                    c0.735,15.268,6.288,29.556,15.842,41.138l-50.816,55.958l-55.958-50.816c8.397-12.446,12.551-27.204,11.816-42.47
                    c-0.901-18.707-9.032-35.943-22.898-48.534c-12.93-11.742-29.664-18.21-47.119-18.21c-19.737,0-38.663,8.376-51.924,22.979
                    C72.877,47.748,66.518,66.296,67.715,85.044c-18.867,0.646-36.805,8.919-49.524,22.923c-25.99,28.621-23.852,73.052,4.77,99.043
                    c12.932,11.744,29.665,18.21,47.119,18.208c16.305-0.001,32.055-5.717,44.516-15.936l55.972,50.828l-50.823,55.965
                    c-11.495-7.731-25.052-11.904-39.075-11.904c-19.737,0-38.662,8.376-51.924,22.979c-25.991,28.621-23.85,73.052,4.77,99.043
                    c12.921,11.734,29.648,18.196,47.097,18.196c1.468,0,2.936-0.046,4.4-0.137c0.609,18.776,8.722,36.628,22.937,49.536
                    c12.93,11.741,29.664,18.208,47.119,18.21c0.001,0,0.001,0,0.003,0c19.736,0,38.659-8.376,51.92-22.979
                    c12.591-13.864,19.029-31.802,18.128-50.509c-0.735-15.268-6.288-29.556-15.842-41.138l50.816-55.958l55.964,50.822
                    c-19.089,28.386-14.981,67.335,11.076,90.999c12.93,11.742,29.664,18.21,47.119,18.21c19.737,0,38.662-8.376,51.924-22.979
                    c12.909-14.215,19.268-32.763,18.071-51.511c18.869-0.646,36.807-8.919,49.524-22.923
                    C506.363,390.167,512.8,372.229,511.9,353.522z M324.141,121.328c1.817-2.002,2.766-4.643,2.635-7.344s-1.328-5.238-3.329-7.056
                    c-9.833-8.929-15.6-21.154-16.239-34.42c-0.639-13.267,3.927-25.99,12.856-35.823c9.406-10.357,22.83-16.297,36.83-16.297
                    c12.376,0,24.242,4.587,33.414,12.914c12.509,11.359,18.352,28.125,15.633,44.848c-0.555,3.408,0.654,6.863,3.209,9.183
                    c2.554,2.32,6.11,3.189,9.449,2.312c4.157-1.094,8.448-1.649,12.754-1.649c12.37,0,24.228,4.582,33.389,12.9
                    c9.833,8.93,15.6,21.154,16.239,34.421c0.639,13.267-3.927,25.988-12.856,35.821c-9.404,10.357-22.83,16.297-36.831,16.297
                    c-12.376,0-24.24-4.587-33.413-12.914c-2.001-1.817-4.643-2.767-7.344-2.636c-2.701,0.13-5.238,1.328-7.056,3.329l-57.177,62.964
                    l-59.341-53.888L324.141,121.328z M187.825,390.671c-1.817,2.002-2.766,4.643-2.636,7.344s1.328,5.238,3.329,7.056
                    c9.833,8.929,15.6,21.154,16.239,34.42c0.639,13.267-3.927,25.99-12.856,35.823c-9.405,10.357-22.827,16.297-36.827,16.297
                    c0,0-0.001,0-0.003,0c-12.376,0-24.243-4.587-33.414-12.914c-12.509-11.359-18.352-28.125-15.634-44.849
                    c0.555-3.406-0.654-6.863-3.209-9.183c-1.899-1.725-4.35-2.648-6.853-2.648c-0.866,0-1.737,0.11-2.595,0.336
                    c-4.157,1.094-8.448,1.649-12.752,1.649c-12.372,0-24.23-4.582-33.391-12.9c-20.299-18.434-21.816-49.945-3.383-70.244
                    c9.404-10.357,22.83-16.297,36.831-16.297c12.376,0,24.242,4.587,33.413,12.914c4.167,3.785,10.617,3.474,14.4-0.693
                    l57.177-62.964l59.341,53.888L187.825,390.671z M478.678,390.325c-9.396,10.346-22.815,16.282-36.815,16.282
                    c-2.685,0-5.387-0.217-8.034-0.648c-3.404-0.553-6.863,0.654-9.183,3.209s-3.19,6.111-2.312,9.449
                    c4.314,16.384,0.107,33.634-11.252,46.143c-9.406,10.357-22.83,16.297-36.831,16.297c-12.376,0-24.24-4.587-33.413-12.914
                    c-20.299-18.434-21.816-49.943-3.383-70.242c3.785-4.167,3.474-10.616-0.693-14.4l-215.452-195.66
                    c-1.953-1.774-4.405-2.648-6.851-2.648c-2.774,0-5.537,1.125-7.549,3.341c-9.404,10.356-22.83,16.296-36.832,16.297
                    c-12.374,0-24.239-4.586-33.411-12.914c-20.299-18.434-21.816-49.945-3.382-70.242c9.398-10.348,22.815-16.282,36.815-16.282
                    c2.685,0,5.388,0.219,8.033,0.648c3.412,0.556,6.864-0.654,9.183-3.209c2.32-2.555,3.19-6.111,2.312-9.449
                    c-4.314-16.384-0.107-33.634,11.252-46.143c9.404-10.357,22.83-16.297,36.831-16.297c12.376,0,24.241,4.587,33.413,12.914
                    c9.833,8.929,15.6,21.154,16.239,34.421c0.639,13.267-3.927,25.988-12.857,35.821c-1.817,2.001-2.766,4.643-2.636,7.344
                    c0.13,2.701,1.328,5.239,3.329,7.056l215.456,195.658c2.002,1.817,4.64,2.771,7.344,2.635c2.701-0.13,5.239-1.328,7.056-3.329
                    c9.405-10.357,22.83-16.297,36.831-16.297c12.376,0,24.24,4.587,33.413,12.914c9.833,8.929,15.6,21.154,16.239,34.421
                    C492.174,367.769,487.608,380.492,478.678,390.325z"/>
            </svg>
        </div>
        <!-- Intro -->
        <h2 class="text-2xl md:text-3xl lg:text-4xl">Skeleton is a component library that allows you to build web apps faster utilizing <a href="https://svelte.dev/" target="_blank">Svelte</a> + <a href="https://tailwindcss.com/" target="_blank">Tailwind</a>.</h2>
    </header>

    <!-- Warning -->
    <Alert background="bg-warning-500" visible={true}>
        <svelte:fragment slot="lead">
            <svg class="w-8 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/></svg>
        </svelte:fragment>
        <svelte:fragment slot="title">Warning</svelte:fragment>
        <svelte:fragment slot="message">Skeleton is in the early stages of development. Features may change frequently. Use at your own risk.</svelte:fragment>      
    </Alert>

    <Divider display="dotted" />

    <!-- Install -->
    <section class="space-y-4">
        <h2>Install</h2>
        <p>Follow the instructions below to get started.</p>
        <!-- Create SvelteKit Project -->
        <h4>Create a SvelteKit Project</h4>
        <p>See the <a href="https://kit.svelte.dev/docs/introduction#getting-started" target="_blank">official documentation</a>.</p>
        <CodeBlock language="console" code={`npm init svelte@next my-app\ncd my-app\nnpm install\nnpm run dev`}></CodeBlock>
        <!-- Install Tailwind -->
        <h4>Install Tailwind</h4>
        <p><a href="https://github.com/svelte-add/tailwindcss" target="_blank">Svelte-Add</a> makes this quick and painless.</p>
        <CodeBlock language="console" code={`npx svelte-add@latest tailwindcss`}></CodeBlock>
        <!-- Install Skeleton -->
        <h4>Install Skeleton</h4>
        <CodeBlock language="console" code={`npm install --save-dev @brainandbones/skeleton`}></CodeBlock>
    </section>

    <Divider />

    <section class="space-y-4">
        <h2>Next Steps</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <!-- Tailwind -->
            <Card class="space-y-4 text-center">
                <h4>Configure Tailwind</h4>
                <p>Configure required settings.</p>
                <Button variant="filled-accent" href="/docs/tailwind">View Guide</Button>
            </Card>
            <!-- Themes -->
            <Card class="space-y-4 text-center">
                <h4>Create a Theme</h4>
                <p>Generate a custom theme.</p>
                <Button variant="filled-accent" href="/docs/themes">View Guide</Button>
            </Card>
            <!-- Themes -->
            <Card class="space-y-4 text-center">
                <h4>Add a Component</h4>
                <p>Add your first component.</p>
                <Button variant="filled-accent" href="/components/buttons">Add Button</Button>
            </Card>
        </div>
    </section>

    <Divider />
    
    <!-- Recommendations -->
    <section class="space-y-4">
        <h2>Recommended Extensions</h2>
        <p>Below is a list of plugins and tooling we recommend you use alongside Skeleton.</p>
        <div class="space-y-4">
            <h6>Official Tailwind Plugins</h6>
            <nav class="flex flex-row space-x-2">
                <Button variant="filled-accent" href="https://tailwindcss.com/docs/typography-plugin" target="_blank">Typography</Button>
                <Button variant="filled-accent" href="https://github.com/tailwindlabs/tailwindcss-forms" target="_blank">Forms</Button>
            </nav>
        </div>
    </section>

    <Divider />
    
    <!-- Contributions -->
    <section class="space-y-4">
        <h3>Contributions</h3>
        <p>We'll provide official instructions for contributing to Skeleton soon.</p>
    </section>

</div>
