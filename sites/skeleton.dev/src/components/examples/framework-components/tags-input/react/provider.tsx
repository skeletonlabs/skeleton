import { TagsInput, useTagsInput } from '@skeletonlabs/skeleton-react';

export default function Default() {
	const tagsInput = useTagsInput({
		defaultValue: ['Vanilla', 'Chocolate', 'Strawberry'],
	});

	return (
		<div className="w-full space-y-4">
			<TagsInput.Provider value={tagsInput}>
				<TagsInput.Control>
					<TagsInput.Context>
						{(tagsInput) =>
							tagsInput.value.map((value, index) => (
								<TagsInput.Item key={index} value={value} index={index}>
									<TagsInput.ItemPreview>
										<TagsInput.ItemText>{value}</TagsInput.ItemText>
										<TagsInput.ItemDeleteTrigger />
									</TagsInput.ItemPreview>
									<TagsInput.ItemInput />
								</TagsInput.Item>
							))
						}
					</TagsInput.Context>
					<TagsInput.Input placeholder="Add a flavor..." />
				</TagsInput.Control>
				<TagsInput.HiddenInput />
			</TagsInput.Provider>

			{/* Programmatic Controls */}
			<div className="card preset-outlined-surface-200-800 flex justify-center items-center py-4">
				<button className="btn preset-filled" onClick={() => tagsInput.clearValue()}>
					Clear Tags
				</button>
			</div>
		</div>
	);
}
