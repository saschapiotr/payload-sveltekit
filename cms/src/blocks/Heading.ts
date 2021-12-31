import { Block } from 'payload/types';

const Heading: Block = {
  slug: 'heading',
  labels: {
    singular: 'Heading',
    plural: 'Headings',
  },
  fields: [
    {
      name: 'content',
      label: 'Heading',
      type: 'text',
      required: true,
    },
  ],
};

export default Heading;