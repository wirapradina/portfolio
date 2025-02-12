import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleExperience = ({ experience }) => {
  return (
    <motion.div
      variants={fadeIn("right", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="md:h-[350px] md:w-[240px] sm:h-auto sm:w-full border-2 border-orange border-dashed rounded-2xl mt-12 p-4"
    >
      {/* Job Title as a Link */}
      <a
        href={experience.jobLink} // Job link
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold text-cyan hover:underline"
      >
        {experience.job}
      </a>

      {/* Company Name as a Link */}
      <a
        href={experience.companyLink} // Company link
        target="_blank"
        rel="noopener noreferrer"
        className="text-orange hover:underline block"
      >
        {experience.company}
      </a>

      <p className="text-lightGrey">{experience.date}</p>
      <ul className="list-disc mt-4 pl-4">
        {experience.responsibilities.map((resp, index) => (
          <li key={index}>{resp}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SingleExperience;
