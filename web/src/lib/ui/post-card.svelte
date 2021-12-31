<script>
  export let post;
</script>

<a href="{`/posts/${post.slug}`}">
  <h1>{post.title}</h1>
</a>
<p>{post.updatedAt}</p>