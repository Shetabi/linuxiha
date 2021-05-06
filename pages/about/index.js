import Paper from '@material-ui/core/Paper';
import React from 'react'
import articleStyle from '../../styles/article.module.scss';
import { NextSeo } from 'next-seo';
import {basePath, absBasePath} from '../../src/lib/config'

export default function AboutUs() {
    return (
        <>
            <NextSeo
                title="لینوکسی ها - درباره ما"
                description="درباره لینوکسی ها"
                openGraph={{
                    type: 'website',
                    locale: 'fa_IR',
                    url: 'https://linuxihaa.ir/',
                    images: [
                      {
                        url: `${absBasePath}/images/logo.png`,
                        width: 512,
                        height: 512,
                        alt: 'Linuxiha',
                      }
                    ],
                    site_name: 'Linuxiha',
                  }}
                  twitter={{
                    handle: '@handle',
                    site: '@site',
                    cardType: 'summary_large_image',
                  }}
            />
            <Paper className={articleStyle.article}>
                <h1>درباره ما</h1>
                <main className={articleStyle.content}>
                    <p>لینوکسی‌ها یک بستر باز برای کاربران گنو/لینوکسی است که می‌خواهند مطالب خود را در آن منتشر کنند و علاوه بر کمک به کاربران دیگر، کسب     درآمد   نیز داشته باشند.</p>
                    <p>ما از شما عزیزانی که با توزیع‌های لینوکس آشنایی دارید، دعوت می‌کنیم که جهت بالا بردن سطح کیفی و کمی مطالب با ما همکاری کنید. همچنین    از     وبلاگ نویسان حیطه لینوکس دعوت می‌کنیم که مطالب خود را در سایت لینوکسی‌ها منتشر کنند تا با توجه به امکانات خاص سایت مانند شبکه‌های  اجتماعی، سئو     قوی و … کاربران لینوکس بیشتری به مطالب شما دسترسی داشته باشند و از طریق انتشار مطالب نیز کسب درآمد داشته باشید.</p>
                    <p>برای همکاری با ما کافیست یک اکانت از سایت <a className="link" href="https://github.com/" target="_blank">گیت‌هاب</a> داشته باشید و    مراحل  زیر را طی کنید.</p>
                    <p>بعد از ورود به اکانت گیت‌هاب خود، وارد صفحه‌ی پروژه‌ی لینوکسی‌ها در گیت‌هاب با آدرس <a className="link" href="https://github.com/ linuxihaa/linuxihaa.github.io" target="_blank">https://github.com/linuxihaa/linuxihaa.github.io</a> شوید و از گوشه‌ی بالا و سمت راست،     دکمه‌ی Fork را بزنید. سپس تغییرات لازم مانند اضافه کردن مطلب به سایت را انجام داده و در آخر دکمه‌ی Pull Request را در صفحه‌ی پروژه فورک    شده‌ی خود را بزنید تا تغییرات شما بعد از بررسی، در سایت اصلی منتشر شود.</p>
                    <p>برای مثال می‌توانید بعد از فورک کردن پروژه، دستور زیر را در ترمینال وارد کنید.</p>
                    <code>git clone YOUR_FORK</code>
                    <p>بعد از آن تغییرات لازم مانند اضافه کردن مطلب را اعمال کنید و در آخر دستورات زیر را وارد کنید.</p>
                    <code>git add --all</code>
                    <code>git commit -m "Your comment"</code>
                    <code>git push -u origin main</code>
                    <p>و در آخر از دکمه‌ی Pull Request در صفحه‌ی گیت‌هاب فورک خود استفاده کنید تا تغییرات برای بررسی به دست ما برسد. شما همچین می‌توانید علاوه  بر انتشار مطلب در موارد دیگر توسعه سایت نیز به ما کمک کنید.</p>
                    <p>
                    مطالب در شاخه‌ی <span>pages/dynamic_</span> قرار دارند و از فرمت Markdown استفاده می‌کنند و برای راحتی در ویرایش متون با این فرمت     می‌توانید از ویرایشگر صفحات در گیت‌هاب یا <a className="link" href="http://linuxihaa.ir/ckeditor" target="_blank">http://linuxihaa.ir/    ckeditor</a> استفاده کنید و بعد از ویرایش متن، دکمه‌ی Markdown را زده و خروجی را دریافت کنید.
                    </p>
                    <p>
                    همانطور که در مثال‌های شاخه‌ی <span>pages/dynamic_</span> مشاهده خواهید کرد، فایل هر مطلب با نام DATE-SLUG.md است که DATE تاریخ مطلب به   میلادی و به‌صورت مثلا 2016-07-08 است و SLUG نیز لینک شاخص مطلب است که بعد از انتشار آدرس مطلب به‌صورت http://linuxihaa.ir/SLUG خواهد بود.
                    </p>
                    <p>
                    علاوه بر متن اصلی هر مطلب، متغییرهایی نیز باید در ابتدای متن تعیین شوند که به شکلی مانند مثال زیر در اول متن قرار می‌دهید.
                    </p>

                    <code className={articleStyle.text}>
                        <br/>
                        ---<br/>
                        layout: post  <br/>
                        jdate: 1395-05-14<br/>
                        user: rmasoumvand  <br/>
                        title: راه اندازی DNS Server لینوکس<br/>
                        categories:<br/>
                        - آموزشی<br/>
                        tags:<br/>
                        - شبکه<br/>
                        - سرور<br/>
                        featured: dns-server-linux.jpg  <br/>
                        keywords:<br/>
                        - dns server لینوکس<br/>
                        - bind9<br/>
                        description: آموزش راه اندازی DNS Server لینوکس<br/>
                        ---<br/>
                    </code>

                    <ul>
                        <li>layout که باید post بگذارید (مثال layout: post).</li>
                        <li>jdate که حتما باید تعیین شود تا تاریخ شمسی برای مطلب مشخص شود (مثال 1395-04-18).</li>
                        <li>user که شناسه کاربری شما در پروژه‌ی ما است و در ادامه بیشتر توضیح داده می‌شود.</li>
                        <li>title که عنوان مطلب است.</li>
                        <li>categories که دسته‌ی مطلب است و با اینکه به‌صورت آرایه‌ای قابل تعریف است اما شما حتما یک مورد و آن هم «آموزشی» قرار دهید. دسته‌ی    دیگر «خبری» است که به خبرهای مربوط به سایت اختصاص دارد.</li>
                        <li>tags که برچسب‌های مطلب است و می‌تواند چند مورد تعیین شود که هر مورد در خط جدا و ابتدای خط - قرار می‌گیرد. برچسب‌ها باید به‌گونه‌ای    باشند که مجموعه‌ای از مطالب قبلی یا مطالب آتی را پوشش دهند و حدالامکان باید از برچسب‌های فعلی سایت باشند. برچسب با کلیدواژه متفاوت است   و مثلاً اگر مطلب شما درباره‌ی برنامه‌ی X است، کلیدواژه مطلب X است اما برچسب مطلب می‌تواند عبارت «نرم‌افزار» و دسته‌ی نرم‌افزار مانند     مرورگر باشد.</li>
                        <li>featured که تصویر شاخص مطلب است و می‌توانید بعد از قرار دادن تصویر در شاخه‌ی public/images نام فایل آن را در این قسمت بنویسید.</li>
                        <li>keywords که کلیدواژه‌های مطلب است و حداکثر ۵ مورد باید باشد و اولین کلیدواژه مهمترین آن باشد. کلیدواژه‌ها نباید کلی باشند.</li>
                        <li>description که توضیحاتی مختصری درباره‌ی مطلب است و باید از ۸۰ حرف بیشتر و از ۱۵۰ حرف کمتر باشد.</li>
                        <li>advimg که اگر تعیین شود، تصویری در متن شما نمایش داده می‌شود که می‌تواند یک بنر تبیغاتی باشد. شما می‌توانید برای مطالب خود حامی    گرفته و تبلیغات آن‌ها را به این صورت نمایش دهید.</li>
                        <li>advurl که لینک مرتبط با تصویر تبلیغاتی advimg است که با کلیک روی تصویر، این لینک باز می‌شود.</li>
                    </ul>
                    <p>برای درج کد در متن می‌توانید از مثال زیر استفاده کنید و به‌جای sh زبان کد را بنویسید.</p>
                    <code className={articleStyle.text}>
                        <br/>
                         ```sh<br/>
                         ping linuxihaa.ir<br/>
                         ```<br/>
                    </code>
                    <p>تصاویر را نیز می‌توانید در شاخه‌ی public/images قرار دهید و با کدی شبیه به کد زیر از آن‌ها استفاده کنید.</p>
                    <code className={articleStyle.text}>
                        <br/>
                        ![image-title](/images/image-name.png)
                    </code>
                    <p>
                    شما می‌توانید اطلاعات خود را در شاخه‌ی public/articles/authors و فایل users.yml اضافه کنید تا نام، آدرس و دیگر مشخصات مورد نظر شما، زیر   مطالب نگارش شده شما نمایش داده شود. این مشخصات شامل موارد زیر هستند که زیر خطی که اول آن ID: نوشته شده است می‌آیند و ID شناسه شما است که   در مطالب خود توسط متغییر user به آن اشاره می‌کنید.
                    </p>
                    <ul>
                        <li>name که نام شما است.</li>
                        <li>url که می‌تواند آدرس سایت یا … شما باشد و یا آن را به‌صورت mailto:email تعریف کنید تا لینک برای ایمیل دادن به شما باز شود.</li>
                        <li>email که ایمیل شما است که باید حتما تعیین شود در مواردی مانند تماس‌ها و بارگذاری آواتار شما کاربرد دارد.</li>
                        <li>bio که یک توضیح مختصری از خودتان است.</li>
                        <li>image تصویر شما برای نمایش در کنار عنوان مطلب است.</li>
                    </ul>
                    <br/>
                    <p>در صورت داشتن سوال با ما تماس بگیرید.</p>
                </main>
            </Paper>
        </>
    )
}
