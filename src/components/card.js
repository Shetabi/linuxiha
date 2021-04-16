import React from 'react'
import style from '../../styles/card.module.scss';
import {faNum, getTimeDifferenceCaption} from '../lib/persian-number';
import { useRouter } from 'next/router';
import {getAuthorProfile} from '../lib/authors';
import {basePath} from '../next.config';

const Card = (props) => {
    const author = getAuthorProfile(props.post.user);
    const postImage = `${basePath}/images/${props.post.featured}`;
    const profileImage = author.image;

    if(props.post.profile){
        profileImage = `${basePath}/images/${props.post.profile}`;
    }

    const route = useRouter();
    
    const onClick = () => {
      route.push(`/articles/${props.post.slug}`)
  }

    return (
        <section onClick={onClick} className={style['card-container']} style={{backgroundImage: `url(${postImage})`}}>
            <h2 className={style.card__title}>{props.post.title}</h2>
            
            <div className={style['card-info']}>
                <figure className={style['author-image']}>
                     <img src={profileImage} alt={author.name}/>
                     <figcaption>{author.name}</figcaption>
                 </figure>
                 <aside className={style['article-info']}>
                     <span>{faNum(`زمان خواندن ${props.post.timeToRead} دقیقه`)}</span>
                     <span>{faNum(getTimeDifferenceCaption(props.post.jdate))}</span>
                 </aside>
            </div>
        </section>
    )
}

export default Card;
