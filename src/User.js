import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';

export default function User() {
  const [data, setData] = useState([]);
  const [mode, setMode] = useState("online");

  useEffect(() => {
    let url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        console.warn("result", result);
        setData(result);
        localStorage.setItem("users", JSON.stringify(result));
      })
      .catch((err) => {
        console.error("Fetch error: ", err);
        let collections = localStorage.getItem("users");
        if (collections) {
          setData(JSON.parse(collections));
        }
        setMode("offline");
      });
  }, []);

  return (
    <>
      <div>
        {mode !== "online" ? (
          <div className="alert alert-danger" role="alert">
            Offline
          </div>
        ) : null}
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Company Name</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name.split(' ')[0]}</td>
              <td>{item.name.split(' ')[1]}</td>
              <td>@{item.username}</td>
              <td>{item.email}</td>
              <td>{item.company.name}</td>
              <td>{item.company.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
