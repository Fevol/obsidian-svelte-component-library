<script lang="ts">
	export let type: string;
	export let value: string;
	export let placeholder: string = '';
	export let onChange: (value: string) => void;
	export let valid: boolean = false;
	export let readonly: boolean = false;
</script>


<input
	{type}
	{value}
	{placeholder}
	{readonly}
	on:input={() => onChange(value)}
	class={$$props.class}
	class:svelcomlib-input-success={valid}
	class:svelcomlib-input-fail={valid === false}
>

