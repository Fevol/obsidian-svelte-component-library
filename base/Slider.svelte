<script lang="ts">
	export let min: number = 1;
	export let max: number = 100;
	export let step: number = 1;
	export let value: number;
	export let onChange: (value: number) => void;
</script>


<input
	type="range"
	class="slider"

	{value}
	{min}
	{max}
	{step}
	on:change={() => onChange(value)}
/>

