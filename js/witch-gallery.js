const lgContainer = document.getElementById('witch-gallery');
const inlineGallery = lightGallery(lgContainer, {
    container: lgContainer,
    dynamic: true,
    // Turn off hash plugin in case if you are using it
    // as we don't want to change the url on slide change
    hash: false,
    // Do not allow users to close the gallery
    closable: false,
    // Add maximize icon to enlarge the gallery
    showMaximizeIcon: true,
    // Append caption inside the slide item
    // to apply some animation for the captions (Optional)
    appendSubHtmlTo: '.lg-item',
    // Delay slide transition to complete captions animations
    // before navigating to different slides (Optional)
    // You can find caption animation demo on the captions demo page
    slideDelay: 200,
    height: '100%',
    plugins: [lgZoom, lgThumbnail, lgAutoplay],
    dynamicEl: [
        {
            src: '../images/witch/0/主界面.jpg',
            thumb: '../images/witch/0/主界面.jpg',
        },
        {
            src: '../images/witch/0/shop.png',
            thumb: '../images/witch/0/shop.png',
        },
        {
            src: '../images/witch/0/交互图.webp',
            thumb: '../images/witch/0/交互图.webp',
        },
        {
            src: '../images/witch/0/升级.webp',
            thumb: '../images/witch/0/升级.webp',
        },
        {
            src: '../images/witch/0/地图.webp',
            thumb: '../images/witch/0/地图.webp',
        },
        {
            src: '../images/witch/0/瓶子.webp',
            thumb: '../images/witch/0/瓶子.webp',
        },
        {
            src: '../images/witch/0/设置.webp',
            thumb: '../images/witch/0/设置.webp',
        },
        {
            src: '../images/witch/0/万圣节.png',
            thumb: '../images/witch/0/万圣节.png',
        },
        {
            src: '../images/witch/0/Snipaste_2025-01-12_19-48-38.jpg',
            thumb: '../images/witch/0/Snipaste_2025-01-12_19-48-38.jpg',
        },
        {
            src: '../images/witch/0/元素.webp',
            thumb: '../images/witch/0/元素.webp',
        },
        {
            src: '../images/witch/0/封面.png',
            thumb: '../images/witch/0/封面.png',
        },
    ],
    thumbWidth: 100,
    thumbHeight: "80px",
    thumbMargin: 10,
    // slideShowAutoplay: true,
});

// Since we are using dynamic mode, we need to programmatically open lightGallery
inlineGallery.openGallery();

const lgContainer1 = document.getElementById('witch-gallery1');
const inlineGallery1 = lightGallery(lgContainer1, {
    container: lgContainer1,
    dynamic: true,
    // Turn off hash plugin in case if you are using it
    // as we don't want to change the url on slide change
    hash: false,
    // Do not allow users to close the gallery
    closable: false,
    // Add maximize icon to enlarge the gallery
    showMaximizeIcon: true,
    // Append caption inside the slide item
    // to apply some animation for the captions (Optional)
    appendSubHtmlTo: '.lg-item',
    // Delay slide transition to complete captions animations
    // before navigating to different slides (Optional)
    // You can find caption animation demo on the captions demo page
    slideDelay: 200,
    height: '100%',
    plugins: [lgZoom, lgThumbnail, lgAutoplay],
    dynamicEl: [
        {
            src: '../images/witch/1/ui设计.jpg',
            thumb: '../images/witch/1/ui设计.jpg',
        },
        {
            src: '../images/witch/1/小漫画1.png',
            thumb: '../images/witch/1/小漫画1.png',
        },
        {
            src: '../images/witch/1/小漫画2.png',
            thumb: '../images/witch/1/小漫画2.png',
        },
        {
            src: '../images/witch/1/游戏全背景.png',
            thumb: '../images/witch/1/游戏全背景.png',
        },
        {
            src: '../images/witch/1/游戏背景1.png',
            thumb: '../images/witch/1/游戏背景1.png',
        },
        {
            src: '../images/witch/1/游戏背景2.png',
            thumb: '../images/witch/1/游戏背景2.png',
        },
        {
            src: '../images/witch/1/网站.png',
            thumb: '../images/witch/1/网站.png',
        },
    ],
    thumbWidth: 100,
    thumbHeight: "80px",
    thumbMargin: 10,
    // slideShowAutoplay: true,
});

