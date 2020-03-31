import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";
import SearchForm from "../components/SearchForm";
// import EmployeeDetail from "../components/Table/EmployeeDetail";
import "./style.css";
import API from "../utils/API";

class Search extends Component {
    state = {
        items: [],
        search: ""
    };


    componentDidMount() {
        API.getRandom()
            // .then((response) => response.json())

            .then((response) => {
                console.log(response)
                this.setState({
                    items: response.data.results
                })
            })
            .catch(err => console.log(err))
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
        var { items } = this.state
        return (
            <Container>
                <Row>
                    <Col size="md-12">
                        <Card heading="Search">
                            <SearchForm
                                value={items.search}
                                handleInputChange={this.handleInputChange}
                                handleFormSubmit={this.handleFormSubmit}
                            />
                        </Card>
                    </Col>
                    <Col size="md-12">
                        <div>
                
                            {console.log(items)}
                            <table>
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Country</th>
                                </tr>
                                {items.map(item => (
                                    <tr>
                                        <td><img src={item.picture.thumbnail} alt="" /></td>
                                        <td>{item.name.first + " " + item.name.last}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.nat}</td>
                                    </tr>
                                ))}
                            </table>
                        </div>
                    </Col>

                </Row>
            </Container >
        );
    }
}

export default Search;

// {items.length > 0 ? (

//     <EmployeeDetail

//     // title={items[0].gender}
//     // src={items[0].picture.medium}

//     // name={items[0].name.first + " " + items[0].name.last}
//     // email={items[0].email}
//     // phone={items[0].phone}
//     // country={items[0].nat}
//     />
// ) :
//     (
//         <h3>No Results to Display</h3>
//     )

// }

            // {/* {items.map(item => (
            //                 // <img src={item.picture.medium} alt={item.name.first} />

            //                 <div key={item}>
            //                     <div>{item.name.first}</div>
            //                     <img src={item.picture.thumbnail} alt="" />
            //                 </div>
            //             ))} */}
            //             {/* {items.map(item => (
            //                 // <img src={item.picture.medium} alt={item.name.first} />

            //                 <div key={item}>
            //                     <div>{item.name.first}</div>
            //                     <img src={item.picture.thumbnail} alt="" />
            //                 </div>
            //             ))} */}