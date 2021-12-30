import { CollectionConfig } from 'payload/types';
import checkRole from '../access/checkRole';

const access = ({ req: { user } }) => checkRole(['admin', 'editor'], user);

const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'Posts',
  },
  access: {
    read: () => true,
    create: access,
    update: access,
    delete: access,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
  ],
}

export default Posts;