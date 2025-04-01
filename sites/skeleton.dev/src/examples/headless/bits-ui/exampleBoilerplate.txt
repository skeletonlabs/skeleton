<script lang="ts">
	import { Calendar } from 'bits-ui';
	import { getLocalTimeZone, today } from '@internationalized/date';

	const isDateUnavailable: Calendar.RootProps['isDateUnavailable'] = (date) => {
		return date.day === 17 || date.day === 18;
	};

	let value = $state(today(getLocalTimeZone()));
</script>

<Calendar.Root {isDateUnavailable} weekdayFormat="short" fixedWeeks={true} type="single" bind:value>
	{#snippet children({ months, weekdays })}
		<Calendar.Header>
			<Calendar.PrevButton>
				<span>&larr;</span>
			</Calendar.PrevButton>
			<Calendar.Heading />
			<Calendar.NextButton>
				<span>&rarr;</span>
			</Calendar.NextButton>
		</Calendar.Header>

		{#each months as month}
			<Calendar.Grid>
				<Calendar.GridHead>
					<Calendar.GridRow>
						{#each weekdays as day}
							<Calendar.HeadCell>
								{day}
							</Calendar.HeadCell>
						{/each}
					</Calendar.GridRow>
				</Calendar.GridHead>
				<Calendar.GridBody>
					{#each month.weeks as weekDates}
						<Calendar.GridRow>
							{#each weekDates as date}
								<Calendar.Cell {date} month={month.value}>
									<Calendar.Day />
								</Calendar.Cell>
							{/each}
						</Calendar.GridRow>
					{/each}
				</Calendar.GridBody>
			</Calendar.Grid>
		{/each}
	{/snippet}
</Calendar.Root>
