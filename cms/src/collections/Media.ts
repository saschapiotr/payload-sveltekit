import { CollectionConfig } from 'payload/types';
import { open, editor } from '../access';

const Media: CollectionConfig = {
  slug: 'media',
  labels: {
    singular: 'Media',
    plural: 'Media',
  },
  access: {
    read: open, 
    create: editor,
    update: editor,
    delete: editor,
  },
  admin: {
    enableRichTextRelationship: true,
    description: 'No selfies please',
  },
  upload: {
    staticURL: '/media',
    staticDir: './media',
    adminThumbnail: ({ doc }) => `/media/${doc.filename}`,
  },
  fields: [
    {
      name: 'alt',
      label: 'Alt Text',
      type: 'text',
      required: true,
    },
  ],
  timestamps: true,
};

export default Media;