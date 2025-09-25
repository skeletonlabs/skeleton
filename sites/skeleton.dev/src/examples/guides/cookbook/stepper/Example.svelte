<script lang="ts">
	import IconArrowLeft from '@lucide/svelte/icons/arrow-left';
	import IconArrowRight from '@lucide/svelte/icons/arrow-right';

	// Source Data
	const steps = [
		{ label: 'Step 1', description: 'The description of step 1.' },
		{ label: 'Step 2', description: 'The description of step 2.' },
		{ label: 'Step 3', description: 'The description of step 3.' },
		{ label: 'Step 4', description: 'The description of step 4.' },
		{ label: 'Step 5', description: 'The description of step 5.' },
	];

	// Reactive
	let currentStep = $state(0);
	const isFirstStep = $derived(currentStep === 0);
	const isLastStep = $derived(currentStep === steps.length - 1);

	/** Determine if on the current step. */
	function isCurrentStep(index: number) {
		return currentStep === index;
	}

	/** Jump to a particular step. */
	function setStep(index: number) {
		currentStep = index;
	}

	/** Progress to the previous step. */
	function prevStep() {
		currentStep--;
	}

	/** Progress to the next step. */
	function nextStep() {
		currentStep++;
	}
</script>

<div class="w-full">
	<!-- Stepper -->
	<div class="space-y-8">
		<!-- Timeline -->
		<div class="relative">
			<!-- Numerals -->
			<div class="flex justify-between items-center gap-4">
				{#each steps as step, i (step)}
					<!-- Numeral Button -->
					<button
						class="btn-icon btn-icon-sm rounded-full {isCurrentStep(i) ? 'preset-filled-primary-500' : 'preset-filled-surface-200-800'}"
						onclick={() => setStep(i)}
						title="Go to {step.label}"
						aria-label="Go to {step.label}"
					>
						<span class="font-bold">{i + 1}</span>
					</button>
				{/each}
			</div>
			<!-- Line -->
			<hr class="hr !border-surface-200-800 absolute top-[50%] left-0 right-0 z-[-1]" />
		</div>
		<!-- Loop all steps -->
		{#each steps as step, i (step)}
			<!-- Filter to current step only -->
			{#if isCurrentStep(i)}
				<!-- Individual steps -->
				<div class="card bg-surface-100-900 p-10 space-y-2 text-center">
					<h2 class="h3">{step.label}</h2>
					<p>{step.description}</p>
				</div>
			{/if}
		{/each}
		<!-- Navigation -->
		<nav class="flex justify-between items-center gap-4">
			<!-- Back Button -->
			<button type="button" class="btn preset-tonal hover:preset-filled" onclick={prevStep} disabled={isFirstStep}>
				<IconArrowLeft size={18} />
				<span>Previous</span>
			</button>
			<!-- Next Button -->
			<button type="button" class="btn preset-tonal hover:preset-filled" onclick={nextStep} disabled={isLastStep}>
				<span>Next</span>
				<IconArrowRight size={18} />
			</button>
		</nav>
	</div>
</div>
