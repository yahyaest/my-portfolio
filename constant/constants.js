export const projects = [
  {
    id: 0,
    title: "COVID-19 Tracker",
    description:
      "First project using React and covid-19 api to fetch covid data. The App fetch covid-19 data for the chosen countries then visualize the result in Cards, Chart and Map.",
    image: "COVID-19_Tracker.png",
    tags: ["React"],
    source: {
      link: "https://github.com/yahyaest/COVID-19-Tracker",
      text: "Code",
    },
    visit: { link: "https://covid-19-tracker-44022.web.app/", text: "Visit" },
  },
  {
    id: 1,
    title: "Games API Finder",
    description:
      "Build using React as frontend and Firebase as database and igdb API for fetching video games data. As user you can login/register to the app, search for games and save your favourites video games.",
    image: "Games_API_Finder.png",
    tags: ["React", "Firebase"],
    source: {
      link: "https://github.com/yahyaest/ApiGameFinder",
      text: "Code",
    },
    visit: { link: "https://games-api-finder.web.app/", text: "Visit" },
  },
  {
    id: 2,
    title: "Bookstore App",
    description:
      "Build with two different approaches.The first using Django as Backend, React as frontend and MYSQL as database.And the second using the MERN stack (React, MongoDB, Express & Node) plus Redux as state manger. On top of that, the app contains user authentication using jwt tokens. As user you can create an account, search, filter and sort books. You can also add books to favourites and cart list. Every book info page contains a comment section to discuss and exchange opinions.",
    image: "Bookstore_App.png",
    tags: ["MongoDB", "React", "Node", "Redux"],
    tags2: ["MYSQL", "React", "Django", "Redux"],
    source: {
      link: "https://github.com/yahyaest/BookStore_App_MERN",
      text: "Code",
    },
    source2: {
      link: "https://github.com/yahyaest/BookStore_App",
      text: "Code Django",
    },
    visit: {
      link: "https://tranquil-shelf-91701.herokuapp.com/",
      text: "Visit",
    },
  },
  {
    id: 3,
    title: "Next Anime App",
    description:
      "Build using NextJS and MongoDB plus React Context as state manger and sass as css precompiler. On top of that, the app contains user authentication using jwt tokens. As user you can create an account,check latest animes news, find anime/manga and add them to your favourite list. Every anime/manga info page contains a comment section to discuss and exchange opinions. The app offer a chat room section and anime bots section where you can chat with AI anime charters.",
    image: "Next_Anime_App.png",
    tags: ["MongoDB", "NextJS", "Node"],
    source: {
      link: "https://github.com/yahyaest/nextjs-anime-app",
      text: "Code",
    },
    visit: {
      link: "https://nextjs-anime-app-aaaqify4h-yahyaest.vercel.app/",
      text: "Visit",
    },
  },
  {
    id: 4,
    title: "react/nextjs-admin-table",
    description:
      "These are 2 node packages used for providing an admin interface one for react and the other for nextjs. the admin interface come with configured CRUD operation plus the search, sort, sortBy and pagination features.",
    image: "react-admin-table.png",
    tags: ["React", "NextJS", "Node", "Redux"],
    source: {
      link: "https://github.com/yahyaest/NextJsAdminTable",
      text: "Next Code",
    },
    visit: {
      link: "https://github.com/yahyaest/ReactAdminTable",
      text: "React Code",
    },
  },
  {
    id: 5,
    title: "PC Shop App",
    description:
      "Build using React as frontend Django as backend and PostgreSQL as database. As user you can create an account and search for Pc components. You can also add them to favourites and cart list.",
    image: "PC_Shop_App.png",
    tags: ["React", "Django", "PostgreSQL"],
    source: {
      link: "https://github.com/yahyaest/PC_Shop_App",
      text: "Code",
    },
    visit: { link: "https://pc-shop-app.herokuapp.com/", text: "Visit" },
  },
  {
    id: 6,
    title: "PC Builder App",
    description:
      "Build using Vanilla JavaScript as frontend , Flask as database and and PostgreSQL as database. As user you can build your own PC station from differents Pc hardware components and make an order to buy.",
    image: "PC_Builder_App.png",
    tags: ["JavaScript", "Flask", "PostgreSQL"],
    source: {
      link: "https://github.com/yahyaest/PC_Builder_App",
      text: "Code",
    },
    visit: {
      link: "https://flask-pc-builder-app.herokuapp.com/",
      text: "Visit",
    },
  },
];

export const TimeLineList = [
  { date: "6/19", content: "C/C++" },
  { date: "1/20", content: "Python" },
  { date: "4/20", content: "js/HTML/css" },
  { date: "6/20", content: "Flask/SQLite" },
  { date: "7/20", content: "React" },
  { date: "9/20", content: "Django/MYSQL" },
  { date: "12/20", content: "Node/MongoDB" },
  { date: "4/21", content: "TypeScript/Docker" },
  { date: "7/21", content: "NextJS" },
];
