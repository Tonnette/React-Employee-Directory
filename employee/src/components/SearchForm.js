import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        {/* <label htmlFor="search">Filter:</label> */}
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Filter Employees by name"
          id="search"
        />
        <br />
        <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Filter
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
