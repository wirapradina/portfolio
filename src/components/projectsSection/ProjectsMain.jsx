import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Marketplace",
    year: "Jul2024",
    align: "right",
    image: "/images/website-img-1.jpg",
    link: "https://github.com/wirapradina/DB-marketplace.git",
    demoLink: "https://github.com/wirapradina/DB-marketplace.git",
  },
  {
    name: "Movie App",
    year: "Dec2024",
    align: "left",
    image: "/images/website-img-2.jpg",
    link: "https://github.com/wirapradina/Assignment6-movie-app.git",
    demoLink: "https://movie-app-mu-lac.vercel.app/",
  },
  {
    name: "Shop-finity",
    year: "Dec2024",
    align: "right",
    image: "/images/website-img-3.jpg",
    link: "https://github.com/wirapradina/CapstoneProject_Shop-Finity.git/",
    demoLink: "https://shop-finity.vercel.app",
  },
  {
    name: "Sewa Motor",
    year: "Jan2025",
    align: "left",
    image: "/images/website-img-4.jpg",
    link: "https://github.com/wirapradina/sewa-motor",
    demoLink: "https://sewamotormu.web.id/",
  },
  {
    name: "Arsip Digital",
    year: "July2025",
    align: "right",
    image: "/images/website-img-5.png",
    link: "https://github.com/sistem-arsip/project-main",
    demoLink: "https://arsip.ppwalisongo.id/",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
              demoLink={project.demoLink}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
