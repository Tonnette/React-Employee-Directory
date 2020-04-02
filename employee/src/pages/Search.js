import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";
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

 updateSearch = event => {
        console.log(event.target.value);
        this.setState({search: event.target.value.substr(0,35)})

    };
    render() {
        let filteredContacts = this.state.items.filter(
            (contact) => {
                return contact.name.first.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 
                || contact.name.last.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        )
        var { items, search } = this.state
        return (
            <Container>
                <Row>
                    <Col size="md-12">
                        <Card heading="Search">
                            <form>
                                <div className="form-group">
                                    <input type="text"
                                        value={this.state.search}
                                        name="search"
                                        className="form-control"
                                        placeholder="Filter Employees by name"
                                        id="search"
                                        onChange={this.updateSearch.bind(this)}
                                    />
                                    <br />
                                </div>
                            </form>
                        </Card>
                    </Col>
                    <Col size="md-12">
                        <div>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Country</th>
                                    </tr>
                                    {filteredContacts.map(item => (
                                        <tr>
                                            <td><img src={item.picture.thumbnail} alt="" /></td>
                                            <td>{item.name.first + " " + item.name.last}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phone}</td>
                                            <td>{item.nat}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Col>

                </Row>
            </Container >
        );
    }
}

export default Search;
