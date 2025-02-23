'use client';

import React, { useId } from 'react';
import * as tagsInput from '@zag-js/tags-input';
import { useMachine, normalizeProps } from '@zag-js/react';
import { TagsInputProps } from './types.js';

export const TagsInput: React.FC<TagsInputProps> = ({
	placeholder = '',
	// Root
	base = 'grid input',
	gap = 'gap-2',
	padding = 'p-3',
	classes = '',
	// Input: Add
	inputBase = 'input-ghost',
	inputClasses = '',
	// Tag List
	tagListBase = 'flex gap-2',
	tagListClasses = '',
	// Tag
	tagBase = 'chip',
	tagBackground = 'preset-filled',
	tagClasses = '',
	// Input: Edit
	inputEditBase = 'chip-input -translate-y-0.25',
	tagEditBackground = 'preset-outlined-surface-200-800',
	inputEditClasses,
	// Delete Button
	buttonDeleteBase = '',
	buttonDeleteClasses = '',
	// Snippets
	buttonDelete,
	// State
	stateDisabled = 'disabled',
	// Zag
	...zagProps
}) => {
	// Zag
	const service = useMachine(tagsInput.machine, {
		id: useId(),
		...zagProps
	});
	const api = tagsInput.connect(service, normalizeProps);

	// Reactive
	const rxDisabled = service.prop('disabled') ? stateDisabled : '';

	return (
		<div {...api.getRootProps()} className={`${base} ${padding} ${gap} ${rxDisabled} ${classes}`} data-testid="tags">
			{/* Input */}
			<input {...api.getInputProps()} placeholder={placeholder} className={`${inputBase} ${inputClasses}`} data-testid="tags-input-add" />
			{/* Tag List */}
			{api.value.length > 0 && (
				<div className={`${tagListBase} ${tagListClasses}`} data-testid="tags-list">
					{/* {#each api.value as value, index (value)}{/each} */}
					{api.value.map((value, index) => {
						const itemState = api.getItemState({ index, value });
						return (
							// Tag
							<div key={value} {...api.getItemProps({ value, index })} data-testid="tags-tag">
								{/* Display */}
								<div
									{...api.getItemPreviewProps({ index, value })}
									className={`${tagBase} ${tagBackground} ${tagClasses}`}
									style={{ display: itemState.editing ? 'none' : '' }}
									data-testid="tag-display"
								>
									<span>{value}</span>
									{/* Delete Button */}
									<button
										{...api.getItemDeleteTriggerProps({ index, value })}
										className={`${buttonDeleteBase} ${buttonDeleteClasses}`}
										data-testid="tag-delete"
									>
										{buttonDelete ?? <strong>&times;</strong>}
									</button>
								</div>
								{/* Editing */}
								<input
									{...api.getItemInputProps({ index, value })}
									className={`${inputEditBase} ${tagEditBackground} ${inputEditClasses}`}
									style={{ display: itemState.editing ? '' : 'none' }}
									data-testid="tags-input-edit"
								/>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};
