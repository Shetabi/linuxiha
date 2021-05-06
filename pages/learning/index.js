import React from 'react'
import style from '../../styles/articles.module.scss';
import { getAllDynamicPages} from '../../src/lib/markdown-utils';
import ArticleCard from '../../src/components/card';
import moment from 'jalali-moment';
import { NextSeo } from 'next-seo';

const Learning = (props) => {

    return (
        <>
            <NextSeo
                title="لینوکسی ها - آموزشی"
                description="مطالب آموزشی گنو/لینوکس"
                openGraph={{
                    type: 'website',
                    locale: 'fa_IR',
                    url: 'https://linuxihaa.ir/',
                    images: [
                      {
                        url: `${basePath}/images/logo.png`,
                        width: 512,
                        height: 512,
                        alt: 'Linuxiha',
                      }
                    ],
                    site_name: 'Linuxiha',
                  }}
                  twitter={{
                    handle: '@handle',
                    site: '@site',
                    cardType: 'summary_large_image',
                  }}
            />
            <div className={style.container}>
            
                {props.posts.slice()
                    .filter(post => post.categories.includes("آموزشی"))
                    .sort(function(a,b){
                            return new Date(b.jdate) - new Date(a.jdate);
                        })
                    .map(post => {return {...post, jdate: moment(post.jdate, 'jYYYY-jMM-jDD')}}).map(post => <ArticleCard key={post.title} post={post}/>)}
            </div>
        </>
    )
}

export default Learning;

export async function getStaticProps({ params }) {
    const posts = getAllDynamicPages(['slug', 'layout', 'jdate', 'user', 'title', 'categories', 'tags', 'featured' , 'keywords', 'description', 'timeToRead']);

    return { props: {posts: posts} }
}
