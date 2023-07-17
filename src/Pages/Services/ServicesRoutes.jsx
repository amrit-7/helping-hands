import React from "react";
import { Route, Routes } from "react-router";
import ServicesOption from "./ServicesOption";
import ServiceSeeker from "./ServiceSeeker/ServiceSeeker";
import ServiceProvider from "./ServiceProvider/ServiceProvider";
import ServiceVerify from "./ServiceProvider/ServiceVerify";
import ServiceRates from "./ServiceProvider/SerivcesRate";

const ServicesRoutes = () => {
  return (
    <Routes>
      <Route index element={<ServicesOption />}></Route>
      <Route path="/verify" element={<ServiceVerify />} />
      <Route path="/provide" element={<ServiceProvider />} />
      <Route path="/rates" element={<ServiceRates />} />
      <Route path="/seek" element={<ServiceSeeker />} />
    </Routes>
  );
};

export default ServicesRoutes;
