import { motion } from "framer-motion";
import { CONTACT } from "../constants";

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 100 }, // Start slightly below
    visible: {
      opacity: 1.5,
      y: 10,
      transition: {
        duration: 0.5, // Adjust duration
        ease: "easeOut", // Use easeOut for a smooth start
      },
    },
  };

  return (
    <motion.div
      className="border-b border-neutral-900 pb-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }} // Only trigger once
    >
      <h1 className="my-10 text-center text-4xl">Get in Touch</h1>
      <div className="text-center tracking-tighter">
        <motion.p variants={containerVariants} className="my-4">
          {CONTACT.address}
        </motion.p>
        <motion.p variants={containerVariants} className="my-4">
          <a href={`tel:${CONTACT.phoneNo}`} className="underline">
            {CONTACT.phoneNo}
          </a>
        </motion.p>
        <motion.a
          variants={containerVariants}
          href={`mailto:${CONTACT.email}`}
          className="underline"
        >
          {CONTACT.email}
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Contact;