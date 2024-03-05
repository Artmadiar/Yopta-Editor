import { PreviewLinkFetcher } from '../types';

export const fetcher: PreviewLinkFetcher = async (url) => {
  if (!url) {
    return {};
  }

  console.log('fetching...', `https://api.microlink.io/?url=${url}`);
  const res = await fetch(`https://api.microlink.io/?url=${url}`);
  const data = await res.json();
  console.log('data', data);
  return {
    url,
    title: data.data.title,
    description: data.data.description,
    imageUrl: data.data.image.url,
  };
};
