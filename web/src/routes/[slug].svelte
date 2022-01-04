<script context="module" lang="ts">
  export const load = async ({params, fetch}) => {
    const { slug } = params;

    const res = await fetch(`globals/${slug}`);

    if (res.status === 200) {
      return { props: { global: await res.json(), fetch } }
    }
  }
</script>

<script lang="ts">
  import BlocksLayout from '$lib/blocks/Layout.svelte';
  export let global, fetch;
</script>

<article class="mt-6 p-6 w-6/12 h-full">
  <h1 class="text-2xl font-bold pb-5">{global.title}</h1>
  <BlocksLayout layout={global.layout} {fetch} />
</article>