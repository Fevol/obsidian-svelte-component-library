<script lang="ts">

    interface Props {
        header?: any;
        view?: any;

        class?: string;
    }

    let {header, view, class: className = ""}: Props = $props();
</script>


{#if header}
    {@render header(className)}
{/if}
{#if view}
    {@render view(className)}
{/if}
