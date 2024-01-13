import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  CardApp,
  TodoApp,
  WeGo,
  AngularJS,
  ReactN,
  java,
  python
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name:'AngularJS',
    icon: AngularJS,
  },
  {
    name:'React Native',
    icon: ReactN
  },
  {
    name:'JAVA',
    icon: java
  },
  {
    name: 'PYTHON',
    icon: python
  }
];

const experiences = [
  {
    title: 'Front-End Developer Jr',
    company_name: 'WeGo',
    icon: WeGo,
    iconBg: '#333333',
    date: 'Aug 2020 - Oct 2020',
  }
];

const projects = [
  {
    id: 'project-1',
    name: 'To-do app',
    description: 'The classic todo app! This app includes a dark/light theme toggle and drag and drop reordering.',
    image: TodoApp,
    repo: 'https://github.com/sebascs04/Frontmentor-todo',
    demo: 'https://sebascs04.github.io/Frontmentor-todo/',
  },
  {
    id: 'project-2',
    name: 'Interactive card form',
    description: 'This project was a great way to practice DOM manipulation and form validation while also time, put my JS, HTML and CSS Responsive skills to the test.',
    image: CardApp,
    repo: 'https://github.com/sebascs04/Frontmentor07',
    demo: 'https://sebascs04.github.io/Frontmentor07/',
  }
];

export { services, technologies, experiences, projects };
