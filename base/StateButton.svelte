<script lang="ts">
  import { Icon } from "./";

  interface State {
    icon?: string;
    text?: string;
    tooltip?: string;
  }

  interface Props {
    states: State[];
    value: number;
    size?: number | null;
    onClick?: () => void;
    onContextMenu?: (e: Event) => void;
    class?: string;
  }

    let {
        states = [],
        value = $bindable(0),
        size = null,
        onClick = () => {},
        onContextMenu = () => {},
        class: className = "",
    }: Props = $props();
</script>

<div
  class={className + " svelcomlib-icon-text"}
  aria-label={states[value].tooltip}
  onclick={() => {
    value = (value + 1) % states.length;
    onClick();
  }}
  oncontextmenu={onContextMenu}
>
  {#if states[value].icon}
    <Icon icon={states[value].icon} {size} />
  {/if}

  {#if states[value].text}
    {states[value].text}
  {/if}
</div>
