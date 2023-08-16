import { motion } from "framer-motion";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import { registerSchema } from "../../Pages/Authentication/authSchema";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../store/store";
import { baseAPI } from "../../../api";
const RegisterForm = ({ setRegister }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const containerVariant = {
    hidden: {
      opacity: 0,
      y: "-10vh",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.5,
      },
    },
  };
  const initialValues = {
    fullname: "",
    username: "",
    password: "",
  };
  const { values, errors, handleBlur, handleSubmit, touched, handleChange } =
    useFormik({
      initialValues,
      validationSchema: registerSchema,
      onSubmit: (values) => handleFormSubmit(values),
    });
  const handleFormSubmit = async () => {
    try {
      const res = await axios.post(`${baseAPI}/signup`, values);

      if (res.status === 200) {
        toast.success("Wohoo! Sign up Successfull 🎉");
        dispatch(setCurrentUser(res.data));
        navigate("/");
      }
    } catch (error) {
      toast.error(error.response.data, { containerId: "mainContainer" });
    }
  };
  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      className="d-flex flex-column align-items-center justify-content-center"
    >
      <span className="my-3">Enter your details</span>
      <form
        className="d-flex flex-column justify-content-center"
        onSubmit={handleSubmit}
      >
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          name="fullname"
          className="signUpFields"
          type="text"
          placeholder="Full Name"
        />
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          name="username"
          className="signUpFields"
          placeholder="Email"
          type="email"
        />
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          name="password"
          className="signUpFields"
          placeholder="Password"
          type="password"
        />
        <div className="d-flex flex-column justify-content-center align-items-center mt-2">
          {errors.fullname && touched.fullname ? (
            <small className="form-error" style={{ color: "red" }}>
              {errors.fullname}
            </small>
          ) : null}
          {errors.username && touched.username ? (
            <small className="form-error" style={{ color: "red" }}>
              {errors.username}
            </small>
          ) : null}
          {errors.password && touched.password ? (
            <small className="form-error " style={{ color: "red" }}>
              {errors.password}
            </small>
          ) : null}
        </div>
        {values.username.length > 0 && values.password.length >= 6 ? (
          <motion.button
            initial={{ opacity: 0, x: "-20vh" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, type: "spring", stiffness: 100 }}
            type="submit"
            className="btn btn-dark mt-3"
          >
            Register
          </motion.button>
        ) : null}
      </form>
      <small className="text-muted mt-4"> Aleardy Using Helping Hands ?</small>
      <button
        className="btn btn-sm btn-outline-dark mt-2"
        onClick={() => setRegister(false)}
      >
        Click here to Login
      </button>
    </motion.div>
  );
};

export default RegisterForm;
