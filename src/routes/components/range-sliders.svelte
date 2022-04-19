<script lang="ts">

import Card from "$lib/Card/Card.svelte";
import RangeSlider from "$lib/RangeSlider/RangeSlider.svelte";

</script>

<div class="space-y-4">

    <section class="space-y-4">
        <Card>
            <RangeSlider size="md" label="Label" accent="accent-pink-400" showValueFront>
            </RangeSlider>
        </Card>
    </section>

</div>