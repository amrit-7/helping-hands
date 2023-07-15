import * as Yup from "yup";
const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
export const loginSchema = Yup.object({
  username: Yup.string().email().required("Enter a valid email"),
  password: Yup.string().min(6).max(20).required("Enter valid password"),
});
export const registerSchema = Yup.object({
  fullname: Yup.string().min(4).required("Enter your full name"),
  username: Yup.string().email().required("Enter a valid email"),
  password: Yup.string().min(6).max(20).required("Enter valid password"),
});
export const verifySchema = Yup.object({
  address: Yup.string().min(5).required("Please enter your address"),
  city: Yup.string().min(3).required("Please enter your city"),
  state: Yup.string().min(3).required("Please enter your state"),
  phone: Yup.string()
    .max(13, "Number must of of 10 digits")
    .min(10, "Number must of of 10 digits")
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Please Enter Phone"),
});
