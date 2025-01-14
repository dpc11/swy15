import os

images = ""
for subdir, dirs, files in os.walk("C:\\Users\\dpc11\\Documents\\swy15\\images\\school\\素描"):
    for file in files:
        print( """{{
            src: '../images/school/素描/{}',
            thumb: '../images/school/素描/{}',
            }},""".format(file, file))