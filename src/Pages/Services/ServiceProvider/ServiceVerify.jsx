import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import Loader from "../../../components/Loader/Loader";
import VerifyForm from "../../../components/AuthForms/VerifyForm";
import { baseAPI } from "../../../../api";
const ServiceVerify = () => {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => {
    return state.user.currentUser;
  });
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getDetails = async () => {
      setIsLoading(true);
      const res = await axios.post(
        `${baseAPI}/get_details`,
        {},
        {
          headers: {
            Authorization: `Bearer ${currentUser && currentUser.token}`,
          },
        }
      );
      if (res.data && res.data.phone && res.data.services.length > 0) {
        setIsLoading(false);
        navigate("/services/rates");
      } else if (res.data && res.data.phone && res.data.services.length <= 0) {
        setIsLoading(false);
        navigate("/services/provide");
      } else {
        setIsLoading(false);
      }
    };
    getDetails();
  }, []);
  return (
    <Fragment>
      {isLoading ? (
        <div
          style={{ height: "50vh" }}
          className="d-flex align-items-center justify-content-center"
        >
          <Loader />
        </div>
      ) : (
        <VerifyForm />
      )}
    </Fragment>
  );
};

export default ServiceVerify;
