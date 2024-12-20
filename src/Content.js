// import images
import Hero_person from "./assets/images/Hero/person.png";

import javascript from "./assets/images/Skills/javascript.png";
import php from "./assets/images/Skills/php.png";
import dart from "./assets/images/Skills/dart.png";
import java from "./assets/images/Skills/java.png";
import csharp from "./assets/images/Skills/csharp.png";
import golang from "./assets/images/Skills/golang.png";
import sql from "./assets/images/Skills/mysql.png";
import reactjs from "./assets/images/Skills/react.png";
import laravel from "./assets/images/Skills/laravel.png";
import aspnet from "./assets/images/Skills/aspnet.png";
import flutter from "./assets/images/Skills/flutter.png";
import mongodb from "./assets/images/Skills/mongodb.png";
import github from "./assets/images/Skills/github.png";
import figma from "./assets/images/Skills/figma.png";
import nodejs from "./assets/images/Skills/node.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/RumahDamai/img1.png";
import project2 from "./assets/images/projects/RumahDamai/img2.png";
import project3 from "./assets/images/projects/RumahDamai/img3.png";
import project4 from "./assets/images/projects/RumahDamai/img4.png"; 
import project5 from "./assets/images/projects/RumahDamai/img5.png";

import project6 from "./assets/images/projects/Net/img1.png";
import project7 from "./assets/images/projects/Net/img2.png"; 
import project8 from "./assets/images/projects/Net/img3.png";
import project9 from "./assets/images/projects/Net/img4.png"; 
import project10 from "./assets/images/projects/Net/img5.png";

import project11 from "./assets/images/projects/Cis/img1.png";
import project12 from "./assets/images/projects/Cis/img2.png"; 
import project13 from "./assets/images/projects/Cis/img3.png";
import project14 from "./assets/images/projects/Cis/img4.png"; 
import project15 from "./assets/images/projects/Cis/img5.png";
import project16 from "./assets/images/projects/Cis/img6.png";

import project17 from "./assets/images/projects/BankSampah/img1.jpg";
import project18 from "./assets/images/projects/BankSampah/img2.jpg"; 
import project19 from "./assets/images/projects/BankSampah/img3.jpg";
import project20 from "./assets/images/projects/BankSampah/img4.jpg";

import project21 from "./assets/images/projects/Library/img1.png";
import project22 from "./assets/images/projects/Library/img2.png";
import project23 from "./assets/images/projects/Library/img3.png";
import project24 from "./assets/images/projects/Library/img4.png"; 


