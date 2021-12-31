import { Block } from 'payload/types';

const Text: Block = {
  slug: 'text',
  labels: {
    singular: 'Text',
    plural: 'Texts',
  },
  fields: [
    {
      name: 'content',
      label: 'Text',
      type: 'richText',
      required: true,
      admin: {
        elements: [
          'h1',
          'h2',
          'h3',
          'h4',
          'link',
          'ol',
          'upload'
        ],
        leaves: [
          'bold',
          'italic'
        ],
      },
    },
  ],
};

export default Text;