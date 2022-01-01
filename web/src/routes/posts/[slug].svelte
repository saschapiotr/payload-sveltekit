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
          endpoint: session.API_ENDPOINT,
        },
      };
    } else {
      return { props: { post: {} } };
    }
  }
</script>

<script>
  import BlocksLayout from '$lib/blocks/Layout.svelte';
  export let post, endpoint;
</script>

<article class="mt-6 bg-white p-6 rounded-md text-gray-500 shadow-lg w-6/12 h-full">
  <h2 class="text-2xl font-bold pb-5">{post.title}</h2>
  <BlocksLayout layout={post.layout} base={endpoint} {fetch} />
  <p class="mt-3">{post.updatedAt}</p>
</article>