// import icons from react-icons
import { GrMail } from "react-icons/gr";
import {
  MdArrowForward,
  MdCall,
  MdDateRange,
  MdJavascript,
  MdPhp,
} from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Fullstack Development",
    firstName: "IMMANUEL",
    middleName: "PARTOGI",
    LastName: "PARDEDE    ",
    image: Hero_person,
    hero_content: [
      {
        count: "6+",
        text: "Programming Languages Proficient In: JavaScript, PHP, Dart, Java, C#, and Golang",
      },
      {
        count: "4+",
        text: "Technologies and Frameworks Familiar With: React JS, Laravel, ASP.NET, Flutter",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "FOCUS AREAS",
    skills_content: [
      {
        name: "JavaScript",
        para: "Proficient in crafting dynamic web applications.",
        description:
          "Expert in JavaScript frameworks like React. Skilled in asynchronous programming and clean code practices. Committed to enhancing user experiences.",
        logo: javascript,
      },
      {
        name: "PHP",
        para: "Skilled in developing high-performance web solutions.",
        description:
          "Experienced with Laravel for rapid development. Proficient in secure backend code and API integration. Focused on testing and debugging. Dedicated to robust application delivery.",
        logo: php,
      },
      {
        name: "Dart",
        para: "Experienced in building cross-platform mobile apps.",
        description:
          "Proficient in Flutter for smooth app development. Knowledgeable in state management and responsive design. Committed to high-quality testing. Focused on user-friendly interfaces.",
        logo: dart,
      },
      {
        name: "Java",
        para: "Knowledgeable in enterprise-level application development.",
        description:
          "Experienced in application development with Java. Proficient in multithreading and using NetBeans for efficient development and debugging. Committed to writing reliable unit tests.",
        logo: java,
      },      
      {
        name: "C#",
        para: "Familiar with building robust applications with .NET.",
        description:
          "Experienced with ASP.NET for web services. Knowledgeable in Entity Framework for databases. Skilled in design patterns. Focused on continuous learning.",
        logo: csharp,
      },
      {
        name: "Golang",
        para: "Skilled in developing scalable applications.",
        description:
          "Proficient in building high-performance web servers. Strong understanding of concurrent programming. Experienced in designing RESTful APIs. Committed to optimizing speed and resources.",
        logo: golang,
      },
      {
        name: "React JS",
        para: "Experienced in creating responsive user interfaces.",
        description:
          "Skilled in dynamic UI development with React. Proficient in state management and performance optimization. Focused on accessibility and responsiveness. Committed to clean code practices.",
        logo: reactjs,
      },
      {
        name: "Laravel",
        para: "Familiar with modern web applications using PHP.",
        description:
          "Skilled in Laravel for rapid application development. Experienced in RESTful APIs and MVC architecture. Proficient in testing tools. Committed to security best practices.",
        logo: laravel,
      },
      {
        name: "ASP.NET",
        para: "Experienced in building secure web applications.",
        description:
          "Proficient in ASP.NET for robust web development. Skilled in implementing security features. Familiar with Razor pages and MVC. Focused on performance optimization.",
        logo: aspnet,
      },
      {
        name: "Flutter",
        para: "Proficient in developing high-performance mobile applications.",
        description:
          "Skilled in cross-platform development with Flutter. Experienced in creating responsive UIs. Familiar with state management techniques. Committed to mobile development best practices.",
        logo: flutter,
      },
      {
        name: "MySQL/SQL",
        para: "Adept at optimizing databases for efficiency.",
        description:
          "Experienced in database management and writing complex SQL queries. Skilled in database design and ensuring data integrity. Familiar with performance tuning and optimization techniques. Committed to data security best practices.",
        logo: sql,
      },
      {
        name: "MongoDB",
        para: "Proficient in using MongoDB for scalable applications.",
        description:
          "Experienced in NoSQL database management and design. Familiar with performance optimization techniques. Committed to maintaining data integrity.",
        logo: mongodb,
      },      
      {
        name: "GitHub",
        para: "Experienced in version control and collaboration.",
        description:
          "Proficient in managing repositories and branching strategies. Skilled in code reviews and feedback. Familiar with Git workflows. Committed to continuous integration practices.",
        logo: github,
      },
      {
        name: "Figma",
        para: "Skilled in creating intuitive designs for web applications.",
        description:
          "Experienced in user interface design with Figma. Proficient in collaboration features for team projects. Familiar with design systems for consistency. Committed to user-centered design.",
        logo: figma,
      },
      {
        name: "Node.js",
        para: "Proficient in building scalable server-side applications.",
        description:
          "Skilled in using Node.js within Laravel for developing efficient backend services. Committed to security best practices in Laravel applications.",
        logo: nodejs,
      }      
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I CAN PROVIDE",
    service_content: [
      {
        title: "Fullstack Development",
        para: "Providing end-to-end development from frontend to backend. Expertise in languages like JavaScript, PHP, and C#, along with frameworks such as React JS, Node.js, and Laravel, to build efficient and secure applications.",
        logo: services_logo1,
      },
      {
        title: "UI/UX Design",
        para: "Designing intuitive, user-friendly interfaces that blend aesthetic appeal with functionality, ensuring a seamless experience for both web and mobile applications.",
        logo: services_logo2,
      },
      {
        title: "Web Development",
        para: "Creating dynamic, responsive web applications focused on delivering optimal user experiences. Skilled in multiple programming languages to build scalable and high-performance solutions.",
        logo: services_logo1,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "DIVERSE PROJECT SHOWCASE",
    project_content: [
      {
        title: "Administrative Information System for the Rumah Damai Children's Education Foundation",
        image: project1,
        images: [project1, project2, project3, project4, project5],
        description: "The Rumah Damai Children's Education Foundation (YPA Rumah Damai) serves children with and without disabilities. Together with my team, I developed a comprehensive administrative information system to facilitate the management of children's data at this foundation. I contributed to both frontend and backend aspects, ensuring a seamless and efficient user experience. Technologies Used: HTML, CSS, JavaScript, PHP, MySQL",
      },
      {
        title: "Distributed Database Management System Using .NET Technology",
        image: project6,
        images: [project6, project7, project8, project9, project10],
        description: "For this project, I independently developed a comprehensive distributed database management system for a clothing store using ASP.NET with a microservices architecture. The system is designed to improve the store's operational efficiency by managing inventory, sales, and customer data in an integrated platform. Technologies Used: ASP.NET, HTML, CSS, JavaScript, C#",
      },
      {
        title: "Mobile Application for Campus Information System Management",
        image: project11,
        images: [project11, project12, project13, project14, project15, project16],
        description: "In this team project, we developed a mobile application for the Campus Information System (CIS) to enhance accessibility and usability for users. I was actively involved in both frontend and backend development, contributing to a user-friendly interface and integrating key functionalities for effective interaction with the CIS platform. Technologies Used: Flutter, Dart, MySQL, PHP, JavaScript, CSS",
      },
      {
        title: "Web-based Application for Waste Depositing at Sampah Tarhilala Bank",
        image: project17,
        images: [project17, project18, project19, project20],
        description: "For this project, my team and I created a Web-based Waste Deposit Application for Tarhilala Waste Bank, facilitating waste data processing and securely storing information on waste types and activities. I contributed significantly to both frontend and backend aspects, ensuring the application was functional, easy to manage, and secure. Technologies Used: HTML, CSS, JavaScript, PHP, MySQL",
      },
      {
        title: "Desktop-based Library Management System built using Java programming and utilizing OOP",
        image: project21,
        images: [project21, project22, project23, project24],
        description: "This desktop Library Management System was developed as a solo project, applying Java and Object-Oriented Programming principles to create a reliable tool for managing library resources. The system includes modules for book tracking, loan management, and detailed reporting, offering a user-friendly interface that improves library operations. Technologies Used: Java, JavaFX, MySQL, CSS",
      },
    ],
  },
  Contact: {
    title: "Contact Me",
    subtitle: "REACH OUT",
    social_media: [
      {
        text: "immanuelp31@gmail.com",
        icon: GrMail,
        link: "mailto:immanuelp31@gmail.com",
      },
      {
        text: "081263206428",
        icon: MdCall,
        link: "https://wa.me/081263206428",
      },
      {
        text: "immanuelpartogi",
        icon: BsInstagram,
        link: "https://www.instagram.com/immanuel_partogi/",
      },
    ],
  },
  Footer: {
    text: "All ©2024",
  },
};
