<script context="module" lang="ts">
  import * as api from '$lib/api';
  export const load = async ({session, fetch }) => {
    const { response, json } = await api.get(
      { path: 'api/posts', kitFetch: fetch }
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
  import PostCard from '$lib/posts/Card.svelte';

  export let posts;
</script>

<h1 class="text-2xl font-bold">Welcome to my Blog</h1>

{#each posts as post}
  <PostCard {post} />
{/each}
