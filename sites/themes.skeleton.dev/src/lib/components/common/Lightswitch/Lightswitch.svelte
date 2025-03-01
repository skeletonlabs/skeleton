<script lang="ts">
import IconMoon from "lucide-svelte/icons/moon";
import IconSun from "lucide-svelte/icons/sun";

let darkMode = $state(true);

function toggleDarkMode() {
	darkMode = !darkMode;
	darkMode
		? document.documentElement.classList.add("dark")
		: document.documentElement.classList.remove("dark");
}
</script>

<button class="btn-icon hover:preset-tonal" onclick={toggleDarkMode}>
  {#if darkMode}
    <IconSun size={20} />
  {:else}
    <IconMoon size={20} />
  {/if}
</button>
