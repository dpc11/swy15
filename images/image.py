import os

images = ""
for subdir, dirs, files in os.walk("C:\\Users\\dpc11\\Documents\\swy15\\images\\freelance\\商業用原稿"):
    for file in files:
        print( """{{
            src: '../images/freelance/商業用原稿/{}',
            thumb: '../images/freelance/商業用原稿/{}',
             subHtml: `<div class="lightGallery-captions">
                <h3 style="color: #ffffff">{}</h3>
            </div>`,
            }},""".format(file, file, file))