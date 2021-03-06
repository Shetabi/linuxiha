---    
layout: post
jdate: '1396-02-02'
user: amirhne
title: ساخت هات‌اسپات در اوبونتو ۱۶.۰۴
categories:
- آموزشی
tags:
- اوبونتو
- شبکه
featured: kde-nm-connection-editor.png         
keywords:
- هات اسپات اوبونتو
description: آموزش ساخت هات اسپات و به اشتراک گذاری اینترنت در اوبونتو ۱۶.۰۴
timeToRead: 5
---

در خیلی از شرایط نیاز هست که ارتباط شبکه خود را که به‌صورت LAN دریافت کرده‌اید روی وایرلس با دیگران به اشتراک بگذارید.
در محیط ویندوز نرم‌افزارهایی مانند connectify و ... وجود دارد که با استفاده از کارت شبکه وایرلس شما، شبکه و اینترنت شما روی وایرلس به اشتراک می‌گذارد.
در محیط اوبونتو نیز میتوان این امر را با استفاده از `kde nm connection editor` انجام داد.

![kde nm connection editor](/linuxiha/images/kde-nm-connection-editor.png )

### پیش‌نیاز ها


*   سیستم عامل اوبونتو ۱۲.۰۴ به بالا
*   کارت شبکه LAN
*   کارت شبکه وایرلس
*   اتصال به یک شبکه یا به اینترنت از طریق LAN



در ابتدا بایستی پکیج های مورد نیاز برای نصب kde nm connection editor را از نصب کنید که خوشبختانه در ریپازیتوری خود اوبونتو موجود است.

```sh
sudo apt-get install plasma-nm
```



بعد از نصب پکیج مربوطه alt+f2 بزنید.
و متن kde-nm-connection-editor جستوجو کنید و روی اولین گزینه کلیک کنید.
![kde nm connection editor search](/linuxiha/images/kde-nm1.png )




بعد باز شدن برنامه بر روی گزینه add کلیک کنید و بر روی Wireless(shared) کلیک کنید.
![kde nm connection editor open](/linuxiha/images/kde-nm2.png )




در صفحه جدید تنظیمات وایرلس خود مانند نام، رمز عبور، نوع رمزنگاری و غیره را تعیین کنید.
![kde nm connection editor create](/linuxiha/images/kde-nm3.png )



بعد از ساخته شدن کانکشن در نوار بالا بر روی منو شبکه unity کلیک کنید و گزینه Connect to Hidden Wi-Fi network کلیک کنید و در صفحه جدید  کانکشنی که ساختید را انتخاب کنید.
![kde nm connection editor create](/linuxiha/images/kde-nm4.png )


در صورتی که تمام مراحل را به درستی انجام داده باشید و ارتباط کارت شبکه های شما توسط سیستم عامل شناسایی شده باشند، وایرلس شما ساخته شده است و دستگاه های خود را میتوانید به آن متصل کنید.

متاسفانه در این حالت هیچگونه دسترسی برای تغییرات در DHCP و NAT وجود ندارد.

امیدوارم که این آموزش مفید واقع شده باشه...
