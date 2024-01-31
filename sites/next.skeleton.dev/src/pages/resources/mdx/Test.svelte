<script lang="ts">
    interface CardProps {
        name: string
    }

    let { name = '' } = $props<CardProps>()
</script>

<div class="bg-orange-500 p-4">
    {name}
</div>
