import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";
import SearchForm from "../components/SearchForm";
import Table from "../components/Table/Table";
import "./style.css";
import API from "../utils/API";
import _ from 'lodash'


class Search extends Component {
    state = {
        items: [],
        search: "",
        sortState: "asc"
    };

    componentDidMount() {
        API.getRandom()
            // .then((response) => response.json())

            .then(response => {
                this.setState({
                    items: response.data.results
                });
            })
            .catch(err => console.log(err));
    };

    sort = () => {
        this.setState({items: _.orderBy(this.state.items, (item) => {
            return item.name.first;
        }, this.state.sortState)})

        if (this.state.sortState === "asc") {
            this.setState({ sortState: "desc" });
        }
        else if (this.state.sortState === "desc") {
            this.setState({ sortState: "asc" });
        }
    }

    updateSearch = event => {
        console.log(event.target.value);
        this.setState({ search: event.target.value.substr(0, 35) });
    };
    render() {
        let filteredContacts = this.state.items.filter(contact => {
            return (
                contact.name.first
                    .toLowerCase()
                    .indexOf(this.state.search.toLowerCase()) !== -1 ||
                contact.name.last
                    .toLowerCase()
                    .indexOf(this.state.search.toLowerCase()) !== -1
            );
        });
        return (
            <Container>
                <Row>
                    <Col size="md-12">
                        <Card heading="Search">
                            <SearchForm
                            updateSearch={this.updateSearch}
                            value={this.state.search}
                            >
                            </SearchForm>
                    
                        </Card>
                    </Col>
                    <Col size="md-12">
                        <div>
                            <Table
                                filteredContacts={filteredContacts}
                                onNameClick={this.sort}
                            ></Table>

                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Search;
