// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'brunustavares', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'GitHub',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 15, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
            // 'brunustavares/wiser_Py',
            // 'brunustavares/wiser_Py/blob/main/wiseflow/Sentinel_F.md',
            // 'brunustavares/Sebenta',
            // 'brunustavares/DB_sync',
            // 'brunustavares/val_Py',
            // 'brunustavares/Absentia',
            // 'brunustavares/GesTurmas',
            // 'brunustavares/AIDA',
            // 'brunustavares/LLM_RAG',
            // 'brunustavares/prov_E2',
        ], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
    //   header: 'My Projects',
      header: 'GitHub',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'wiser.Py',
          description:
            'Python app for integrated data and indicators management related to the tests carried out in WISEflow and Moodle.',
          imageUrl:
            'https://raw.githubusercontent.com/brunustavares/wiser_Py/main/static/img/logo.jpg',
          link: 'https://github.com/brunustavares/wiser_Py',
        },
        {
          title: 'Sentinel_F',
          description:
            'PHP script designed to monitor student behavior within the WISEflow platform.',
          imageUrl:
            'https://raw.githubusercontent.com/brunustavares/wiser_Py/main/static/img/Sentinel_F.jpg',
          link: 'https://github.com/brunustavares/wiser_Py/blob/main/wiseflow/Sentinel_F.md',
        },
        {
          title: 'Sebenta',
          description:
            'Moodle block for grades synchronization with WISEflow (teachers’ function) and integrated grades and submission statements (students’ function).',
          imageUrl:
            'https://raw.githubusercontent.com/brunustavares/Sebenta/main/pix/logo.png',
          link: 'https://github.com/brunustavares/Sebenta',
        },
        {
          title: '_DBsync_',
          description:
            'PHP app for synchronization of registrations and grades, between Moodle and WISEflow databases (MySQL) and academic management system (Oracle).',
          imageUrl:
            'https://raw.githubusercontent.com/brunustavares/DB_sync/main/logo_DBsync_.png',
          link: 'https://github.com/brunustavares/DB_sync',
        },
        {
          title: 'val.Py',
          description:
            'Python bot, combined with a Moodle block, to support courses’ structure validation, using various approaches, between web scraping and direct access to the database.',
          imageUrl:
            'https://raw.githubusercontent.com/brunustavares/val_Py/main/pix/_d6566782-1609-49d4-ab85-789322da7399.jpg',
          link: 'https://github.com/brunustavares/val_Py',
        },
        {
          title: 'Absentia',
          description:
            'Moodle block to identify dropout-risk students and provide additional contact info, via web service connected to the academic management system.',
          imageUrl:
            'https://raw.githubusercontent.com/brunustavares/Absentia/main/img/absentia.png',
          link: 'https://github.com/brunustavares/Absentia',
        },
        {
          title: 'GesTurmas',
          description:
            'Moodle block for students’ distribution by the respective classes, registering them in the intermediate database (BDInt), compiling the information from the academic management system and Moodle.',
          imageUrl:
            'https://raw.githubusercontent.com/brunustavares/GesTurmas/main/moodle_block/gesturmas/pix/gesturmas_nome.png',
          link: 'https://github.com/brunustavares/GesTurmas',
        },
        {
          title: 'AIDA',
          description:
            'Moodle webservices for data loading',
          imageUrl:
            'https://raw.githubusercontent.com/brunustavares/AIDA/main/pix/logo.jpg',
          link: 'https://github.com/brunustavares/AIDA',
        },
        {
          title: 'LLM_RAG',
          description:
            'Moodle webservices for LLM data loading',
          imageUrl:
            'https://raw.githubusercontent.com/brunustavares/LLM_RAG/main/pix/logo.jpg',
          link: 'https://github.com/brunustavares/LLM_RAG',
        },
        {
          title: 'prov_E2',
          description:
            'Moodle block for electronic written exams management.',
          imageUrl:
            'https://raw.githubusercontent.com/brunustavares/prov_E2/main/pix/logo_prov_E2.png',
          link: 'https://github.com/brunustavares/prov_E2',
        },
      ],
    },
  },
  seo: { title: 'portfolio of Bruno Tavares', description: '', imageURL: '' },
  social: {
    linkedin: 'brunomastavares',
    facebook: 'brunustavares',
    instagram: '',
    // instagram: 'brunustavares',
    x: '',
    // x: 'the_spider_one',
    mastodon: '',
    researchGate: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    // youtube: 'brunust',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: 'brunustavares',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    // telegram: 'the_spider_one',
    website: '',
    phone: '',
    email: '',
    // email: 'brunustavares@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Python',
    'MySQL',
    'JavaScript',
    'CSS',
  ],
  experiences: [
    /** {
      company: 'Company Name',
      position: 'Position',
      from: 'September 2021',
      to: 'Present',
      companyLink: 'https://example.com',
    },
    {
      company: 'Company Name',
      position: 'Position',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: 'https://example.com',
    }, **/
  ],
  certifications: [
    /** {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    }, **/
  ],
  educations: [
    /** {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2015',
      to: '2019',
    },
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2012',
      to: '2014',
    }, **/
  ],
  publications: [
    /** {
      title: 'Publication Title',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    }, **/
  ],
  // Display articles from your medium or dev account. (Optional)
  /** blog: {
    source: 'dev', // medium | dev
    username: 'brunustavares', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },*/
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'dim',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a>`,

  enablePWA: true,
};

export default CONFIG;
