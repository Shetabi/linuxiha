import React from 'react'
import {useRouter} from 'next/router';
import {getDynamicPageContentBySlug, getAllDynamicPages} from '../../src/lib/markdown-utils';
import PrintMarkdown from '../../src/components/printMarkDown';

export default function Article({page}) {
    const router = useRouter();

    const {
        title,
        description,
        customTitle,
        slug,
        content,
      } = page;
    
      return (
        <div>
          <h1>{title}</h1>
          <h2>{customTitle}</h2>
          {/* we'll go into the PrintMarkdown component later */}
          <PrintMarkdown markdown={content} />
          <address><a rel="author">Author</a></address>
        </div>
      );
}


export async function getStaticProps({ params }) {
    const { slug } = params;
  
    // Pass in the fields that we want to get
    const page = getDynamicPageContentBySlug(slug, [
      'title',
      'description',
      'customTitle',
      'field',
      'image',
      'slug',
      'content',
    ]);
  
    return {
      props: {
        page: {
          ...page,
        },
      },
    };
  }

  export async function getStaticPaths() {
    const posts = getAllDynamicPages(['slug']);
    const paths = posts.map(({ slug }) => ({
      params: {
        slug,
      },
    }));
    return {
      paths,
      fallback: false,
    };
  }