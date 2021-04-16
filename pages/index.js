import style from '../styles/home.module.scss';
import Typewriter from '../src/components/typewriter';
import { useRouter } from 'next/router'
import {basePath} from '../src/lib/config';

const Home = () => {
    const router = useRouter()

    return <section className={style.container}>
        <section className={style.banner}>
            <h2>از توزیع های <Typewriter words={["لینوکس", "گنو/لینوکس"]}/> <br/>بهتر استفاده کنیم</h2>
        </section>

        <div className={style.features}>
            <section className={style.feature}>
                <img src={`${basePath}/images/support-articles.png`} alt="support"/>
                <h3>حامی شو</h3>
                <p>علاوه بر حمایت از نویسنده، محصولات خودت رو تبلیغ کن</p>
            </section>

            <section className={style.feature}>
            <img src={`${basePath}/images/create-article.png`} alt="support"/>
                <h3>نویسنده شو</h3>
                <p>مطالب آموزشی و خبری بنویس و در لینوکسی ها منتشر کن</p>
            </section>
        </div>
    </section>
}

export default Home;
