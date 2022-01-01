<script lang="ts">
  import Anchor from '$lib/ui/Anchor.svelte';
  import Heading from '$lib/ui/Heading.svelte';
  import Paragraph from '$lib/ui/Paragraph.svelte';
  // import api from '$lib/api';

  export let content, fetch;

  const elements = [];

  content.forEach(element => {
    elements.push({
      type: element.type,
      component: element.type === 'p' ? Paragraph : Heading,
      children: element.children
    });
  });

  /* const getMedia = () => {
    api.
  } */

</script>

{#each elements as element}
  <svelte:component this={element.component} type={element.type}>
    {#each element.children as child}
      {#if child.type && child.type === 'link'}
        <Anchor href={child.url} blank={child.newTab}>
          {child.children[0].text}
        </Anchor>
      {:else}
        {child.text}
      {/if}
    {/each}
  </svelte:component>
{/each}
