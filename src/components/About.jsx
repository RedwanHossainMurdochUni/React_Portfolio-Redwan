import aboutVideo from "../assets/StudyTimeLaps.mp4";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div // Motion on image container
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <video
              className="rounded-2xl"
              src={aboutVideo}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </motion.div>
        <motion.div // Motion on text container (THIS WAS MISSING)
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }} // Animate from the right
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl leading-relaxed">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
