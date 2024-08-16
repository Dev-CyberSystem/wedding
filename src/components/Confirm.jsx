// src/components/Confirm.js
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import homero from "../assets/homero.jpg";
const Confirm = () => {
  const { code } = useParams();
  const [message, setMessage] = useState("");

  useEffect(() => {
    const confirmAttendance = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8081/api/confirm/${code}`
        );
        setMessage(response.data.message);
      } catch (error) {
        setMessage("Invalid confirmation code");
      }
    };

    confirmAttendance();
  }, [code]);

  console.log(code, "code");
  console.log(message, "message");
  return (
    <>
      <img src={homero} alt="" />

      {message}
    </>
  );
};

export default Confirm;
