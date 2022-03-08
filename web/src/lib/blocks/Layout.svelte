<script lang="ts">
  import Anchor from '$lib/ui/Anchor.svelte';
  import Heading from '$lib/ui/Heading.svelte';
  import Paragraph from '$lib/ui/Paragraph.svelte';
  import Image from '$lib/ui/Image.svelte';
import { element } from 'svelte/internal';

  export let blocks;

  const elements = [];


  blocks.forEach(block => {
    elements.push({
      type: block.type,
      component: block.type === 'p' ? Paragraph : block.type === 'upload' ? Image : Heading,
      children: block.children,
      mediaData:  block.type === 'upload' ? block.children[0] : undefined
    });
  });
</script>

{#each elements as element}
  <svelte:component 
    this={element.component} 
    type={element.type} 
    src={element.type === 'upload' ? element.children[0].url: undefined}
    alt={element.type === 'upload' ? element.children[0].alt: undefined}>
    {#each element.children as child}
      {#if child.type && child.type === 'link'}
        <Anchor href={child.url} blank={child.newTab}>
          {child.children[0].text}
        </Anchor>
      {:else if child.text}
        {child.text}
      {/if}
    {/each}
  </svelte:component>
{/each}
