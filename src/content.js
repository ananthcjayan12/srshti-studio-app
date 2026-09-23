/** Portfolio sources: Smilecraft artwork supplied by studio; Milano/Orbi concepts are demo creative directions. */
export const studio = {
  name: 'Srshti Creative Studio',
  email: 'hello@example.com', // Replace before publishing.
  serviceLocation: 'Available for projects worldwide',
  clients: ['Smilecraft', 'Chayam', 'MILANO', 'Orbi'],
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
export const reels = [
  {id:'testimonial',category:'Testimonial',title:'A Healthier, Brighter You', client:'Smilecraft Dental Clinic',cover:'reel_testimonial',description:'A personable patient-story concept with a gentle opening hook and reassuring visual storytelling.',detail:['Hook that quickly introduces the story','Warm, authentic visual treatment','Clear and calm on-screen captions','Simple closing call to action']},
  {id:'transformation',category:'Transformation',title:'A Smile Transformed',client:'Smilecraft Dental Clinic',cover:'reel_before_after',description:'An illustrative before-and-after concept with restrained transitions and clean typography.',detail:['Before-and-after visual structure','Smooth, unobtrusive pacing','Easy-to-read on-screen labels','Clear outcome-focused closing frame']},
  {id:'clinic',category:'Brand Film',title:'Step Inside the Clinic',client:'Smilecraft Dental Clinic',cover:'reel_clinic',description:'A welcoming clinic tour concept intended to show the patient experience.',detail:['Calm introductory shot','Warm, inviting interior sequence','Service detail cutaways','Clear visit enquiry call to action']},
  {id:'travel',category:'Travel',title:'Go Further, Feel More',client:'Milano Trips',cover:'reel_travel',description:'An escapist travel reel concept featuring destination imagery and immersive pacing.',detail:['Destination-first opening','Smooth location transitions','Elegant motion typography','Invitation to explore']},
  {id:'tattoo',category:'Brand Film',title:'Wear Your Story',client:'Chayam Tattoos',cover:'reel_tattoo',description:'A short brand-story concept emphasizing artistry and personality.',detail:['Artist-led opening','Detailed artwork cutaways','Modern, confident captions','Clear booking invitation']},
  {id:'food',category:'Promotional',title:'Good Food, Good Mood',client:'Sample food brand',cover:'reel_food',description:'A playful food promotional reel concept with simple, appetizing visuals.',detail:['Food-first visual hook','Fast, clear story beats','Tasteful motion typography','Visit or order call to action']},
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
