<script lang="ts">
	import { Carousel } from '../../src/index.js';
</script>

<Carousel slideCount={3} data-testid="root">
	<Carousel.Control data-testid="control">
		<Carousel.PrevTrigger data-testid="prev-trigger" />
		<Carousel.NextTrigger data-testid="next-trigger" />
		<Carousel.AutoplayTrigger data-testid="autoplay-trigger" />
	</Carousel.Control>
	<Carousel.ItemGroup data-testid="item-group">
		<Carousel.Item index={0} data-testid="item" />
	</Carousel.ItemGroup>
	<Carousel.IndicatorGroup data-testid="indicator-group">
		<Carousel.Indicator index={0} data-testid="indicator" />
	</Carousel.IndicatorGroup>
</Carousel>
