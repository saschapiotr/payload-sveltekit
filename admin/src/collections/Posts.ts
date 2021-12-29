import { CollectionConfig } from 'payload/types';

const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'Posts',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
  ],
}

export default Posts;