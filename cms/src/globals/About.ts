import { GlobalConfig } from 'payload/types';
import { admin, open } from '../access';

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
  ],
};

export default About;