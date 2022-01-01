<script>
  export let post;

  import * as api from '$lib/api';
</script>

<article class="mt-6 bg-white p-6 rounded-md text-gray-500 shadow-lg w-4/12 h-full">
  <a href="{`/posts/${post.slug}`}">
    <h2 class="text-xl font-semibold underline pb-5">{post.title}</h2>
  </a>
  <p class="text-lg line-clamp-2">{post.description}</p>
  <p class="mt-3">{post.updatedAt}</p>
</article>