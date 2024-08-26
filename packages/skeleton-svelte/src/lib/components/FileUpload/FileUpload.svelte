<script lang="ts">
	import * as fileUpload from '@zag-js/file-upload';
	import { useMachine, normalizeProps } from '@zag-js/svelte';
	import { useId } from '$lib/internal/use-id.js';
	import type { FileUploadProps } from './types.js';

	// Props
	let {
		label = `Select file or drag here`,
		subtext = '',
		// Root
		base = '',
		classes = '',
		// Interface
		interfaceBase = 'flex flex-col items-center gap-2',
		interfaceBg = 'hover:preset-tonal',
		interfaceBorder = 'border-[1px] border-dashed',
		interfaceBorderColor = 'border-surface-200-800',
		interfacePadding = 'p-4 py-10',
		interfaceRounded = 'rounded-container',
		interfaceClasses = '',
		// Interface (content)
		interfaceIcon = '',
		interfaceText = '',
		interfaceSubtext = 'type-scale-1 opacity-60',
		// Files List
		filesListBase = 'mt-2 space-y-2',
		filesListClasses = '',
		// File
		fileBase = 'grid grid-cols-[auto_auto_1fr_auto] rtl:grid-cols-[auto_1fr_auto_auto] items-center',
		fileBg = 'preset-tonal',
		fileGap = 'gap-4 px-4',
		filePadding = 'py-2',
		fileRounded = 'rounded',
		fileClasses = '',
		// File (content)
		fileIcon = '',
		fileName = 'type-scale-2',
		fileSize = 'type-scale-1 opacity-60',
		fileButton = '',
		// State
		stateInvalid = 'border-error-500',
		stateDisabled = 'disabled',
		stateDragging = 'preset-filled-primary-500',
		// Children
		children,
		iconInterface,
		iconFile,
		iconFileRemove,
		// Zag
		...zagProps
	}: FileUploadProps = $props();

	// Zag
	const [snapshot, send] = useMachine(fileUpload.machine({ id: useId() }), { context: zagProps });
	const api = $derived(fileUpload.connect(snapshot, send, normalizeProps));

	// Reactive
	const rxDisabled = $derived(snapshot.context.disabled ? stateDisabled : '');
	const rxInvalid = $derived(api.rejectedFiles.length > 0 ? stateInvalid : interfaceBorderColor);
	const rxDragging = $derived(api.dragging && !children ? stateDragging : '');
</script>

<!-- @component A form component for handling file uploads. -->

<div {...api.getRootProps()} class="{base} {rxDisabled} {classes}" style:display={children ? 'inline-block' : 'block'}>
	<div {...api.getDropzoneProps()}>
		<!-- Hidden Input -->
		<input {...api.getHiddenInputProps()} />
		<!-- Interface -->
		{#if children}
			{@render children()}
		{:else}
			<div
				class="{interfaceBase} {interfaceBg} {interfaceBorder} {interfacePadding} {interfaceRounded} {rxInvalid} {rxDragging} {interfaceClasses}"
			>
				<!-- Icon -->
				{#if iconInterface}<span class={interfaceIcon}>{@render iconInterface()}</span>{/if}
				<!-- Text -->
				{#if label}<p class={interfaceText}>{label}</p>{/if}
				<!-- Subtext -->
				{#if subtext}<small class={interfaceSubtext}>{subtext}</small>{/if}
			</div>
		{/if}
	</div>
	<!-- Files (list) -->
	{#if !children}
		<ul {...api.getItemGroupProps()} class="{filesListBase} {filesListClasses}">
			<!-- Loop Files -->
			{#each api.acceptedFiles as file, i}
				<!-- File -->
				<li {...api.getItemProps({ file })} class="{fileBase} {fileBg} {fileGap} {filePadding} {fileRounded} {fileClasses}">
					<span class={fileIcon}>
						{#if iconFile}
							{@render iconFile()}
						{:else}
							&bull;
						{/if}
					</span>
					<!-- Name -->
					<p {...api.getItemNameProps({ file })} class={fileName}>
						{file.name}
					</p>
					<!-- Size -->
					<p {...api.getItemNameProps({ file })} class={fileSize}>
						{(file.size / 100000).toFixed(1)} mb
					</p>
					<!-- Button -->
					<button {...api.getItemDeleteTriggerProps({ file })} class={fileButton}>
						{#if iconFileRemove}
							{@render iconFileRemove()}
						{:else}
							<span>&#x2715;</span>
						{/if}
					</button>
				</li>
			{/each}
		</ul>
	{/if}
</div>
