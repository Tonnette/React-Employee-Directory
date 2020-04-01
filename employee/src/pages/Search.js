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
                this.setState({
                    items: response.data.results
                })
            })
            .catch(err => console.log(err))
    }

    handleInputChange = event => {
        console.log(event);
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });

    };


    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     API.getRandom(this.state.search)
    //         .then(res => {
    //             console.log({ res })
    //             if (res.data.status === "error") {
    //                 throw new Error("error");
    //             }
    //             this.setState({ items: res.data.results, error: "" });
    //         })
    //         .catch(err => this.setState({ error: err.message }));
    // };


    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     API.getRandom(this.state.search)
    //         .then(res => {
    //             if (res.data.status === "error") {
    //                 throw new Error("error");
    //             }
    //             this.setState({ items: res.data.results, error: "" });
    //         })
    //         .catch(err => this.setState({ error: err.message }));
    // };


    render() {
        console.log(this.state.search)
        var { items, search } = this.state


        // const filteredNames = items.filter(name => {
        return (
            // name.toLowerCase().includes(search.toLowerCase())


            <Container>
                <Row>
                    <Col size="md-12">
                        <Card heading="Search">

                            <SearchForm
                                value={search}
                                handleFormSubmit={this.handleFormSubmit}
                                handleInputChange={this.handleInputChange}
                                items={items}


                            />
                            <SearchResults items={items} />



                        </Card>
                    </Col>
                    <Col size="md-12">
                        <div>
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
