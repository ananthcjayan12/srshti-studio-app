/** Portfolio sources: Smilecraft artwork supplied by studio; Milano/Orbi concepts are demo creative directions. */
export const clientLogos = [
  { id: 'smilecraft', name: "Dr. Pooja's Smile Craft Dental Clinic", src: '/Client_Logos/1.png' },
  { id: 'milano', name: "MILANO TRIPS LLP", src: '/Client_Logos/2.png' },
  { id: 'chaayam', name: "CHAAYAM TATTOO", src: '/Client_Logos/3.png' },
  { id: 'orbis', name: "orbis structurals LLP", src: '/Client_Logos/4.png' },
  { id: 'madecaan', name: "MADECAAN FOOD INGREDIENTS PVT LTD", src: '/Client_Logos/5.png' },
  { id: 'miraaz', name: "Miraaz Events and Entertainments", src: '/Client_Logos/6.png' },
  { id: 'zoyara', name: "ZOYARA FORTUNE ENTERPRISES", src: '/Client_Logos/7.png' },
];

export const studio = {
  name: 'Srshti Creative Studio',
  email: 'hello@example.com', // Replace before publishing.
  serviceLocation: 'Available for projects worldwide',
  clients: ["Smile Craft", "Milano Trips", "Chaayam Tattoo", "Orbis Structurals", "Madecaan", "Miraaz", "Zoyara"],
};
const slides = (slug) => Array.from({length:5}, (_,i)=>`portfolio/${slug}-${String(i+1).padStart(2,'0')}`);
export const carousels = [
  {
    "id": "teeth-not-tools",
    "category": "Dental",
    "client": "Smilecraft Dental Clinic",
    "title": "Teeth Are Not Tools",
    "description": "An original five-slide Smilecraft educational carousel explaining why using teeth to open packets and bottles can damage enamel.",
    "slug": "smilecraft-tools",
    "count": 5,
    "style": "Dental education · Client artwork",
    "origin": "client",
    "cover": "portfolio/smilecraft-tools-01",
    "slides": [
      "portfolio/smilecraft-tools-01",
      "portfolio/smilecraft-tools-02",
      "portfolio/smilecraft-tools-03",
      "portfolio/smilecraft-tools-04",
      "portfolio/smilecraft-tools-05"
    ]
  },
  {
    "id": "braces-vs-aligners",
    "category": "Dental",
    "client": "Smilecraft Dental Clinic",
    "title": "Braces vs Clear Aligners",
    "description": "An original five-slide Smilecraft visual guide to two orthodontic treatments, with Malayalam and English captions.",
    "slug": "smilecraft-braces",
    "count": 5,
    "style": "Dental education · Client artwork",
    "origin": "client",
    "cover": "portfolio/smilecraft-braces-01",
    "slides": [
      "portfolio/smilecraft-braces-01",
      "portfolio/smilecraft-braces-02",
      "portfolio/smilecraft-braces-03",
      "portfolio/smilecraft-braces-04",
      "portfolio/smilecraft-braces-05"
    ]
  },
  {
    "id": "teeth-whitening",
    "category": "Dental",
    "client": "Smilecraft Dental Clinic",
    "title": "Is Teeth Whitening Right for You?",
    "description": "An original five-slide Smilecraft guide to whitening consultations, expectations and treatment considerations.",
    "slug": "smilecraft-whitening",
    "count": 5,
    "style": "Dental education · Client artwork",
    "origin": "client",
    "cover": "portfolio/smilecraft-whitening-01",
    "slides": [
      "portfolio/smilecraft-whitening-01",
      "portfolio/smilecraft-whitening-02",
      "portfolio/smilecraft-whitening-03",
      "portfolio/smilecraft-whitening-04",
      "portfolio/smilecraft-whitening-05"
    ]
  },
  {
    "id": "milano-journeys",
    "category": "Travel",
    "client": "Milano Trips",
    "title": "Dream Trips Made Easy",
    "description": "Four travel posters with destination storytelling, stress-free itinerary planning, family holidays and early-booking inspiration.",
    "slug": "milano-story",
    "count": 4,
    "style": "Travel · New creative concept",
    "origin": "concept",
    "cover": "portfolio/milano-story-01",
    "slides": [
      "portfolio/milano-story-01",
      "portfolio/milano-story-02",
      "portfolio/milano-story-03",
      "portfolio/milano-story-04"
    ]
  },
  {
    "id": "orbi-spaces",
    "category": "Architecture",
    "client": "Orbi Structures",
    "title": "Spaces Built Around You",
    "description": "Three original architecture posters exploring home design, project planning and naturally comfortable interiors.",
    "slug": "orbi-story",
    "count": 3,
    "style": "Architecture · New creative concept",
    "origin": "concept",
    "cover": "portfolio/orbi-story-01",
    "slides": [
      "portfolio/orbi-story-01",
      "portfolio/orbi-story-02",
      "portfolio/orbi-story-03"
    ]
  },
  {
    "id": "chayam-stories",
    "category": "Tattoo",
    "client": "Chayam Tattoos",
    "title": "Ink With Meaning",
    "description": "Three original Chayam Tattoos poster concepts about personal tattoo design, custom illustration and thoughtful aftercare.",
    "slug": "chayam-story",
    "count": 3,
    "style": "Tattoo · New creative concept",
    "origin": "concept",
    "cover": "portfolio/chayam-story-01",
    "slides": [
      "portfolio/chayam-story-01",
      "portfolio/chayam-story-02",
      "portfolio/chayam-story-03"
    ]
  }
];
const mediaBase=(import.meta.env?.VITE_MEDIA_BASE_URL||'https://pub-443c791d28dc428c800df7cb7f852d77.r2.dev').replace(/\/$/,'');
const reel=(file,data)=>({...data,cover:`${mediaBase}/reels/${file}.webp`,video:`${mediaBase}/reels/${file}.mp4`});
export const reels = [
  reel('things-to-remmber-for-aligners',{id:'aligner-tips',category:'Dental',title:'Things to Remember With Aligners',client:'Smile Craft Dental Clinic',description:'A doctor-led explainer where the dentist speaks directly to camera about caring for clear aligners, cut with clean product visuals.',detail:['Doctor on camera to build trust','Practical tips in a conversational tone','Clean aligner product cutaways','Educational format patients save and share']}),
  reel('smile-craft-1',{id:'root-canal',category:'Dental',title:'Root Canal, Explained Simply',client:'Smile Craft Dental Clinic',description:'An educational reel that pairs 3D tooth visuals with the doctor and real clinical footage to make a root canal feel less intimidating.',detail:['3D tooth anatomy to explain the procedure','Split-screen doctor and clinic footage','Calm, reassuring pacing','Closes on the clinic’s brand mark']}),
  reel('smilecraft-2',{id:'onam-greetings',category:'Dental',title:'Onam Greetings From the Clinic',client:'Smile Craft Dental Clinic',description:'A festive Onam greeting with pookalam, nilavilakku and Malayalam wishes, ending on a warm team greeting card.',detail:['Festive Kerala visual language','Malayalam message for a local audience','Warm clinic and family moments','Branded greeting card finish']}),
  reel('charbhuja-granite',{id:'granite-kitchen',category:'Interiors',title:'Stone That Defines the Kitchen',client:'Shree Charbhuja Granite Gallery',description:'A premium product film moving from close-up stone texture to a finished kitchen countertop, ending on the gallery’s brand card.',detail:['Macro stone texture opening','Stone shown in a finished interior','Dark, luxury colour grade','Brand card with address and contact']}),
  reel('charbhuja-2',{id:'granite-showroom',category:'Interiors',title:'Inside the Granite Gallery',client:'Shree Charbhuja Granite Gallery',description:'A moody showroom walkthrough of polished granite slabs under gallery lighting, positioning the brand as a premium stone source.',detail:['Cinematic showroom lighting','Slow reveals of polished slabs','Premium positioning since 1996','Factory outlet call to action']}),
  reel('charbhuja-3',{id:'granite-texture',category:'Interiors',title:'Luxury Isn’t Just Seen',client:'Shree Charbhuja Granite Gallery',description:'A tactile concept that invites viewers to feel the raw, organic texture of natural stone before revealing the brand.',detail:['Copy-led hook: “Luxury isn’t just seen”','Close-up textured stone finish','Minimal, elegant typography','Brand card with address and contact']}),
  reel('milano-trips',{id:'samyoga-trip',category:'Travel',title:'Samyoga 3.0 Group Trip',client:'Milano Trips',description:'A group travel recap from a hilltop escape: the trail, the people and the view, capturing the feeling of travelling together.',detail:['Trip title card opening','Real travellers, candid moments','Hilltop sunset atmosphere','Consistent Milano brand watermark']}),
  reel('chaayam-tattoos',{id:'shiva-sleeve',category:'Tattoo',title:'Shiva Sleeve Reveal',client:'Chaayam Tattoo',description:'A short artwork reveal of a detailed black-and-grey Shiva sleeve, finishing on the studio’s logo.',detail:['Artwork-first opening','Slow camera move across the detail','Minimal text so the tattoo leads','Studio logo end card']}),
];
export const pricing = [
  {
    name:'Basic Plan',
    price:'₹2,999',
    subtitle:'A consistent social presence for growing brands',
    features:[
      '30 branded creative posts or carousels per month',
      'Daily posting schedule',
      'Facebook account handling',
      'Instagram account handling',
    ],
  },
  {
    name:'Basic Plus',
    price:'₹7,999',
    subtitle:'Add weekly video and daily audience engagement',
    popular:true,
    features:[
      'Everything included in the Basic plan',
      '4 creative videos per month — one each week',
      'Daily stories designed for engagement',
    ],
  },
  {
    name:'Pro Plan',
    price:'₹14,999',
    subtitle:'Content, website support and local visibility',
    features:[
      'Everything included in the Basic Plus plan',
      '10 creative videos per month',
      'Website creation and maintenance',
      'Basic Google Business Profile handling and optimization',
    ],
  },
  {
    name:'Ultimate Pack',
    price:'₹29,999',
    subtitle:'A complete digital growth and automation package',
    features:[
      'Everything included in the Pro plan',
      'Tailored strategy for your business',
      'Meta ads account management and optimization',
      'WhatsApp automation setup',
      '15 creative videos per month',
    ],
  },
];
