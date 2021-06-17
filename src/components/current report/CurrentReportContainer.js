import React, { Component } from 'react'
import {Table} from 'react-bootstrap'
import {Sidebar} from '../sidebar/Sidebar'

export default class CurrentReportContainer extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       data : [],
       values : {}
    }
  }

  componentDidMount(){
    this.setState({
      data : [
        {
          id : 1,
          conf : 'Kigali',
          leader : 'Manasseh',
          phone : '08765432',
          coms : 8,
          amount : 20000,
          delivered : true
        },
        {
          id : 2,
          conf : 'Kigali',
          leader : 'Manasseh',
          phone : '08765432',
          coms : 8,
          amount : 20000,
          delivered : true
        },
        {
          id : 3,
          conf : 'Kigali',
          leader : 'Manasseh',
          phone : '08765432',
          coms : 8,
          amount : 20000,
          delivered : true
        }
      ],
      values : {
        'Kigali' : 456,
        'North' : 345,
        "East" : 100,
        'West': 234,
        'South' : 478
      }
    })
  }
  
  
  render() {
    const {data, values} = this.state
    return (
      <div>
        <Sidebar values={values}>
            <Table striped bordered hover id="my-report-table">
              <thead>
                <tr>
                  <th>Conf</th>
                  <th>Leader</th>
                  <th>Phone</th>
                  <th>NoOfComs</th>
                  <th>Amount</th>
                  <th>Delivered</th>
                </tr>
              </thead>
              <tbody>
                {data.length === 0 ? 
                  <tr>
                    <td>No data available</td>
                  </tr> : 
                  data.map((d) => (
                    <tr key={d.id}>
                      <td>{d.conf}</td>
                      <td>{d.leader}</td>
                      <td>{d.phone}</td>
                      <td>{d.coms}</td>
                      <td>{d.amount}</td>
                      <td>{d.delivered}</td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
        </Sidebar>
      </div>
    )
  }
}

