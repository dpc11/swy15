import os

images = ""
for subdir, dirs, files in os.walk("C:\\Users\\dpc11\\Documents\\swy15\\images\\practice\\练习"):
    for file in files:
        print( """{{
            src: '../images/practice/练习/{}',
            thumb: '../images/practice/练习/{}',
            }},""".format(file, file))