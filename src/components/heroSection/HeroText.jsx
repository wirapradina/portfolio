import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { Typewriter } from "react-simple-typewriter";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl uppercase text-lightGrey"
      >
        Hello I'm
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold uppercase"
      >
        Wira Pradina <br className="sm:hidden md:block" />
        Resti
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-3xl mt-4 font-semibold text-white"
      >
        <Typewriter
          words={["Front-End Web Developer."]}
          loop={0} // 0 = infinite loop
          cursor
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </motion.p>
    </div>
  );
};

export default HeroText;
