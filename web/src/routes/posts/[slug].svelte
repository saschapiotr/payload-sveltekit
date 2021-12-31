<script context="module" lang="ts">
  import * as api from '$lib/api';
  export const load = async ({params, session, fetch}) => {

    const { response, json } = await api.get(
      { base: session.API_ENDPOINT, path: `api/posts?where[slug][equals]=${params.slug}`, kitFetch: fetch }
    );

    if (response.status === 200) {
      return {
        props: {
          post: json.docs[0],
        },
      };
    } else {
      return { props: { post: {} } };
    }
  }
</script>

<script>
  export let post;
</script>

<h2>This is {post.title}</h2>