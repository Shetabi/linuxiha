import style from '../styles/home.module.scss';
import Typewriter from '../src/components/typewriter';
import { useRouter } from 'next/router'

const Home = () => {
    const router = useRouter()

    return <section className={style.container}>
        <section className={style.banner}>
            <h2>از توزیع های <Typewriter words={["لینوکس", "گنو/لینوکس"]}/> <br/>بهتر استفاده کنیم</h2>
        </section>
    </section>
}

export default Home;
