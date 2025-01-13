const lgContainer = document.getElementById('work-gallery');
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
            src: '../images/work/01凤鸣九霄立绘海报原大.jpg',
            thumb: '../images/work/01凤鸣九霄立绘海报原大.jpg',
        },
        {
            src: '../images/work/02虎跃乾坤立绘海报原大.jpg',
            thumb: '../images/work/02虎跃乾坤立绘海报原大.jpg',
        },
        {
            src: '../images/work/03浮光掠影立绘海报原大.jpg',
            thumb: '../images/work/03浮光掠影立绘海报原大.jpg',
        },
        {
            src: '../images/work/05皓月霜华立绘海报原大.jpg',
            thumb: '../images/work/05皓月霜华立绘海报原大.jpg',
        },
        {
            src: '../images/work/06十里红妆立绘海报原大.jpg',
            thumb: '../images/work/06十里红妆立绘海报原大.jpg',
        },
        {
            src: '../images/work/天使魔王魔法套装立绘美宣.jpg',
            thumb: '../images/work/天使魔王魔法套装立绘美宣.jpg',
        },
        {
            src: '../images/work/水龙吟魔法套装立绘美宣.jpg',
            thumb: '../images/work/水龙吟魔法套装立绘美宣.jpg',
        },
        {
            src: '../images/work/沧海梦境魔法套装立绘美宣.jpg',
            thumb: '../images/work/沧海梦境魔法套装立绘美宣.jpg',
        },
    ],
    thumbWidth: 100,
    thumbHeight: "80px",
    thumbMargin: 10,
    slideShowAutoplay: true,
});

// Since we are using dynamic mode, we need to programmatically open lightGallery
inlineGallery.openGallery();

const lgContainer1 = document.getElementById('work-gallery1');
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
            src: '../images/work/gallery1/双生镜beta67_看图王.jpg',
            thumb: '../images/work/gallery1/双生镜beta67_看图王.jpg',
        },
        {
            src: '../images/work/gallery1/端游beta70北地惊雷 雷因_看图王.jpg',
            thumb: '../images/work/gallery1/端游beta70北地惊雷 雷因_看图王.jpg',
        },
        {
            src: '../images/work/gallery1/2019年端游年兽橘子（阿因，小越）_看图王.jpg',
            thumb: '../images/work/gallery1/2019年端游年兽橘子（阿因，小越）_看图王.jpg',
        },
        {
            src: '../images/work/gallery1/Snipaste_2025-01-12_22-39-09.jpg',
            thumb: '../images/work/gallery1/Snipaste_2025-01-12_22-39-09.jpg',
        },
        {
            src: '../images/work/gallery1/图片1.png',
            thumb: '../images/work/gallery1/图片1.png',
        },
        {
            src: '../images/work/gallery1/八音盒魔法套装_看图王.jpg',
            thumb: '../images/work/gallery1/八音盒魔法套装_看图王.jpg',
        },
        {
            src: '../images/work/gallery1/【2020年beta66】QS极速幻境_看图王.jpg',
            thumb: '../images/work/gallery1/【2020年beta66】QS极速幻境_看图王.jpg',
        }, {
            src: '../images/work/gallery1/【V18-入口按钮】赏金橘子-完成3_看图王.jpg',
            thumb: '../images/work/gallery1/【V18-入口按钮】赏金橘子-完成3_看图王.jpg',
        }, {
            src: '../images/work/gallery1/【V24】牛年橘子入口_看图王.jpg',
            thumb: '../images/work/gallery1/【V24】牛年橘子入口_看图王.jpg',
        }, {
            src: '../images/work/gallery1/023-圣诞霸道总裁（宽屏-1920×1200）壁纸.jpg',
            thumb: '../images/work/gallery1/023-圣诞霸道总裁（宽屏-1920×1200）壁纸.jpg',
        }, {
            src: '../images/work/gallery1/合并(11)_看图王.jpg',
            thumb: '../images/work/gallery1/合并(11)_看图王.jpg',
        },
        {
            src: '../images/work/gallery1/圣诞节小橘子_看图王.jpg',
            thumb: '../images/work/gallery1/圣诞节小橘子_看图王.jpg',
        },
        {
            src: '../images/work/gallery1/新建画布1_看图王.jpg',
            thumb: '../images/work/gallery1/新建画布1_看图王.jpg',
        }, {
            src: '../images/work/gallery1/橘子_看图王.jpg',
            thumb: '../images/work/gallery1/橘子_看图王.jpg',
        },

        {
            src: '../images/work/gallery1/糖豆车橘.jpg',
            thumb: '../images/work/gallery1/糖豆车橘.jpg',
        },
        {
            src: '../images/work/gallery1/糖豆人宣传1_看图王.jpg',
            thumb: '../images/work/gallery1/糖豆人宣传1_看图王.jpg',
        },
    ],
    thumbWidth: 100,
    thumbHeight: "80px",
    thumbMargin: 10,
    // slideShowAutoplay: true,
});

