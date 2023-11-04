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
	on:input={(e) => {
		const tooltip_el = document.body.lastChild;
		console.log(e.target.valueAsNumber)
		if (tooltip_el.classList.contains("tooltip"))
			tooltip_el.firstChild.textContent = e.target.valueAsNumber.toString();
	}}
	on:change={(e) => {
		onChange(e.target.valueAsNumber);
	}}

	aria-label={value.toString()}
	data-tooltip-position="top"
/>

