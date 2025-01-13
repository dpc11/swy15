const lgContainer = document.getElementById('practice-gallery');
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
            src: '../images/practice/色彩/10.1.jpg',
            thumb: '../images/practice/色彩/10.1.jpg',
        },
        {
            src: '../images/practice/色彩/10.10.jpg',
            thumb: '../images/practice/色彩/10.10.jpg',
        },
        {
            src: '../images/practice/色彩/10.11.jpg',
            thumb: '../images/practice/色彩/10.11.jpg',
        },
        {
            src: '../images/practice/色彩/10.12.jpg',
            thumb: '../images/practice/色彩/10.12.jpg',
        },
        {
            src: '../images/practice/色彩/10.13.jpg',
            thumb: '../images/practice/色彩/10.13.jpg',
        },
        {
            src: '../images/practice/色彩/10.14.jpg',
            thumb: '../images/practice/色彩/10.14.jpg',
        },
        {
            src: '../images/practice/色彩/10.15.jpg',
            thumb: '../images/practice/色彩/10.15.jpg',
        },
        {
            src: '../images/practice/色彩/10.16.jpg',
            thumb: '../images/practice/色彩/10.16.jpg',
        },
        {
            src: '../images/practice/色彩/10.17.jpg',
            thumb: '../images/practice/色彩/10.17.jpg',
        },
        {
            src: '../images/practice/色彩/10.18.jpg',
            thumb: '../images/practice/色彩/10.18.jpg',
        },
        {
            src: '../images/practice/色彩/10.19.jpg',
            thumb: '../images/practice/色彩/10.19.jpg',
        },
        {
            src: '../images/practice/色彩/10.20.jpg',
            thumb: '../images/practice/色彩/10.20.jpg',
        },
        {
            src: '../images/practice/色彩/10.21.jpg',
            thumb: '../images/practice/色彩/10.21.jpg',
        },
        {
            src: '../images/practice/色彩/10.22.jpg',
            thumb: '../images/practice/色彩/10.22.jpg',
        },
        {
            src: '../images/practice/色彩/10.23.jpg',
            thumb: '../images/practice/色彩/10.23.jpg',
        },
        {
            src: '../images/practice/色彩/10.24.jpg',
            thumb: '../images/practice/色彩/10.24.jpg',
        },
        {
            src: '../images/practice/色彩/10.25.jpg',
            thumb: '../images/practice/色彩/10.25.jpg',
        },
        {
            src: '../images/practice/色彩/10.26.jpg',
            thumb: '../images/practice/色彩/10.26.jpg',
        },
        {
            src: '../images/practice/色彩/10.27.jpg',
            thumb: '../images/practice/色彩/10.27.jpg',
        },
        {
            src: '../images/practice/色彩/10.28.jpg',
            thumb: '../images/practice/色彩/10.28.jpg',
        },
        {
            src: '../images/practice/色彩/10.29.jpg',
            thumb: '../images/practice/色彩/10.29.jpg',
        },
        {
            src: '../images/practice/色彩/10.29.psd',
            thumb: '../images/practice/色彩/10.29.psd',
        },
        {
            src: '../images/practice/色彩/10.3.jpg',
            thumb: '../images/practice/色彩/10.3.jpg',
        },
        {
            src: '../images/practice/色彩/10.30.jpg',
            thumb: '../images/practice/色彩/10.30.jpg',
        },
        {
            src: '../images/practice/色彩/10.4.jpg',
            thumb: '../images/practice/色彩/10.4.jpg',
        },
        {
            src: '../images/practice/色彩/10.5.jpg',
            thumb: '../images/practice/色彩/10.5.jpg',
        },
        {
            src: '../images/practice/色彩/10.6.jpg',
            thumb: '../images/practice/色彩/10.6.jpg',
        },
        {
            src: '../images/practice/色彩/10.7.jpg',
            thumb: '../images/practice/色彩/10.7.jpg',
        },
        {
            src: '../images/practice/色彩/10.8.jpg',
            thumb: '../images/practice/色彩/10.8.jpg',
        },
        {
            src: '../images/practice/色彩/10.9.jpg',
            thumb: '../images/practice/色彩/10.9.jpg',
        },
        {
            src: '../images/practice/色彩/27 - 副本.jpg',
            thumb: '../images/practice/色彩/27 - 副本.jpg',
        },
        {
            src: '../images/practice/色彩/9.1.jpg',
            thumb: '../images/practice/色彩/9.1.jpg',
        },
        {
            src: '../images/practice/色彩/9.10.jpg',
            thumb: '../images/practice/色彩/9.10.jpg',
        },
        {
            src: '../images/practice/色彩/9.11.jpg',
            thumb: '../images/practice/色彩/9.11.jpg',
        },
        {
            src: '../images/practice/色彩/9.13.jpg',
            thumb: '../images/practice/色彩/9.13.jpg',
        },
        {
            src: '../images/practice/色彩/9.14.jpg',
            thumb: '../images/practice/色彩/9.14.jpg',
        },
        {
            src: '../images/practice/色彩/9.15.jpg',
            thumb: '../images/practice/色彩/9.15.jpg',
        },
        {
            src: '../images/practice/色彩/9.16.jpg',
            thumb: '../images/practice/色彩/9.16.jpg',
        },
        {
            src: '../images/practice/色彩/9.17.jpg',
            thumb: '../images/practice/色彩/9.17.jpg',
        },
        {
            src: '../images/practice/色彩/9.18.jpg',
            thumb: '../images/practice/色彩/9.18.jpg',
        },
        {
            src: '../images/practice/色彩/9.19.jpg',
            thumb: '../images/practice/色彩/9.19.jpg',
        },
        {
            src: '../images/practice/色彩/9.2.jpg',
            thumb: '../images/practice/色彩/9.2.jpg',
        },
        {
            src: '../images/practice/色彩/9.20.jpg',
            thumb: '../images/practice/色彩/9.20.jpg',
        },
        {
            src: '../images/practice/色彩/9.21.jpg',
            thumb: '../images/practice/色彩/9.21.jpg',
        },
        {
            src: '../images/practice/色彩/9.22.jpg',
            thumb: '../images/practice/色彩/9.22.jpg',
        },
        {
            src: '../images/practice/色彩/9.23.jpg',
            thumb: '../images/practice/色彩/9.23.jpg',
        },
        {
            src: '../images/practice/色彩/9.24.jpg',
            thumb: '../images/practice/色彩/9.24.jpg',
        },
        {
            src: '../images/practice/色彩/9.25.jpg',
            thumb: '../images/practice/色彩/9.25.jpg',
        },
        {
            src: '../images/practice/色彩/9.26.jpg',
            thumb: '../images/practice/色彩/9.26.jpg',
        },
        {
            src: '../images/practice/色彩/9.27.jpg',
            thumb: '../images/practice/色彩/9.27.jpg',
        },
        {
            src: '../images/practice/色彩/9.28.jpg',
            thumb: '../images/practice/色彩/9.28.jpg',
        },
        {
            src: '../images/practice/色彩/9.29.jpg',
            thumb: '../images/practice/色彩/9.29.jpg',
        },
        {
            src: '../images/practice/色彩/9.3 - 副本.jpg',
            thumb: '../images/practice/色彩/9.3 - 副本.jpg',
        },
        {
            src: '../images/practice/色彩/9.3.jpg',
            thumb: '../images/practice/色彩/9.3.jpg',
        },
        {
            src: '../images/practice/色彩/9.30.jpg',
            thumb: '../images/practice/色彩/9.30.jpg',
        },
        {
            src: '../images/practice/色彩/9.4.jpg',
            thumb: '../images/practice/色彩/9.4.jpg',
        },
        {
            src: '../images/practice/色彩/9.5.jpg',
            thumb: '../images/practice/色彩/9.5.jpg',
        },
        {
            src: '../images/practice/色彩/9.6.jpg',
            thumb: '../images/practice/色彩/9.6.jpg',
        },
        {
            src: '../images/practice/色彩/9.7.jpg',
            thumb: '../images/practice/色彩/9.7.jpg',
        },
        {
            src: '../images/practice/色彩/9.8.jpg',
            thumb: '../images/practice/色彩/9.8.jpg',
        },
        {
            src: '../images/practice/色彩/9.9.jpg',
            thumb: '../images/practice/色彩/9.9.jpg',
        },
        {
            src: '../images/practice/色彩/Snipaste_2021-10-30_01-02-48.jpg',
            thumb: '../images/practice/色彩/Snipaste_2021-10-30_01-02-48.jpg',
        },
        {
            src: '../images/practice/色彩/合集 - 副本.jpg',
            thumb: '../images/practice/色彩/合集 - 副本.jpg',
        },
        {
            src: '../images/practice/色彩/９.12.jpg',
            thumb: '../images/practice/色彩/９.12.jpg',
        },
    ],
    thumbWidth: 100,
    thumbHeight: "80px",
    thumbMargin: 10,
    slideShowAutoplay: true,
});

