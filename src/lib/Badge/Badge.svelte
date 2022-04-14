<script lang="ts">

	export let position: string = '';
	export let background: string = 'bg-surface-500';
	export let textColor: string = 'text-surface-900';
	export let radius: string = 'rounded-lg';
	export let icon: boolean = false;
	
	$: cBase = `${background} ${textColor} ${$$props.class} ${radius} m-2 p-[2px] text-xs flex flex-row self-center font-semibold`;
	$: cTrail = 'w-3 self-center ml-2';
	$: cLead = 'w-3 self-center mr-2';

	$: cStyle = (icon) ? 'w-4 h-4 rounded-full justify-center items-center truncate p-[2px]' : 'pl-2 pr-2';

</script>
<div>
<!--Sub-script variant-->
{#if position == 'sub'}
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
{:else if position == 'sup'}
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
</div>


