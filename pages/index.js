import style from './home.module.scss';
import Typewriter from '../src/components/typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTelegramPlane, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Button } from '@material-ui/core';
import { useRouter } from 'next/router'

const Home = () => {
    const router = useRouter()
    const handleClick = (e) => {
        e.preventDefault()
        router.push('/articles')
      }

    return <div className={style.container}>
        <div className={style.navbar}>
            <div className={style.logo}><img src="/images/logo.png" alt="Linuxiha Logo"/></div>
            <ul>
                <li>
                    <a href="https://www.instagram.com/linuxiha/" target="_blank">
                        <FontAwesomeIcon icon={faInstagram}/>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/linuxihaa/" target="_blank">
                        <FontAwesomeIcon icon={faTelegramPlane}/>
                    </a>
                </li>
                <li>
                    <a href="https://telegram.me/linuxiha/" target="_blank">
                        <FontAwesomeIcon icon={faTwitter}/>
                    </a>
                </li>
            </ul>
        </div>

        <div className={style.banner}>
            <div>از توزیع های <Typewriter words={["گنو", "لینوکس"]}/> <br/> بهتر استفاده کنیم</div>
            <Button color="primary" size="large" variant="contained" onClick={handleClick}>لیست مقالات</Button>
        </div>
    </div>
}

export default Home;
