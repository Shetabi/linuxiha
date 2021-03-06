---
layout: post
jdate: '1393-04-18'
user: saaie
title: آشنایی با دایرکتوری‌های لینوکس
categories:
- آموزشی
tags:
- پیکربندی
featured: directories.jpg
keywords:
- دایرکتوری‌های لینوکس
- linux linux directories
description: آشنایی با دایرکتوری‌های لینوکس
timeToRead: 5
---

دیدین تو ترمینال وقتی دستور "/ ls" رو اجرا می‌کنین چندتا دایرکتوری میاد؟ می‌دونید استفاده هر کدوم چیه؟ خب با این مطلب همراه باشد تا به صورت خلاصه واستون بگم.

![linux directories](/linuxiha/images/directories.jpg)

*   **/  **این دایرکتوری ریشه تمامی دایرکتوری‌های موجود در لینوکس است. خارج از این دایرکتوری هیچ چیز وجود ندارد.
*   **home/  **این دایرکتوری رو هممون باهاش سر و کار داریم. یوزرهایی که توی لینوکس ساخته میشن به غیر از root فایل‌هاشون تو این دایرکتوری قرار می‌گیره.
*   **bin/ **این دایرکتوری مربوط به دستورات پایه‌ای لینوکس هست. این دستورات در حالت اجرای تک کاربره لینوکس هم قابل استفاده هستند.
*   **boot/ ** این دایرکتوری مربوط به فایل‌های بوت لینوکس هست. فایل‌های هسته لینوکس، مقداردهی اولیه حافظه و boot loader
*   **dev/ **دستگاه‌هایی که توسط لینوکس شناسایی میشن تو این دایرکتوری قرار می‌گیرن. مثل کارت صدا، ماوس و ...
*   **etc/ **فایل‌های پیکربندی و تنظیماتی که مربوط به کل سیستم و تمامی یوزرهاست در این دایرکتوری قرار می‌گیرند.
*   **lib/ **کتابخانه‌هایی که برای اجرای دستورات دایرکتوری bin و sbin مورد نیاز است در این دایرکتوری قرار گرفته‌اند.
*   **media/ **وسایلی مثل فلش، سی‌دی یا هارد خارجی و غیره که خاصیت جداشدنی دارند در این دایرکتوری mount می‌شوند.
*   **mnt/ **این دایرکتوری برای این وجود دارد که به صورت دستی و موقت یک فایل‌سیستم را در این دایرکتوری mount کنیم.
*   **opt/ **در این دایرکتوری به صورت اختیاری می‌توان نرم‌افزار نصب کرد. نرم‌افزارهایی که از مخازن اصلی توزیع‌ها گرفته نمی‌شوند معمولا در این دایرکتوری نصب می‌شوند.
*   **proc/ **لینوکس یک فایل‌سیستم مجازی(procfs) از فرایند‌ها(process) و اطلاعات دیگر در مورد برنامه‌های در حال اجرا در این دایرکتوری mount می شود.
*   **root/ **در بالا گفتیم که فایل‌های یک یوزر در لینوکس در دایرکتوری home قرار می‌گیرد، یک استثنا وجود دارد و آن یوزر root است که فایل‌های آن در این دایرکتوری قرار می‌گیرند.
*   **sbin/ **مثل دایرکتوری bin با این تفاوت که دستورات موجود در این دایرکتوری نیاز به دسترسی super user دارند.
*   **srv/ **محل قرارگیری داده‌های سرویسی که لینوکس ما قرار است بدهد. مثل سرویس www یا CVS و غیره
*   **sys/ **این دایرکتوری مربوط به دستگاه‌هایی است که به لینوکس متصل هستند و اطلاعات آن‌ها از جمله آمار و محاسبات موردنیاز و نام آن‌ها در این دایرکتوری قرار می‌گیرد.
*   **tmp/ **فایل‌هایی که به صورت موقت باید ایجاد شوند مثلا وقتی که فایل فشرده را باز می کنید در این دایرکتوری از حالت فشرده خارج می‌شوند و معمولا فایل‌های درون این دایرکتوری در هر بار اجرای دوباره لینوکس پاک می‌شوند.
*   **usr/ **دیتای فقط خواندنی  یوزرها و برنامه‌هایی که در لینوکس چند کاربره استفاده می‌شوند در این دایرکتوری هستند.
*   **var/ **فایل‌هایی که در طول اجرای برنامه‌ها در لینوکس ممکن است تغییر کنند در این دایرکتوری هستند. مثل log و فایل‌های lock و غیره