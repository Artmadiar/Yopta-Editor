import { SlateElement } from '@yoopta/editor';

export type PreviewLinkElementProps = {
  url: string;
  title?: string;
  description?: string;
  imageUrl?: string;
};

export type PreviewPluginOptions = {
  fetcher?: PreviewLinkFetcher;
};

export type PreviewLinkElementKeys = 'preview-link';
export type PreviewLinkElement = SlateElement<'preview-link', PreviewLinkElementProps>;

export type PreviewLinkFetcher = (url: string) => Promise<PreviewLinkElementProps>;
