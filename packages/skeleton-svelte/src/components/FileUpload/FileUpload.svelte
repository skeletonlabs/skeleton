<script lang="ts">
	import * as fileUpload from '@zag-js/file-upload';
	import { useMachine, normalizeProps } from '@zag-js/svelte';

	import type { FileUploadProps } from './types.js';

	// Props
	const {
		label = `Select file or drag here`,
		subtext = '',
		// Root
		base = '',
		classes = '',
		// Interface
		interfaceBase = 'flex flex-col items-center gap-2 hover:cursor-pointer',
		interfaceBg = 'hover:preset-tonal',
		interfaceBorder = 'border-[1px] border-dashed',
		interfaceBorderColor = 'border-surface-200-800',
		interfacePadding = 'p-4 py-10',
		interfaceRounded = 'rounded-container',
		interfaceClasses = '',
		// Interface (content)
		interfaceIcon = '',
		interfaceText = '',
		interfaceSubtext = 'text-xs opacity-60',
		// Files List
		filesListBase = 'mt-2 space-y-2',
		filesListClasses = '',
		// File
		fileBase = 'grid grid-cols-[auto_1fr_auto] rtl:grid-cols-[1fr_auto_auto] items-center',
		fileBg = 'preset-tonal',
		fileGap = 'gap-4 px-4',
		filePadding = 'py-2',
		fileRounded = 'rounded-base',
		fileClasses = '',
		// File (content)
		fileIcon = '',
		fileName = 'text-sm flex items-center gap-4',
		fileSize = 'text-xs opacity-60',
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
	const id = $props.id();
	const service = useMachine(fileUpload.machine, () => ({
		id: id,
		...zagProps
	}));
	const api = $derived(fileUpload.connect(service, normalizeProps));

	$effect.pre(() => {
		zagProps.onApiReady?.(api);
	});

	// Reactive
	const rxDisabled = $derived(service.prop('disabled') ? stateDisabled : '');
	const rxInvalid = $derived(api.rejectedFiles.length > 0 ? stateInvalid : interfaceBorderColor);
	const rxDragging = $derived(api.dragging && !children ? stateDragging : '');
</script>

<!-- @component A form component for handling file uploads. -->

<div
	{...api.getRootProps()}
	class="{base} {rxDisabled} {classes}"
	style:display={children ? 'inline-block' : 'block'}
	data-testid="uploader"
>
	<div {...api.getDropzoneProps()}>
		<!-- Hidden Input -->
		<input {...api.getHiddenInputProps()} data-testid="uploader-input" />
		<!-- Interface -->
		{#if children}
			{@render children()}
		{:else}
			<div
				class="{interfaceBase} {interfaceBg} {interfaceBorder} {interfacePadding} {interfaceRounded} {rxInvalid} {rxDragging} {interfaceClasses}"
				data-testid="uploader-interface"
			>
				<!-- Icon -->
				{#if iconInterface}<span class={interfaceIcon} data-testid="uploader-interface-icon">{@render iconInterface()}</span>{/if}
				<!-- Label -->
				{#if label}<p class={interfaceText} data-testid="uploader-interface-label">{label}</p>{/if}
				<!-- Subtext -->
				{#if subtext}<small class={interfaceSubtext} data-testid="uploader-interface-subtext">{subtext}</small>{/if}
			</div>
		{/if}
	</div>
	<!-- Files (list) -->
	{#if !children}
		<ul {...api.getItemGroupProps()} class="{filesListBase} {filesListClasses}" data-testid="uploader-files-list">
			<!-- Loop Files -->
			{#each api.acceptedFiles as file (file)}
				<!-- File -->
				<li
					{...api.getItemProps({ file })}
					class="{fileBase} {fileBg} {fileGap} {filePadding} {fileRounded} {fileClasses}"
					data-testid="uploader-file"
				>
					<!-- Name -->
					<p {...api.getItemNameProps({ file })} class={fileName} data-testid="uploader-file-name">
						{#if iconFile}<span class={fileIcon} data-testid="uploader-file-icon">{@render iconFile()}</span>{/if}
						<span>{file.name}</span>
					</p>
					<!-- Size -->
					<p {...api.getItemNameProps({ file })} class={fileSize} data-testid="uploader-file-size">
						{api.getFileSize(file)}
					</p>
					<!-- Button -->
					<button {...api.getItemDeleteTriggerProps({ file })} class={fileButton} data-testid="uploader-file-button">
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
