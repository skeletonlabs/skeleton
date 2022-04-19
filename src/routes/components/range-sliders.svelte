<script lang="ts">

import Card from "$lib/Card/Card.svelte";
import RangeSlider from "$lib/RangeSlider/RangeSlider.svelte";

let tickLabels = ['0','20', "40", "60", "80", "100"];
let ticks = ["|", "|", "|", "|", "|", "|"];
</script>

<div class="space-y-4">
    <h1>TESTING</h1>

    <p>DEFAULT</p>

    <section class="space-y-4">
        <Card>
            <RangeSlider size="md" label="Label" showValueFront>
            </RangeSlider>
        </Card>
    </section>

    <p>Custom Color + Value After</p>
    <section class="space-y-4">
        <Card>
            <RangeSlider min={0} max={100} step={20} size="md" label="Label" accent="accent-pink-400">
                
            </RangeSlider>
        </Card>
    </section>

    <p>Tickmarks/tick labels</p>
    <section class="space-y-4">
        <Card>
            <RangeSlider tickmarks={tickLabels} min={0} max={100} step={20} size="md" label="Label" accent="accent-primary-400" showValueFront />
            <RangeSlider tickmarks={ticks} min={0} max={100} step={20} size="md" label="Label" accent="accent-primary-400" showValueFront />
        </Card>
    </section>

    <p>Sizes</p>
    <section class="space-y-4">
        <Card>
            <RangeSlider size='sm' min={0} max={100} step={20} label="Small" accent="accent-primary-400" showValueFront />
            <RangeSlider size='md' min={0} max={100} step={20} label="Medium" accent="accent-warning-400" showValueFront />
            <RangeSlider size='lg' min={0} max={100} step={20} label="Large" accent="accent-primary-400" showValueFront />
        </Card>
    </section>

</div>