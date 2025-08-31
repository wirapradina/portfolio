import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "React Front-End Developer",
    jobLink: "https://drive.google.com/file/d/1M5DU-pNa5SzAbiyIZDJeeozAna7ZxF8d/view",
    company: "Shop-finity",
    companyLink: "https://shop-finity.vercel.app/",
    date: "MSIB-7 (2024)",
    responsibilities: [
      "Developed an E-Commerce Customer Side application.",
      "Utilized Redux for state management in storing product data.",
      "Integrated Fake Store API to retrieve product information.",
    ],
  },
  {
    job: "Independent Internship",
    jobLink: "https://drive.google.com/file/d/1FOV6TrQdYD2eP721qWg2059qkM5DVfRe/view?usp=sharing",
    company: "Sistem Arsip Digital",
    companyLink: "https://arsip.ppwalisongo.id/",
    date: "2025",
    responsibilities: [
      "Designed user interface prototypes for the application.",
      "Developed the admin user interface into the front-end.",
      "Developed  the staff user interface into the front-end.",
    ],
  },
  {
    job: "Practicum Assistant",
    jobLink: "https://drive.google.com/drive/folders/1sGUJ-qBzKvCgcSeYBcYE27DZjl9fOmtz?usp=sharing",
    company: "Information Systems Study Program",
    companyLink: "https://drive.google.com/drive/folders/1sGUJ-qBzKvCgcSeYBcYE27DZjl9fOmtz?usp=sharing",
    date: "2024-2025",
    responsibilities: [
      "Assisted in delivering and explaining practical course materials.",
      "Guided students during lab sessions to complete exercises and projects.",
      "Assisted in problem-solving during practice sessions.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => (
        <div key={index} className="flex items-center">
          <SingleExperience experience={experience} />
          {index < experiences.length - 1 && (
            <motion.div
              variants={fadeIn("right", 0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
            >
              <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AllExperiences;
