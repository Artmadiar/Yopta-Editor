import { SlateElement } from '@yoopta/editor';

export type PreviewLinkElementProps = {
  url: string;
  title?: string;
  description?: string;
  imageUrl?: string;
  fetcher?: PreviewLinkFetcher;
};

export type PreviewLinkElement = SlateElement<'preview-link', PreviewLinkElementProps>;

export type PreviewLinkFetcher = (url: string) => Promise<PreviewLinkElementProps>;
