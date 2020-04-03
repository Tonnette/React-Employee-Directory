import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
<form>
<div className="form-group">
    <input
        type="text"
        value={props.search}
        name="search"
        className="form-control"
        placeholder="Filter Employees by name"
        id="search"
        onChange={props.updateSearch.bind(props)}
    />
    <br />
</div>
</form>
  );
}

export default SearchForm;
