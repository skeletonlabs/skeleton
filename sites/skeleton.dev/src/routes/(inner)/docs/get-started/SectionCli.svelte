<script lang="ts">
    import { CodeBlock } from '@skeletonlabs/skeleton';
</script>

<!-- xxx -->
<section class="space-y-4">
    <p>
        The easiest way to get started is using <code class="code">create-skeleton-app</code>.
    </p>
    <CodeBlock
        language="shell"
        code={`
npm create skeleton-app@latest my-skeleton-app
- Enable Typescript when prompted (recommended)
cd my-skeleton-app
            `}
    />
    <p>This CLI will automate the following:</p>
    <ul class="list-inside list-disc space-y-2">
        <li>The Skeleton Tailwind plugin and Component packages will be installed.</li>
        <li>Tailwind v3 will be automatically installed and setup.</li>
        <li>Basic Skeleton and Tailwind configuration be handled for you.</li>
        <li>Any prompted settings and add-ons be applied.</li>
    </ul>
</section>