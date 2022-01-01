<script lang="ts">
  import Text from '$lib/blocks/types/Text.svelte';
import Anchor from '$lib/ui/Anchor.svelte';
  export let layout, fetch;

  const blocks = [];
  
  layout.forEach(type => {
    if (type.blockType === 'text') {
        blocks.push({ component: Text, content: type.content})
    }
  });
</script>

{#each blocks as block}
  <svelte:component this={block.component} content={block.content} {fetch} />
{/each}
