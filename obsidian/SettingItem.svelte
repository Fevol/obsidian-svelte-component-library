<script lang="ts">
	export let name: string;
	export let description: string | null = null;
	export let type: "dropdown" | "toggle" | "slider" | "heading" | null = null;


	interface InformationField {
		/**
		 * The URL to link to.
		 */
		url?: string;
		type?: "href" | "text";

		/**
		 * The text to display.
		 */
		text: string;

		/**
		 * Classes to apply to the text.
		 */
		style?: string;
	}

	export let notices: InformationField[] = [];
</script>

<div
	class={$$props.class + " setting-item"}
	class:mod-dropdown={type === "dropdown"}
	class:mod-toggle={type === "toggle"}
	class:mod-slider={type === "slider"}
	class:setting-item-heading={type === "heading"}
>
	<div class="setting-item-info">
		<div class="setting-item-name">
			<div>
				{@html name}
			</div>
		</div>
			<div class="setting-item-description">
				{#if description}
					{@html description}
					{#each notices as notice}
						{#if notice}
							<br>
							{#if notice.type === "href"}
								<a href={notice.url}> {notice.text} </a>
							{:else}
								<span class={notice.style}> {@html notice.text} </span>
							{/if}
						{/if}
					{/each}
				{:else}
					{#each notices as notice, idx}
						{#if notice}
							{#if notice.type === "href"}
								<a href={notice.url}> {notice.text} </a>
							{:else}
								<span class={notice.style}> {@html notice.text} </span>
							{/if}
							{#if idx < notices.length - 1}
								<br>
							{/if}
						{/if}
					{/each}
				{/if}
			</div>

	</div>
	<div class="setting-item-control">
		<slot name="control"/>
	</div>
</div>
<slot name="subcontrol"/>
