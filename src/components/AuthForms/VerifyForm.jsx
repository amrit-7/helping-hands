import axios from "axios";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Col, Container, FormControl, FormLabel } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import { verifySchema } from "../../Pages/Authentication/authSchema";
import AuthSvg from "../../assets/AuthSvg";
import { baseAPI } from "../../../api";
const VerifyForm = () => {
  const navigate = useNavigate();
  const [valid_token, setValidToken] = useState("");
  const currentUser = useSelector((state) => {
    return state.user.currentUser;
  });
  const captchaRef = useRef(null);
  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        phone: "",
        city: "",
        state: "",
        address: "",
      },
      validationSchema: verifySchema,
      onSubmit: (value) => handleFormSubmit(value),
    });
  const handleFormSubmit = async (e) => {
    const token = captchaRef.current.getValue();
    const res = await axios.post(`${baseAPI}/verify`, values, {
      headers: {
        Authorization: `Bearer ${currentUser && currentUser.token}`,
      },
    });
    captchaRef.current.reset();
    navigate("/services/provide");
  };

  const divVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 0.2, duration: 0.4 },
    },
  };
  const imgVariant = {
    hidden: {
      x: "300vh",
    },
    visible: {
      x: 0,
      transition: { delay: 0.3, duration: 1.5, type: "spring" },
    },
  };
  return (
    <Container className="p-5">
      <div className="row">
        <Col className="text-center">
          <h5>Please enter your details</h5>
          <p className="text-muted">
            You need to verify your details so that you can be more trustworthy
            to the service seeker
          </p>
        </Col>
      </div>
      <div className="row mt-4">
        <motion.div
          variants={divVariant}
          initial="hidden"
          animate="visible"
          className="col-md-6 col-sm-12"
        >
          <form onSubmit={handleSubmit}>
            <FormLabel htmlFor="address">Address</FormLabel>
            <FormControl
              className="mb-3"
              name="address"
              placeholder="House number / Street number / Area"
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.address && touched.address ? (
              <p>
                <small className="form-error" style={{ color: "red" }}>
                  {errors.address}
                </small>
              </p>
            ) : null}
            <FormLabel htmlFor="address">City</FormLabel>
            <FormControl
              className="mb-3"
              name="city"
              placeholder="City"
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.city && touched.city ? (
              <p>
                <small className="form-error" style={{ color: "red" }}>
                  {errors.city}
                </small>
              </p>
            ) : null}
            <FormLabel htmlFor="address">State</FormLabel>
            <FormControl
              className="mb-3"
              name="state"
              placeholder="State"
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.state && touched.state ? (
              <p>
                <small className="form-error" style={{ color: "red" }}>
                  {errors.state}
                </small>
              </p>
            ) : null}
            <FormLabel htmlFor="phone">Phone Number</FormLabel>
            <FormControl
              type="number"
              name="phone"
              className="phoneInput"
              placeholder="Enter  your Phone Number"
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.phone && touched.phone ? (
              <p>
                <small className="form-error" style={{ color: "red" }}>
                  {errors.phone}
                </small>
              </p>
            ) : null}
            <ReCAPTCHA
              className="mt-3"
              ref={captchaRef}
              onChange={(e) => setValidToken(e)}
              sitekey="6LdMbB4nAAAAAOiJqVnWeLVZpbfuNJGic3cMr_wu"
            />
            {valid_token ? (
              <motion.button
                initial={{ x: "-200vw" }}
                animate={{ x: 0 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                }}
                type="submit"
                className="btn btn-dark mt-3"
              >
                Next
              </motion.button>
            ) : null}
          </form>
        </motion.div>
        <motion.div
          variants={imgVariant}
          initial="hidden"
          animate="visible"
          className="col"
        >
          <AuthSvg className="bg-dark" />
        </motion.div>
      </div>
    </Container>
  );
};

export default VerifyForm;
