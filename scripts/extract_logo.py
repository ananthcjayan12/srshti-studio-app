"""Extract logo artwork from the user-provided reference image for the demo header."""
from PIL import Image, ImageFilter
from pathlib import Path
import numpy as np
PROJECT=Path(__file__).resolve().parents[1]
src=Image.open(PROJECT/'design-references/IMG_5281.jpg').convert('RGB')
# Crop original artwork; circular UI mute overlay is below/right of this area.
crop=src.crop((852,1320,1075,1455))
a=np.asarray(crop,dtype=np.float32)
bg=np.median(np.asarray(src.crop((780,1240,815,1280)).convert('RGB'),dtype=np.float32).reshape(-1,3),axis=0)
diff=np.max(np.abs(a-bg),axis=2)
# Remove the flat ochre background, retain antialiased original letterforms.
alpha=np.uint8(np.clip((diff-15)/35,0,1)*255)
# Exclude screenshot's circular mute-control edge outside the logo.
alpha[106:,198:]=0
for mode in ('dark','light'):
 rgb=a.copy()
 white=(a.mean(axis=2)>190)&(a.min(axis=2)>185)&(diff>30)
 dark=(a.mean(axis=2)<138)&(diff>30)
 if mode=='dark':
  rgb[white]=[255,255,252];rgb[dark]=[248,200,73]
 else:
  rgb[white]=[34,32,29];rgb[dark]=[34,32,29]
 rgba=np.dstack((np.clip(rgb,0,255).astype('uint8'),alpha))
 out=Image.fromarray(rgba,'RGBA')
 out.save(PROJECT/'public/images'/f'logo-{mode}.png')
print('Extracted original logo artwork variants')
