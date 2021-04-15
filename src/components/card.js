import React from 'react'
import style from '../../styles/card.module.scss';

const Card = (props) => {
    const postImage = `${props.post.image}`;
    const profileImage = `/linuxiha/articles/authors/${props.post.profile}`;
    return (
        <section className={style['card-container']} style={{backgroundImage: `url(${postImage})`}}>
            <h2 className={style.card__title}>{props.post.title}</h2>
            
            <div className={style['card-info']}>
                <figure className={style['author-image']}>
                     <img src={profileImage} alt={props.post.author}/>
                     <figcaption>{props.post.author}</figcaption>
                 </figure>
                 <aside className={style['article-info']}>
                     <span>زمان خواندن {props.post.timeToRead} دقیقه</span>
                     <span>3 ماه پیش</span>
                 </aside>
            </div>
        </section>
    )
}

export default Card;
