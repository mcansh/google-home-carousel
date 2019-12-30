import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.stories\.(js|tsx?)$/);
function loadStories() {
  req.keys().forEach((filename: string) => req(filename));
}

configure(loadStories, module);
