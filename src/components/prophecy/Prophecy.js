import React, { Component } from "react";
import { Col, Table } from "react-bootstrap";
import { Sidebar } from "../sidebar/Sidebar";
import { Link } from "react-router-dom";
import { ProphecyComponent } from "./ProphecyComponent";

export default class Prophecy extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      name: "",
      author: "",
      id: "",
    };
    this.image = React.createRef()
  }

  componentDidMount() {
    this.setState({
      data: [
        {
          id: 1,
          name: "Manasseh",
          author: "Nkundimana",
        },
        {
          id: 2,
          name: "Manasseh",
          author: "Nkundimana",
        },
        {
          id: 3,
          name: "Manasseh",
          author: "Nkundimana",
        },
      ],
    });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  deleteRecord = (id) => {
    //send data to API
    console.log(id);
  };

  submit = () => {
      console.log('hey');
    const book = new FormData()
    book.append('image', this.image)
    book.append('name', this.state.name)
    book.append('author', this.state.author)
    book.append('id', this.state.id)
  }

  submitData = () => {
    console.log('hey there');
    const book = new FormData()
    book.append('image', this.image)
    book.append('name', this.state.name)
    book.append('author', this.state.author)
    book.append('id', this.state.id)
  }

  render() {
    const { name, author, id, data } = this.state;
    return (
      <div>
        <Sidebar>
            <Col>
              <Table bordered>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Author</th>
                    <th>ID</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.length === 0 ? (
                    <tr>
                      <td>No data available</td>
                    </tr>
                  ) : (
                    data.map((d) => (
                      <tr key={d.id}>
                        <td>{d.name}</td>
                        <td>{d.author}</td>
                        <td>{d.id}</td>
                        <td>
                          <Link to={{ pathname: "/view", data: { id: d.id } }}>
                            View
                          </Link>
                          <Link
                            to="/prophecy"
                            onClick={() => this.deleteRecord(d.id)}
                            style={{ color: "red" }}
                            className="pl-2"
                          >
                            Delete
                          </Link>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </Table>
            </Col>
            <Col className="pl-4" >
                <ProphecyComponent
                  name={name}
                  author={author}
                  id={id}
                  image={this.image}
                  handleChange={this.handleChange}
                />
            </Col>
        </Sidebar>
      </div>
    );
  }
}
