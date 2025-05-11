<script lang="ts">
  import { Icon } from "./index";

  interface IOption {
    value: string;
    text: string;
  }

  interface Props {
    onClick: (value: string, index: number) => void;
    items: IOption[];
    icon: string;
    tooltip?: string | null;
    disabled?: boolean;
    size?: number | null;
  }

  let {
    onClick = () => {},
    items = [],
    icon = "",
    tooltip = null,
    disabled = false,
    size = null,
  }: Props = $props();
</script>

<div class="setting-command-hotkeys">
  {#each items as { value, text }, index}
    <span class="setting-hotkey svelcomlib-icon-text">
      {text}
      {#if !disabled}
        <span
          onclick={() => onClick(value, index)}
          class="setting-hotkey-icon"
          style="display: flex"
          aria-label={tooltip}
        >
          <Icon {icon} {size} />
        </span>
      {/if}
    </span>
  {/each}
</div>
