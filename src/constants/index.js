export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const myProjects = [
    {
      title: 'Grub Finder - Food Delivery Platform',
      desc: 'Grub Finder is a MERN-stack web application that incorporates Tinder-like swipe functionality. It helps users discover new eateries around them. Includes features for both user and vendor with authentication. Vendors can add their eateries and users can browse and swipe through them.',
      subdesc:
        'Built in a team of 3 using MongoDB, Express.js, React.js and Node.js and deployed through Heroku.',
      href: 'https://github.com/JBWHH/Grub-Finder',
      texture: '/textures/project/project1.mp4',
      logo: '/assets/project-logo-GH.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'MongoDB',
          path: 'assets/mongodb.png',
        },
        {
          id: 2,
          name: 'Express.js',
          path: '/assets/javascript.png',
        },
        {
          id: 3,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 4,
          name: 'Node.js',
          path: '/assets/nodejs.png',
        },
      ],
    },
    {
      title: 'GA Marketplace',
      desc: 'GA Marketplace is an app that allows users to buy & sell clothing online. Users can create a profile to buy or list items for sale. When listing items, users can specify the size, price, and description. \"Add to cart\" and \"checkout\" functionality is also available for users.',
      subdesc:
        'Built in a team of 4 using Javascript, Node.js, Express.js and MongoDB for full-CRUD data operations; while also incorporating Google OAuth for authentication.',
      href: 'https://github.com/JBWHH/ga-marketplace',
      texture: '/textures/project/project2.mp4',
      logo: '/assets/project-logo-GAM.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'Javascript',
          path: '/assets/javascript.png',
        },
        {
          id: 2,
          name: 'Node.js',
          path: 'assets/nodejs.png',
        },
        {
          id: 3,
          name: 'MongoDB',
          path: '/assets/mongodb.png',
        },
        {
          id: 4,
          name: 'Google Oath',
          path: '/assets/google.png',
        },
      ],
    },
    {
      title: 'Concentration Game',
      desc: 'A browser-based game of concentration or in this case, card matching using colors. There are 16 colors, 8 pairs total and the objective is to match them all by flipping two cards at a time.',
      subdesc:
        'This is my first project I built using just Javascript, CSS and HTML. HTML to create the cards and gameboard, CSS for styling and Javascript for the game logic. Also included a reset and play button functionality.',
      href: 'https://github.com/JBWHH/cardMatchGame?tab=readme-ov-file',
      texture: '/textures/project/project3.mp4',
      logo: '/assets/project-logo-CG.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(140, 217, 102, 0.5)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'Javascript',
          path: '/assets/javascript.png',
        },
        {
          id: 2,
          name: 'CSS',
          path: 'assets/css.png',
        },
        {
          id: 3,
          name: 'HTML',
          path: '/assets/html.png',
        },
      ],
    },
    // {
    //   title: 'Horizon - Online Banking Platform',
    //   desc: 'Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.',
    //   subdesc:
    //     'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
    //   href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
    //   texture: '/textures/project/project4.mp4',
    //   logo: '/assets/project-logo4.png',
    //   logoStyle: {
    //     backgroundColor: '#0E1F38',
    //     border: '0.2px solid #0E2D58',
    //     boxShadow: '0px 0px 60px 0px #2F67B64D',
    //   },
    //   spotlight: '/assets/spotlight4.png',
    //   tags: [
    //     {
    //       id: 1,
    //       name: 'React.js',
    //       path: '/assets/react.svg',
    //     },
    //     {
    //       id: 2,
    //       name: 'TailwindCSS',
    //       path: 'assets/tailwindcss.png',
    //     },
    //     {
    //       id: 3,
    //       name: 'TypeScript',
    //       path: '/assets/typescript.png',
    //     },
    //     {
    //       id: 4,
    //       name: 'Framer Motion',
    //       path: '/assets/framer.png',
    //     },
    //   ],
    // },
    // {
    //   title: 'Imaginify - AI Photo Manipulation App',
    //   desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
    //   subdesc:
    //     'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
    //   href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
    //   texture: '/textures/project/project5.mp4',
    //   logo: '/assets/project-logo5.png',
    //   logoStyle: {
    //     backgroundColor: '#1C1A43',
    //     border: '0.2px solid #252262',
    //     boxShadow: '0px 0px 60px 0px #635BFF4D',
    //   },
    //   spotlight: '/assets/spotlight5.png',
    //   tags: [
    //     {
    //       id: 1,
    //       name: 'React.js',
    //       path: '/assets/react.svg',
    //     },
    //     {
    //       id: 2,
    //       name: 'TailwindCSS',
    //       path: 'assets/tailwindcss.png',
    //     },
    //     {
    //       id: 3,
    //       name: 'TypeScript',
    //       path: '/assets/typescript.png',
    //     },
    //     {
    //       id: 4,
    //       name: 'Framer Motion',
    //       path: '/assets/framer.png',
    //     },
    //   ],
    // },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet, isDesktop) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : isTablet ? 0.065 : isDesktop ? 0.08 : 0.1,
      deskPosition: isMobile ? [0.5, -4.5, 0] : isTablet ? [0.25, -5.5, 0]: isDesktop ? [0, -6.5, 0] : [0, -7.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : isDesktop ? [7, -5.5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : isDesktop ? [8, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : isDesktop ? [-18, 12, 0] :[-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : isDesktop ? [-13, -9, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'GABBF Motors Inc',
      pos: 'Business Operations Lead',
      duration: 'January 2016 - Present',
      title: "Oversaw logistics and inventory, ensuring smooth coordination of vehicle and parts pick-up/drop-off, and kept everything organized using Excel and auction databases. Analyzed market data to assess damage and price over 20 vehicles daily, while also leading the dismantling of over 100 vehicles annually.",
      icon: '/assets/framer.svg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Black Star Auto',
      pos: 'Automotive Salesperson',
      duration: 'March 2017 - Present',
      title: "Utilized auction software to purchase vehicles, assess and select vehicles that met client preferences and budget constraints. Capable of making efficient, swift and data-driven decisions in a fast-paced environment.",
      icon: '/assets/figma.svg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Coca-Cola',
      pos: 'Merchandiser',
      duration: 'January 2017 - May 2017',
      title: "Implemented merchandising initiatives to enhance product visibility and achieve organizational objectives. Planned daily activities across multiple locations. Utilized Salesforce for CRM operations and sales management tasks",
      icon: '/assets/notion.svg',
      animation: 'salute',
    },
  ];