const lgContainer = document.getElementById('freelance-gallery');
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
            src: '../images/freelance/商業用原稿/夜の街で、3人の少女がバイクに乗って集まっています。彼女たちはストリートアートの前で秘密の会話をしています。.png',
            thumb: '../images/freelance/商業用原稿/夜の街で、3人の少女がバイクに乗って集まっています。彼女たちはストリートアートの前で秘密の会話をしています。.png',
            subHtml: `<div class="lightGallery-captions">
                <h5 style="color: #ffffff">夜の街で、3人の少女がバイクに乗って集まっています。彼女たちはストリートアートの前で秘密の会話をしています。.png</h5>
            </div>`,
        },
        {
            src: '../images/freelance/商業用原稿/2人の少女が水中で横たわり、後ろには中秋の月と遠くの都市が見えます。.png',
            thumb: '../images/freelance/商業用原稿/2人の少女が水中で横たわり、後ろには中秋の月と遠くの都市が見えます。.png',
            subHtml: `<div class="lightGallery-captions">
                <h5 style="color: #ffffff">2人の少女が水中で横たわり、後ろには中秋の月と遠くの都市が見えます。.png</h5>
            </div>`,
        },
        {
            src: '../images/freelance/商業用原稿/鏡の中の少女がカメラを見つめるレトロで華やかなイラストを描きました。背景は3ds Maxを使用して制作しました。.png',
            thumb: '../images/freelance/商業用原稿/鏡の中の少女がカメラを見つめるレトロで華やかなイラストを描きました。背景は3ds Maxを使用して制作しました。.png',
            subHtml: `<div class="lightGallery-captions">
                <h5 style="color: #ffffff">鏡の中の少女がカメラを見つめるレトロで華やかなイラストを描きました。背景は3ds Maxを使用して制作しました。.png</h5>
            </div>`,
        },
        {
            src: '../images/freelance/商業用原稿/『光と夜の恋』の萧逸が高級アパートのソファで思索しているシーンを描きました。窓の外には夜空の下に広がる都市が広がっています。.jpg',
            thumb: '../images/freelance/商業用原稿/『光と夜の恋』の萧逸が高級アパートのソファで思索しているシーンを描きました。窓の外には夜空の下に広がる都市が広がっています。.jpg',
            subHtml: `<div class="lightGallery-captions">
                <h5 style="color: #ffffff">『光と夜の恋』の萧逸が高級アパートのソファで思索しているシーンを描きました。窓の外には夜空の下に広がる都市が広がっています。.jpg</h5>        
            </div>`,
        },
        {
            src: '../images/freelance/商業用原稿/2人の美少女が空中を飛んでいる姿を描きました。.jpg',
            thumb: '../images/freelance/商業用原稿/2人の美少女が空中を飛んでいる姿を描きました。.jpg',
            subHtml: `<div class="lightGallery-captions">
                <h5 style="color: #ffffff">2人の美少女が空中を飛んでいる姿を描きました。.jpg</h5>
            </div>`,
        },

        {
            src: '../images/freelance/商業用原稿/あるスマートフォンのマスコット美少女のイラストで、私は彼女のクリスマス特集のスマホ壁紙を担当しました。.jpg',
            thumb: '../images/freelance/商業用原稿/あるスマートフォンのマスコット美少女のイラストで、私は彼女のクリスマス特集のスマホ壁紙を担当しました。.jpg',
            subHtml: `<div class="lightGallery-captions">
                <h5 style="color: #ffffff">あるスマートフォンのマスコット美少女のイラストで、私は彼女のクリスマス特集のスマホ壁紙を担当しました。.jpg</h5>
            </div>`,
        },
        {
            src: '../images/freelance/商業用原稿/こちらのイラストは、『三国殺-幻想大陸』というゲームに登場する曹操を描いたものです。KVアニメーションのシーンの中で、彼が血を浴びながら戦う姿を表現しました。.jpg',
            thumb: '../images/freelance/商業用原稿/こちらのイラストは、『三国殺-幻想大陸』というゲームに登場する曹操を描いたものです。KVアニメーションのシーンの中で、彼が血を浴びながら戦う姿を表現しました。.jpg',
            subHtml: `<div class="lightGallery-captions">
                <h5 style="color: #ffffff">こちらのイラストは、『三国殺-幻想大陸』というゲームに登場する曹操を描いたものです。KVアニメーションのシーンの中で、彼が血を浴びながら戦う姿を表現しました。.jpg</h5>
            </div>`,
        },
        {
            src: '../images/freelance/商業用原稿/こちらのイラストは、アニメ『斬赤紅之瞳』のエスデスを描いた同人イラストです。彼女が満月の下で戦う姿を描きました。.jpg',
            thumb: '../images/freelance/商業用原稿/こちらのイラストは、アニメ『斬赤紅之瞳』のエスデスを描いた同人イラストです。彼女が満月の下で戦う姿を描きました。.jpg',
            subHtml: `<div class="lightGallery-captions">
                <h5 style="color: #ffffff">こちらのイラストは、アニメ『斬赤紅之瞳』のエスデスを描いた同人イラストです。彼女が満月の下で戦う姿を描きました。.jpg</h5>
            </div>`,
        },
        {
            src: '../images/freelance/商業用原稿/こちらはその美少女の別のPC壁紙です。.jpg',
            thumb: '../images/freelance/商業用原稿/こちらはその美少女の別のPC壁紙です。.jpg',
            subHtml: `<div class="lightGallery-captions">
                <h5 style="color: #ffffff">こちらはその美少女の別のPC壁紙です。.jpg</h5>
            </div>`,
        },
        {
            src: '../images/freelance/商業用原稿/このメカモンスターの威圧的な形態を描きました。背景は3Dで描いています。.png',
            thumb: '../images/freelance/商業用原稿/このメカモンスターの威圧的な形態を描きました。背景は3Dで描いています。.png',
            subHtml: `<div class="lightGallery-captions">
                <h5 style="color: #ffffff">このメカモンスターの威圧的な形態を描きました。背景は3Dで描いています。.png</h5>
            </div>`,
        },
        {
            src: '../images/freelance/商業用原稿/これは『夢の新大陸』というモバイルゲームの中国新年特別ホームページイラストです。.jpg',
            thumb: '../images/freelance/商業用原稿/これは『夢の新大陸』というモバイルゲームの中国新年特別ホームページイラストです。.jpg',
            subHtml: `<div class="lightGallery-captions">
                <h5 style="color: #ffffff">これは『夢の新大陸』というモバイルゲームの中国新年特別ホームページイラストです。.jpg</h5>
            </div>`,
        },

        {
            src: '../images/freelance/商業用原稿/小さなロリィの夏の水着姿で、浮き輪に座っている立ち絵です。このイラストでは、浮き輪と水の質感を表現したいと思いました。.png',
            thumb: '../images/freelance/商業用原稿/小さなロリィの夏の水着姿で、浮き輪に座っている立ち絵です。このイラストでは、浮き輪と水の質感を表現したいと思いました。.png',
            subHtml: `<div class="lightGallery-captions">
                <h5 style="color: #ffffff">小さなロリィの夏の水着姿で、浮き輪に座っている立ち絵です。このイラストでは、浮き輪と水の質感を表現したいと思いました。.png</h5>
            </div>`,
        },
        {
            src: '../images/freelance/商業用原稿/少女の立ち絵1.jpg',
            thumb: '../images/freelance/商業用原稿/少女の立ち絵1.jpg',
            subHtml: `<div class="lightGallery-captions">
                <h5 style="color: #ffffff">少女の立ち絵1.jpg</h5>
            </div>`,
        },
        {
            src: '../images/freelance/商業用原稿/少女の立ち絵2.png',
            thumb: '../images/freelance/商業用原稿/少女の立ち絵2.png',
            subHtml: `<div class="lightGallery-captions">
                <h5 style="color: #ffffff">少女の立ち絵2.png</h5>
            </div>`,
        },

    ],
    thumbWidth: 100,
    thumbHeight: "80px",
    thumbMargin: 10,
    slideShowAutoplay: true,
});

