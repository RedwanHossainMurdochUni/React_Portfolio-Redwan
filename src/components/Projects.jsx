import { motion } from "framer-motion";
import { PROJECTS } from "../constants";


const Projects = () => {
  return (
    <section className="py-12"> {/* Semantic section for projects */}
      <div className="container mx-auto"> {/* Center content */}
        <motion.h2  whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration: 0.5}} className="text-center text-4xl font-bold mb-16">Projects</motion.h2> {/* Improved heading styles */}
        <motion.div  whileInView={{opacity:1, y:0}} initial={{opacity:0, y:100}} transition={{duration: 0.5}} className="grid grid-cols-1 md:grid-cols-2 gap-8"> {/* Responsive grid layout */}
          {PROJECTS.map((project, index) => (
            <div key={index} className="rounded overflow-hidden shadow-md"> {/* Improved project card styles */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover" // Image styles
              />
              <div className="px-6 py-4"> {/* Content padding */}
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3> {/* Improved title styling */}
                <p className="text-gray-700 leading-relaxed">{project.description}</p> {/* Improved description styling */}
                <a href={project.link} target="_blank" rel="noreferrer noopener" className="text-purple-400 underline">
                  View Project
                </a> {/* Link with proper attributes */}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;