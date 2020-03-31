import React from "react";

function EmployeeDetail(props) {
  return (
    <table className="text-center">
      <tr>
        <th>Image</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Country</th>
      </tr>
      <tr>
        <td>  <img alt={props.title} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} /></td>
        <td> {props.name}</td>
        <td>    {props.email}</td>
        <td> {props.phone} </td>
        <td>  {props.country}</td>
      </tr>

    </table >
  );
}

export default EmployeeDetail;
