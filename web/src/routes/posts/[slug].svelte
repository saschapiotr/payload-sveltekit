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

<article class="mt-6 bg-white p-6 rounded-md text-gray-500 shadow-lg w-6/12 h-full">
  <h2 class="text-2xl font-bold pb-5">{post.title}</h2>
  <p class="text-lg">{post.description}</p>
  <p class="mt-3">{post.updatedAt}</p>
</article>