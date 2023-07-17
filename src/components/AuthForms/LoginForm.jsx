import { motion } from "framer-motion";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { loginSchema } from "../../Pages/Authentication/authSchema";
import { setCurrentUser } from "../../store/store";
const LoginForm = ({ setRegister }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialValues = {
    username: "",
    password: "",
  };
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
  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginSchema,
      onSubmit: (values) => handleFormSubmit(values),
    });

  const handleFormSubmit = async () => {
    try {
      const res = await axios.post(
        "https://9714-2405-201-5000-82a0-154-687a-960b-8a9a.ngrok-free.app/login",
        values
      );
      console.log("🚀 ~ file: LoginForm.jsx:40 ~ handleFormSubmit ~ res:", res);
      if (res.status === 200) {
        toast.success("Login Successfull 🎉");
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
      <span className="my-3">Login with your credentials</span>

      <form
        className="d-flex flex-column justify-content-center"
        onSubmit={handleSubmit}
      >
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          name="username"
          className="inputField"
          placeholder="Email"
          type="email"
        />
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          name="password"
          className="inputField"
          placeholder="Password"
          type="password"
        />
        <div className="d-flex flex-column justify-content-center align-items-center mt-2">
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
            Login
          </motion.button>
        ) : null}
      </form>
      <small className="text-muted mt-4"> Are you a new User?</small>
      <button
        className="btn btn-sm btn-outline-dark mt-2"
        onClick={() => setRegister(true)}
      >
        Click here to register
      </button>
    </motion.div>
  );
};

export default LoginForm;
