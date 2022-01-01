import { CollectionConfig } from 'payload/types';
import { admin, editor, roles } from '../access';

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read: admin,
    create: admin,
    update: admin,
    delete: admin,
    admin: editor,
  },
  fields: [
    {
      name: 'roles',
      label: 'Role',
      type: 'select',
      options: roles,
      defaultValue: 'editor',
      required: true,
      saveToJWT: true,
      hasMany: true,
    },
  ],
};

export default Users;