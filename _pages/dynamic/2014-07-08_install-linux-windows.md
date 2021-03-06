---
layout: post
jdate: '1393-04-17'
user: saaie
title: نصب لینوکس بدون ترس کنار ویندوز
categories:
- آموزشی
tags:
- اوبونتو
- پیکربندی
featured: KURnS.png
keywords:
- نصب لینوکس
- نصب اوبونتو
- نصب اوبونتو کنار ویندوز
description: آموزش نصب لینوکس کنار ویندوز
timeToRead: 5
---

امروز می‌خوام یه چندتا نکته رو درمورد لینوکس بگم، این مطلب در مورد یه دیسترو خاص مثل ابونتو، فدورا و غیره نیس کلی و عمومی هس و در همه صدق می‌کنه.

اکثر دیستروها به خصوص اونهایی که کاربر زیادی دارن یک نصاب دارن که بعضی‌ها مثل اوبونتو و فدورا گرافیکی و در بعضی ها مثل اسلکور به صورت متنی هستند. شاید شما این ترس رو داشته باشید که اگه لینوکس رو کنار ویندوز بخواید نصب کنید فایل‌هاتون از بین بره. خب این ترس شما بجاست. شما باید چندتا نکته‌ی زیر رو بدونید تا مراحل نصب رو مطمئن پیش ببرید.

برای نصب لینوکس سعی کنید در نصاب‌ها گزینه‌ای رو انتخاب کنید که به شما اجازه میده به صورت دستی پارتیشن‌ها رو انتخاب کنید.

برای مثال در اوبونتو به صورت زیر:

![KURnS](/linuxiha/images/KURnS.png)

بعد از این مرحله شما با توجه به حجمی که ویندوزتون اشغال کرده و اندازه پارتیشن و اینکه پارتیشن شماره چند هست می‌تونید متوجه بشید که کدوم پارتیشن مربوط به ویندوز هست.(راحت‌ترین راه اینه که تو ویندوز بیاید که پارتیشن رو حذف کنید برای لینوکس و این پارتیشن حذف شده در اینجا به صورت فضای خالی نمایش داده می‌شه و روی همون پارتیشن‌های لینوکس رو انتخاب می‌کنید).

خب لینوکس برای نصب تنها از پارتیشنی استفاده می‌کنه که به عنوان ریشه(root) در نظر گرفتید. این پارتیشن با **' / ' **مشخص می‌شود. برای این پارتیشن در حدود ۱۴ گیگ و یا بیشتر در نظر بگیرید. مثل زیر:

![f9AS5](/linuxiha/images/f9AS5-300x193.png)

همه فایل‌های نصب در این پارتیشن  کپی می‌شوند. هنوز یک پارتیشن مهم دیگه مونده که اگه رم بالایی دارین مثلا ۴ گیگ، مشکل خاصی بوجود نمیاد ولی بهتره که اون رو تعریف کنید، این پارتیشن swap هس. اون رو با توجه به عکس زیر انتخاب ایجاد می‌کنید:

![lNmDo](/linuxiha/images/lNmDo-300x171.png)

لینوکس از این پارتیشن به عنوان رم مجازی استفاده می‌کنه و تنها وقتی از اون استفاده می‌کنه که رم شما فضای کافی برای نرم‌افزارها نداشته باشه برای تصمیم در مورد اندازه swap می‌تونید این مقاله `sito.ir/index/detail/805` رو بخونید.

حالا دیگه با خیال راحت نصبتون رو ادامه بدید و مطمئن باشید که فایل‌هاتون پاک نمی‌شن. من تو این مطلب مثال رو اوبونتو گفتم ولی تو همه دیستروها این صدق می‌کنه.