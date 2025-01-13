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
            src: '../images/witch/1/万圣节.png',
            thumb: '../images/witch/1/万圣节.png',
        },
        {
            src: '../images/witch/1/Snipaste_2025-01-12_19-48-38.jpg',
            thumb: '../images/witch/1/Snipaste_2025-01-12_19-48-38.jpg',
        },
        {
            src: '../images/witch/1/元素.webp',
            thumb: '../images/witch/1/元素.webp',
        },
        {
            src: '../images/witch/1/封面.png',
            thumb: '../images/witch/1/封面.png',
        },
    ],
    thumbWidth: 100,
    thumbHeight: "80px",
    thumbMargin: 10,
    // slideShowAutoplay: true,
});

// Since we are using dynamic mode, we need to programmatically open lightGallery
inlineGallery1.openGallery();