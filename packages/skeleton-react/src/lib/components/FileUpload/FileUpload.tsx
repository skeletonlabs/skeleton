'use client';

import React, { useId } from 'react';

import * as fileUpload from '@zag-js/file-upload';
import { normalizeProps, useMachine } from '@zag-js/react';
import { FileUploadProps } from './types.js';

export const FileUpload: React.FC<FileUploadProps> = ({
	dropzoneText = `Select file or drag here`,
	dropzoneSubtext = '',
	// Root
	base = '',
	classes = '',
	// Interface
	interfaceBase = 'flex flex-col items-center gap-2',
	interfaceBg = 'hover:preset-tonal',
	interfaceBorder = 'border-[1px] border-dashed',
	interfaceBorderColor = 'border-surface-200-800',
	interfaceBorderColorInvalid = 'border-error-500',
	interfacePadding = 'p-4 py-10',
	interfaceRounded = 'rounded-container',
	interfaceIcon = '',
	interfaceText = '',
	interfaceSubtext = 'type-scale-1 opacity-60',
	interfaceClasses = '',
	// Files List
	filesListBase = 'mt-2 space-y-2',
	filesListClasses = '',
	// Files
	filesBase = 'preset-tonal flex justify-between gap-4 px-4 py-2 rounded type-scale-1',
	fileName = 'flex items-center gap-2',
	fileButton = '',
	filesClasses = '',
	// State
	stateDragging = 'preset-filled-primary-500',
	// Children
	children,
	iconDropzone,
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
	const rxDragging = api.dragging ? stateDragging : '';
	// TODO: expand this to handle all error states
	const rxError = api.rejectedFiles.length > 0 ? interfaceBorderColorInvalid : interfaceBorderColor;

	return (
		<div {...api.getRootProps()} className={`${base} ${classes}`} style={{ display: children ? 'inline-block' : 'block' }}>
			<div {...api.getDropzoneProps()}>
				{/* Hidden Input */}
				<input {...api.getHiddenInputProps()} />
				{/* Interface */}
				{children ?? (
					<div
						className={`${interfaceBase} ${interfaceBg} ${interfaceBorder} ${interfacePadding} ${interfaceRounded} ${rxDragging} ${rxError} ${interfaceClasses}`}
					>
						{/* Icon */}
						{iconDropzone && <span className={interfaceIcon}>{iconDropzone}</span>}
						{/* Text */}
						{dropzoneText && <p className={interfaceText}>{dropzoneText}</p>}
						{/* Subtext */}
						{dropzoneSubtext && <small className={interfaceSubtext}>{dropzoneSubtext}</small>}
					</div>
				)}
			</div>
			{/* Files (list) */}
			{!children && (
				<ul {...api.getItemGroupProps()} className={`${filesListBase} ${filesListClasses}`}>
					{api.acceptedFiles.map((file) => (
						// File
						<li key={file.name} {...api.getItemProps({ file })} className={`${filesBase} ${filesClasses}`}>
							{/* Name */}
							<p {...api.getItemNameProps({ file })} className={fileName}>
								{iconFile && <span>{iconFile}</span>}
								<span>{file.name}</span>
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
