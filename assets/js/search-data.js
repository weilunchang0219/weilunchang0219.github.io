// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about-me",
    title: "About me",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A growing collection of my cool projects/designs.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "A comprehensive overview of my professional experience, education, and skills.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/plotly/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-have-updated-my-profile",
          title: 'I have updated my profile',
          description: "",
          section: "News",},{id: "news-purpose-of-this-webpage",
          title: 'Purpose of this webpage',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "projects-example",
          title: 'EXAMPLE',
          description: "example page",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-self-made-xl4015-buck-converter-array-pcb",
          title: 'Self-made XL4015 Buck Converter Array PCB',
          description: "A customized power converter board for robots, featuring multi-output capability and emergency stop logic.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_competition_buck_converter/";
            },},{id: "projects-stm32-f446re-robot-mission-control-board",
          title: 'STM32 F446RE Robot Mission Control Board',
          description: "A compact, highly-integrated STM32F446RE-based controller for multi-servo, sensor, and MOSFET control, designed for robot applications.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_competition_mission_pcb/";
            },},{id: "projects-robot-chassis-control-board",
          title: 'Robot Chassis Control Board',
          description: "為Eurobot比賽設計的整合式底盤控制系統",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_competition_chassis_pcb/";
            },},{id: "projects-esp32-s3-小型機器人控制板",
          title: 'ESP32-S3 小型機器人控制板',
          description: "基於ESP32-S3-WROOM-1U-N16R8所設計的高度整合控制板，集成步進馬達驅動、多種感測器接口和電源管理，專為Eurobot競賽設計。",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_competition_esp32_robot_controller_board/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%71%31%32%34%34%39%38%39%33%35@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-facebook',
        title: 'Facebook',
        section: 'Socials',
        handler: () => {
          window.open("https://facebook.com/allenchang0219", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/weilunchang0219", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/wei-lun-chang-92b073140", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
