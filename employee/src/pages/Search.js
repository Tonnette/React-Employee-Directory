import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";
import SearchForm from "../components/SearchForm";
import MovieDetail from "../components/MovieDetail";
import API from "../utils/API";

class Search extends Component {
  state = {
    result: {},
    search: ""
  };

  // When this component mounts, search for the movie "The Matrix"

  componentDidMount() {
    API.getRandom()
      .then(res => this.setState({ result: res.data.results[0] }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
//   handleFormSubmit = event => {
//     event.preventDefault();
//     this.searchMovies(this.state.search);
//   };

  render() {
    return (
      <Container>
        <Row>
        <Col size="md-12">
            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
          <Col size="md-12">
            <Card
              heading={ "Employee Table"}
            >
              {this.state.result ? (
                <MovieDetail
                  title={this.state.result.gender}
                //   src={this.state.result.Poster}
                  email={this.state.result.email}
                  phone={this.state.result.phone}
                  country={this.state.result.nat}
                />
              ) :
              (
                <h3>No Results to Display</h3>
              )
              }
            </Card>
          </Col>
        
        </Row>
      </Container>
    );
  }
}

export default Search;