// Since we are using dynamic mode, we need to programmatically open lightGallery
inlineGallery1.openGallery();

const lgContainer2 = document.getElementById('witch-gallery2');
const inlineGallery2 = lightGallery(lgContainer2, {
    container: lgContainer2,
    dynamic: true,
    // Turn off hash plugin in case if you are using it
    // as we don't want to change the url on slide change
    hash: false,
    // Do not allow users to close the gallery
    closable: false,
    // Add maximize icon to enlarge the gallery
    showMaximizeIcon: true,
    // Append caption inside the slide item
    // to apply some animation for the captions (Optional)
    appendSubHtmlTo: '.lg-item',
    // Delay slide transition to complete captions animations
    // before navigating to different slides (Optional)
    // You can find caption animation demo on the captions demo page
    slideDelay: 200,
    height: '100%',
    plugins: [lgZoom, lgThumbnail, lgAutoplay],
    dynamicEl: [
        {
            src: '../images/witch/2/场景演示.jpg',
            thumb: '../images/witch/2/场景演示.jpg',
        },
        {
            src: '../images/witch/2/全景2.jpg',
            thumb: '../images/witch/2/全景2.jpg',
        },
        {
            src: '../images/witch/2/地图.jpg',
            thumb: '../images/witch/2/地图.jpg',
        },
        {
            src: '../images/witch/2/场景和人物.jpg',
            thumb: '../images/witch/2/场景和人物.jpg',
        },

        {
            src: '../images/witch/2/森林场景演示.jpg',
            thumb: '../images/witch/2/森林场景演示.jpg',
        },
        {
            src: '../images/witch/2/现场图.jpg',
            thumb: '../images/witch/2/现场图.jpg',
        },
        {
            src: '../images/witch/2/雪天地图.jpg',
            thumb: '../images/witch/2/雪天地图.jpg',
        },
    ],
    thumbWidth: 100,
    thumbHeight: "80px",
    thumbMargin: 10,
    // slideShowAutoplay: true,
});

// Since we are using dynamic mode, we need to programmatically open lightGallery
inlineGallery2.openGallery();

const lgContainer3 = document.getElementById('witch-gallery3');
const inlineGallery3 = lightGallery(lgContainer3, {
    container: lgContainer3,
    dynamic: true,
    // Turn off hash plugin in case if you are using it
    // as we don't want to change the url on slide change
    hash: false,
    // Do not allow users to close the gallery
    closable: false,
    // Add maximize icon to enlarge the gallery
    showMaximizeIcon: true,
    // Append caption inside the slide item
    // to apply some animation for the captions (Optional)
    appendSubHtmlTo: '.lg-item',
    // Delay slide transition to complete captions animations
    // before navigating to different slides (Optional)
    // You can find caption animation demo on the captions demo page
    slideDelay: 200,
    height: '100%',
    plugins: [lgZoom, lgThumbnail, lgAutoplay],
    dynamicEl: [
        {
            src: '../images/witch/3/中间场景.jpg',
            thumb: '../images/witch/3/中间场景.jpg',
        },
        {
            src: '../images/witch/3/右边场景.jpg',
            thumb: '../images/witch/3/右边场景.jpg',
        },
        {
            src: '../images/witch/3/场景整理.jpg',
            thumb: '../images/witch/3/场景整理.jpg',
        },
        {
            src: '../images/witch/3/左边场景.jpg',
            thumb: '../images/witch/3/左边场景.jpg',
        },
        {
            src: '../images/witch/3/巫祝.png',
            thumb: '../images/witch/3/巫祝.png',
        },
        {
            src: '../images/witch/3/开始游戏.png',
            thumb: '../images/witch/3/开始游戏.png',
        },
        {
            src: '../images/witch/3/开始界面.jpg',
            thumb: '../images/witch/3/开始界面.jpg',
        },
        {
            src: '../images/witch/3/第一关.jpg',
            thumb: '../images/witch/3/第一关.jpg',
        },
        {
            src: '../images/witch/3/评论.png',
            thumb: '../images/witch/3/评论.png',
        },
        {
            src: '../images/witch/3/鸟.jpg',
            thumb: '../images/witch/3/鸟.jpg',
        },
    ],
    thumbWidth: 100,
    thumbHeight: "80px",
    thumbMargin: 10,
    // slideShowAutoplay: true,
});

