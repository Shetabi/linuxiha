if(!self.define){const i=i=>{"require"!==i&&(i+=".js");let e=Promise.resolve();return a[i]||(e=new Promise((async e=>{if("document"in self){const a=document.createElement("script");a.src=i,document.head.appendChild(a),a.onload=e}else importScripts(i),e()}))),e.then((()=>{if(!a[i])throw new Error(`Module ${i} didn’t register its module`);return a[i]}))},e=(e,a)=>{Promise.all(e.map(i)).then((i=>a(1===i.length?i[0]:i)))},a={require:Promise.resolve(e)};self.define=(e,n,s)=>{a[e]||(a[e]=Promise.resolve().then((()=>{let a={};const u={uri:location.origin+e.slice(1)};return Promise.all(n.map((e=>{switch(e){case"exports":return a;case"module":return u;default:return i(e)}}))).then((i=>{const e=s(...i);return a.default||(a.default=e),a}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(i){"use strict";importScripts(),self.skipWaiting(),i.clientsClaim(),i.precacheAndRoute([{url:"/linuxiha/_next/static/cL1Y-saz8u7gjEapOS56t/_buildManifest.js",revision:"cL1Y-saz8u7gjEapOS56t"},{url:"/linuxiha/_next/static/cL1Y-saz8u7gjEapOS56t/_ssgManifest.js",revision:"cL1Y-saz8u7gjEapOS56t"},{url:"/linuxiha/_next/static/chunks/0a80999fc181c505349503ab99cb48e12dd21d5f.8d96d4ee1d85a9fbacaa.js",revision:"cL1Y-saz8u7gjEapOS56t"},{url:"/linuxiha/_next/static/chunks/2baa58482c3372d184033a595443e0f572e7b1c4.16a8f3d2dd4b1cc1dc64.js",revision:"cL1Y-saz8u7gjEapOS56t"},{url:"/linuxiha/_next/static/chunks/62fe7e9d22a1726972947cded11c01c9c8655364.c3d97f18e04e41235ad9.js",revision:"cL1Y-saz8u7gjEapOS56t"},{url:"/linuxiha/_next/static/chunks/755b54d753eea6c310ec0b9a05508d467366a08f.dd8ff6ba50741b700375.js",revision:"cL1Y-saz8u7gjEapOS56t"},{url:"/linuxiha/_next/static/chunks/75fc9c18.f5b2422e60fa4526d5e5.js",revision:"cL1Y-saz8u7gjEapOS56t"},{url:"/linuxiha/_next/static/chunks/dccdaae97238514e0e59f68ff40a3150f2d60869.89fe7d2ec4c2f716676f.js",revision:"cL1Y-saz8u7gjEapOS56t"},{url:"/linuxiha/_next/static/chunks/ed829c6ba77c8cb62b8604bfa97ae62f0abbc7ed.69e17f26dc467dcd1735.js",revision:"cL1Y-saz8u7gjEapOS56t"},{url:"/linuxiha/_next/static/chunks/framework.f8bd46fc02868c500bda.js",revision:"cL1Y-saz8u7gjEapOS56t"},{url:"/linuxiha/_next/static/chunks/main-a5d54ded7e1d3d9ae004.js",revision:"cL1Y-saz8u7gjEapOS56t"},{url:"/linuxiha/_next/static/chunks/pages/_app-a83df15ed4e450ef1a09.js",revision:"cL1Y-saz8u7gjEapOS56t"},{url:"/linuxiha/_next/static/chunks/pages/_error-7371f5e85deffbc4ad12.js",revision:"cL1Y-saz8u7gjEapOS56t"},{url:"/linuxiha/_next/static/chunks/pages/about-d92dc6ec4cb276776da0.js",revision:"cL1Y-saz8u7gjEapOS56t"},{url:"/linuxiha/_next/static/chunks/pages/articles/%5Bslug%5D-ffcd6938fe39115cfede.js",revision:"cL1Y-saz8u7gjEapOS56t"},{url:"/linuxiha/_next/static/chunks/pages/index-0688acd110f93a802a28.js",revision:"cL1Y-saz8u7gjEapOS56t"},{url:"/linuxiha/_next/static/chunks/pages/learning-a788caa8b3e2cd5abd28.js",revision:"cL1Y-saz8u7gjEapOS56t"},{url:"/linuxiha/_next/static/chunks/pages/news-0514b0976c1783c026d0.js",revision:"cL1Y-saz8u7gjEapOS56t"},{url:"/linuxiha/_next/static/chunks/polyfills-79441a336eb07a143a5d.js",revision:"cL1Y-saz8u7gjEapOS56t"},{url:"/linuxiha/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"cL1Y-saz8u7gjEapOS56t"},{url:"/linuxiha/_next/static/css/2210d1cd703e1fdb1ac6.css",revision:"cL1Y-saz8u7gjEapOS56t"},{url:"/linuxiha/_next/static/css/3f7af066396eec260f35.css",revision:"cL1Y-saz8u7gjEapOS56t"},{url:"/linuxiha/_next/static/css/9a3e8d8b31094019ba48.css",revision:"cL1Y-saz8u7gjEapOS56t"},{url:"/linuxiha/_next/static/css/bfda5624e485a608a72a.css",revision:"cL1Y-saz8u7gjEapOS56t"},{url:"/linuxiha/_next/static/css/cfa3843bd89528c899d4.css",revision:"cL1Y-saz8u7gjEapOS56t"},{url:"/linuxiha/_next/static/media/Gandom.7b81678f807419651a4ca9b2da35733a.woff",revision:"cL1Y-saz8u7gjEapOS56t"},{url:"/linuxiha/_next/static/media/Gandom.952af5061126b10d781280913da4a58b.woff2",revision:"cL1Y-saz8u7gjEapOS56t"},{url:"/linuxiha/_next/static/media/Gandom.f619adefd7b1baeaeb9263974d215de1.ttf",revision:"cL1Y-saz8u7gjEapOS56t"},{url:"/linuxiha/android-chrome-192x192.png",revision:"08706a28174df61a448aea836a212898"},{url:"/linuxiha/android-chrome-512x512.png",revision:"e663969f2b93ff641b85425b4b42fbd8"},{url:"/linuxiha/apple-touch-icon.png",revision:"9102377da9fd9e50505d601bccca34d0"},{url:"/linuxiha/articles/authors/user.png",revision:"6f6bbb16aec97391aefe120ec5a4e6a2"},{url:"/linuxiha/articles/authors/users.yml",revision:"a285600824c89303e4723c9687f799c2"},{url:"/linuxiha/browserconfig.xml",revision:"68c9044fa4a08749efb85bb2a4edaede"},{url:"/linuxiha/favicon-16x16.png",revision:"e8bda69972d4b4cac6b5a0347df56340"},{url:"/linuxiha/favicon-32x32.png",revision:"fb425ffa5a5be8229c41638e9423f8e2"},{url:"/linuxiha/favicon.ico",revision:"ec214dcb079558048fcd43a0602e6bdf"},{url:"/linuxiha/fonts/Gandom.ttf",revision:"8529dbe99792d83290434205c9008d9d"},{url:"/linuxiha/fonts/Gandom.woff",revision:"dbd3bdd1f9423a4125b89715c0993aa7"},{url:"/linuxiha/fonts/Gandom.woff2",revision:"84695fd366e7b98d24971c6804402ced"},{url:"/linuxiha/icon-192x192.png",revision:"5a5bc48c9eded46d3ddb65acbe0aa2df"},{url:"/linuxiha/icon-256x256.png",revision:"d185d6aed8cad958e74f174fb2253784"},{url:"/linuxiha/icon-384x384.png",revision:"a7b5439f2b40c832378b4789ccab166b"},{url:"/linuxiha/icon-512x512.png",revision:"745bc509948dd1d7b1f21e810138971e"},{url:"/linuxiha/icons/article.png",revision:"68186bdbaf60dce9fa7be6ce40d56362"},{url:"/linuxiha/icons/github.png",revision:"0918d78648457def080137b179fc5608"},{url:"/linuxiha/icons/home.png",revision:"56f8205850dc6a2e92c791a67e91da6f"},{url:"/linuxiha/icons/info.png",revision:"b9ca59fc8b46d3b59705c648890eb042"},{url:"/linuxiha/icons/instagram.png",revision:"4a8c23476a7c20c5bee2a752a6f96e9e"},{url:"/linuxiha/icons/news.png",revision:"b565e16114fe478d09d739f33a428c71"},{url:"/linuxiha/icons/telegram.png",revision:"b37d6df3b36a74748a9bda890b3ba550"},{url:"/linuxiha/icons/twitter.png",revision:"0251d8ee95aa6d1f3400faa3b46b4bcf"},{url:"/linuxiha/images/1.png",revision:"e98d7ec3524cb4e25cc5da0c1d45e5d6"},{url:"/linuxiha/images/2.jpeg",revision:"0f84884b064281fdf4424a6874517f12"},{url:"/linuxiha/images/2013-10-06_1.png",revision:"033a30f56269ef6804dcfbea4f3f92c2"},{url:"/linuxiha/images/2013-10-06_2.png",revision:"559e0cf607e351ded9a90fb079170f8a"},{url:"/linuxiha/images/2013-10-06_3.png",revision:"1af3157241497fded8c76fd5617ce9fd"},{url:"/linuxiha/images/3-HiDPI.jpeg",revision:"dc2e03784de6b1cd7ec4657e7de73e12"},{url:"/linuxiha/images/4-gnome-software.png",revision:"348f17dd35c89dbccf4870aed3fab672"},{url:"/linuxiha/images/5-Gnome-Photo.jpeg",revision:"d293abce213cc75f1d6efb8737d98215"},{url:"/linuxiha/images/6-popovers.png",revision:"406de997525939e6d1a57eb0d550dd5c"},{url:"/linuxiha/images/7-Terminal.jpeg",revision:"5133b1f64eab526019ebbca1fa7de87c"},{url:"/linuxiha/images/8-Gedit.jpeg",revision:"a124d27046e9e31c1c07430b7cb625b2"},{url:"/linuxiha/images/9-Wayland.jpg",revision:"dea63a1d0e3b87536eb2a331ff987a85"},{url:"/linuxiha/images/DistroWatch.jpg",revision:"4f9e162c59dda4baa49386706fca15a2"},{url:"/linuxiha/images/FirefoxHD.jpg",revision:"9cbbfb6f6d089fdffbb3d3be64629d24"},{url:"/linuxiha/images/Flareget-Screenshot-03.png",revision:"66e119196785a520af53698e9e168cbd"},{url:"/linuxiha/images/FlashBoot.jpg",revision:"11507a0c40e62cc5096755f6c016bf46"},{url:"/linuxiha/images/GDM-LoginForm2.jpg",revision:"514814b6f19f8a6348f6b2d52bd2a227"},{url:"/linuxiha/images/GDM-LoginFrom.jpg",revision:"3da7adcf168949b54677785d47c750d3"},{url:"/linuxiha/images/GPIO4-RPi3.jpg",revision:"8e51a29e80efcc2ff7a5a083016aa9ef"},{url:"/linuxiha/images/Gnome-Tweark-Tool.jpg",revision:"caed24ba321a8354026d4d764488fe83"},{url:"/linuxiha/images/JumperOnGPIO4.jpg",revision:"d0aaebcd10e7c9e7bd419b000863b32b"},{url:"/linuxiha/images/JumperWithAntenna.jpg",revision:"7edfb61aeec887262b78647232360520"},{url:"/linuxiha/images/K3b.png",revision:"75b44fac08ef5b2332f603f5d5150482"},{url:"/linuxiha/images/KURnS.png",revision:"ab9fd4480a5cababfe91a6a97eedd43c"},{url:"/linuxiha/images/Kaffeine-playing-a-video-file.jpg",revision:"edce22ef4ae2d8833a83acf620d0ddbb"},{url:"/linuxiha/images/Kdebeta2_plasma_screenshot.png",revision:"f0533098fd8718f3e1226259d4845977"},{url:"/linuxiha/images/KeyboardPrivacyButton650.jpg",revision:"d92a6e1bd415cbbd826ae448fa373054"},{url:"/linuxiha/images/Kloxo6.1.0-high.png",revision:"acbd02519a80fec03383980259299fe4"},{url:"/linuxiha/images/LightDM.jpg",revision:"7844a6ec4ca87e2d8575c7f1688e606e"},{url:"/linuxiha/images/LightdmVSGdm3.jpg",revision:"f40b0baea601e3b05f1d1632b573bb8e"},{url:"/linuxiha/images/Lubuntu-vs-Xubuntu.png",revision:"b13a0320b57da61d1bbc2b9056ca80ea"},{url:"/linuxiha/images/Raspberry_FM_Transmitter_Logo.jpg",revision:"588e58e43b79ed192c5cfa0567ac2afb"},{url:"/linuxiha/images/Screenshot-from-2014-07-17-034453-300x182.png",revision:"52e33c8550d523872474664cf307b668"},{url:"/linuxiha/images/Screenshot-from-2014-07-17-034535-1024x622.png",revision:"0fbe9729a0e19398db3c90363f68602c"},{url:"/linuxiha/images/Screenshot-from-2015-05-02-184650.jpg",revision:"ced949b6248c47b44455b5c18410e92c"},{url:"/linuxiha/images/SoNebuntu.jpg",revision:"e202e51b93938c010e9270a58991a697"},{url:"/linuxiha/images/Telegram-screen-300x171.jpg",revision:"f9b3d7b09a4249fc20e774c7253c3d28"},{url:"/linuxiha/images/ZorinOS.jpg",revision:"a99abd319fd0b9ea7461baaa5d2f40af"},{url:"/linuxiha/images/ZorinSessionOnUbuntu.jpg",revision:"1fcc45234bd01dd1e5396824cf51d58c"},{url:"/linuxiha/images/ZorinSessionOnUbuntu2.jpg",revision:"24759b96b0699a5e56f16c91e86913fd"},{url:"/linuxiha/images/ZorinSessionOnUbuntu3.jpg",revision:"8bf5378a58616797a8798e7c12ef98a5"},{url:"/linuxiha/images/adding-a-hard-disk-1-1.jpg",revision:"67c06b3cfd6e2fa8c0ac7040359b3580"},{url:"/linuxiha/images/alllin.jpg",revision:"eedbe1b21202f1b4f54e3b241c6c99f9"},{url:"/linuxiha/images/ap-hotspot.png",revision:"e8ce83497cf2613db4570602927e988b"},{url:"/linuxiha/images/arch-bootloader.png",revision:"3387f9df9b10331075a01fa163f7ce38"},{url:"/linuxiha/images/arch-terminal.png",revision:"5c07a703c689337e3bc0ba1e1ea013cb"},{url:"/linuxiha/images/arch_linux.jpg",revision:"83e89ef105333718f73c1db69c196f69"},{url:"/linuxiha/images/as2.jpg",revision:"ef45640ef40a42dd40d778fb87ab5c28"},{url:"/linuxiha/images/asciinema.png",revision:"a99278130f4e995862319b9f16d145c7"},{url:"/linuxiha/images/banner.png",revision:"7066a4976ef215062643fbe57a69a834"},{url:"/linuxiha/images/brasero.jpg",revision:"a868f9a445352b4cd48703c4311739eb"},{url:"/linuxiha/images/brasero03.png",revision:"cbafaf41da28564fa9bec5edbef31ed4"},{url:"/linuxiha/images/cgdisk-bios-partition.jpg",revision:"11b106b32d250219b7b0b1148602dd2b"},{url:"/linuxiha/images/cgdisk-complete-partitions.jpg",revision:"ab9114d9691a36dc8cb783b7a029b3d1"},{url:"/linuxiha/images/cgdisk.jpg",revision:"96a2b280d38ef19a5beefa4e254461a0"},{url:"/linuxiha/images/charset-converter-screenshot-01.png",revision:"0247026d474b7c0f467fcac49e9588a0"},{url:"/linuxiha/images/charset-converter.png",revision:"498639616d13254bc3e65f763d10da87"},{url:"/linuxiha/images/cinnamon_ubuntu.jpg",revision:"be71354976adf4c42c111d196d551628"},{url:"/linuxiha/images/cn/gnu-wallpaper.jpg",revision:"4dd20ea4e7581f3d97f6413e05661b00"},{url:"/linuxiha/images/cn/gnu-wallpaper2.jpg",revision:"029bfbbf496d777251188a6bf4d21c6d"},{url:"/linuxiha/images/cn/linux_mint_18.jpg",revision:"4b9dade8a4e427b0c5093ddb6e43e023"},{url:"/linuxiha/images/cn/ubuntu1610.png",revision:"9834c9829953c165c8708ab73d743bc5"},{url:"/linuxiha/images/codecs.png",revision:"e6e3b6d453c50deba05729a9a43f8718"},{url:"/linuxiha/images/conflict.png",revision:"da99c1b4e70c876e6640d0c2ef812f78"},{url:"/linuxiha/images/create-article.png",revision:"d75fe0cb52fdc50ef531f4b50566fa51"},{url:"/linuxiha/images/create-package.jpg",revision:"0b3e2e135d68b1f2a94759b9fc0aeec0"},{url:"/linuxiha/images/dashterminal1-400x242.png",revision:"9b3da4d4d0bf1272197235214960289c"},{url:"/linuxiha/images/deadbeef.png",revision:"a1341b70862bb16cce823da0de8f00fe"},{url:"/linuxiha/images/deb00.png",revision:"7966a0487699d06153665fc1a3a345b5"},{url:"/linuxiha/images/deb01.png",revision:"2103e8c8783dcb73a06dae28c786e764"},{url:"/linuxiha/images/deb02.png",revision:"bef3fc14f876e3f2ae09e121a489e9e7"},{url:"/linuxiha/images/deb03.png",revision:"6132dd9a637c32d9011580ac909a4add"},{url:"/linuxiha/images/debian-nfs.jpg",revision:"296b4725b1996e71a8400ebf817573ad"},{url:"/linuxiha/images/default.jpg",revision:"ae31f9f2cc73498a4bf6a2d376399187"},{url:"/linuxiha/images/default2.jpg",revision:"de109f84136ad4f05a3abd8751b9f6f8"},{url:"/linuxiha/images/dhcpd-linux.jpg",revision:"59b1bc59fef5331f219d065c84ced349"},{url:"/linuxiha/images/di-KQD8.png",revision:"5bd1ebb511b79c4e8e5c133c1185aa6f"},{url:"/linuxiha/images/directories.jpg",revision:"06f222930803ea6c02445f974a3c9d76"},{url:"/linuxiha/images/dns-server-linux.jpg",revision:"682ec4917c93d8793fb82c3acccdda5a"},{url:"/linuxiha/images/drivers.jpg",revision:"0ecc2f4772eb4e13ecae717d121bdd72"},{url:"/linuxiha/images/dynamic-dns.jpg",revision:"a6cb1f6962b149df16697d80ee28a91e"},{url:"/linuxiha/images/edubuntu.jpg",revision:"d4e343833f8e8fa804624441d2cebba0"},{url:"/linuxiha/images/f9AS5-300x193.png",revision:"0822f23638440dc8f188b4fdf35aa9b4"},{url:"/linuxiha/images/fasubrip-kubuntu.gif",revision:"be85a817bc2873883b77f8863b210f1d"},{url:"/linuxiha/images/fedora_gnome_screeshot.png",revision:"d26af7d7224e56dbee49698d69fd30ab"},{url:"/linuxiha/images/firefox-512.jpg",revision:"af92e7dc4b53eb587380a29e1485cf27"},{url:"/linuxiha/images/flareget.jpg",revision:"2e5fe6ff406daebdd10c0d7fe854274e"},{url:"/linuxiha/images/gimp-screenshot-04.png",revision:"3f19e340f5cb1d656b3d4b07bfa4f6f6"},{url:"/linuxiha/images/gimp.png",revision:"bc05881c06267daf6cf210132e63cb5e"},{url:"/linuxiha/images/gnome-1-bg1.jpg",revision:"dc963ab2106c051386ed8c1979607f03"},{url:"/linuxiha/images/gnome-1-bg2.jpg",revision:"af839a02f6654297f889d2c8eb1fb41b"},{url:"/linuxiha/images/gnome-1-bg3.jpg",revision:"54eaa18cb6877de08e7ca2bf7362ef0f"},{url:"/linuxiha/images/gnome-1-bg4.jpg",revision:"129d0f422ec0c5f497db6812506f2d08"},{url:"/linuxiha/images/gnome-1-final.jpg",revision:"d1c9f728d94fd157eeafc9be32f90617"},{url:"/linuxiha/images/gnome-add_keyboard_shortcut.png",revision:"14c480ee950aca7eaaf6dd21bc9e0d3d"},{url:"/linuxiha/images/gnome-display-manager.png",revision:"309c6bef67b338f3f01b1aab9d71c75b"},{url:"/linuxiha/images/gnome-settings-keyboard_highlight.png",revision:"d2638a337defea9d17d7818aacd9db0c"},{url:"/linuxiha/images/gnome.jpg",revision:"e78dc37a73e1e22c09db48f8789aaa29"},{url:"/linuxiha/images/gnome_3.14-photos.png",revision:"680a45a6c7dd23e1e6c1293883ec6bff"},{url:"/linuxiha/images/gnome_3.14-weather.png",revision:"a9dd37b1de092de2e100bdcafd92ff00"},{url:"/linuxiha/images/gnu-linux.jpg",revision:"0b8099444f291c4c7691c4065e17ce2f"},{url:"/linuxiha/images/google_chrome.png",revision:"b834d71db0e2e514619b0c1dfc56b4ad"},{url:"/linuxiha/images/google_public_dns.jpg",revision:"5ae9f1d75bda397793901fee9b0edd71"},{url:"/linuxiha/images/gparted-icon.png",revision:"477b74b4c750dba477a35c3514ed1448"},{url:"/linuxiha/images/gparted-screenshot-01.png",revision:"16f4cd85873d230eceaf8841f6d9f326"},{url:"/linuxiha/images/gparted_screenshot.png",revision:"c43d69c785d3eae5cb8f757c324f2066"},{url:"/linuxiha/images/grub-cmd.png",revision:"f5ae53145b812a9bd9504766933425aa"},{url:"/linuxiha/images/grub2-password.jpg",revision:"0be2359efd453f5fb6026309af0da120"},{url:"/linuxiha/images/grub2.png",revision:"2a8bf5e36c3b526ce02539defc726e4b"},{url:"/linuxiha/images/gtg2.png",revision:"eaeebc5d425ca613fa5c475434a406d2"},{url:"/linuxiha/images/image_13_1.png",revision:"3b3827b2f8f3a21e2d72f50cffa45fd2"},{url:"/linuxiha/images/image_14_1.png",revision:"b40fb2d52880ae25368808e9c7221fcc"},{url:"/linuxiha/images/image_14_2.png",revision:"84c47c9f51c75b81167af129ece7db67"},{url:"/linuxiha/images/image_15_1.png",revision:"ac1fb7d5fe1aef4161fe5e38802ebe2f"},{url:"/linuxiha/images/image_16_1.png",revision:"40c2bfc9f24923d03d80f90d44f3bed9"},{url:"/linuxiha/images/infinality.png",revision:"6f04326aa434100e69241b67a5c7f9bf"},{url:"/linuxiha/images/java8.png",revision:"091d4b9a82cd99f38665108af89a18dc"},{url:"/linuxiha/images/k3b1.png",revision:"5eaf3432c3582b88ca90d8d5df30c2cd"},{url:"/linuxiha/images/kali-small.png",revision:"95d11a127502ee1407ec5d6bf53b7262"},{url:"/linuxiha/images/kali.png",revision:"65b876c80a7f992331b4e32948c48265"},{url:"/linuxiha/images/kde-nm-connection-editor.png",revision:"d6c8f7e9b5c02b43f811a8a58946c947"},{url:"/linuxiha/images/kde-nm1.png",revision:"e206e1ca7c3e121c7235f8ccdaf2287e"},{url:"/linuxiha/images/kde-nm2.png",revision:"d27d75076331d41cbb62a566656f13a9"},{url:"/linuxiha/images/kde-nm3.png",revision:"2ea585f7860f23e14ded310286d0aa4f"},{url:"/linuxiha/images/kde-nm4.png",revision:"8b4317a9dd31b445c2971f5cec29d1c6"},{url:"/linuxiha/images/kde-nm5.png",revision:"715db5aa702ab95fb72c00825139df33"},{url:"/linuxiha/images/kde-root-login-not-allowed.jpg",revision:"e633dc913f0665ef83442bf8c26e3877"},{url:"/linuxiha/images/kget-screenshot-08.png",revision:"6c38e63eb97f049f3266a19c71122529"},{url:"/linuxiha/images/kget.png",revision:"cfa1a596c9a571e3ac3261b6e6b796ce"},{url:"/linuxiha/images/kidspainter.jpg",revision:"19a46373a7828d289901c6562ef8fef9"},{url:"/linuxiha/images/kloxo-logo.png",revision:"aed1bb85876933eb2972613e34f225a4"},{url:"/linuxiha/images/kubuntu.jpg",revision:"3bf55dc4e5b3b87022719c18ba9dac92"},{url:"/linuxiha/images/lNmDo-300x171.png",revision:"7e1b849f1769625ae483deb513bb9fb3"},{url:"/linuxiha/images/lamp.jpg",revision:"70ffadb233b3284f4a2327555c3691d4"},{url:"/linuxiha/images/lhbd.png",revision:"bd9ba237826e2816a5fba1fd789705ae"},{url:"/linuxiha/images/linux-btrfs.jpeg",revision:"8d88c84caad7c4b2c0d77f763c63d2a7"},{url:"/linuxiha/images/linux-desktop-environments.jpg",revision:"82248e75353e05ad59d4b06dcdb9ddb6"},{url:"/linuxiha/images/linux-distribution.png",revision:"c87cb369ebdd3a187fd1aa46fcb0474c"},{url:"/linuxiha/images/linux-lvm.jpg",revision:"20639b7d61ca1b9b8580d3673dce2c1c"},{url:"/linuxiha/images/linux-raid.jpeg",revision:"438610b035709d4783ad7ae93502ac47"},{url:"/linuxiha/images/linux-tree.png",revision:"6bdb7075f7d7e6e46eea61005d91d538"},{url:"/linuxiha/images/linux.svg",revision:"97a14c85c222f1b93c887566a5606794"},{url:"/linuxiha/images/linux_widescreen_desktop_sudo_root_wide_linux-other.jpg",revision:"aa458913634bd3d3e54b68f97ed1f07c"},{url:"/linuxiha/images/linuxiha-together.png",revision:"b404a3e44f522bd5a25c2fada9efb243"},{url:"/linuxiha/images/linuxihaa.jpg",revision:"cb109e812daf72390849fb31461c5d65"},{url:"/linuxiha/images/linuxihaa2.png",revision:"fcb68d9ebc05b4ae208d8800bc3da9b6"},{url:"/linuxiha/images/linuxmint-installation.png",revision:"c28f76f23cd17482414697157ec8de00"},{url:"/linuxiha/images/logo.png",revision:"c21b5bd951a97845d60e1a891432d2c6"},{url:"/linuxiha/images/lsblk-arch-linux.jpg",revision:"e79523678d70244351ee3df424fd6e51"},{url:"/linuxiha/images/lubuntu-14.04-1024x575.png",revision:"8085d000e772580ec31be92ec79fa87c"},{url:"/linuxiha/images/lubuntu.jpg",revision:"0fa36780b62acc72addd0aeac62f05a3"},{url:"/linuxiha/images/lubuntu.png",revision:"6d63d57ee6e6a96d596c6c0cf74c6f93"},{url:"/linuxiha/images/lxde_screenshot.png",revision:"6ad1a91c686c6f34d45a86382cbb252a"},{url:"/linuxiha/images/mendeley.jpg",revision:"2522e5d2d22a99d602617f731b344453"},{url:"/linuxiha/images/mint_cinnamon_screenshot.png",revision:"8baf4a92fdfcf01b6e607025600b037c"},{url:"/linuxiha/images/mount.gif",revision:"7b0cb89ec79ac75e48025c4c5e2d846d"},{url:"/linuxiha/images/nixos-logo-only-hires.png",revision:"9b806f305b506804a42a7fa83befa935"},{url:"/linuxiha/images/ns2-nam.png",revision:"df644cbd10eebd352b83994f3677b5f2"},{url:"/linuxiha/images/openconf.jpg",revision:"1bc48707e871e462220d83570a6b52a1"},{url:"/linuxiha/images/openconf1395.jpg",revision:"86c1d9975b8b2c4bf4938d5f5347a58f"},{url:"/linuxiha/images/openssh-two-factor.png",revision:"ea764d59a79d3c8fdffbaa12b1127255"},{url:"/linuxiha/images/packages.png",revision:"1b0231643412d97f1530d2df42077e08"},{url:"/linuxiha/images/password-reset.jpg",revision:"e7d8ca5c1731ecd8e66193bf62f33ff0"},{url:"/linuxiha/images/photorec-screenshot.png",revision:"b27d3f0b1d05891cc962276392837286"},{url:"/linuxiha/images/pi3-300x200.jpg",revision:"8e2181d737569b3c60df98a87af0635b"},{url:"/linuxiha/images/raspberry-pi-logo.jpg",revision:"5541b091ba281bd423edae6738d46907"},{url:"/linuxiha/images/recovery1.jpg",revision:"6eef5766d0d9d4c6959c6f9f983d1c67"},{url:"/linuxiha/images/samba-server-linux.jpg",revision:"826dae4f79785b2fa58f0e81196cd9b3"},{url:"/linuxiha/images/shortcuts.jpg",revision:"fe9646bab5beec0d67c2287cd4a5a637"},{url:"/linuxiha/images/showcase.jpg",revision:"301b6752912a4ecd8f6611ff588166c0"},{url:"/linuxiha/images/shutdown-computer.jpg",revision:"7752321caa3d86ab85ced3ee523b134f"},{url:"/linuxiha/images/skype-2.1-for-linux.jpg",revision:"a39b9c8295e470cb3eba7d6da8e09f58"},{url:"/linuxiha/images/skype-linux.jpg",revision:"2ca4ae25c1b2685cafd49dcba1fdfc7b"},{url:"/linuxiha/images/software-updater.jpg",revision:"f9bc44356ed108bfb10fc3a0071d1f9d"},{url:"/linuxiha/images/subzbor-xubuntu.gif",revision:"2b7fb574d2c660a6b793820cf9fc57e4"},{url:"/linuxiha/images/sudo.jpg",revision:"79dc836df95977cf842523bd4ae11bd5"},{url:"/linuxiha/images/sudo_report_incident.png",revision:"e3b64aaed469109c5a2116622f8bb0ec"},{url:"/linuxiha/images/support-articles.png",revision:"7bc2bca0edece20696f2008c4027ec43"},{url:"/linuxiha/images/swap.jpg",revision:"1cbe3d6423116e2948d9dc8e2293e882"},{url:"/linuxiha/images/system-policy-2.png",revision:"5f2d9b31f1434417aa6b0509d69505e8"},{url:"/linuxiha/images/system_policy-1.png",revision:"0b2176a93c71eb61bab5b1b1d8933e39"},{url:"/linuxiha/images/system_policy-3.png",revision:"6bf77ec49588a0c1254f1699740e9395"},{url:"/linuxiha/images/system_policy-4.png",revision:"92131fb72a14ca8098bdc928f6f9218a"},{url:"/linuxiha/images/systemctl.jpg",revision:"3a18095283558fb57fed206d88cf1f72"},{url:"/linuxiha/images/telegram.jpg",revision:"c1d5106655d91de4480fb5b322e9ca3c"},{url:"/linuxiha/images/term-1-1.jpg",revision:"720b4941fef10b6cef8ca6a872f252ae"},{url:"/linuxiha/images/terminal-shortcut.jpg",revision:"5c199a75ce9e2ed184d3274f57f984a8"},{url:"/linuxiha/images/terminal.png",revision:"d4b7f97b0173f0ac0f789c4b99174f2c"},{url:"/linuxiha/images/terminal2.png",revision:"e074cc1e2f391c58d45993c6b491ae61"},{url:"/linuxiha/images/tweak-tool-screenshot.jpg",revision:"87d796741934bfb0e14cc9dfc642e000"},{url:"/linuxiha/images/ubuntu-14.04.png",revision:"f8f48420485c3f34da163b77b2a8d922"},{url:"/linuxiha/images/ubuntu-1404-antialiased.jpg",revision:"59a64b65b0c5066053c52e31400c1856"},{url:"/linuxiha/images/ubuntu-1404-borderless.jpg",revision:"78ae43713117ccc5b21ba40a4dca480a"},{url:"/linuxiha/images/ubuntu-1404-localmenu.png",revision:"0dc131824f53106063438bee7cdd2b68"},{url:"/linuxiha/images/ubuntu-1510-wily-werewolf.jpg",revision:"69241a0ab318dd4c889e4832ff90003c"},{url:"/linuxiha/images/ubuntu-16.04-xenial-xerus.png",revision:"5ac92c70ab5293a8edad795e91d7d1b4"},{url:"/linuxiha/images/ubuntu-16.04.jpg",revision:"3d80c4f632c60a0b051ab6f23fb3d1fb"},{url:"/linuxiha/images/ubuntu-16.10.png",revision:"861ef1e3dc1c535709d740c369fbc546"},{url:"/linuxiha/images/ubuntu-17.04.jpg",revision:"ae5c2b29e43791435b24e2ddef9358b6"},{url:"/linuxiha/images/ubuntu-1704-default-wallpaper.jpg",revision:"8992d42f65df59dcd088d2c63ed590a2"},{url:"/linuxiha/images/ubuntu-System-Settings-.png",revision:"06451cc2f2a3e2314f8a11358a225c8b"},{url:"/linuxiha/images/ubuntu-desktop.png",revision:"c0c5a88a8f98f175387f7b000476c3b5"},{url:"/linuxiha/images/ubuntu-family.png",revision:"dc01bc758c9c1b028d0fb5c56d07b21d"},{url:"/linuxiha/images/ubuntu-keyboard-layout-1.png",revision:"7b19e360660527fc438b9504362cde73"},{url:"/linuxiha/images/ubuntu-keyboard-layout-2.png",revision:"4b872e7b1c8473c1dca82fb01afefe7a"},{url:"/linuxiha/images/ubuntu-keyboard-layout-3 (1).png",revision:"17d7ea34a85c77106c9f94728a72c8ae"},{url:"/linuxiha/images/ubuntu-keyboard-layout-3.png",revision:"17d7ea34a85c77106c9f94728a72c8ae"},{url:"/linuxiha/images/ubuntu-keyboard-layout-4.png",revision:"7a695e7231103e06d18d9d381ac5bdcb"},{url:"/linuxiha/images/ubuntu-kylin.jpg",revision:"79b79589c8e3e0217bae3407a8a25db7"},{url:"/linuxiha/images/ubuntu-login_screen.png",revision:"f502ad571b5e7bd4caac2abc35f28655"},{url:"/linuxiha/images/ubuntu-studio.jpg",revision:"1ce72ce83f0b61dcebe91077e40c468c"},{url:"/linuxiha/images/ubuntu-tweak-screenshot-01.png",revision:"989ed3bd7d8c1398220f3f66919d3e5a"},{url:"/linuxiha/images/ubuntu-unity-screenshot.png",revision:"e963449faaf6b3cbf88e0ee04f493402"},{url:"/linuxiha/images/ubuntubook.png",revision:"07e6c750abe1079504e3b5fdb8c0f652"},{url:"/linuxiha/images/ubunut-gnome.jpg",revision:"3f7160101cbda8780446ff6d898879cb"},{url:"/linuxiha/images/unity-dash.jpg",revision:"61f6427960b09e613ab0356ef31bddad"},{url:"/linuxiha/images/unity-desktop.jpg",revision:"9266135ab399473de7c98151b217a2fc"},{url:"/linuxiha/images/unity-lockscreen.jpeg",revision:"a840ee7036551b982348070015242b81"},{url:"/linuxiha/images/unity-notification.jpg",revision:"ada5b38645d9146c2173b42bdcecd0a7"},{url:"/linuxiha/images/unity-setting.jpg",revision:"5482bdbde38b08d3e11b50199f83d607"},{url:"/linuxiha/images/unity-shutdown.jpg",revision:"bca566b6c080cfda577e0f0047799979"},{url:"/linuxiha/images/unity-sound.jpg",revision:"96165aafecc0a4ded96f3cccf06db8bb"},{url:"/linuxiha/images/unity-terminal-pass.jpg",revision:"20af6a70fd4675295b9fe3b7eb99da2c"},{url:"/linuxiha/images/unity-terminal.jpg",revision:"1cecef1db650b6b5659ee5d0be19d457"},{url:"/linuxiha/images/unity-tweak-tool-screenshot.png",revision:"9d51c4e2f5a0465ff60a8c649d72503f"},{url:"/linuxiha/images/unity-tweak-tool.png",revision:"eb256ec5393fe17b951a67a9f7d23a80"},{url:"/linuxiha/images/vimrc-bank.png",revision:"ab481e170531c0a93ced67d50554f679"},{url:"/linuxiha/images/vlc.png",revision:"f29812a01ce63a86b2e25be0df363ab9"},{url:"/linuxiha/images/vsftpd-debian.jpg",revision:"d285159315148cdf9d2dd3cd27f88322"},{url:"/linuxiha/images/wine-logo.jpg",revision:"36704e386b23283ee108ffbcc8b26807"},{url:"/linuxiha/images/wine-screenshot-01.jpg",revision:"3b2aa2fe8160ac8c80382cd393648dc5"},{url:"/linuxiha/images/working-with-linuxiha.png",revision:"fda4e8728c6a505c61724ac4a469d92d"},{url:"/linuxiha/images/xdm.png",revision:"96980b15e6a70d496d98db5e06a6cb2d"},{url:"/linuxiha/images/xfce_screenshot.png",revision:"cf4c534584c282ea26a35133cf10c705"},{url:"/linuxiha/images/xpad-screenshot-01.png",revision:"b0f5ceecf578fb58dbe156ab0fc5bd84"},{url:"/linuxiha/images/xrdp-linux-desktop-remote-rdp.png",revision:"703721443380937402411ee1694c285a"},{url:"/linuxiha/images/xrdp/01-rdp-win-tools.png",revision:"b7cc3397bf8eb81074cbe63dd25cee1e"},{url:"/linuxiha/images/xrdp/02-rdp-win-connection.png",revision:"173281ec507a78380e219f88ba2085e9"},{url:"/linuxiha/images/xrdp/03-rdp-win-confirm.png",revision:"c8904d6b7215544838a85851962fc15d"},{url:"/linuxiha/images/xrdp/04-rdp-win-credential-login.png",revision:"2b0418c219d3138a7b879f732405dedb"},{url:"/linuxiha/images/xrdp/05-rdp-win-ubuntu-connection-ok.jpg",revision:"0a9f686755bc3c6857da5ae15f4e0d8b"},{url:"/linuxiha/images/xubuntu.jpg",revision:"f0750b10007213bddc62bdb7c1e70431"},{url:"/linuxiha/manifest.json",revision:"04615b5d1114b7f1d2629e7d32ffe992"},{url:"/linuxiha/mstile-150x150.png",revision:"81076f4857d20ed22878bdd04a0f530d"}],{ignoreURLParametersMatching:[]}),i.cleanupOutdatedCaches(),i.registerRoute("/linuxiha",new i.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:i,response:e,event:a,state:n})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),i.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new i.CacheFirst({cacheName:"google-fonts",plugins:[new i.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),i.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new i.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new i.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),i.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new i.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new i.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),i.registerRoute(/\.(?:mp3|mp4)$/i,new i.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new i.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),i.registerRoute(/\.(?:js)$/i,new i.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new i.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),i.registerRoute(/\.(?:css|less)$/i,new i.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new i.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),i.registerRoute(/\.(?:json|xml|csv)$/i,new i.NetworkFirst({cacheName:"static-data-assets",plugins:[new i.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),i.registerRoute(/\/api\/.*$/i,new i.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new i.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),i.registerRoute(/.*/i,new i.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new i.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
