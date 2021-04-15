import React from 'react'
import style from '../../styles/header.module.scss'
import { useRouter } from 'next/router'

const Header = () => {
    const router = useRouter();
    let path = "";
    switch(router.pathname) {
        case "/":
            path = "خانه";
            break;
        case "/about":
            path = "درباره ما"
            break;
        case "/articles/news":
            path = "مطالب خبری";
            break;
        case "/articles/learning":
            path = "مطالب آموزشی";
            break;

    }
    return (
        <header className={style.container}>
            <h2>{path}</h2>

            <figure className={style.logo}>
                <img src="linuxiha/images/logo.png" alt="linuxiha"/>
            </figure>

        </header>
    )
}

export default Header;
