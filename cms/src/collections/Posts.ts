import { CollectionConfig, CollectionAfterChangeHook } from 'payload/types';
import { open, editor } from '../access';

const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'Posts',
  },
  access: {
    read: open, 
    create: editor,
    update: editor,
    delete: editor,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
  ],
  hooks: {
    afterChange: () => {},
  }
}

export default Posts;