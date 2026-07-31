export const profile = {
  name: 'Murtaza Fatakdawala',
  tagline: 'Software Engineer · AI/ML · MSc Queen Mary',
  bio: "MSc Computer Science (Merit) from Queen Mary University of London, currently building and evaluating AI systems as a Software Engineer contractor at Mercor and CoSwipe. Background spans computer vision, mobile, and full-stack, with a soft spot for turning ML models into things people can actually touch.",
  email: 'murtazafatakdawala6@gmail.com',
  phone: '+44 7774 716131',
  phoneHref: 'tel:+447774716131',
  github: 'https://github.com/Murtaza11092',
  githubHandle: 'Murtaza11092',
  linkedin: 'https://www.linkedin.com/in/murtaza-fatakdawala-a006651ab/',
  linkedinHandle: 'murtaza-fatakdawala',
  resumeHref: '/Murtaza_Fatakdawala_resume.pdf',
}

export const stats = [
  { value: 97, suffix: '%', label: 'Face-Mask Detector accuracy', progress: 0.97 },
  { value: 19000, suffix: '', label: 'Faces trained for Moodsic CNN', progress: 0.85 },
  { value: 1000, suffix: '+', label: 'Monthly users on CoSwipe', progress: 0.72 },
]

export const skills = {
  Languages: ['Java', 'Python', 'C/C++', 'C#', 'JavaScript', 'SQL', 'Arduino', 'DART'],
  Technologies: ['React', 'React Native', 'Node.js', 'MongoDB', 'Flask', 'TensorFlow', 'OpenCV', 'Keras', 'SciKit-learn'],
}

export const techColors = {
  Java: '#f89820',
  Python: '#3776ab',
  'C/C++': '#00599c',
  'C#': '#68217a',
  JavaScript: '#f7df1e',
  SQL: '#00758f',
  Arduino: '#00979d',
  DART: '#0175c2',
  React: '#61dafb',
  'React Native': '#61dafb',
  'Node.js': '#8cc84b',
  MongoDB: '#4db33d',
  Flask: '#9a9a9a',
  TensorFlow: '#ff6f00',
  OpenCV: '#5c3ee8',
  Keras: '#d00000',
  'SciKit-learn': '#f7931e',
}

export const experience = [
  {
    company: 'Mercor',
    role: 'Software Engineer Contractor',
    dates: 'Feb 2025 – Current',
    current: true,
    bullets: [
      'Developed and implemented guidelines to evaluate the functionality, accuracy, and efficiency of AI-generated code.',
      'Helped improve AI model performance by identifying edge cases and giving organized feedback.',
      'Worked with different teams to refine evaluation metrics and support ongoing model development.',
    ],
  },
  {
    company: 'CoSwipe',
    role: 'Software Engineer Contractor',
    dates: 'Dec 2024 – Dec 2025',
    bullets: [
      'Helping launch CoSwipe, a mobile app enabling group purchase splitting at the point of sale via virtual cards.',
      'Assist in the design & creation of the CoSwipe website using JavaScript & React that serves 1,000+ monthly users.',
      'Developed the API endpoints to allow users to select multiple transactions and split all purchases at once.',
    ],
  },
  {
    company: 'Krystal',
    role: 'Administrative Head',
    dates: 'Sept 2021 – Oct 2023',
    bullets: [
      'Managed end-to-end administrative operations for a 25-employee startup, ensuring smooth daily business functions and efficient office management.',
      'Maintained employee records, coordinated staff schedules, supported onboarding, and handled confidential documentation with accuracy.',
      'Assisted recruitment processes, internal communications, and cross-department coordination while fostering a positive workplace culture.',
    ],
  },
  {
    company: 'FTS Group',
    role: 'Operations and Marketing Intern',
    dates: 'Oct 2021 – Nov 2021',
    bullets: [
      'Explored marketing strategies and client relations, strengthening expertise in web solution development by leading a team of seven in building a website for a startup.',
      'Conducted market research for an agro-based startup, ensured seamless communication between the client and the team, managed end-to-end recruitment process for the project.',
    ],
  },
]

export const projects = [
  {
    name: 'Elderly Care App',
    stack: ['DART', 'SQLite', 'Java', 'Heroku', 'TomTom API', 'OpenCage'],
    bullets: [
      'Developed a mobile app using DART & Flutter to help 20 elderly people in care homes and ensure their safety.',
      'Implemented fall detection & added location tracking achieved using OpenCage & TomTom API.',
    ],
  },
  {
    name: 'WINGMAN: Gesture Controlled Drone',
    stack: ['Python', 'Keras', 'Flask', 'Arduino'],
    bullets: [
      'Built a fully functional drone controlled via hand gestures using a custom ML model and Arduino ESP-12S.',
      'Developed a HGR model using Python and Keras, trained on a Kaggle dataset to recognize gestures.',
    ],
  },
  {
    name: 'Face Mask Detector',
    stack: ['Python', 'TensorFlow', 'OpenCV', 'Machine Learning'],
    bullets: [
      'Developed a real-time face mask detector using OpenCV and neural network methods, achieving 97% accuracy.',
      'Built a CNN with MobileNet V2 as base, integrated 2 FC layers, and trained on an open dataset.',
    ],
  },
  {
    name: 'Moodsic',
    stack: ['Python', 'Keras', 'Flask', 'OpenCV', 'TensorFlow'],
    bullets: [
      'Detects user mood from facial expressions to recommend music. Built a CNN trained on 19,000 faces across 12 mood categories, achieving 95% accuracy.',
      "Integrated with Spotify's API for custom music recommendations and in-app playback.",
    ],
  },
  {
    name: 'Banking System',
    stack: ['React', 'Node.js', 'MySQL'],
    bullets: [
      'Full-stack banking operations system with a React frontend, Node.js backend, and MySQL for efficient data management.',
      'Features: user authentication, account overview, loan applications, transactions, and profile management.',
    ],
  },
]

export const offTheClock = [
  'Cars',
  'F1',
  'Coffee',
  'Coding side quests',
  'New tech',
]

export const education = [
  {
    school: 'Queen Mary University of London',
    degree: 'MSc Computer Science',
    detail: 'Grade: Merit',
    date: 'September 2024',
  },
  {
    school: 'Smt. Indira Gandhi College of Engineering',
    degree: 'BS Computer Science',
    detail: 'GPA: 9.0',
    date: 'May 2023',
    coursework: 'Algorithms, Data Structures, Data Science, Operating Systems, Machine Learning',
  },
]
