"use client";
import { useEffect, useState } from "react";
import "./AddetApiData.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddetApiData() {
  const Api = "https://6518503a582f58d62d359404.mockapi.io/form/addit";
  const [lestName, setLestName] = useState("");
  const [firsName, setFirsName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const getFormValue = (e) => {
    e.preventDefault();
    const addetFormData = {
      lestName,
      firsName,
      email,
      location,
      phoneNumber,
    };

    if (
      addetFormData.lestName.length === 0 ||
      addetFormData.firsName.length === 0 ||
      addetFormData.email.length === 0 ||
      addetFormData.location.length === 0 ||
      addetFormData.phoneNumber.length === 0
    ) {
      toast.error("err", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    axios
      .post(Api, addetFormData)
      .then((res) => res.status === 201 && window.location.reload())
      .catch((err) =>
        toast.error(err, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      );
  };
  return (
    <div className="input_header">
      <ToastContainer />
      <form onSubmit={getFormValue}>
        <input
          value={lestName}
          onChange={(e) => setLestName(e.target.value)}
          type="text"
          placeholder="Lest name"
        />
        <input
          value={firsName}
          onChange={(e) => setFirsName(e.target.value)}
          type="text"
          placeholder="Firs name"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email"
        />
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          type="text"
          placeholder="Location"
        />
        <input
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          type="text"
          placeholder="Phone number"
        />
        <button>Addet data</button>
      </form>
    </div>
  );
}

export default AddetApiData;
