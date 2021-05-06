import React from 'react'
import {useRouter} from 'next/router';
import {getDynamicPageContentBySlug, getAllDynamicPages} from '../../src/lib/markdown-utils';
import PrintMarkdown from '../../src/components/printMarkDown';
import style from '../../styles/article.module.scss';
import Paper from '@material-ui/core/Paper';
import {basePath} from '../../src/lib/config';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import {faNum, getTimeDifferenceCaption} from '../../src/lib/persian-number';
import {getAuthorProfile} from '../../src/lib/authors';
import moment from 'jalali-moment'
import ArticleProgress from '../../src/components/ArticleProgress';
import { NextSeo } from 'next-seo';
import Image from 'next/image'

export default function Article({page}) {
    const router = useRouter();
    const {
      slug,
      layout,
      jdate,
      user,
      title,
      categories,
      tags,
      featured,
      keywords,
      description,
      timeToRead,
      content
      } = page;

      const author = getAuthorProfile(page.user);
      const postImage = `${basePath}/images/${featured}`;
      const profileImage = author.image;
      console.log(router.pathname, router.asPath, router.basePath);
      return (
        <>
          <NextSeo
              title={title}
              description={description}
              openGraph={{
                url: router.pathname,
                title: title,
                description: description,
                images: [
                  {
                    url: featured,
                    width: 800,
                    height: 600,
                    alt: title,
                  }
                ],
                site_name: 'Linuxiha',
              }}
          />
          <Paper className={style.article}>
            <Image
                    className={style.media}
                    src={postImage}
                    alt={title}
                    width="731"
                    height="341"
                    layout="responsive"
                />
            <h1>{title}</h1>
              <CardHeader
                avatar={
                  <Avatar aria-label="article" src={profileImage} alt={author.name} className={style.avatar} >
                  </Avatar>
                }
                title={author.name}
                subheader={`${faNum(getTimeDifferenceCaption(page.jdate))} - ${faNum(`زمان خواندن ${page.timeToRead} دقیقه`)}`}
              />
           <section className={style.content}>
              <PrintMarkdown markdown={content} />
           </section>
           <ArticleProgress/>
          </Paper>
        </>
      );
}


export async function getStaticProps({ params }) {
    const { slug } = params;
  
    // Pass in the fields that we want to get
    const page = getDynamicPageContentBySlug(slug, [
      'slug', 'layout', 'jdate', 'user', 'title', 'categories', 'tags', 'featured' , 'keywords',  'description', 'timeToRead', 'content'
    ]);

    const pageWithDate = {...page, jdate: moment(page.jdate, 'jYYYY-jMM-jDD').toLocaleString()};
  
    return {
      props: {
        page: {
          ...pageWithDate,
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