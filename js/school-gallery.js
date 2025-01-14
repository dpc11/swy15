const lgContainer = document.getElementById('school-gallery');
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
            src: '../images/school/作品/2016年欧米のゲームアイテムデザイン.jpg',
            thumb: '../images/school/作品/2016年欧米のゲームアイテムデザイン.jpg',
        },
        {
            src: '../images/school/作品/2016年欧米のゲームコンセプトアート.jpg',
            thumb: '../images/school/作品/2016年欧米のゲームコンセプトアート.jpg',
        },
        {
            src: '../images/school/作品/2017ゲームのシーンイラスト.jpg',
            thumb: '../images/school/作品/2017ゲームのシーンイラスト.jpg',
        },
        {
            src: '../images/school/作品/2018年キャラクターデザイン1.png',
            thumb: '../images/school/作品/2018年キャラクターデザイン1.png',
        },
        {
            src: '../images/school/作品/2018年キャラクターデザイン2.png',
            thumb: '../images/school/作品/2018年キャラクターデザイン2.png',
        },
        {
            src: '../images/school/作品/2018年キャラクターデザイン3.png',
            thumb: '../images/school/作品/2018年キャラクターデザイン3.png',
        },
        {
            src: '../images/school/作品/2018年キャラクターデザイン4.png',
            thumb: '../images/school/作品/2018年キャラクターデザイン4.png',
        },
    ],
    thumbWidth: 100,
    thumbHeight: "80px",
    thumbMargin: 10,
    // slideShowAutoplay: true,
});

// Since we are using dynamic mode, we need to programmatically open lightGallery
inlineGallery.openGallery();

const lgContainer1 = document.getElementById('school-gallery1');
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
            src: '../images/school/素描/2015年に制作された少女の素描.jpg',
            thumb: '../images/school/素描/2015年に制作された少女の素描.jpg',
        },
        {
            src: '../images/school/素描/2015年に制作された線画.jpg',
            thumb: '../images/school/素描/2015年に制作された線画.jpg',
        },
        {
            src: '../images/school/素描/2015年に制作された老人の素描1.jpg',
            thumb: '../images/school/素描/2015年に制作された老人の素描1.jpg',
        },
        {
            src: '../images/school/素描/2015年に制作された老人の素描2.jpg',
            thumb: '../images/school/素描/2015年に制作された老人の素描2.jpg',
        },
        {
            src: '../images/school/素描/2015年に制作された青年の素描.jpg',
            thumb: '../images/school/素描/2015年に制作された青年の素描.jpg',
        },
        {
            src: '../images/school/素描/2016年に制作された素描.jpg',
            thumb: '../images/school/素描/2016年に制作された素描.jpg',
        },
        {
            src: '../images/school/素描/2016年に制作された線画.jpg',
            thumb: '../images/school/素描/2016年に制作された線画.jpg',
        },
        {
            src: '../images/school/素描/2016年に制作された線画1.jpg',
            thumb: '../images/school/素描/2016年に制作された線画1.jpg',
        },
        {
            src: '../images/school/素描/2016年に制作された線画2.jpg',
            thumb: '../images/school/素描/2016年に制作された線画2.jpg',
        },
        {
            src: '../images/school/素描/2016年に描かれたアクリル画.jpg',
            thumb: '../images/school/素描/2016年に描かれたアクリル画.jpg',
        },
        {
            src: '../images/school/素描/2017年に制作された線画.jpg',
            thumb: '../images/school/素描/2017年に制作された線画.jpg',
        },
        {
            src: '../images/school/素描/Snipaste_2025-01-13_16-54-48.jpg',
            thumb: '../images/school/素描/Snipaste_2025-01-13_16-54-48.jpg',
        },
        {
            src: '../images/school/素描/Snipaste_2025-01-13_16-55-28.jpg',
            thumb: '../images/school/素描/Snipaste_2025-01-13_16-55-28.jpg',
        },
        {
            src: '../images/school/素描/Snipaste_2025-01-13_16-58-18.jpg',
            thumb: '../images/school/素描/Snipaste_2025-01-13_16-58-18.jpg',
        },
        {
            src: '../images/school/素描/ホラー映画の怪物デザイン.jpg',
            thumb: '../images/school/素描/ホラー映画の怪物デザイン.jpg',
        },
        {
            src: '../images/school/素描/ホラー映画の怪物デザイン2.jpg',
            thumb: '../images/school/素描/ホラー映画の怪物デザイン2.jpg',
        },
        {
            src: '../images/school/素描/ホラー映画の怪物デザイン彫刻.jpg',
            thumb: '../images/school/素描/ホラー映画の怪物デザイン彫刻.jpg',
        },
        {
            src: '../images/school/素描/公益的な保護動物のイラスト.jpg',
            thumb: '../images/school/素描/公益的な保護動物のイラスト.jpg',
        },
    ],
    thumbWidth: 100,
    thumbHeight: "80px",
    thumbMargin: 10,
    slideShowAutoplay: true,
});

// Since we are using dynamic mode, we need to programmatically open lightGallery
inlineGallery1.openGallery();