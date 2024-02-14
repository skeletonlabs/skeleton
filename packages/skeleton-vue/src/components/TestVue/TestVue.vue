<script setup lang="ts">
	defineProps<{ label:string }>()
</script>
<template>
	<button type="button" class="btn"> {{label}}</button>
</template>