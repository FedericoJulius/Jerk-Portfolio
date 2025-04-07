import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact, FaCss3 } from "react-icons/fa";
import { FaLinkedin , FaGithub , FaFacebook , FaYoutube , FaInstagram  } from "react-icons/fa";
export const links = [
  { id: nanoid(), name: "Home", path: "#", text: "Home" },
  { id: nanoid(), name: "about", path: "#about", text: "About" },
  { id: nanoid(), name: "skills", path: "#skills", text: "Skills" },
  { id: nanoid(), name: "projects", path: "#projects", text: "Projects" },
];

export const skills = [
  {
    id: nanoid(),
    name: "HTML",
    icon: <FaHtml5 className="h-16 w-16 " />,
    text: "Highly skilled in HTML and CSS, adeptly creating semantic and accessible markup.",
  },
  {
    id: nanoid(),
    name: "JavaScript",
    icon: <FaJs className="h-16 w-16 " />,
    text: "Proficient in JavaScript, with a strong grasp of ES6+ features and modern development practices.",
  },
  {
    id: nanoid(),
    name: "React",
    icon: <FaReact className="h-16 w-16 " />,
    text: "Experienced in building dynamic and interactive user interfaces using React.",
  },
  {
    id: nanoid(),
    name: "CSS",
    icon: <FaCss3 className="h-16 w-16 " />,
    text: "Skilled in CSS, including Flexbox and Grid, with a focus on responsive design.",
  },
];
export const social = [
  { id: nanoid(), name: "LinkedIn", icon: <FaLinkedin className="h-8 w-8" /> },
  { id: nanoid(), name: "GitHub", icon: <FaGithub className="h-8 w-8" /> },
  { id: nanoid(), name: "Facebook", icon: <FaFacebook className="h-8 w-8" /> },
  { id: nanoid(), name: "YouTube", icon: <FaYoutube className="h-8 w-8" /> },
  { id: nanoid(), name: "Instagram", icon: <FaInstagram className="h-8 w-8" /> },
];