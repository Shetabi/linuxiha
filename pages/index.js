import style from '../styles/home.module.scss';
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

    return <header className={style.container}>
        <nav className={style.navbar}>
            <div className={style.logo}><img src="/images/logo.png" alt="Linuxiha Logo"/></div>
            <section className={style.socials}>
                <a href="https://www.instagram.com/linuxiha/" target="_blank">
                    <FontAwesomeIcon icon={faInstagram}/>
                </a>
                <a href="https://telegram.me/linuxiha/" target="_blank">
                    <FontAwesomeIcon icon={faTelegramPlane}/>
                </a>
                <a href="https://twitter.com/linuxihaa/" target="_blank">
                    <FontAwesomeIcon icon={faTwitter}/>
                </a>
            </section>
        </nav>

        <section className={style.banner}>
            <h1>از توزیع های <Typewriter words={["لینوکس", "گنو/لینوکس"]}/> <br/> بهتر استفاده کنیم</h1>
            <Button color="primary" size="large" variant="contained" onClick={handleClick}>لیست مطالب</Button>
        </section>
    </header>
}

export default Home;
