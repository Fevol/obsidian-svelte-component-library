<script lang="ts">
  import { Icon } from "./index";

  interface Props {
    text?: string;
    icon?: string;
    tooltip?: string;
    size?: number | null;
    onClick?: (evt: MouseEvent) => void;
    class?: string;
  }

  let { text = "", icon = "", tooltip = "", size = null, onClick = () => {}, class: className = "" }: Props = $props();
</script>

<button
  class={className}
  class:svelcomlib-icon-text={icon}
  aria-label={tooltip}
  onclick={onClick}
>
  {#if text}
    <div>{text}</div>
  {/if}
  {#if icon}
    <Icon {icon} {size} />
  {/if}
</button>
