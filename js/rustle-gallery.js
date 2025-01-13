const lgContainer = document.getElementById('rustle-gallery');
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
            src: '../images/rustle/介绍1.jpg',
            thumb: '../images/rustle/介绍1.jpg',
        },
        {
            src: '../images/rustle/介绍2.jpg',
            thumb: '../images/rustle/介绍2.jpg',
        },
        {
            src: '../images/rustle/介绍3.jpg',
            thumb: '../images/rustle/介绍3.jpg',
        },
        {
            src: '../images/rustle/介绍4.jpg',
            thumb: '../images/rustle/介绍4.jpg',
        },
        {
            src: '../images/rustle/介绍5.jpg',
            thumb: '../images/rustle/介绍5.jpg',
        },
        {
            src: '../images/rustle/介绍6.jpg',
            thumb: '../images/rustle/介绍6.jpg',
        },
        {
            src: '../images/rustle/介绍7.jpg',
            thumb: '../images/rustle/介绍7.jpg',
        },
    ],
    thumbWidth: 100,
    thumbHeight: "80px",
    thumbMargin: 10,
    slideShowAutoplay: true,
});

// Since we are using dynamic mode, we need to programmatically open lightGallery
inlineGallery.openGallery();