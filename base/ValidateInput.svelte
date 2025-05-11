<script lang="ts">
  import { Icon } from "./index";

    interface Props {
        type: string;
        value: string;
        placeholder?: string;
        onChange: (value: string) => void;
        valid?: boolean;
    }

    let { type = "text", value = "", placeholder = "", onChange = () => {}, valid = false }: Props = $props();
</script>

<div>
  <Icon icon={valid ? "check" : "cross"} class="svelcomlib-input-icon" />
  <input {type} {value} {placeholder} oninput={() => onChange(value)} />
</div>
