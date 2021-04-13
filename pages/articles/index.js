import React from 'react'
import style from '../../styles/articles.module.scss';
import { getAllDynamicPages} from '../../src/lib/markdown-utils';
import Card from '../../src/components/card';

const Articles = (props) => {
    console.log(props.posts)
    return (
        <div className={style.container}>

            {props.posts.map(post => <Card key={post.title} post={post}/>)}
            
        </div>
    )
}

export default Articles;

export async function getStaticProps({ params }) {
    console.log(params);
    const posts = getAllDynamicPages(['slug', 'title', 'image', 'timeToRead', 'date', 'tag', 'author', 'profile']);

    console.log(posts);

    return { props: {posts: posts} }
}
