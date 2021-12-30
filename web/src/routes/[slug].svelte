<script context="module" lang="ts">
  import * as api from '$lib/api';
  export const load = async ({params, session, fetch}) => {
    const { response, json } = await api.get(
      { base: session.API_ENDPOINT, path: `api/globals/${params.slug}`, fetch: fetch }
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

<h2>This is {global.title}</h2>
