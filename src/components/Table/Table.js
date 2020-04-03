import React from "react";

function table(props) {
  return (
      <table className="text-center">
        <thead>

          <tr>
              <th>Image</th>
              <th>
                  <button onClick={props.onNameClick}>Name</button>
              </th>
              <th>Email</th>
              <th>Phone</th>
              <th>Country</th>
          </tr>
        </thead>
          <tbody>
            {props.filteredContacts.map(item => (
                <tr key={item.login.uuid}>
                    <td>
                        <img src={item.picture.thumbnail} alt="" />
                    </td>
                    <td>{item.name.first + " " + item.name.last}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.nat}</td>
                </tr>
            ))}
          </tbody>

      </table>
  );
}

export default table;
