import { GlobalConfig } from 'payload/types';
import { admin, open } from '../access';

import Text from '../blocks/Text';

const About: GlobalConfig = {
  slug: 'about',
  label: 'About',
  access: {
    read: open,
    update: admin,
  },
  fields: [
    {
      name: 'title',
      label: 'Titel',
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
  ],
};

export default About;