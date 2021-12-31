<script>
  import "../app.css";
</script>

<div class="bg-slate-100 h-screen">
  <nav class="w-full text-center text-2xl font-bold">
    <a class="underline" href="/">Home</a>
    <a class="underline" href="/about">Über Uns</a>
  </nav>
  <main class="flex flex-col items-center justify-center w-full pt-10">
    <slot />
  </main>
</div>