// Since we are using dynamic mode, we need to programmatically open lightGallery
inlineGallery1.openGallery();

const lgContainer2 = document.getElementById('work-gallery2');
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
            src: '../images/work/gallery2/2021橘子机甲.jpg',
            thumb: '../images/work/gallery2/2021橘子机甲.jpg',
        },
        {
            src: '../images/work/gallery2/Snipaste_2025-01-12_21-42-19.jpg',
            thumb: '../images/work/gallery2/Snipaste_2025-01-12_21-42-19.jpg',
        },
        {
            src: '../images/work/gallery2/Snipaste_2025-01-12_21-48-50.jpg',
            thumb: '../images/work/gallery2/Snipaste_2025-01-12_21-48-50.jpg',
        },
        {
            src: '../images/work/gallery2/V21_看图王_看图王.jpg',
            thumb: '../images/work/gallery2/V21_看图王_看图王.jpg',
        },
        {
            src: '../images/work/gallery2/V21白裙橘子(小越+小明)_看图王_看图王.jpg',
            thumb: '../images/work/gallery2/V21白裙橘子(小越+小明)_看图王_看图王.jpg',
        },
        {
            src: '../images/work/gallery2/秦悦之-夜君1_看图王.jpg',
            thumb: '../images/work/gallery2/秦悦之-夜君1_看图王.jpg',
        },
        {
            src: '../images/work/gallery2/贵州橘子（小明+小越）_看图王.jpg',
            thumb: '../images/work/gallery2/贵州橘子（小明+小越）_看图王.jpg',
        },
    ],
    thumbWidth: 100,
    thumbHeight: "80px",
    thumbMargin: 10,
    // slideShowAutoplay: true,
});

// Since we are using dynamic mode, we need to programmatically open lightGallery
inlineGallery2.openGallery();

const lgContainer3 = document.getElementById('work-gallery3');
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
            src: '../images/work/gallery3/装備デザイン.jpg',
            thumb: '../images/work/gallery3/装備デザイン.jpg',
        },
        {
            src: '../images/work/gallery3/ちびキャラ設定.jpg',
            thumb: '../images/work/gallery3/ちびキャラ設定.jpg',
        },
        {
            src: '../images/work/gallery3/ゲームのスキン設定.jpg',
            thumb: '../images/work/gallery3/ゲームのスキン設定.jpg',
        },
        {
            src: '../images/work/gallery3/ゲームアイテムデザイン.jpg',
            thumb: '../images/work/gallery3/ゲームアイテムデザイン.jpg',
        },
        {
            src: '../images/work/gallery3/スキンデザイン.jpg',
            thumb: '../images/work/gallery3/スキンデザイン.jpg',
        },
        {
            src: '../images/work/gallery3/スケッチデザイン.jpg',
            thumb: '../images/work/gallery3/スケッチデザイン.jpg',
        },

    ],
    thumbWidth: 100,
    thumbHeight: "80px",
    thumbMargin: 10,
    // slideShowAutoplay: true,
});

// Since we are using dynamic mode, we need to programmatically open lightGallery
inlineGallery3.openGallery();