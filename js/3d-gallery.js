const lgContainer = document.getElementById('3d-gallery');
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
    // height: '100%',
    plugins: [lgZoom, lgThumbnail, lgAutoplay],
    dynamicEl: [

        {
            src: '../images/3d/shiwuyue.jpg',
            thumb: '../images/3d/shiwuyue.jpg',
        },
        {
            src: '../images/3d/Snipaste_2025-01-12_17-25-10.jpg',
            thumb: '../images/3d/Snipaste_2025-01-12_17-25-10.jpg',
        },
        {
            src: '../images/3d/Snipaste_2025-01-12_22-53-48.jpg',
            thumb: '../images/3d/Snipaste_2025-01-12_22-53-48.jpg',
        },
        {
            src: '../images/3d/练习1.jpg',
            thumb: '../images/3d/练习1.jpg',
        },
        {
            src: '../images/3d/练习2.jpg',
            thumb: '../images/3d/练习2.jpg',
        },
        {
            src: '../images/3d/练习3.jpg',
            thumb: '../images/3d/练习3.jpg',
        },

        {
            src: '../images/3d/Snipaste_2025-01-12_22-54-02.jpg',
            thumb: '../images/3d/Snipaste_2025-01-12_22-54-02.jpg',
        },

        {
            src: '../images/3d/ssssss.jpg',
            thumb: '../images/3d/ssssss.jpg',
        },
        {
            src: '../images/3d/Snipaste_2025-01-12_18-11-48.jpg',
            thumb: '../images/3d/Snipaste_2025-01-12_18-11-48.jpg',
        },

        {
            src: '../images/3d/Snipaste_2025-01-12_22-54-21.jpg',
            thumb: '../images/3d/Snipaste_2025-01-12_22-54-21.jpg',
        },
        {
            src: '../images/3d/Snipaste_2025-01-12_22-54-28.jpg',
            thumb: '../images/3d/Snipaste_2025-01-12_22-54-28.jpg',
        },

        {
            src: '../images/3d/Snipaste_2025-01-12_18-10-17.jpg',
            thumb: '../images/3d/Snipaste_2025-01-12_18-10-17.jpg',
        },
        {
            src: '../images/3d/QQ图片20250112222852.jpg',
            thumb: '../images/3d/QQ图片20250112222852.jpg',
        },
        {
            src: '../images/3d/QQ图片20250112222903.jpg',
            thumb: '../images/3d/QQ图片20250112222903.jpg',
        },
        {
            src: '../images/3d/ssssss2.jpg',
            thumb: '../images/3d/ssssss2.jpg',
        },
        {
            src: '../images/3d/X4.jpg',
            thumb: '../images/3d/X4.jpg',
        },
        {
            src: '../images/3d/图片a1.png',
            thumb: '../images/3d/图片a1.png',
        },
        {
            src: '../images/3d/完成图.jpg',
            thumb: '../images/3d/完成图.jpg',
        },
        {
            src: '../images/3d/微信图片_20250112173134.png',
            thumb: '../images/3d/微信图片_20250112173134.png',
        },
        {
            src: '../images/3d/微信图片_20250112173256.jpg',
            thumb: '../images/3d/微信图片_20250112173256.jpg',
        },
        {
            src: '../images/3d/微信图片_20250112173301.jpg',
            thumb: '../images/3d/微信图片_20250112173301.jpg',
        },
    ],
    thumbWidth: 100,
    thumbHeight: "80px",
    thumbMargin: 10,
    slideShowAutoplay: true,
});

// Since we are using dynamic mode, we need to programmatically open lightGallery
inlineGallery.openGallery();