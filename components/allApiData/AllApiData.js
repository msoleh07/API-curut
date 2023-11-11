"use client";
import { useState } from "react";
import axios from "axios";
import "./AllApiData.css";
import { IoTrash, IoCloseCircleSharp } from "react-icons/io5";
import { AiFillEdit } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";

function AllApiData() {
  const Api = "https://6518503a582f58d62d359404.mockapi.io/form/addit";
  const [data, setData] = useState(null);
  const [adit, setAdit] = useState(false);
  axios
    .get(Api)
    .then((res) => setData(res.data))
    .catch((err) => console.log(err));

  const daleteData = (id) => {
    axios
      .delete(Api + "/" + id)
      .then((res) => {
        if (res.statusText === "OK") {
          toast.success(res.statusText, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      })
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
  const editData = (e) => {
    e.preventDefault();
  };
  return (
    <div className="all_api_data_page">
      <ToastContainer />
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
                <button onClick={() => setAdit(true)}>
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
            <input type="text" placeholder="Lest name" />
            <input type="text" placeholder="Firs name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Locarion" />
            <input type="text" placeholder="Phone number" />
            <button>Edit</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default AllApiData;
