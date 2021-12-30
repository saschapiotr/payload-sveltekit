import { CollectionConfig } from 'payload/types';
import checkRole from '../access/checkRole';
import roles from '../access/roles';

const access = ({ req: { user } }) => checkRole(['admin'], user);

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read: access,
    create: access,
    update: access,
    delete: access,
    admin: ()  => true,
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