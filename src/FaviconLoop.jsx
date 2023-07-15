import { useCallback, useEffect, useState } from "react";

export const FaviconLoop = () => {
  const [favicons, setFavicons] = useState([
    "../../boxes.png",
    "../../vite.png",
    "../../deliver.png",
    "../../teamwork.png",
  ]);

  useEffect(() => {
    let currentIndex = 0;

    const changeFavicon = () => {
      const link = document.querySelector("link[rel*='icon']");
      link.href = favicons[currentIndex];

      currentIndex = (currentIndex + 1) % favicons.length;
    };

    const intervalId = setInterval(changeFavicon, 5000); // Change favicon every 2 seconds

    return () => {
      clearInterval(intervalId); // Clean up the interval on component unmount
    };
  }, [favicons]);

  return;
};
const names = [
  "Wanna Help someone? Provide your services and earn",
  "Feeling Stucked? Ask for help to anyone and breath ",
  "Also You can do both get help and take help",
];

export const ChangingText = () => {
  const [newName, setnewName] = useState("");

  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * names.length);
    setnewName(names[index]);
  }, []);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 2000);
    return () => clearInterval(intervalID);
  });

  return newName;
};
