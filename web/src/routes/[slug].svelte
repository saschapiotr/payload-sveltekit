<script context="module" lang="ts">
  import * as api from '$lib/api';
  export const load = async ({params, session, fetch}) => {
    const { response, json } = await api.get(
      { path: `api/globals/${params.slug}`, kitFetch: fetch }
    );

    if (response.status === 200) {
      return {
        props: {
          global: json,
        },
      };
    } else {
      return { props: { global: null } };
    }
  }
</script>

<script lang="ts">
  import BlocksLayout from '$lib/blocks/Layout.svelte';
  export let global;
</script>

<article class="mt-6 p-6 w-6/12 h-full">
  <h1 class="text-2xl font-bold pb-5">{global.title}</h1>
  <BlocksLayout layout={global.layout} {fetch} />
</article>