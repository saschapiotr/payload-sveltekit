<script context="module" lang="ts">
  import * as api from '$lib/api';
  export const load = async ({session}) => {
    const { response, json } = await api.get(
      { base: session.BASE_ENDPOINT, path: 'posts' }
    );

    if (response.status === 200) {
      return {
        props: {
          posts: json.docs,
        },
      };
    } else {
      return { props: { posts: [] } };
    }
  }
</script>

<script>
  export let posts;
</script>

<h1>Welcome to my Blog</h1>

{#each posts as post}
  <a href="{post.slug}">
    <h1>{post.title}</h1>
  </a>
  <p>{post.updatedAt}</p>
{/each}
