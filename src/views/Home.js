import { Component } from "react";
// import { Card, CardHeader, CardBody, CardText, CardTitle } from "reactstrap";

import { Container, Row, Col, Card, CardColumns,  } from "react-bootstrap";

class Home extends Component {
    constructor(props) {
      super (props);
      this.state = {
        widthCard : 0,
        height : 0,
        
        dataArr : [
          'Primary',
          'Secondary',
          'Success',
          'Danger',
          'Warning',
          'Info',
          'Light',
          'Dark',
        ]
      }

      this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
      this.updateWindowDimensions();

      window.addEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
      let tempWidth = (window.innerWidth * 0.5) - (window.innerWidth * 0.2);

      if (window.innerWidth < 700) {
        tempWidth = window.innerWidth * 0.8;
      }

      this.setState({ widthCard: tempWidth });
    }

    render() {
        let { widthCard} = this.state;

        let dynamiCard = null;
        let numRow = 2;

        dynamiCard = this.state.dataArr.map((variant, idx) => (
          <Container style={{ textAlign : '-webkit-center'}}>
            <Row>
              <Col>     
                <Card
                  bg={variant.toLowerCase()}
                  key={idx}
                  text={variant.toLowerCase() === "light" ? "dark" : "white"}
                  style={{ width: widthCard }}
                  className="mb-2"
                >
                  <Card.Header>Header</Card.Header>
                  <Card.Body>
                    <Card.Title>{variant} Card Title </Card.Title>
                    <Card.Text>
                      Card Text
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col>     
                <Card
                  bg={variant.toLowerCase()}
                  key={idx}
                  text={variant.toLowerCase() === "light" ? "dark" : "white"}
                  style={{ width: widthCard }}
                  className="mb-2"
                >
                  <Card.Header>Header</Card.Header>
                  <Card.Body>
                    <Card.Title>{variant} Card Title </Card.Title>
                    <Card.Text>
                      Card Text
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
          )
        );
        
        return (
          <>
            {dynamiCard}
          </>
        )
    }

}

export default Home;