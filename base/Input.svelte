<script lang="ts">
  import type { HTMLInputTypeAttribute } from "svelte/elements";

  interface Props {
    type: HTMLInputTypeAttribute;
    value: string;
    placeholder?: string;
    onChange?: (value: string) => void;
    valid?: boolean;
    readonly?: boolean;
    class?: string;
  }

    let {
        type = "text",
        value = "",
        placeholder = "",
        onChange = () => {},
        valid = false,
        readonly = false,
        class: className = ""
    }: Props = $props();

</script>

<!--TODO: value keyword is still an issue-->
<input
  {type}
  {value}
  {placeholder}
  {readonly}
  oninput={(e) => onChange(e.target.value)}
  class={className}
  class:svelcomlib-input-success={valid}
  class:svelcomlib-input-fail={valid === false}
/>
