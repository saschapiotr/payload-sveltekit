<script>
  import "../app.css";
</script>

<div class="root bg-slate-100 h-screen">
  <nav class="w-full text-center text-xl font-bold">
    <a class="underline pr-5" href="/">Home</a>
    <a class="underline" href="/about">About</a>
  </nav>
  <main class="flex flex-col items-center justify-center w-full pt-10">
    <slot />
  </main>
</div>