// Since we are using dynamic mode, we need to programmatically open lightGallery
inlineGallery3.openGallery();

const lgContainer4 = document.getElementById('witch-gallery4');
const inlineGallery4 = lightGallery(lgContainer4, {
    container: lgContainer4,
    dynamic: true,
    // Turn off hash plugin in case if you are using it
    // as we don't want to change the url on slide change
    hash: false,
    // Do not allow users to close the gallery
    closable: false,
    // Add maximize icon to enlarge the gallery
    showMaximizeIcon: true,
    // Append caption inside the slide item
    // to apply some animation for the captions (Optional)
    appendSubHtmlTo: '.lg-item',
    // Delay slide transition to complete captions animations
    // before navigating to different slides (Optional)
    // You can find caption animation demo on the captions demo page
    slideDelay: 200,
    height: '100%',
    plugins: [lgZoom, lgThumbnail, lgAutoplay],
    dynamicEl: [
        {
            src: '../images/witch/4/游戏封面.JPG',
            thumb: '../images/witch/4/游戏封面.JPG',
        },
        {
            src: '../images/witch/4/游戏界面.JPG',
            thumb: '../images/witch/4/游戏界面.JPG',
        },
        {
            src: '../images/witch/4/现场.JPG',
            thumb: '../images/witch/4/现场.JPG',
        },
        {
            src: '../images/witch/4/现场演示1.JPG',
            thumb: '../images/witch/4/现场演示1.JPG',
        },
        {
            src: '../images/witch/4/现场演示2.JPG',
            thumb: '../images/witch/4/现场演示2.JPG',
        },
        {
            src: '../images/witch/4/现场演示3.JPG',
            thumb: '../images/witch/4/现场演示3.JPG',
        },
        {
            src: '../images/witch/4/界面左.JPG',
            thumb: '../images/witch/4/界面左.JPG',
        },
    ],
    thumbWidth: 100,
    thumbHeight: "80px",
    thumbMargin: 10,
    // slideShowAutoplay: true,
});

// Since we are using dynamic mode, we need to programmatically open lightGallery
inlineGallery4.openGallery();

// Since we are using dynamic mode, we need to programmatically open lightGallery
inlineGallery3.openGallery();

const lgContainer5 = document.getElementById('witch-gallery5');
const inlineGallery5 = lightGallery(lgContainer5, {
    container: lgContainer5,
    dynamic: true,
    // Turn off hash plugin in case if you are using it
    // as we don't want to change the url on slide change
    hash: false,
    // Do not allow users to close the gallery
    closable: false,
    // Add maximize icon to enlarge the gallery
    showMaximizeIcon: true,
    // Append caption inside the slide item
    // to apply some animation for the captions (Optional)
    appendSubHtmlTo: '.lg-item',
    // Delay slide transition to complete captions animations
    // before navigating to different slides (Optional)
    // You can find caption animation demo on the captions demo page
    slideDelay: 200,
    height: '100%',
    plugins: [lgZoom, lgThumbnail, lgAutoplay],
    dynamicEl: [
        {
            src: '../images/witch/5/微信图片_20250113113432.jpg',
            thumb: '../images/witch/5/微信图片_20250113113432.jpg',
        },
        {
            src: '../images/witch/5/游戏场景.jpg',
            thumb: '../images/witch/5/游戏场景.jpg',
        },
        {
            src: '../images/witch/5/Run.png',
            thumb: '../images/witch/5/Run.png',
        },
        {
            src: '../images/witch/5/人物死亡.png',
            thumb: '../images/witch/5/人物死亡.png',
        },

        {
            src: '../images/witch/5/游戏界面.jpg',
            thumb: '../images/witch/5/游戏界面.jpg',
        },
        {
            src: '../images/witch/5/自己写的代码.jpg',
            thumb: '../images/witch/5/自己写的代码.jpg',
        },
    ],
    thumbWidth: 100,
    thumbHeight: "80px",
    thumbMargin: 10,
    // slideShowAutoplay: true,
});

// Since we are using dynamic mode, we need to programmatically open lightGallery
inlineGallery5.openGallery();