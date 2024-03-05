import { PluginElementRenderProps } from '@yoopta/editor';
import { useEffect, useState } from 'react';
import { PreviewLinkElementProps } from '../types';
import { fetcher } from './fetcher';

const PreviewLinkRender = (props: PluginElementRenderProps) => {
  const [data, setData] = useState<PreviewLinkElementProps | null>(null);

  if (!props.element.props?.url) {
    return <div>Preview Link with no URL</div>;
  }

  useEffect(() => {
    fetcher(props.element.props?.url)
      .then((d) => setData(d))
      .catch((e) => console.error('Error fetching data', e));
  }, [props.element.props?.url]);

  console.log('props.element.props?.url', props.element.props?.url);

  if (!data) {
    props.element.props?.fetcher?.(props.element.props.url).then((d) => setData(d));
    return (
      <div data-element-type="PreviewLink" {...props.attributes}>
        Loading...
        {props.children}
      </div>
    );
  }

  // how to modify the props.element.props?
  // props.element.props.title = data.title
  console.log('fetched data', data);
  return (
    <a
      data-element-type="PreviewLink"
      {...props.attributes}
      href={props.element.props?.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {data.title || props.element.props?.title || 'Preview Link'}
      {props.children}
    </a>
  );
};

export { PreviewLinkRender };
