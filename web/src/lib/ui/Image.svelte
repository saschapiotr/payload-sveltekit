<script>
import { dataset_dev } from "svelte/internal";

  export let mediaData;
  console.log(mediaData)
</script>

{#await mediaData}
	<p>...loading image</p>
{:then data}
  <img src={data.src} alt={data.src} />
{/await}