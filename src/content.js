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
    "title": "Teeth Are Not Tools",
    "client": "Smilecraft Dental Clinic",
    "description": "Five original Smilecraft educational slides about everyday habits that can damage teeth. Supplied by the studio, preserved in full and optimized for the web.",
    "cover": "portfolio/smilecraft-tools-01",
    "slides": [
      "portfolio/smilecraft-tools-01",
      "portfolio/smilecraft-tools-02",
      "portfolio/smilecraft-tools-03",
      "portfolio/smilecraft-tools-04",
      "portfolio/smilecraft-tools-05"
    ],
    "style": "Dental education · Client artwork",
    "origin": "client"
  },
  {
    "id": "braces-vs-aligners",
    "category": "Dental",
    "title": "Braces vs Clear Aligners",
    "client": "Smilecraft Dental Clinic",
    "description": "An original five-slide comparison carousel created for Smilecraft, with educational visuals about orthodontic treatment options.",
    "cover": "portfolio/smilecraft-braces-01",
    "slides": [
      "portfolio/smilecraft-braces-01",
      "portfolio/smilecraft-braces-02",
      "portfolio/smilecraft-braces-03",
      "portfolio/smilecraft-braces-04",
      "portfolio/smilecraft-braces-05"
    ],
    "style": "Dental education · Client artwork",
    "origin": "client"
  },
  {
    "id": "teeth-whitening",
    "category": "Dental",
    "title": "Is Teeth Whitening Right for You?",
    "client": "Smilecraft Dental Clinic",
    "description": "An original five-slide educational series exploring common questions around teeth whitening and professional dental care.",
    "cover": "portfolio/smilecraft-whitening-01",
    "slides": [
      "portfolio/smilecraft-whitening-01",
      "portfolio/smilecraft-whitening-02",
      "portfolio/smilecraft-whitening-03",
      "portfolio/smilecraft-whitening-04",
      "portfolio/smilecraft-whitening-05"
    ],
    "style": "Dental education · Client artwork",
    "origin": "client"
  },
  {
    "id": "milano-journeys",
    "category": "Travel",
    "title": "The World Is Closer Than You Think",
    "client": "Milano Trips",
    "description": "A new five-slide editorial travel carousel concept using aspirational destination imagery, warm tones and clear calls to discover.",
    "cover": "portfolio/milano-story-01",
    "slides": [
      "portfolio/milano-story-01",
      "portfolio/milano-story-02",
      "portfolio/milano-story-03",
      "portfolio/milano-story-04",
      "portfolio/milano-story-05"
    ],
    "style": "Travel · Portfolio concept",
    "origin": "concept"
  },
  {
    "id": "orbi-spaces",
    "category": "Architecture",
    "title": "Spaces That Feel Like Your Story",
    "client": "Orbi Structures",
    "description": "A new five-slide architecture carousel concept highlighting thoughtful design, comfortable living and the details behind great spaces.",
    "cover": "portfolio/orbi-story-01",
    "slides": [
      "portfolio/orbi-story-01",
      "portfolio/orbi-story-02",
      "portfolio/orbi-story-03",
      "portfolio/orbi-story-04",
      "portfolio/orbi-story-05"
    ],
    "style": "Architecture · Portfolio concept",
    "origin": "concept"
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
  {name:'Starter',price:'$499',subtitle:'For small brands getting started',features:['8 social media posts','2 reels','Custom graphics','Captions & hashtag research']},
  {name:'Growth',price:'$799',subtitle:'For brands ready to scale',popular:true,features:['12 social media posts','4 reels','2 carousels','Content strategy','Monthly performance report']},
  {name:'Premium',price:'$1,299',subtitle:'For established brands that want more',features:['20 social media posts','6 reels','4 carousels','Monthly strategy call','Detailed performance report']},
  {name:'Custom',price:'Let’s talk',subtitle:'Tailored around your goals',features:['Custom content volume','Photo and video shoots','Paid advertising support','Branding & creative direction','Dedicated team']},
];
export const addOns = [['Ad support','$199 / mo'],['Shoot day','$499 / shoot'],['Branding kit','$299 once'],['Reporting','$99 / mo']];
