<script lang="ts">
    interface InformationField {
        /**
         * The URL to link to.
         */
        url?: string;
        type?: "info" | "warning" | "error";

        /**
         * The text to display.
         */
        text: string;

        /**
         * Classes to apply to the text.
         */
        style?: string;
    }

    interface Props {
        name: string;
        description?: string | null;
        type?:
            | "dropdown"
            | "toggle"
            | "slider"
            | "heading"
            | "subheading"
            | "subsubheading"
            | null;
        depth?: number;
        class?: string;
        notices?: InformationField[];

        control?: any;
        subcontrol?: any;
    }

    let {name, description = null, type = null, depth = 0, notices = [], class: className = "", control, subcontrol}: Props = $props();
    let depthClass = $derived.by(() => {
        let s = "";
        if (depth)
            s += " svelcomlib-" + "sub".repeat(depth) + "setting";
        if (type === "heading")
            s += " svelcomlib-setting-" + "sub".repeat(depth) + "heading";
        return s;
    })
</script>

<div
    class={ (className ?? "") + " setting-item" + depthClass }
    class:mod-dropdown={type === "dropdown"}
    class:mod-toggle={type === "toggle"}
    class:mod-slider={type === "slider"}
    class:setting-item-heading={type === "heading"}
>
    <div class="setting-item-info">
        <div class="setting-item-name">
            <div>
                {@html name}
            </div>
        </div>
        <div class="setting-item-description">
            {@html description}
            {#each notices as notice, idx}
                {#if notice}
                    {#if description || idx !== 0}
                        <br/>
                    {/if}
                    <span
                            class={"svelcomlib-notice " + (notice.style ?? "")}
                            class:svelcomlib-notice-info={notice.type === "info"}
                            class:svelcomlib-notice-warning={notice.type === "warning"}
                            class:svelcomlib-notice-error={notice.type === "error"}
                    >
            {@html notice.text}
          </span>
                {/if}
            {/each}
        </div>
    </div>
    <div class="setting-item-control">
        {#if control}
            {@render control()}
        {/if}
    </div>
</div>
{#if subcontrol}
    {@render subcontrol()}
{/if}
