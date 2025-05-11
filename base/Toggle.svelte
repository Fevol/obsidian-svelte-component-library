<script lang="ts">
    interface Props {
        value: boolean;
        onChange: (value: boolean) => void;
        disabled?: boolean;
    }

    let {
        value = false, onChange = () => {},
        disabled = false
    }: Props = $props();
</script>

<div
        class="checkbox-container"
        class:is-enabled={value}
        onclick={() => {
            if (!disabled) {
                onChange(!value)}
                value = !value;
            }
        }
>
    <input type="checkbox" tabindex="0" {disabled}/>
</div>
