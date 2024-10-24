<script lang="ts">
	import ArrowRight from 'lucide-svelte/icons/arrow-right';
	import Check from 'lucide-svelte/icons/check';

	interface ChapterCompletionProps {
		chapterTitle: string;
		completionMessage: string;
		nextChapterTitle: string;
		nextChapterLink: string;
		nextChapterButtonText: string;
	}

	const { chapterTitle, completionMessage, nextChapterTitle, nextChapterLink, nextChapterButtonText } = $props() as ChapterCompletionProps;
</script>

<div class="flex flex-col items-center gap-16 pt-16 pb-10">
	<div class="flex flex-col items-center gap-6">
		<div class="w-20 flex flex-col items-center justify-center preset-tonal-primary rounded-full aspect-square">
			<Check />
		</div>
		<div class="flex flex-col gap-1 items-center">
			<p>{chapterTitle}</p>
			<p class="text-surface-600-400">{completionMessage}</p>
		</div>
	</div>
	<div class="w-full border border-surface-100-900 p-6 rounded-container flex flex-col items-center gap-8">
		<div class="flex flex-col items-center gap-1">
			<p class="text-surface-600-400">Next Up</p>
			<h6 class="h6">{nextChapterTitle}</h6>
		</div>
		<a class="btn preset-filled-primary-500" href={nextChapterLink}>
			{nextChapterButtonText}
			<ArrowRight size="20" />
		</a>
	</div>
</div>
