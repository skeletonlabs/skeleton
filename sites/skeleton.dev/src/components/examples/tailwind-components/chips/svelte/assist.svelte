<script lang="ts">
	import AlarmClockIcon from "@lucide/svelte/icons/alarm-clock";
	import AppWindowIcon from "@lucide/svelte/icons/app-window";
	import SunIcon from "@lucide/svelte/icons/sun";
</script>

<div class="card preset-filled-surface-100-900 w-full max-w-md space-y-4 overflow-hidden p-4">
	<header>
		<h2 class="h6">Home Automation</h2>
	</header>
	<article class="space-y-4">
		<p class="opacity-60">
			Control your smart home with a single tap. Choose one of the quick actions below to get
			started.
		</p>
	</article>
	<hr class="hr" />
	<footer class="flex [scrollbar-width:none] items-center justify-start gap-2 overflow-x-auto">
		<button type="button" class="chip preset-outlined-surface-400-600">
			<SunIcon size={14} />
			<span>Turn on lights</span>
		</button>
		<button type="button" class="chip preset-outlined-surface-400-600">
			<AlarmClockIcon size={14} />
			<span>Set alarm</span>
		</button>
		<button type="button" class="chip preset-outlined-surface-400-600">
			<AppWindowIcon size={14} />
			<span>Close blinds</span>
		</button>
	</footer>
</div>
