<script lang="ts">
	import {Icon} from '../base'

	interface NavheaderButton {
		icon: string;
		tooltip: string;
		onClick: () => void;
	}

	export let buttons: NavheaderButton[];
</script>

<div class="nav-header">
	{#if buttons}
		<div class="nav-buttons-container">
			{#each buttons as {icon, tooltip, onClick} (icon)}
				<div aria-label={tooltip} on:click={() => onClick()} class="nav-action-button">
					<Icon {icon}/>
				</div>
			{/each}
		</div>
	{/if}
</div>
