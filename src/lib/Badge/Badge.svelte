<script lang="ts">
	export let variant: string = '';
	export let background: string = 'bg-surface-400';
	export let textColor: string = 'text-surface-900';
	export let radius: string = 'rounded-lg';
	
	$: cBase = `${background} ${textColor} ${radius} m-2 text-sm flex flex-row self-center font-semibold w-min pl-2 pr-2`;

</script>

{#if variant == 'sub'}
	<sub class="whitespace-nowrap {cBase} h-min">
		{#if $$slots.lead}
			<div class="w-3 self-center mr-2">
				<slot name="lead" />
			</div>
		{/if}
		<slot />
		{#if $$slots.trail}
		<div class='ml-2'>
			<slot name="trail" />
		</div>
		{/if}
	</sub>
{:else if variant == 'sup'}
	<sup class="whitespace-nowrap {cBase}">
		{#if $$slots.lead}
			<div class="w-3 self-center mr-2">
				<slot name="lead" />
			</div>
		{/if}
		<slot />
		{#if $$slots.trail}
		<div class='ml-2'>
			<slot name="trail" />
		</div>
		{/if}
	</sup>

{:else if variant == 'icon'}
<div>
	<div class='flex rounded-full w-8 h-8 justify-center overflow-clip {background}'>
		<div class='w-6 self-center'><slot /></div>
	</div>
</div>
{:else}
	<span class="whitespace-nowrap {cBase}">
		{#if $$slots.lead}
			<div class="w-3 self-center mr-2">
				<slot name="lead" />
			</div>
		{/if}
		<slot />
		{#if $$slots.trail}
			<div class='ml-2'>
				<slot name="trail" />
			</div>		
		{/if}
	</span>
{/if}

