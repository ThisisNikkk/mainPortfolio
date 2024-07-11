import { link } from "fs";

export const navItems = [
  { name: "Home", link: "#home"},
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
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
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
    des: "Your ultimate solution for seamless college fee payments and hassle-free financial management.",
    img: "/StudentWallet.png",
    iconLists: ["/html.svg", "/css.svg", "/boot.svg", "/js.svg", "/fire.svg"],
    link: "https://thisisnikkk.github.io/StudentWallet/",
  },
  {
    id: 2,
    title: "CityFood - Food Restaurant App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/cityFood.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/fire.svg",],
    link: "https://github.com/ThisisNikkk/CityFood/",
  },
  {
    id: 3,
    title: "TravIO - Travel Application",
    des: "We help you on an adventure around the world in just one app",
    img: "/travio.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://travio-app.netlify.app/",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Nikhil was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Nikhil's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Nikhil is the ideal partner.",
    name: "Anjali Piuaty",
    title: "Director & CEO of OctaNet Services Pvt Ltd.",
  },
  {
    quote:
       "Collaborating with Nikhil was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Nikhil's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Nikhil is the ideal partner.",
    name: "Anjali Piuaty",
    title: "Director & CEO of OctaNet Services Pvt Ltd.",
  },
  {
    quote:
       "Collaborating with Nikhil was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Nikhil's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Nikhil is the ideal partner.",
    name: "Anjali Piuaty",
    title: "Director & CEO of OctaNet Services Pvt Ltd.",
  },
  {
    quote:
      "Collaborating with Nikhil was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Nikhil's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Nikhil is the ideal partner.",
    name: "Anjali Piuaty",
    title: "Director & CEO of OctaNet Services Pvt Ltd.",
  },
  {
    quote:
      "Collaborating with Nikhil was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Nikhil's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Nikhil is the ideal partner.",
    name: "Anjali Piuaty",
    title: "Director & CEO of OctaNet Services Pvt Ltd.",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Web Developer Intern",
    desc: "Designed and optimized cross-platform user interfaces and client-side applications with and React which increases the user retention by 10% .",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Summer Intern",
    desc: "Training based internship where I developed and maintained User Interface with modern technologies.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Project",
    desc: "Created a School Website using React and Firebase, developing front-end components and implementing code refactoring increases the efficiency by 20% .",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies for college project.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/ThisisNikkk",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://www.instagram.com/_thisisnikkk_",
  },
  {
    id: 3,
    img: "/link.svg",
    link:"https://www.linkedin.com/in/nikhilsiwan/",
  },
];
