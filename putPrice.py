# importing all the required libraries
import numpy as np
import matplotlib.pyplot as plt
from PIL import Image, ImageOps, ImageDraw, ImageFont



img = Image.open('imagens/LUAR com insta e whatsapp.png')
print(img.size)
[width, height] = img.size
idr = ImageDraw.Draw(img)
font = ImageFont.truetype('font/Comfortaa-VariableFont_wght.ttf' ,height*0.03)
idr.text((700, 700), "R$17,90", fill=(0, 0, 0), font=font)
img.save('prodImgs/new.png')
