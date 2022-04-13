<script lang="ts">
import { compute_rest_props } from "svelte/internal";


	export let variant: string = '';
	export let background: string = 'bg-surface-400';
	export let textColor: string = 'text-surface-900';
	export let radius: string = 'rounded-lg';
	export let icon: boolean = false;
	
	$: cBase = `${background} ${textColor} ${$$props.class} ${radius} m-2 p-[2px] text-xs flex flex-row self-center font-semibold`;
	$: cTrail = 'w-3 self-center ml-2';
	$: cLead = 'w-3 self-center mr-2';

	$: cStyle = (icon) ? 'w-4 h-4 rounded-full justify-center items-center truncate p-[2px]' : 'pl-2 pr-2';

</script>
<!--Sub-script variant-->
{#if variant == 'sub'}
	<sub class="whitespace-nowrap {cBase} {cStyle} h-min">
		{#if $$slots.lead}
			<div class="{cLead}">
				<slot name="lead" />
			</div>
		{/if}
		<slot />
		{#if $$slots.trail}
		<div class="{cTrail}">
			<slot name="trail" />
		</div>
		{/if}
	</sub>
<!--Super-script variant-->
{:else if variant == 'sup'}
	<sup class="whitespace-nowrap {cBase} {cStyle}">
		{#if $$slots.lead}
			<div class="{cLead}">
				<slot name="lead" />
			</div>
		{/if}		
		<slot />
		{#if $$slots.trail}
		<div class="{cTrail}">
			<slot name="trail" />
		</div>
		{/if}
	</sup>
<!--Regular variant-->
{:else}
	<span class="whitespace-nowrap {cBase} {cStyle}">
		{#if $$slots.lead}
			<div class="{cLead}">
				<slot name="lead" />
			</div>
		{/if}
		<slot />
		{#if $$slots.trail}
			<div class="{cTrail}">
				<slot name="trail" />
			</div>		
		{/if}
	</span>
{/if}


