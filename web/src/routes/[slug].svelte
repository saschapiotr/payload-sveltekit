<script context="module" lang="ts">
  import * as api from '$lib/api';
  export const load = async ({params, session, fetch}) => {
    const { response, json } = await api.get(
      { base: session.API_ENDPOINT, path: `api/globals/${params.slug}`, kitFetch: fetch }
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


<script>
  export let global;
</script>

<article class="mt-6 p-6 w-4/12 h-full">
  <h2 class="text-2xl font-bold">This is {global.title}</h2>
</article>