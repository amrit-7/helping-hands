import { useRef, useState } from "react";
import { Col, FormControl, FormSelect, Row } from "react-bootstrap";
import axios from "axios";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { BsFillCameraFill } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { toast } from "react-toastify";
import Defaultpfp from "../../../assets/Default_pfp.svg.png";
import "../Services.css";

export const convertBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

const ServiceProvider = () => {
  const [profile, setProfile] = useState(Defaultpfp);
  const [file, setFile] = useState();
  const [services, setServices] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const [newServices, setNewServices] = useState("");
  const [bio, setBio] = useState("");
  const currentUser = useSelector((state) => {
    return state.user.currentUser;
  });
  const inputRef = useRef();
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file.size > 16777216) {
      toast.warning("File is too large");
    } else {
      const base64 = await convertBase64(file);
      setProfile(base64);
      setFile(file);
    }
  };
  const handleSelectChange = (e) => {
    const option = e.target.value;
    if (option === "new") {
      setShowInput(true);
    } else {
      setServices((existing) => [option, ...existing]);
    }
  };
  const handleBioChange = (e) => {
    setBio(e.target.value);
  };
  const handleNewService = (e) => {
    setNewServices(e.target.value.toLowerCase());
  };
  const handleRemove = (indexToRemove) => {
    const updatedArray = services.filter((member, index) => {
      return index !== indexToRemove;
    });
    setServices(updatedArray);
  };
  const handleAddNewService = () => {
    if (newServices.length <= 0) {
      return toast.error("Please Enter a service");
    }
    setServices((existing) => [newServices, ...existing]);
    setNewServices("");
  };
  const handleSubmitForm = async (e) => {
    e.preventDefault();

    e.preventDefault();
    if (services.length <= 0) {
      return toast.error("Please select services");
    }
    const formData = new FormData();
    formData.append("profile", file);
    formData.append("biography", bio);
    for (var i = 0; i < services.length; i++) {
      formData.append("services[]", services[i]);
    }
    const res = await axios.post(
      "https://e39a-2405-201-5000-82a0-154-687a-960b-8a9a.ngrok-free.app/add_services",
      formData,
      {
        headers: {
          Authorization: `Bearer ${currentUser && currentUser.token}`,
        },
      }
    );
    console.log(
      "🚀 ~ file: ServiceProvider.jsx:93 ~ handleSubmitForm ~ res:",
      res
    );
  };

  const containerVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.6,
      },
    },
  };
  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      className="container p-4"
    >
      <Row>
        <Col className="text-center">
          <h5> Complete your profile</h5>
          <small className="text-muted">
            You can edit your profile later in the profile settings
          </small>
        </Col>
      </Row>
      <Row className="justify-content-center d-flex mt-4">
        <Col className="d-flex flex-column col-sm-12 col-md-12 col-lg-10 col-xl-6">
          <form onSubmit={handleSubmitForm} encType="multipart/form-data">
            <div className="profileContainer d-flex flex-column align-items-center mb-3">
              <img
                style={{
                  borderRadius: "50%",
                  height: 150,
                  width: 150,
                  objectFit: "contain",
                }}
                className="profileImg"
                src={profile}
                alt=""
                width={150}
              />
              <div
                className="cameraIcon"
                onClick={() => inputRef.current.click()}
              >
                <input
                  type="file"
                  hidden
                  ref={inputRef}
                  onChange={handleFileChange}
                  accept="image/*"
                  max-size="1048576"
                  max-total-size="1048576"
                />
                <BsFillCameraFill color="white" size={24} />
              </div>
            </div>
            <label className="my-2">
              Biography
              <small className="text-muted ms-2">
                (This is visible to service seekers)
              </small>
            </label>
            <textarea
              placeholder="Write about your skills, your past experiences and work (max 300 characters)"
              rows={5}
              required
              className="form-control"
              maxLength={300}
              onChange={handleBioChange}
            />
            <label className="my-2">Services</label>
            <div className="selectDiv">
              <div className="d-flex flex-wrap">
                {services.length > 0
                  ? services.map((service, index) => {
                      return (
                        <div
                          key={index}
                          className="d-flex selectedServices mb-2 me-2"
                        >
                          <strong className="me-2">{service}</strong>
                          <span onClick={() => handleRemove(index)}>
                            <MdClose size={17} />
                          </span>
                        </div>
                      );
                    })
                  : null}
              </div>
              <FormSelect
                className="serviceSelect"
                defaultValue="def"
                onChange={handleSelectChange}
              >
                <option value="def" disabled>
                  Select Your preferred services
                </option>
                <option value="Pick And Drop">Pick and Drop</option>
                <option value="new">Other</option>
              </FormSelect>
            </div>
            {showInput ? (
              <div className="d-flex mt-3">
                <FormControl
                  value={newServices}
                  placeholder="Add new service"
                  onChange={handleNewService}
                />
                <button
                  type="button"
                  className="ms-3 btn btn-outline-dark"
                  onClick={handleAddNewService}
                >
                  Add
                </button>
              </div>
            ) : null}
            <button className="btn btn-dark mt-4" type="submit">
              Proceed and set rates
            </button>
          </form>
        </Col>
      </Row>
    </motion.div>
  );
};

export default ServiceProvider;
