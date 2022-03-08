<script context="module" lang="ts">
  export const load = async ({fetch}) => {

    const res = await fetch(`posts.json`);

    if (res.status === 200) {
      return { props: { posts: await res.json() } }
    }
  }
</script>

<script>
  import PostCard from '$lib/posts/Card.svelte';

  export let posts;
</script>

<h1 class="text-2xl font-bold">Welcome to my Blog</h1>

{#each posts.docs as post}
  <PostCard {post} />
{/each}
