
import { Profiler } from "react";
import {
    netflix,
    amazon,
    adobe,
    microsoft,
    sales,
    disney,
    clearYourMind1,
    clearYourMind2,
    clearYourMind3,
    features,
    templates,
    prodQuiz,
    extensions,
    inspiration,
    
  } from "../../src/assets/index";
export const partnersList = [
    {
      name: "microsoft",
      path: microsoft,
    },
    {
      name: "disney",
      path: disney,
    },
    {
      name: "amazon",
      path: amazon,
    },
    {
      name: "netflix",
      path: netflix,
    },
    {
      name: "sales",
      path: sales,
    },
    {
      name: "adobe",
      path: adobe,
    },
  ];

  export const clearYourMind=[
    {
        title:'Clear your mind',
        img:clearYourMind1,
        header:'The fastest way to get tasks out of your head.',
        paragraph:'Type just about anything into the task field and Todoist’s one-of-its-kind natural language recognition will instantly fill your to-do list.'
    },
    {
        title:'Focus on what’s important',
        img:clearYourMind2,
        header:'Reach that mental clarity you’ve been longing for.',
        paragraph:'Your tasks are automatically sorted into Today, Upcoming, and custom Filter views to help you prioritize your most important work. '
    },{
        title:'Get it all done',
        img:clearYourMind3,
        header:'Where work and personal tasks can finally coexist.',
        paragraph:'Tons of tasks, just one app. With workspaces, your personal, work, and team tasks can all live harmoniously under the same roof. (Sigh of relief). '
    }
  ]

  export const OffersList=[
    {
    offer:'Features',
    img:features,
    amount:'1 million+',
    for:'pro users'
  },
    {
    offer:'Template gallery',
    img:templates,
    amount:'160 countries',
    for:'worldwide'
  },
    {
    offer:'Product quiz',
    img:prodQuiz,
    amount:'2 billion+',
    for:'tasks compeleted'
  },
    {
    offer:'Extension gallery',
    img:extensions,
    amount:'2 billion+',
    for:'tasks compeleted'
  },
    {
    offer:'inspiration Hub',
    img:inspiration,
    amount:'2 billion+',
    for:'tasks compeleted'
  },

]

export const footerLinks=[
  {
    category:'Features',
    subCategories:
    ['How is Workds',
    'For Teams',
    'Pricing',
    'Templates'
  ]
  },
  {
    category:'Resources',
    subCategories:
    ['Download Apps',
    'help Center',
    'Producivity Method',
    'Intergrations',
    'Channel Partners',
    'Developer Api',
    'Status'
  ]
  },
  {
    category:'Company',
    subCategories:
    ['About US',
    'Careers',
    'Inspiration Hub',
    'Press',
    'Twist',
  ]
  },
]