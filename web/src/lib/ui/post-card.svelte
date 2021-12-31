<script>
  export let post;
</script>

<article class="mt-6 bg-white p-6 rounded-md text-gray-500 shadow-lg w-4/12 h-full">
  <a href="{`/posts/${post.slug}`}">
    <h1 class="text-xl font-semibold underline">{post.title}</h1>
  </a>
  
  <p>{post.updatedAt}</p>
</article>