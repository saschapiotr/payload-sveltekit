<script context="module" lang="ts">
  export const load = async ({params, fetch}) => {
    const { slug } = params;

    const res = await fetch(`${slug}.json`);
    const post = await res.json();

    const blocks = [];
    for (const block of post.docs[0].layout[0].content) {
      if(block.type !== 'upload') {
        blocks.push(block);
      } else {
        console.log(block)
        const media = await fetch(`blocks/media/${block.value.id}.json`)
                            .then((res) => res.status == 200 ? res.json(): undefined)
        if (media) {
          blocks.push({
            type: block.type,
            children: new Array({ url: media.url, alt: media.alt })
          })
        }
      }
    };

    return { props: { post: post.docs[0], blocks } }
  }
</script>

<script>
  import Blocks from '$lib/blocks/Layout.svelte';
  export let post, blocks;
</script>


<article class="mt-6 bg-white p-6 rounded-md text-gray-500 shadow-lg w-6/12 h-full">
  <h2 class="text-2xl font-bold pb-5">{post.title}</h2>
  <Blocks {blocks} />
  <p class="mt-3">{post.updatedAt}</p>
</article>
