import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "React Front-End Developer",
    jobLink: "https://drive.google.com/file/d/1M5DU-pNa5SzAbiyIZDJeeozAna7ZxF8d/view",
    company: "Shop-finity",
    companyLink: "https://drive.google.com/file/d/1M5DU-pNa5SzAbiyIZDJeeozAna7ZxF8d/view",
    date: "MSIB-7 (2024)",
    responsibilities: [
      "Developed an E-Commerce Customer Side application.",
      "Utilized Redux for state management in storing product data.",
      "Integrated Fake Store API to retrieve product information.",
    ],
  },
  {
    job: "Practicum Assistant",
    jobLink: "https://forumasisten.or.id/sertifikat/711500119f3788c3c0/show",
    company: "Sistem Manajemen Basis Data Lanjut",
    companyLink: "https://forumasisten.or.id/sertifikat/711500119f3788c3c0/show",
    date: "2024",
    responsibilities: [
      "Assisting students in advanced database management concepts.",
      "Guiding students in SQL queries and database optimization.",
      "Supporting students in advanced database management practice.",
    ],
  },
  {
    job: "Practicum Assistant",
    jobLink: "https://forumasisten.or.id/sertifikat/723155911c177d33336/show",
    company: "Pengantar Teknologi Informasi",
    companyLink: "https://forumasisten.or.id/sertifikat/723155911c177d33336/show",
    date: "2024",
    responsibilities: [
      "Assisting students in understanding basic programming concepts.",
      "Assisting students in understanding basic database concepts.",
      "Helping students grasp fundamental information technology concepts.",
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
