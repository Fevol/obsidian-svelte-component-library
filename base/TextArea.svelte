<script lang="ts">
  interface Props {
    value: string;
    readonly?: boolean;
    placeholder?: string;

    onChange: (value: string) => void;
    onContextmenu: (e: Event) => void;

    class?: string;
  }

    let { value = "", readonly = false, placeholder = "", onChange = () => {}, onContextmenu = () => {}, class: className = "" }: Props = $props();
</script>

<textarea
  class={className}
  {readonly}
  {placeholder}
  {value}
  onchange={() => {
    onChange(value);
  }}
  oncontextmenu={(e) => {
    onContextmenu(e);
    e.preventDefault();
    return false;
  }}
></textarea>
