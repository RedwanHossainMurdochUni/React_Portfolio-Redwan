import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10, opacity: 0 }, // Start slightly above and faded out
  animate: {
    y: [10, -10],
    opacity: 1,
    transition: {
      duration: duration,
      ease: "easeInOut", // Use easeInOut for smoother transitions
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  const icons = [ // Array for easier mapping
    { icon: <RiReactjsLine className="text-5xl text-cyan-400" />, duration: 2.5 },
    { icon: <TbBrandNextjs className="text-5xl" />, duration: 2 },
    { icon: <SiMongodb className="text-5xl text-green-500" />, duration: 2.2 },
    { icon: <DiRedis className="text-5xl text-red-800" />, duration: 1.8 },
    { icon: <FaNodeJs className="text-5xl text-green-400" />, duration: 2.7 },
    { icon: <BiLogoPostgresql className="text-5xl text-sky-700" />, duration: 2.3 },
  ];

  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration: 1.5}} className="my-20 text-center text-4xl">Technology Skills</motion.h2>
      <motion.div  whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration: 1.5}} className="flex flex-wrap items-center justify-center gap-4">
        {icons.map((iconData, index) => (
          <motion.div
            key={index}
            variants={iconVariants(iconData.duration)} // Pass dynamic duration
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            {iconData.icon} {/* Render the icon */}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;