"use client";
import { useState } from "react";
import axios from "axios";
import "./AllApiData.css";
import { IoTrash, IoCloseCircleSharp } from "react-icons/io5";
import { AiFillEdit } from "react-icons/ai";

function AllApiData() {
  const Api = "https://6518503a582f58d62d359404.mockapi.io/form/addit";
  const [data, setData] = useState(null);
  const [adit, setAdit] = useState(false);
  const [getData, setGetData] = useState(null);
  const [lestName, setLestName] = useState("");
  const [firsName, setFirsName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const renameData = {
    lestName,
    firsName,
    email,
    location,
    phoneNumber,
  };

  axios
    .get(Api)
    .then((res) => setData(res.data))
    .catch((err) => console.log(err));

  const daleteData = (id) => {
    axios
      .delete(Api + "/" + id)
      .then((res) => res.statusText === "OK" && window.location.reload())
      .catch((err) => alert(err));
  };

  const openFormCard = (data) => {
    setAdit(!adit);
    setGetData(data.id);
    setLestName(data.lestName);
    setFirsName(data.firsName);
    setEmail(data.email);
    setLocation(data.location);
    setPhoneNumber(data.phoneNumber);
  };

  const editData = (e) => {
    e.preventDefault();
    axios
      .put(Api + "/" + getData, renameData)
      .then((res) => {
        res.status === 200 && window.location.reload(), setAdit(false);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="all_api_data_page">
      <table>
        <thead>
          <tr>
            <th>№</th>
            <th>Lest name</th>
            <th>Firs name</th>
            <th>Email</th>
            <th>Locarion</th>
            <th>Phone number</th>
            <th>Dalete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((i, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{i.lestName}</td>
              <td>{i.firsName}</td>
              <td>{i.email}</td>
              <td>{i.location}</td>
              <td>{i.phoneNumber}</td>
              <td>
                <button onClick={() => daleteData(i.id)}>
                  <IoTrash />
                </button>
              </td>
              <td>
                <button onClick={() => openFormCard(i)}>
                  <AiFillEdit className="table_edit" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {adit && (
        <div className="adit_form_page">
          <form onSubmit={editData}>
            <div className="form_text">
              <h2>Edit</h2>
              <div className="form_close">
                <button>
                  <IoCloseCircleSharp onClick={() => setAdit(false)} />
                </button>
              </div>
            </div>
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
              placeholder="Locarion"
            />
            <input
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              type="text"
              placeholder="Phone number"
            />
            <button>Edit</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default AllApiData;
