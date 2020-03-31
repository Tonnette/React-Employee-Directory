import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
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

    
    handleFormSubmit = event => {
        event.preventDefault();
        API.getRandom(this.state.search)
            .then(res => {
                if (res.data.status === "error") {
                    throw new Error("error");
                }
                this.setState({ items: res.data.results, error: "" });
            })
            .catch(err => this.setState({ error: err.message }));
    };


    render() {

        var { items } = this.state

        return (

            <Container>
                <Row>
                    <Col size="md-12">
                        <Card heading="Search">

                            <SearchForm
                                handleFormSubmit={this.handleFormSubmit}
                                handleInputChange={this.handleInputChange}
                                items={items}
                            />
                        <SearchResults items={items} />
                            
                   

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
