"""Create original illustrative DEMO post/reel artwork from the approved AI-generated mockups.
Run from the project root with Pillow installed. These are not real client case studies.
"""
from PIL import Image, ImageDraw, ImageFont, ImageFilter, ImageOps
from pathlib import Path
import math, random
PROJECT=Path(__file__).resolve().parents[1]
ROOT=PROJECT/'design-references'
OUT=PROJECT/'public/images'
OUT.mkdir(parents=True, exist_ok=True)
SER='/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf'
SANS='/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'
BOLD='/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'
C={'black':'#1e1d1b','gold':'#f8c849','orange':'#f15a39','cream':'#fffaf3','warm':'#f9e9d9'}
def font(n,which='ser'): return ImageFont.truetype({'ser':SER,'sans':SANS,'bold':BOLD}[which],n)
def textblock(d, lines, x, y, size, color, spacing=1.1):
 for line in lines:
  d.text((x,y),line,font=font(size),fill=color,stroke_width=0); y+=int(size*spacing)
 return y

def cut(name, xy, target=(500,650)):
 im=Image.open(ROOT/name).convert('RGB').crop(xy)
 tw,th=target; ir=im.width/im.height; tr=tw/th
 if ir>tr: w=int(im.height*tr); im=im.crop(((im.width-w)//2,0,(im.width+w)//2,im.height))
 else: h=int(im.width/tr); im=im.crop((0,(im.height-h)//2,im.width,(im.height+h)//2))
 return im.resize(target,Image.Resampling.LANCZOS)

def fitphoto(canvas, photo, box, corner=34):
 x,y,w,h=box
 photo=ImageOps.fit(photo,(w,h),method=Image.Resampling.LANCZOS,centering=(.5,.42))
 mask=Image.new('L',(w,h)); ImageDraw.Draw(mask).rounded_rectangle((0,0,w-1,h-1),radius=corner,fill=255)
 canvas.paste(photo,(x,y),mask)

def logo(d,y=111, x=68, color='#1e1d1b'):
 d.text((x,y),'srshti',font=font(46,'bold'),fill=color)
 d.text((x,y+51),'C R E A T I V E   S T U D I O',font=font(14,'bold'),fill=color)

def poster(slug,lines,bg,accent,photo=None,desc='',shape='swoosh',index=None):
 W,H=900,1200
 im=Image.new('RGB',(W,H),bg); d=ImageDraw.Draw(im)
 if shape=='swoosh':
  d.ellipse((575,470,1260,1185),fill=accent)
  d.ellipse((670,520,1300,1080),fill=bg)
 elif shape=='blob':
  d.rounded_rectangle((555,440,1050,1190),radius=195,fill=accent)
 elif shape=='circle':
  d.ellipse((590,520,1160,1150),fill=accent)
 elif shape=='dots':
  for i in range(6): d.ellipse((680+i%3*60,540+i//3*60,707+i%3*60,567+i//3*60),fill=accent)
 ink=C['black'] if bg not in ['#1e1d1b','#192927','#284334'] else '#fffaf3'
 logo(d,88,66,ink)
 if index:
  d.text((735,121),index,font=font(24,'bold'),fill=ink)
 ty=247
 for line, color in lines:
  d.text((65,ty),line,font=font(77),fill=color or ink)
  ty+=92
 if desc: d.text((69,ty+16),desc,font=font(25,'sans'),fill=ink)
 if photo: fitphoto(im,photo,(142,660,616,445),30)
 else:
  if slug.startswith('dental'):
   d.ellipse((276,706,645,1075),fill='#fffefb',outline='#e7d4bc',width=8)
   d.arc((338,762,583,1000),180,359,fill=accent,width=15)
   for j in range(4):
    d.rounded_rectangle((352+j*54,777,401+j*54,849),radius=18,fill='#ffffff',outline='#d6d0c6',width=3)
  elif slug.startswith('social'):
   for j,(co,txt) in enumerate([(C['orange'],'IDEA'),(C['gold'],'CREATE'),('#b1d6d1','GROW')]):
    d.rounded_rectangle((90+j*240,745,294+j*240,995),radius=24,fill=co)
    d.text((110+j*240,847),txt,font=font(29,'bold'),fill='#191919')
  else:
   d.rounded_rectangle((155,714,754,1048),radius=48,fill='#ffffff',outline=accent,width=7)
   d.line((207,982,350,843,471,901,685,753),fill=accent,width=22,joint='curve')
 d.rounded_rectangle((64,1112,836,1121),radius=5,fill=accent)
 im.save(OUT/f'{slug}.webp',format='WEBP',quality=90,method=6)

smile=cut('socialspring_turn_social_into_growth.png',(862,66,1117,309),(600,690))
smile2=cut('creative_studio_services_mockup.png',(821,306,970,557),(500,650))
travel=cut('srshti_carousel_portfolio_mockup.png',(279,646,422,811),(600,700))
tattoo=cut('srshti_carousel_portfolio_mockup.png',(427,647,564,812),(600,700))
house=cut('srshti_carousel_portfolio_mockup.png',(727,650,864,812),(600,700))
food=cut('creative_studio_services_mockup.png',(625,312,768,531),(550,660))
clinic=cut('modern_reels_studio_portfolio_mockup.png',(442,577,578,745),(550,660))
coffee=cut('srshti_creative_studio_website_mockup.png',(556,280,677,511),(550,660))
for name,pic in [('portrait_smile',smile),('portrait_smile_alt',smile2),('portrait_travel',travel),('portrait_tattoo',tattoo),('portrait_house',house),('portrait_food',food),('portrait_clinic',clinic),('portrait_coffee',coffee)]:
 pic.save(OUT/f'{name}.webp',format='WEBP',quality=91,method=6)
# Carousel series: 5 original educational slides, keeping titles/editable body distinct.
poster('dental_01',[('A healthier',None),('brighter',C['orange']),('you.',None)],'#fff6ed','#f8d8a6',smile, 'A little care goes a long way.','swoosh','01 / 05')
poster('dental_02',[('Brush better',None),('every day.',C['orange'])],'#fff0e8','#f7cf73',None,'Two minutes. Twice a day.','circle','02 / 05')
poster('dental_03',[('Floss for a',None),('happier',C['orange']),('you.',None)],'#eaf3f8','#c7dce7',None,'A small habit. A big difference.','circle','03 / 05')
poster('dental_04',[('Healthy gums',None),('stronger',C['orange']),('you.',None)],'#fff0ef','#efc2b7',None,'Healthy smiles start at the gums.','blob','04 / 05')
poster('dental_05',[('Regular',None),('checkups',C['orange']),('go a long way.',None)],'#eff6e8','#b7d4ab',None,'Prevention is the best plan.','circle','05 / 05')
poster('travel_01',[('Explore more.',None),('Worry less.',C['orange'])],'#eaf4fa','#c6d9e9',travel,'Hidden gems in Greece.','blob','01 / 04')
poster('travel_02',[('See the world',None),('differently.',C['orange'])],'#fff2e5','#f6d9ad',travel,'Journeys worth remembering.','circle','02 / 04')
poster('tattoo_01',[('More than ink.',None),('A story.',C['orange'])],'#f6e8df','#ebc1b3',tattoo,'Art that lives with you.','blob','01 / 04')
poster('architecture_01',[('Spaces that',None),('inspire.',C['orange'])],'#ecf0ef','#ccd6d4',house,'Thoughtful spaces. Better living.','circle','01 / 04')
poster('food_01',[('Good food.',None),('Better days.',C['orange'])],'#fff1e0','#e9cf9c',food,'Fresh ideas, every day.','circle','01 / 04')
poster('social_01',[('Small steps.',None),('Big results.',C['orange'])],'#f5e7e0','#f6cc5b',None,'Create • Connect • Grow','dots','01 / 04')
poster('reel_testimonial',[('Real stories.',None),('Real smiles.',C['orange'])],'#f6e4d4','#f6c948',smile2,'Patient experience · Demo reel','blob')
poster('reel_before_after',[('A smile',None),('transformed.',C['orange'])],'#e9e0d8','#d3b1a5',smile,'Before & after · Demo reel','circle')
poster('reel_clinic',[('Step inside',None),('the clinic.',C['orange'])],'#e9e9e4','#d5d6bf',clinic,'An inside look · Demo reel','blob')
poster('reel_travel',[('Go further.',None),('Feel more.',C['orange'])],'#e2edf2','#c8dfe5',travel,'Destination stories · Demo reel','circle')
poster('reel_tattoo',[('Wear your',None),('story.',C['orange'])],'#eadcd2','#c2a390',tattoo,'Artist showcase · Demo reel','blob')
poster('reel_food',[('Good food.',None),('Good mood.',C['orange'])],'#f7ebd7','#f5d08b',food,'Food & lifestyle · Demo reel','circle')
print('Generated',len(list(OUT.glob('*.webp'))),'local demonstration artwork files')
