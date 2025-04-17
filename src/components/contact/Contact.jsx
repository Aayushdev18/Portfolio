import "./contact.scss";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l045vlt",
        "template_patj4f3",
        formRef.current,
        "RqHDkIsMKwsYE8PEW"
      )
      .then(
        () => setSuccess(true),
        () => setError(true)
      );
  };

  return (
    <motion.div
      className="contact"
      ref={ref}
      variants={variants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let's work together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>ayushdev12345@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>11/378, Preetvihar, Newdelhi</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>9999085486</span>
        </motion.div>
      </motion.div>

      <motion.div className="formContainer" variants={variants}>
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <input type="text" name="user_name" required placeholder="Name" />
          <input type="email" name="user_email" required placeholder="Email" />
          <textarea name="message" rows={8} placeholder="Message" />
          <button type="submit">Submit</button>
          {error && <span style={{ color: "red" }}>Error sending message</span>}
          {success && <span style={{ color: "green" }}>Message sent successfully!</span>}
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
