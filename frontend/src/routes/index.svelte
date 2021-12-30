<script context="module">
  import * as api from '$lib/api';
  export const load = async ({page, session}) => {
    const { response, json } = await api.get({base: session.BASE_ENDPOINT, path: 'posts'});
    const success = page.query.get('success') ? 'Success!' : undefined;
    const error = page.query.get('error') ? 'Error!' : undefined;
    return {
      props: {
        response: response.status,
        success,
        error,
      }
    }
  }
</script>

<script>
  export let response; //, success = '', error = '';
</script>

<h1>Welcome to SvelteKit</h1>
<h2>{response}</h2>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
