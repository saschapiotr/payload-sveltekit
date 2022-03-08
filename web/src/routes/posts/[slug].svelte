<script context="module" lang="ts">
  export const load = async ({params, fetch}) => {
    const { slug } = params;

    const res = await fetch(`${slug}.json`);
    const post = await res.json()

    return { props: { post: post.docs[0] } }
  }
</script>

<script>
  // import BlocksLayout from '$lib/blocks/Layout.svelte';
  export let post;
</script>


<article class="mt-6 bg-white p-6 rounded-md text-gray-500 shadow-lg w-6/12 h-full">
  <h2 class="text-2xl font-bold pb-5">{post.title}</h2>
  <!--<BlocksLayout layout={post.layout} base={endpoint} {fetch} />-->
  <p class="mt-3">{post.updatedAt}</p>
</article>
