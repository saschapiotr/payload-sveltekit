import { buildConfig } from 'payload/config';
import path from 'path';

import Posts from './collections/Posts';
import Users from './collections/Users';
import Media from './collections/Media';
import About from './globals/About';

export default buildConfig({
  serverURL: 'http://localhost:3001',
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    Posts,
    Media,
  ],
  globals: [
    About,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts')
  },
  cors: [
    'http://localhost:3000',
  ],
});
