import { PreviewLink } from './plugin/PreviewLink';
import { PreviewLinkElement } from './types';
import './styles.css';

declare module 'slate' {
  interface CustomTypes {
    Element: PreviewLinkElement;
  }
}

export default PreviewLink;
