import { motion } from "framer-motion";
import { CONTACT } from "../constants";

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      className="contact-section mx-auto max-w-4xl py-16 px-6 text-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h1 className="text-4xl font-bold mb-10">Let's Connect</h1>
      <motion.div className="contact-info space-y-6" variants={itemVariants}>
        <p className="text-lg">{CONTACT.address}</p>
        <p className="text-lg">
          <a
            href={`tel:${CONTACT.phoneNo}`}
            className="text-blue-600 hover:underline"
          >
            {CONTACT.phoneNo}
          </a>
        </p>
        <p>
          <a
            href={`mailto:${CONTACT.email}`}
            className="text-blue-600 hover:underline"
          >
            {CONTACT.email}
          </a>
        </p>
      </motion.div>


      {/* from id: https://docs.google.com/forms/d/e/1FAIpQLSdUijv-ty7aonHL-8uG3WynZZA3wrBGlK3Di0cEnFipc_Cbqw/viewform?usp=pp_url&entry.700460964=Redwan&entry.2075630198=redwanhossain2001@gmail.com&entry.208921675=Hi,+I+would+like+to+have+a+chat+with+you+  */}
      {/* Contact Form */}
      <motion.div className="contact-form mt-10 text-left">
        <form
          action="https://docs.google.com/forms/d/e/1FAIpQLSdUijv-ty7aonHL-8uG3WynZZA3wrBGlK3Di0cEnFipc_Cbqw/formResponse" // Replace <FORM_ID> with your Google Form ID
          method="POST"
          className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-xl mx-auto"
        >
          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="entry.700460964" // Replace <FIELD_ID_1> with the field's unique Google Forms ID for the "Name" field
              required
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="email">
              Your Email
            </label>
            <input
              type="email"
              name="entry.2075630198" // Replace <FIELD_ID_2> with the field's unique Google Forms ID for the "Email" field
              required
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
            />
          </div>

          {/* Message Field */}
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              name="entry.208921675"// Replace <FIELD_ID_3> with the field's unique Google Forms ID for the "Message" field
              rows="4"
              required
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
