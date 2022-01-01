<script>
  export let type;
</script>
  
{#if type === 'h1'}
  <h1 class="text-2xl font-bold"><slot /></h1>
{:else if type === 'h2'}
  <h2 class="text-xl font-bold"><slot /></h2>
{:else if type === 'h3'}
  <h3 class="text-lg font-bold"><slot /></h3>
{/if}