// Since we are using dynamic mode, we need to programmatically open lightGallery
inlineGallery.openGallery();

const lgContainer1 = document.getElementById('freelance-gallery1');
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
            src: '../images/freelance/绘本/1.png',
            thumb: '../images/freelance/绘本/1.png',
        },
        {
            src: '../images/freelance/绘本/图片10.png',
            thumb: '../images/freelance/绘本/图片10.png',
        },
        {
            src: '../images/freelance/绘本/图片12.png',
            thumb: '../images/freelance/绘本/图片12.png',
        },
        {
            src: '../images/freelance/绘本/图片13.png',
            thumb: '../images/freelance/绘本/图片13.png',
        },
        {
            src: '../images/freelance/绘本/图片7.png',
            thumb: '../images/freelance/绘本/图片7.png',
        },
        {
            src: '../images/freelance/绘本/图片8.png',
            thumb: '../images/freelance/绘本/图片8.png',
        },
        {
            src: '../images/freelance/绘本/图片9.png',
            thumb: '../images/freelance/绘本/图片9.png',
        },
    ],
    thumbWidth: 100,
    thumbHeight: "80px",
    thumbMargin: 10,
    // slideShowAutoplay: true,
});

// Since we are using dynamic mode, we need to programmatically open lightGallery
inlineGallery1.openGallery();

const lgContainer2 = document.getElementById('freelance-gallery2');
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
            src: '../images/freelance/個人用原稿/1.jpg',
            thumb: '../images/freelance/個人用原稿/1.jpg',
        },
        {
            src: '../images/freelance/個人用原稿/2.jpg',
            thumb: '../images/freelance/個人用原稿/2.jpg',
        },
        {
            src: '../images/freelance/個人用原稿/3.jpg',
            thumb: '../images/freelance/個人用原稿/3.jpg',
        },
        {
            src: '../images/freelance/個人用原稿/4.jpg',
            thumb: '../images/freelance/個人用原稿/4.jpg',
        },
        {
            src: '../images/freelance/個人用原稿/5.jpg',
            thumb: '../images/freelance/個人用原稿/5.jpg',
        },
        {
            src: '../images/freelance/個人用原稿/6.png',
            thumb: '../images/freelance/個人用原稿/6.png',
        },
    ],
    thumbWidth: 100,
    thumbHeight: "80px",
    thumbMargin: 10,
    // slideShowAutoplay: true,
});

// Since we are using dynamic mode, we need to programmatically open lightGallery
inlineGallery2.openGallery();
