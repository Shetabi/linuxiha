import React, {useEffect} from 'react';
import style from '../../styles/menu.module.scss';
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfo, faNewspaper, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from 'next/router'
import {basePath} from '../next.config';

let prevScrollpos = 0;
const Menu = () => {
    const router = useRouter();
    const path = router.pathname;


    useEffect(() => {
        window.onscroll = function() {
            var currentScrollPos = window.pageYOffset;
 
            if (prevScrollpos >= currentScrollPos) {
              document.getElementById("navbar").style.bottom = "0";
            } else {
              document.getElementById("navbar").style.bottom = "-60px";
            }
            prevScrollpos = currentScrollPos;
          }
    }, [])

    return (
        <nav id="navbar" className={style["menu-container"]}>
            <Link className={style["menu-link"]} href="/">
                <a className={path === "/" ? style.selected : style["menu-item"]}><FontAwesomeIcon icon={faHome}/><aside></aside></a>
            </Link>

            <Link className={style["menu-link"]} href="/articles/news">
                <a className={path === "/articles/news" ? style.selected : style["menu-item"]}><FontAwesomeIcon icon={faNewspaper}/><aside></aside></a>
            </Link>

            <Link className={style["menu-link"]} href="/articles/learning">
                <a className={path === "/articles/learning" ? style.selected : style["menu-item"]}><FontAwesomeIcon icon={faLightbulb}/><aside></aside></a>
            </Link>

            <Link className={style["menu-link"]} href="/about">
                <a className={path === "/about" ? style.selected : style["menu-item"]}><FontAwesomeIcon icon={faInfo}/><aside></aside></a>
            </Link>
        </nav>
    )
}

export default Menu;
