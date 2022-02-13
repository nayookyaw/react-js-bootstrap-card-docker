import { Component } from "react";

import { Container, Row, Col, Card, } from "react-bootstrap";

class Home extends Component {
    constructor(props) {
      super (props);
      this.state = {
        height : 0,
        isMultipleCol : false,
        windowWidth : window.innerWidth,
        roomList : [
          'Secondary',
          'Secondary',
          'Secondary',
          'Secondary',
          'Secondary',
          'Secondary',
          'Secondary',
          'Secondary',
        ]
      }

      this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

    }

    componentDidMount() {
      
      window.addEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
      this.setState({ windowWidth : window.innerWidth });
    }

    render() {
      let { roomList, windowWidth, isMultipleCol} = this.state;

      let dynamiCard = null;
      let rowCount = 2;

      let limitSmallScreen = 700;

      const Room = (props) => {
        console.log (props);

        const oneCol = (
          <Col
          key={props.idx}
          >
            <Card
              key={props.idx}
              text={props.variant.toLowerCase() === "light" ? "dark" : "white"}
              style={{ width: "100%", backgroundColor: "#747576" }}
              className="mb-2"
            >
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>{props.variant} Card Title </Card.Title>
                <Card.Text>
                  Card Text
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        )
        return oneCol;
      }

      dynamiCard = roomList.map((variant, idx) => {
        
        // check whether skip or not
        if (isMultipleCol) {
          isMultipleCol = false;
          return
        }

        if ((idx+1) % rowCount !== 0 && roomList.length > idx + 1) {
          isMultipleCol = true;
        } else {
          isMultipleCol = false;
        }

        // check the screen size for small screen
        if (windowWidth < limitSmallScreen) {
          isMultipleCol = false;
        }

        const rowCol = (
          <Row
            key={idx}
          >
            
            {/* first col */}
            <Room variant = {variant} idx = {idx} />

            {/* second col */}
            { isMultipleCol 
              && <Room variant = {roomList[idx+1]} idx = {idx+1} />
            }

          </Row>
        )
        return rowCol;
      }
      );
      
      return (
        <>
          <Container style={{ textAlign: '-webkit-center' }}>
            {dynamiCard}
          </Container>
          
        </>
      )
    }

}

export default Home;