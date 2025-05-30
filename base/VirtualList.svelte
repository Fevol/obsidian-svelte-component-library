<!-- This is a fork of the svelte-virtual-list-ce repository, available: here https://github.com/gitbreaker222/svelte-virtual-list/issues -->
<script lang="ts">
    import {onMount, tick} from "svelte";

    interface Props {
        items: any[];
        height?: string;
        itemHeight?: number | undefined;
        start?: number;
        end?: number;
        item: any
    }

    let {items, height = "100%", itemHeight = undefined, start = 0, end = 0, item}: Props = $props();

    // local state
    let height_map: any[] = $state([]);
    let rows: any[] = $state([]);
    let viewport: Element = $state();
    let contents: HTMLElement = $state();
    let viewport_height = $state(0);
    let mounted = $state();

    let top = $state(0);
    let bottom = $state(0);
    let average_height: number = $state(0);
    let scrolltop: number = $state(0);

    let visible = $derived(items.slice(start, end).map((data, i) => {
        return {index: i + start, data};
    }));

    // whenever `items` changes, invalidate the current heightmap
    $effect(() => {
        if (mounted) {
            refresh(items, viewport_height, itemHeight);
        }
    });


    async function refresh(items: any[], viewport_height: number, itemHeight: number) {
        const isStartOverflow = items.length < start;

        if (isStartOverflow) {
            await scrollToIndex(items.length - 1, {behavior: "auto"});
        }

        const {scrollTop} = viewport;

        await tick(); // wait until the DOM is up to date

        let content_height = top - scrollTop;
        let i = start;

        while (content_height < viewport_height && i < items.length) {
            let row = rows[i - start];

            if (!row) {
                end = i + 1;
                await tick(); // render the newly visible row
                row = rows[i - start];
            }

            const row_height = (height_map[i] = itemHeight || row.offsetHeight);
            content_height += row_height;
            i += 1;
        }

        end = i;

        const remaining = items.length - end;
        average_height = (top + content_height) / end;

        bottom = remaining * average_height;
        height_map.length = items.length;
    }

    async function handle_scroll() {
        const {scrollTop} = viewport;
        scrolltop = scrollTop;

        // const old_start = start;

        for (let v = 0; v < rows.length; v += 1) {
            height_map[start + v] = itemHeight || rows[v].offsetHeight;
        }

        let i = 0;
        let y = 0;

        while (i < items.length) {
            const row_height = height_map[i] || average_height;
            if (y + row_height > scrollTop) {
                start = i;
                top = y;

                break;
            }

            y += row_height;
            i += 1;
        }

        while (i < items.length) {
            y += height_map[i] || average_height;
            i += 1;

            if (y > scrollTop + viewport_height) break;
        }

        end = i;

        const remaining = items.length - end;
        average_height = y / end;

        while (i < items.length) height_map[i++] = average_height;
        bottom = remaining * average_height;

        // TODO if we overestimated the space these
        // rows would occupy we may need to add some
        // more. maybe we can just call handle_scroll again?
    }

    export async function scrollToIndex(index: number, opts: any) {
        const {scrollTop} = viewport;
        const itemsDelta = index - start;
        const _itemHeight = itemHeight || average_height;
        const distance = itemsDelta * _itemHeight;
        opts = {
            left: 0,
            top: scrollTop + distance,
            behavior: "smooth",
            ...opts,
        };
        viewport.scrollTo(opts);
    }

    // trigger initial refresh
    onMount(() => {
        rows = contents.getElementsByClassName("svelcomlib-virtual-list-row");
        mounted = true;
    });
</script>

<div
        class="svelcomlib-virtual-list-viewport"
        bind:this={viewport}
        bind:offsetHeight={viewport_height}
        onscroll={handle_scroll}
        style="height: {height};"
>
    <div
            class="svelcomlib-virtual-list-contents"
            bind:this={contents}
            style="padding-top: {top}px; padding-bottom: {bottom}px; --scroll-offset: {scrolltop}px"
    >
        {#each visible as row (row.index)}
            <div class="svelcomlib-virtual-list-row">
                {@render item(row.data, row.index)}
            </div>
        {/each}
    </div>
</div>

<style>
</style>
