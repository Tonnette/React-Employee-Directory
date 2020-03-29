import React from "react";

function MovieDetail(props) {
  return (
    <div className="text-center">
      {/* <img alt={props.title} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} /> */}
      <h3>Email: {props.email}</h3>
      <h3>Phone: {props.phone}</h3>
      <h3>Country: {props.country}</h3>
    </div>
  );
}

export default MovieDetail;
