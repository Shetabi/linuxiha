---
layout: post
jdate: '1392-10-16'
user: misam
title: توزیع آرچ لینوکس
categories:
- آموزشی
tags:
- آرچ‌لینوکس
featured: arch_linux.jpg
keywords:
- آرچ لینوکس
- arch linux
description: معرفی توزیع توزیع آرچ لینوکس
timeToRead: 5
---

یکی از توزیع‌های جالب خانواده لینوکس، توزیع آرچ لینوکس هست که در سال ۲۰۰۲ شروع به انتشار کرده است.

هدف آرچ لینوکس ارائه یک نسخه سبک و ساده از لینوکس است و تیم توسعه روی سبکی و صحت کدها تایید دارد به گونه‌ای که در استفاده اولیه فاقد افزونه‌ها و پیچیدگی‌ها است و یک نسخه ساده در اختیار شما می‌گذارد.

این توزیع برای معماری‌های x86-64 و IA-32 منتشر می‌شود که هنگام دریافت نسخه دوتایی که شامل هر دو معماری می‌شود را می‌گیرید.

با رفتن به سایت آرچ لینوکس می‌توانید این توزیع را از تورنت و یا میرورها دریافت کنید. archlinux.org/download

* برای من جالب بود که در لیست میرورها، ایران هم دیدم که توسط دانشگاه یزد میرور شده است و از این جهت خیلی خوشحال شدم که دانشگاه‌ها رو به همچین کارهای ارزشمندی اوردن.

![](/linuxiha/images/arch-bootloader.png)

لودر ارچ لینوکس - در این تصویر به هدف سبکی و سادگی اشاره شده است

بعد از دریافت ارچ لینوکس با اجرای آن لودر بالا می‌آید (در تصویر بالا مشاهده می‌کنید) که لیست بارگذاری‌ها بر اساس پردازنده شما و امکانات دیگری مثل تست حافظه رم و ریبوت و خاموش کردن رو به شما می‌دهد.

![](/linuxiha/images/arch-terminal.png)

شروع محیط خط‌فرمان آرچ لینوکس

با انتخاب بوت مناسب بعد از چند ثانیه محیط خط فرمان رو مشاهده می‌کنید. تعجب نکنید! ارچ به صورت پیش‌فرض محیط خط‌فرمان با پوسته بش را برای کاربر محیا می‌کند که می‌توانید با کلیدهای Ctrl + Alt + F1-6 از شش محیط خط‌فرمان استفاده کنید و برای استفاده از محیط گرافیکی باید میزکار و مدیر پنجره را نصب کنید (میزکارهای گنوم و ... هنوز به صورت رسمی و پایدار برای این نسخه آماده نشده‌اند).

این توزیع از مدیربسته پک‌من (pacman) استفاده می‌کند که مدیریت نصب، حذف و بروزرسانی بسته‌های tar.gz را برعهده دارد.

آرچ لینوکس به صورت غلطان منتشر می‌شود. یعنی زمان بروزرسانی‌ها مشخص نیست و با آمدن نسخه جدید، نسخه قبلی شما بروز می‌شود و تا ۲۰۰۸ هر نسخه اسم رمز داشت اما از آن به بعد فقط با نام زمان منتشر می‌شود. مثلا نسخه آخر آن تا به این زمان، 2013.12.01 است.

بعد از بالا آمدن آرچ لینوکس مشاهده کردید که فرآیند نصبی انجام نشد و این نسخه به صورت لایو اجرا می‌شود.

و اما نصب ارچ لینوکس و قرار دادن دائمی آن در دیسک تقریبا باید مراحل طولانی و سختی را دنبال کنید!

بعد از بالا آمدن با دادن دستور `cat installation.txt` می‌توانید متن پیش‌فرضی که برای آموزش نصب قرار داده شده را مطالعه کنید که شما را به آدرس wiki.archlinux.org/index.php/Installation_Guide ارجاع داده است اما من آموزش تصویری مناسبی را پیدا کردم که می‌توانید از آدرس muktware.com/2013/11/how-to-install-arch-linux-updated/16825 مطالعه کنید و در آینده ترجمه آن را در همین سایت منتشر خواهم کرد.

فرایند نصب کمی پیچیده به نظر می‌رسد اما این‌طور نیست و قابل انجام است؛ فقط کمی طولانی است. اما خود مراحل نصب آموزش‌های زیادی به شما می‌دهد که برای کاربران مشتاق بسیار جالب است.