// Since we are using dynamic mode, we need to programmatically open lightGallery
inlineGallery.openGallery();

const lgContainer1 = document.getElementById('practice-gallery1');
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
            src: '../images/practice/练习/Cult of the Lamb.png',
            thumb: '../images/practice/练习/Cult of the Lamb.png',
        },
        {
            src: '../images/practice/练习/アニメ『らんま12』のウサギ耳の女の子のイラスト.jpg',
            thumb: '../images/practice/练习/アニメ『らんま12』のウサギ耳の女の子のイラスト.jpg',
        },
        {
            src: '../images/practice/练习/アライグマ.jpg',
            thumb: '../images/practice/练习/アライグマ.jpg',
        },
        {
            src: '../images/practice/练习/クジャク初音.png',
            thumb: '../images/practice/练习/クジャク初音.png',
        },
        {
            src: '../images/practice/练习/ゲームコンセプトデザイン.jpg',
            thumb: '../images/practice/练习/ゲームコンセプトデザイン.jpg',
        },
        {
            src: '../images/practice/练习/サーカスのイラストのラフスケッチ.jpg',
            thumb: '../images/practice/练习/サーカスのイラストのラフスケッチ.jpg',
        },
        {
            src: '../images/practice/练习/ジョジョのアニメのブチャラティの同人.jpg',
            thumb: '../images/practice/练习/ジョジョのアニメのブチャラティの同人.jpg',
        },
        {
            src: '../images/practice/练习/スプラトゥーンの青いイカが街中に立っている.jpg',
            thumb: '../images/practice/练习/スプラトゥーンの青いイカが街中に立っている.jpg',
        },
        {
            src: '../images/practice/练习/スプラトゥーンの黒いイカ.jpg',
            thumb: '../images/practice/练习/スプラトゥーンの黒いイカ.jpg',
        },
        {
            src: '../images/practice/练习/パンダ初音.jpg',
            thumb: '../images/practice/练习/パンダ初音.jpg',
        },
        {
            src: '../images/practice/练习/フウカ.jpg',
            thumb: '../images/practice/练习/フウカ.jpg',
        },
        {
            src: '../images/practice/练习/ミファー.png',
            thumb: '../images/practice/练习/ミファー.png',
        },
        {
            src: '../images/practice/练习/二人の.jpg',
            thumb: '../images/practice/练习/二人の.jpg',
        },
        {
            src: '../images/practice/练习/二宫和也 musicpost.jpg',
            thumb: '../images/practice/练习/二宫和也 musicpost.jpg',
        },
        {
            src: '../images/practice/练习/大きなスカートがひらひらと舞う女の子のイラスト，制作時間2時間.jpg',
            thumb: '../images/practice/练习/大きなスカートがひらひらと舞う女の子のイラスト，制作時間2時間.jpg',
        },
        {
            src: '../images/practice/练习/女らんまが小豚を捕まえた.jpg',
            thumb: '../images/practice/练习/女らんまが小豚を捕まえた.jpg',
        },
        {
            src: '../images/practice/练习/怪奇ゾーングラビティフォールズのイラスト、制作時間2時間.png',
            thumb: '../images/practice/练习/怪奇ゾーングラビティフォールズのイラスト、制作時間2時間.png',
        },
        {
            src: '../images/practice/练习/猫耳メイドのイラスト.jpg',
            thumb: '../images/practice/练习/猫耳メイドのイラスト.jpg',
        },
        {
            src: '../images/practice/练习/白虎と着物.jpg',
            thumb: '../images/practice/练习/白虎と着物.jpg',
        },
        {
            src: '../images/practice/练习/赤ずきんちゃんが森の中を歩いている.jpg',
            thumb: '../images/practice/练习/赤ずきんちゃんが森の中を歩いている.jpg',
        },
        {
            src: '../images/practice/练习/銀魂の三人が座っている.jpg',
            thumb: '../images/practice/练习/銀魂の三人が座っている.jpg',
        },
        {
            src: '../images/practice/练习/黒神話：悟空.png',
            thumb: '../images/practice/练习/黒神話：悟空.png',
        },
    ],
    thumbWidth: 100,
    thumbHeight: "80px",
    thumbMargin: 10,
    // slideShowAutoplay: true,
});

// Since we are using dynamic mode, we need to programmatically open lightGallery
inlineGallery1.openGallery();