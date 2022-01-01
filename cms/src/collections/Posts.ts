import { CollectionConfig } from 'payload/types';
import { open, closed, editor } from '../access';

import Text from '../blocks/Text';

const Posts: CollectionConfig = {
  slug: 'posts',
  labels: {
    singular: 'Post',
    plural: 'Posts',
  },
  admin: {
    useAsTitle: 'title',
    description: 'blog posts',
    defaultColumns: [
      'title',
      'url',
      'updatedAt',
    ]
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
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
    },
    {
      name: 'layout',
      label: 'Layout',
      labels: {
        singular: 'Layout',
        plural: 'Layouts',
      },
      type: 'blocks',
      blocks: [Text],
      required: true,
    },
    {
      name: 'slug',
      label: 'Url',
      type: 'text',
      index: true,
      access: {
        read: open,
        create: closed,
        update: closed,
      }
    },
  ],
  hooks: {
    beforeChange: [
      ((op) => { 
        op.data.title = op.data.title.replace(/\s\s+/g, ' ');
        op.data.slug = op.data.title.replace(/\s/g, '-').toLowerCase();

        return op.data;
      }),
    ],
  }
}

export default Posts;