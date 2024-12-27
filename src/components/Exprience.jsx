import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <section className="py-12"> {/* Use a semantic <section> */}
      <div className="container mx-auto"> {/* Center content */}
        <motion.h2  whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration: 0.5}} className="text-center text-4xl font-bold mb-16">Experience</motion.h2> {/* Improved heading styles */}
        <div className="space-y-12"> {/* Consistent vertical spacing */}
          {EXPERIENCES.map((experience, index) => (
            <div key={index} className="flex items-start md:items-center flex-col md:flex-row gap-6"> {/* Improved flex layout */}
              <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }}
              className="md:w-1/4 text-neutral-400">
                <p className="text-lg font-medium">{experience.year}</p> {/* Larger year text */}
              </motion.div>
              <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100}} transition={{ duration: 0.5 }} className="md:w-3/4">
                <h3 className="text-xl font-semibold mb-2">{experience.role} - <span className="text-purple-400">{experience.company}</span></h3> {/* Improved role/company styles */}
                <p className="text-neutral-500 leading-relaxed">{experience.description}</p> {/* Improved description styles */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {experience.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 text-sm font-medium rounded-full bg-neutral-800 text-purple-400"> {/* Improved tag styles */}
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;