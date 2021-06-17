import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { Sidebar } from "../sidebar/Sidebar";

export default class PreviousTrim extends Component {
  render() {
    return (
      <div>
        <Sidebar>
          <Table striped bordered hover id="my-report-table">
            <thead>
              <tr>
                <th>Hey there</th>
                <th>You here</th>
                <th>Them there</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Kicukiro</td>
                <td>Gatare</td>
                <td>Gashumba</td>
              </tr>
              <tr>
                <td>Kicukiro</td>
                <td>Gatare</td>
                <td>Gashumba</td>
              </tr>
              <tr>
                <td>Kicukiro</td>
                <td>Gatare</td>
                <td>Gashumba</td>
              </tr>
            </tbody>
          </Table>
        </Sidebar>
      </div>
    );
  }
}
