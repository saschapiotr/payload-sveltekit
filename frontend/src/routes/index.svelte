<script context="module">
  export const load = async ({page, session}) => {
    const success = page.query.get('success') ? 'Success!' : undefined;
    const error = page.query.get('error') ? 'Error!' : undefined;
    return {
      props: {
        endpoint: session.BASE_ENDPOINT,
        success,
        error,
      }
    }
  }
</script>

<script>
  export let endpoint; //, success = '', error = '';
</script>

<h1>Welcome to SvelteKit</h1>
<h2>{endpoint}</h2>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
