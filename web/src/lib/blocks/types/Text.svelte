<script lang="ts">
  import Anchor from '$lib/ui/Anchor.svelte';
  import Heading from '$lib/ui/Heading.svelte';
  import Paragraph from '$lib/ui/Paragraph.svelte';
  import Image from '$lib/ui/Image.svelte';

  import * as api from '$lib/api';

  export let content, fetch;
 
  const elements = [];

  const mediaData = async (id) => {
    const { res, body } = await api.get(`media/${id}`, fetch) as { res: Response, body: any };

    if(res.status === 200) {
      const { alt, ...media} = body;
      return { alt, src: media.url }
    }
  };

  content.forEach(element => {
    elements.push({
      type: element.type,
      component: element.type === 'p' ? Paragraph : element.type === 'upload' ? Image : Heading,
      children: element.children,
      mediaData:  element.type === 'upload' ? mediaData(element.value.id) : undefined
    });
  });
</script>

{#each elements as element}
  <svelte:component this={element.component} type={element.type} mediaData={element.mediaData}>
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
