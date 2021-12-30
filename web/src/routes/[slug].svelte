<script context="module" lang="ts">
  import * as api from '$lib/api';
  export const load = async ({page, session}) => {
    const { response, json } = await api.get({
      base: import.meta.env.VITE_API_ENDPOINT as string,
      path: `api/globals/${page.params.slug}`
    });
    
    const success = page.query.get('success') ? 'Success!' : undefined;
    const error = page.query.get('error') ? 'Error!' : undefined;

    if (response.status === 200) {
      return {
        props: {
          global: json,
          success,
          error,
        },
      };
    } else {
      return { props: { posts: [], success, error } };
    }
  }
</script>

<script>
  export let global;
</script>

<h2>This is {global.title}</h2>
