<script context="module" lang="ts">
  export const load = async ({params, fetch}) => {
    const { slug } = params;

    const global = await fetch(`globals/${slug}.json`).then((res) => res.json());
    
    const blocks = [];
    for (const block of global.layout[0].content) {
      if(block.type !== 'upload') {
        blocks.push(block);
      } else {
        const media = await fetch(`blocks/media/${block.value.id}.json`)
                            .then((res) => res.status == 200 ? res.json() : undefined)
        if (media) {
          blocks.push({
            type: block.type,
            children: new Array({ url: media.url, alt: media.alt })
          })
        }
      }
    };
    return { props: { global, blocks } }
  }
</script>

<script lang="ts">
  import Blocks from '$lib/blocks/Layout.svelte';
  export let global, blocks;
</script>

<article class="mt-6 p-6 w-6/12 h-full">
  <h1 class="text-2xl font-bold pb-5">{global.title}</h1>
  <Blocks {blocks} />
</article>