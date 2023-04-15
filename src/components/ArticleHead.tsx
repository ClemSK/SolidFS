import { JSXElement } from 'solid-js';
import {
  Head,
  Title,
  Meta,
  // Link,
  // Body,
  // Scripts
} from 'solid-start';

export interface MetaProperties {
  title: string;
  description: string;
}

// anything else that I want to pass here for SEO
const ArticleHead = ({ title, description }: MetaProperties): JSXElement => {
  return (
    <Head>
      <Title>{title} - Software Supply Co. Blog</Title>
      <Meta property="og:description" content={description} />
      <Meta
        property="og:title"
        content={`${title} - Software Supply Co. Blog`}
      />
    </Head>
  );
};

export default ArticleHead;
