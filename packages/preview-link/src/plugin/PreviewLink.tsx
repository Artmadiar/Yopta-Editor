import { createYooptaPlugin } from '@yoopta/editor';
import { PreviewLinkRender } from './ui';
import { fetcher } from './fetcher';

export const PreviewLink = createYooptaPlugin({
  type: 'preview-link',
  elements: {
    'preview-link': {
      render: PreviewLinkRender,
      props: {
        nodeType: 'void',
        title: 'empty',
        url: 'https://google.com',
      },
      options: {
        draggable: true,
        fetcher,
      },
    },
  },
});
