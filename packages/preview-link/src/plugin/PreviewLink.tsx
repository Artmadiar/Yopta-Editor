import { YooptaPlugin } from '@yoopta/editor';
import { PreviewLinkRender } from './ui';
import { fetcher } from './fetcher';
import { PreviewPluginOptions, PreviewLinkElementKeys, PreviewLinkElementProps } from '../types';

export const PreviewLink = new YooptaPlugin<PreviewLinkElementKeys, PreviewLinkElementProps, PreviewPluginOptions>({
  type: 'PreviewLink',
  elements: {
    'preview-link': {
      render: PreviewLinkRender,
      props: {
        nodeType: 'void',
        title: 'empty',
        url: 'https://google.com',
      },
    },
  },
  options: {
    draggable: true,
    fetcher,
  },
});
