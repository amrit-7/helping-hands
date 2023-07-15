import { useState } from "react";
import { motion } from "framer-motion";
import "./authentication.css";
import LoginForm from "../../components/AuthForms/LoginForm";
import RegisterForm from "../../components/AuthForms/RegisterForm";
const Login = () => {
  const [register, setRegister] = useState(false);
  const containerVariant = {
    hidden: {
      x: "-150vh",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1,
      },
    },
  };
  return (
    <div className="loginContainer">
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        className="formDiv d-flex flex-column align-items-center justify-content-center"
      >
        <h2>
          <strong>Helping Hands</strong>
        </h2>
        {register ? (
          <RegisterForm setRegister={setRegister} />
        ) : (
          <LoginForm setRegister={setRegister} />
        )}
      </motion.div>
    </div>
  );
};

export default Login;
