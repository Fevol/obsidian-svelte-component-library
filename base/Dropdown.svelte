<!-- Copied over from obsidian-periodic-notes -->
<script lang="ts">
  interface IOption {
    value: string;
    text: string;
  }

  interface Props {
    onChange: (value: string, el: HTMLSelectElement) => void;
    options: IOption[];
    value: string;
    disabled?: boolean;
    class?: string;
  }

    let {
        onChange = () => {},
        options = [],
        value = "",
        disabled = false,
        class: className = ""
    }: Props = $props();
</script>

<select
  class={className ? className + " dropdown" : "dropdown"}
  {disabled}
  onchange={(e) => onChange(e.target.value, e.target)}
  {value}
>
  {#each options as { value, text }}
    <option {value}>{text}</option>
  {/each}
</select>
