import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        {/* <label htmlFor="search">Filter:</label> */}

        <input
          onChange={event => props.handleInputChange(event)}
         
          value={props.search}
          
          name="search"
          type="text"
          className="form-control"
          placeholder="Filter Employees by name"
          id="search"
        />
        <br />
        <datalist id="name">
          {(console.log(props.items))}
          {props.items.map(items => (
            <option value={items} key={items} />
          ))}
        </datalist>
        <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Filter
        </button>
        {(console.log(props.search))}
      </div>
    </form>
  );
}

export default SearchForm;
