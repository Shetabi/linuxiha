import React from 'react'
import style from '../../../styles/articles.module.scss';
import { getAllDynamicPages} from '../../../src/lib/markdown-utils';
import Card from '../../../src/components/card';

const Learning = (props) => {

    return (
        <div className={style.container}>

            {props.posts.filter(post => post.id.startsWith("learning")).map(post => <Card key={post.title} post={post}/>)}
        </div>
    )
}

export default Learning;

export async function getStaticProps({ params }) {

    const posts = getAllDynamicPages(['slug', 'title', 'image', 'timeToRead', 'date', 'tag', 'author', 'profile', 'id']);

    return { props: {posts: posts} }
}
