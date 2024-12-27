import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/kevinRushProfile.png";
import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5, // Adjust duration as needed
        staggerChildren: 0.4, // Delay between child animations
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 }, // Start off-screen and faded
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, type: "spring", stiffness: 100 }, // Spring animation
    },
  };

  return (
    <motion.div
      className="border-b border-netural-900 pb-4 lg:mb-35"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <motion.div
            className="flex flex-col items-center lg:items-start"
            variants={itemVariants}
          >
            <motion.h1
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-5xl"
              variants={itemVariants}
            >
              Redwan Hossain
            </motion.h1>
            <motion.span
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tigh text-transparent"
              variants={itemVariants}
            >
              CS, ML, AI & AIAS-Full Stack Developer
            </motion.span>
            <motion.p
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
              variants={itemVariants}
            >
              {HERO_CONTENT}
            </motion.p>
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div className="flex justify-center" variants={itemVariants}>
            <img src={profilePic} alt="Redwan Hossain" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;