import React, { Component } from "react";
import { Sidebar } from "../sidebar/Sidebar";
import { Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LessonComponent } from "./LessonComponent";
import axios from "axios";
import authheader from '../../services/auth.header'

export default class Lesson extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      name : '',
      author : '',
      period : '',
      id : ''
    };
    this.image = React.createRef()
    this.submitData = this.submitData.bind(this)
  }

  handleChange = event => {
      this.setState({
          [event.target.name] : event.target.value
      })
  }

  async submitData(){
    const URL = ''
    const imageURL = await axios.post(URL, {
        headers : authheader()
    }, this.image)
    const ssl = {
        name : this.state.name,
        author : this.state.author,
        period : this.state.period,
        id : this.state.id,
        image : imageURL
    }
    await axios.post('', {
        headers : authheader()
    }, ssl)
    console.log(this.state.name, this.state.author, this.state.period,
                this.state.id, this.image);  
  }

  componentDidMount() {
    this.setState({
      data: [
        {
          id: 1,
          name: "Manasse",
          author: "Manasse",
          period: "2020 Trim 2",
        },
        {
          id: 2,
          name: "Manasse",
          author: "Manasse",
          period: "2020 Trim 2",
        },
        {
          id: 3,
          name: "Manasse",
          author: "Manasse",
          period: "2020 Trim 2",
        },
      ],
    });
  }

  render() {
    const { name, author, period, id, data } = this.state;
    return (
      <Sidebar>
          <Col>
            <span>All SSL Till Now</span>
            <Table bordered>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Author</th>
                  <th>Period</th>
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
                      <td>{d.period}</td>
                      <td>
                        <Link to={{ pathname: "/view", data: { id: d.id } }}>
                          View
                        </Link>
                        <Link
                          to="/lesson"
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
          <Col>
            <LessonComponent
                name={name}
                author={author}
                period={period}
                id={id}
                image={this.image}
                handleChange={this.handleChange}
                submitData={this.submitData}
            />
          </Col>
      </Sidebar>
    );
  }
}
