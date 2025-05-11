<script lang="ts">
    interface Props {
        container: any;
    }

    let {container}: Props = $props();
</script>

<div class="nav-header">
    <div class="nav-buttons-container">
        <!-- NOTE: slot-in using svelte:fragment to avoid extra dom layer being added -->
        {#if container}
            {@render container()}
        {:else}
            <span>Empty navheader</span>
        {/if}
    </div>
</div>
