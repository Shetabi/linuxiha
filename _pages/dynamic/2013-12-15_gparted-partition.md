---
layout: post
jdate: '1392-09-24'
title: معرفی ویراشگر پارتیشن GParted
author: میثم ساکی
author_url: http://misam.ir
author_bio: من میثم ساکی هستم؛ برای اطلاعات بیشتر به سایت من سر بزنید
categories:
- آموزشی
tags:
- نرم‌افزار 
featured: gparted-icon.png
keywords:
- GParted
- پارتیشن بندی لینوکس
description: معرفی ویراشگر پارتیشن GParted برای پارتیشن بندی لینوکس
timeToRead: 5
---

برنامه جی‌پارتد (GParted) یک ویرایشگر پارتیشن قوی گنوم (Gnome Partition Editor) است که هم برای اکثر توزیع‌ها لینوکس منتشر می‌شود و هم به صورت جداگانه می‌توانید نسخه ایزو (ISO) آن را دریافت کرده و به صورت لایو (Live) از روی دیسک اجرا کنید و هارد دیسک خود را پارتیشن بندی و ویرایش کنید.

![](/linuxiha/images/gparted_screenshot.png)

روز ۲۲ آذر برابر با ۱۳ دسامبر نسخه <span dir="ltr">0.17.0-1</span> لایو این ویرایشگر پارتیشن که بر پایه دبیان است منتشر شده است. نسخه مخصوص توزیع‌ها هم‌اکنون 0.17.0 است.

نسخه جدید با قابلت تغییر اندازه برخی فایل سیستم‌ها (Btrfs ،ext3 ،ext4 ،JFS ،LVM2 pv ،NILFS2 ،ReiserFS و XFS) زمانی که آن‌ها مانت شده‌اند می‌باشد. همچنین بسیاری از باگ‌های رفع شده است و ترجمه‌ها به‌روز شده‌اند.

نسخه جدید بر پایه دبیان سید (Sid) است که در تاریخ 2013-12-13 منتشر شده است و از هسته لینوکس ۳.۱۱.۱۰ بهره می‌برد.

### کارهایی که می‌توان با GParted انجام داد

*   ساخت یا حذف پارتیشن
*   تغییر اندازه و یا جابجایی پارتیشن
*   چک کردن پارتیشن
*   برچسب (label) زدن به پارتیشن
*   تنظیم UUID جدید
*   کپی و چسباندن (paste)

### فایل سیستم‌ها و فرمت های پارتیشنی که GParted پشتیبانی می کند

*   btrfs
*   ext2 / ext3 / ext4
*   fat16 / fat32
*   hfs / hfs+
*   linux-swap
*   lvm2 pv
*   nilfs2
*   ntfs
*   reiserfs / reiser4
*   ufs
*   xfs

این برنامه در پردازنده‌های x86 و x86-64 با حداقل رم ۱۲۸ مگابایت قابل اجرا است و برای اکثر توزیع‌های لینوکس و همچنین ویندوز و مک به صورت رایگان منتشر می‌شود.

برای دریافت برنامه می‌توانید به این آدرس مراجعه کنید. gparted.org/download.php