<script lang="ts">
    interface Props {
        size?: number;
    }

    let {size = 24}: Props = $props();
</script>

<div
    class="svelcomlib-spinner"
    bind:clientHeight={size}
    bind:clientWidth={size}
></div>
