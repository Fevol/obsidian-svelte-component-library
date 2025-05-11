<script lang="ts">
  import { onMount } from "svelte";
  import { Component, MarkdownRenderer, Plugin } from "obsidian";

  interface Props {
    plugin: Plugin;
    text: string;
    source?: string;
    class?: string;
  }

  let { plugin, text, source = "", class: className = "" }: Props = $props();

  let element: HTMLElement = $state();

  onMount(async () => {
    const component = new Component();
    await MarkdownRenderer.render(plugin.app, text, element, source, component);
    component.load();
  });
</script>

<div bind:this={element} class={className}></div>
