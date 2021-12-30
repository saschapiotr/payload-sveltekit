import { GlobalConfig } from 'payload/types';
import { admin, open } from '../access/';

const About: GlobalConfig = {
  slug: 'global',
  label: 'Über Uns',
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
      name: 'content',
      label: 'Inhalt',
      type: 'richText',
      defaultValue: [{
        children: [{ text: '...' }],
      }],
      required: true,
      admin: {
        elements: [
          'h2',
          'h3',
          'h4',
          'link'
        ],
        elements: [
          'bold',
          'italic'
        ]
      }
    }
  ],
};

export default About;