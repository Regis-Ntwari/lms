import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import logo from "../../logo.jpeg";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
export const LoginComponent = (props) => {
  const classes = useStyles();
  return (
    <Container>
      <div className="pt-5">
        <img src={logo} alt="Logo" width="100px" height="100px" />
        <span
          style={{
            fontSize: "30px",
            color: "darkblue",
            fontWeight: "bolder",
          }}
          className="p-3"
        >
          Rwanda SDA Literature Mission Service
        </span>
      </div>
      <Row className="pt-5">
        <Col xs={0} sm={4}>
          <Card
            style={{
              width: "auto",
              borderRadius: "5px",
              borderColor: "darkblue",
              height: "auto",
            }}
          >
            <Card.Header
              style={{
                backgroundColor: "darkblue",
                color: "white",
              }}
              className="mr-0"
            >
              <span className="pl-0">Read Some More</span>
            </Card.Header>
            <Card.Body
              style={{
                backgroundColor: "lightgray",
                fontSize: "15px",
              }}
            >
              <p>
                Policies of privatisation should be considered as responses to
                several distinct pressures.
              </p>
              <p>
                Policies of privatisation should be considered as responses to
                several distinct pressures.
              </p>
              <p>
                Policies of privatisation should be considered as responses to
                several distinct pressures.
              </p>
              <p>
                Policies of privatisation should be considered as responses to
                several distinct pressures.
              </p>
              <p>
                Policies of privatisation should be considered as responses to
                several distinct pressures.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={8}>
          <span
            style={{
              color: "darkblue",
              fontSize : "28px"
            }}
          >
            Login
          </span><br/>
          <form className={classes.root} noValidate={false} autoComplete="off">
            <TextField
              style={{
                  width : "300px"
              }}
              name="email"
              fullWidth
              id="outlined-basic"
              label="Job email"
              variant="outlined"
              value={props.email}
              onChange={props.handleChange}
            />
            <br />
            <TextField
              style={{
                  width : "300px",
              }}
              name="password"
              fullWidth
              label="password"
              type="password"
              variant="outlined"
              value={props.password}
              onChange={props.handleChange}
            />
            <br />
            <br />
            <Button
              fullWidth={true}
              variant="contained"
              color="primary"
              onClick={() => props.submitData()}
            >
              Login
            </Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};
