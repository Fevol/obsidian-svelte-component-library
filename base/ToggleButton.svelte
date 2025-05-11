<script lang="ts">
    import {Icon, Spinner} from "./index";

    interface Props {
        value: boolean | null;
        text: string;
        size?: number | null;
        onToggle: () => Promise<boolean>;
    }

    let {value = null, text = "", size = null, onToggle = () => Promise.resolve(false)}: Props =
        $props();

    let running: boolean = $state(false);
</script>

<button
        class="svelcomlib-icon-text svelcomlib-toggle"
        class:svelcomlib-success={value}
        class:svelcomlib-fail={value === false}
        onclick={async () => {
            value = null;
            running = true;
            value = await onToggle();
            running = false;
        }}
>
    <div>{text}</div>
    {#if running}
        <Spinner {size}/>
    {:else}
        <Icon
                icon={value === null ? "question-mark-glyph" : value ? "check" : "cross"}
                {size}
        />
    {/if}
</button>
