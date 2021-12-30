<script context="module">
  import * as api from '$lib/api';
  export const load = async ({page, session}) => {
    const { response, json } = await api.get({base: session.BASE_ENDPOINT, path: 'posts'});
    const success = page.query.get('success') ? 'Success!' : undefined;
    const error = page.query.get('error') ? 'Error!' : undefined;
    if (response.status === 200) {
      return {
        props: {
          posts: json.docs,
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
  export let posts;
</script>

<h1>Welcome to my Blog</h1>

{#each posts as post}
  <h1>{post.title}</h1>
  <p>{post.updatedAt}
{/each}
