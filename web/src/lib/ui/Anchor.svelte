<script>
  export let href, blank;
</script>
  
<a class="underline font-bold" href="{href}" target="{blank ? '__blank': ''}">
  <slot />
</a>