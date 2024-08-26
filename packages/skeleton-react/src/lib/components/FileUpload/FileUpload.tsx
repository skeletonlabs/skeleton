'use client';

import React, { useId } from 'react';

import * as fileUpload from '@zag-js/file-upload';
import { normalizeProps, useMachine } from '@zag-js/react';
import { FileUploadProps } from './types.js';

export const FileUpload: React.FC<FileUploadProps> = ({
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
}) => {
	// Zag
	const [state, send] = useMachine(
		fileUpload.machine({
			id: useId()
		}),
		{ context: zagProps }
	);
	const api = fileUpload.connect(state, send, normalizeProps);

	// Reactive
	const rxDisabled = state.context.disabled ? stateDisabled : '';
	const rxInvalid = api.rejectedFiles.length > 0 ? stateInvalid : interfaceBorderColor;
	const rxDragging = api.dragging && !children ? stateDragging : '';

	return (
		<div {...api.getRootProps()} className={`${base} ${rxDisabled} ${classes}`} style={{ display: children ? 'inline-block' : 'block' }}>
			<div {...api.getDropzoneProps()}>
				{/* Hidden Input */}
				<input {...api.getHiddenInputProps()} />
				{/* Interface */}
				{children ?? (
					<div
						className={`${interfaceBase} ${interfaceBg} ${interfaceBorder} ${interfacePadding} ${interfaceRounded} ${rxInvalid} ${rxDragging} ${interfaceClasses}`}
					>
						{/* Icon */}
						{iconInterface && <span className={interfaceIcon}>{iconInterface}</span>}
						{/* Text */}
						{label && <p className={interfaceText}>{label}</p>}
						{/* Subtext */}
						{subtext && <small className={interfaceSubtext}>{subtext}</small>}
					</div>
				)}
			</div>
			{/* Files (list) */}
			{!children && (
				<ul {...api.getItemGroupProps()} className={`${filesListBase} ${filesListClasses}`}>
					{api.acceptedFiles.map((file) => (
						// File
						<li
							key={file.name}
							{...api.getItemProps({ file })}
							className={`${fileBase} ${fileBg} ${fileGap} ${filePadding} ${fileRounded} ${fileClasses}`}
						>
							<span className={fileIcon}>{iconFile ?? '•'}</span>
							{/* Name */}
							<p {...api.getItemNameProps({ file })} className={fileName}>
								{file.name}
							</p>
							{/* Size */}
							<p {...api.getItemNameProps({ file })} className={fileSize}>
								{(file.size / 100000).toFixed(1)} mb
							</p>
							{/* Button */}
							<button {...api.getItemDeleteTriggerProps({ file })} className={fileButton}>
								{iconFileRemove ?? <span>&#x2715;</span>}
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
