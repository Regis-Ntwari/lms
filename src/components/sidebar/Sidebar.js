import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Cards } from "../card/Cards";
import logo from "../../logo.jpeg";
import { Button } from "@material-ui/core";
import AuthService from '../../services/auth.service'
import {createBrowserHistory} from 'history'

export const Sidebar = (props) => {
  function logout(){
    const history = createBrowserHistory()
    AuthService.logout()
    history.push('/')
    window.location.reload()

  }
  return (
    <Container fluid className="pl-0">
      <Row>
        <Col xs={2}>
          <div
            style={{
              display: "flex",
              height: "100vh",
              overflow: "scroll initial",
              position: "fixed",
            }}
          >
            <CDBSidebar textColor="#fff" backgroundColor="#00008B">
              <CDBSidebarHeader
                prefix={<i className="fa fa-bars fa-large"></i>}
              >
                <a
                  href="/"
                  className="text-decoration-none"
                  style={{ color: "inherit" }}
                >
                  <div className="pl-5 pt-5">
                    <Image
                      src={logo}
                      alt="Logo"
                      style={{
                        width: "60px",
                        height: "60px",
                      }}
                      roundedCircle
                    />
                  </div>
                  <div className="pl-4">
                    <span>LMS Rwanda</span>
                  </div>
                </a>
              </CDBSidebarHeader>
              <CDBSidebarContent>
                <CDBSidebarMenu>
                  <NavLink exact to="/report" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="table">
                      Current Report
                    </CDBSidebarMenuItem>
                  </NavLink>
                  <NavLink exact to="/lesson" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="table">
                      Sabbath School Lesson
                    </CDBSidebarMenuItem>
                  </NavLink>
                  <NavLink exact to="/prophecy" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="microphone">
                      Spirit of Prophecy
                    </CDBSidebarMenuItem>
                  </NavLink>
                </CDBSidebarMenu>
              </CDBSidebarContent>
              <CDBSidebarFooter style={{ textAlign: "center" }}>
                <Button type="contained" style={{
                  color : "white",
                  borderColor : "white"
                }} onClick={logout}>
                      Log Out
                </Button>
              </CDBSidebarFooter>
            </CDBSidebar>
          </div>
        </Col>
        <Col xs={10}>
          <Container>
            <Row className="justify-content-center">
              <Col xs={0} sm={3}></Col>
              <Col xs={12} sm={6}>
                <h3 className="pt-4">Rwanda SDA Literature Mission Service</h3>
              </Col>
              <Col xs={0} sm={3}></Col>

              <hr style={{ color: "darkblue", backgroundColor: "darkblue" }} />
              <p>
                This is the report which shows how all christians in Rwanda
                Mission bought sabbath school lessons.
                <br />
                These statistics depend on the current state of transactions of
                lessons booking accross the country.
              </p>
            </Row>
            <Row className="pl-5 ">
              <Cards value="900" badge="300" color="darkred" />
              <Cards value="200" badge="300" color="darkgreen" />
              <Cards value="300" badge="300" color="darkblue" />
              <Cards value="100" badge="300" color="darkred" />
              <Cards value="200" badge="300" color="darkgreen" />
              <Cards value="300" badge="300" color="darkblue" />
            </Row>
            <Row className="p-5">{props.children}</Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};
