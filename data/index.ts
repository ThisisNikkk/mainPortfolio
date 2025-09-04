import { link } from "fs";

export const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title:
      "Creative designer crafting digital experiences through compelling visuals and intuitive interfaces.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently designing Graphics and llustrations for Delhi Dreamin.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b4.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "StudenWallet - Fee Payment App",
    des: "Designed an intuitive fee payment interface and financial dashboard using Figma and Adobe XD.",
    img: "/StudentWallet.png",
    iconLists: ["/html.svg", "/css.svg", "/boot.svg", "/js.svg", "/fire.svg"],
    link: "https://studentwallet.netlify.app/",
  },
  {
    id: 2,
    title: "Chef's Kitchen - Cooking Learning Platform",
    des: "Designed Chef's Kitchen website interface with intuitive recipe layouts and visual cooking guides.",
    img: "/chef.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/fire.svg"],
    link: "https://chefkithcen.netlify.app/",
  },
  {
    id: 3,
    title: "E-learning - Online Learning Platform",
    des: "Designed E-learning platform interface with intuitive course navigation and interactive learning modules.",
    img: "/e-learn.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/fire.svg"],
    link: "https://e-leaning-app.netlify.app/",
  },
  {
    id: 4,
    title: "PrepAI - AI-powered Mock Interview Platform",
    des: "AI-powered interview platform offering realistic simulations, personalized feedback for career success.",
    img: "/prep.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/fire.svg"],
    link: "https://creato-ui.netlify.app/",
  },
];

export const testimonials = [
  {
    quote: "Narender transformed our brand identity completely! His creative vision and attention to detail helped us stand out in a crowded market. Working with him was seamless - he understood our needs instantly and delivered beyond expectations. Highly recommended!",
    name: "Raj Patel, ",
    title: "E-commerce Business Owner",
  },
  {
    quote:
      "Narender has been instrumental in creating our visual identity. His graphics and illustrations perfectly capture our community's energy and spirit. His designs have significantly boosted our event engagement and brand recognition across Delhi's tech scene.",
    name: "Himanshu Pandey",
    title: "Delhi Dreamin Community",
  },
  {
    quote:
      "Working with Narender was a game-changer for our marketing campaigns. His creative graphics increased our social media engagement by 60%. He's reliable, talented, and brings fresh perspectives to every project.",
    name: "Priya Sharma",
    title: "Marketing Director",
  },
  {
    quote:
      "Narender designed our complete branding - from logo to menu layouts. His work brought more customers through our doors! He's professional, understands local market needs, and delivers quality work within budget.",
    name: "Vinod Kumar",
    title: "Local Restaurant Owner",
  },
];

export const companies = [
  {
    id: 1,
    name: "PhotoShop",
    img: "/photoshop.svg",
  },
  {
    id: 2,
    name: "Figma",
    img: "/figma.svg",
  },
  {
    id: 3,
    name: "Canva",
    img: "/canva.svg",
  },
  {
    id: 4,
    name: "LightRoom",
    img: "/lightroom.svg",
  },
  {
    id: 5,
    name: "MidJourney.",
    img: "/mid.svg",
  },
  {
    id: 6,
    name: "DALL-E.",
    img: "/dalle.svg",
  },
  {
    id: 7,
    name: "Gemini AI.",
    img: "/gemi.svg",
  },
  {
    id: 8,
    name: "DaVinci Resolve.",
    img: "/davinci.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Freelance Designer",
    desc: "Started freelancing career creating hundreds of user interfaces and graphics for diverse clients, building expertise across digital design and brand identity.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 2,
    title: "Graphic Designer",
    desc: "Currently creating graphics and illustrations for Salesforce Delhi Dreamin Community, designing event branding and visual assets that enhance community engagement and event experience.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Narenderkdev",
  },
  {
    id: 2,
    img: "/insta.svg",
    link: "https://www.instagram.com/nrndrxs/",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/narender-kumar-b06342266/",
  },
];
