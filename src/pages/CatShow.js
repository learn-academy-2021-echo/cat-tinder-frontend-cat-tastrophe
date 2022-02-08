import React, { Component } from "react";
import { Col, Card, CardTitle, CardText } from "reactstrap";



class CatShow extends Component {
  render() {
    const { cat } = this.props;

    return (
      <>
        <h3 className="catShow"> You're interested in.. </h3>
        
          <Col className="card" sm="4">
            <Card body>
              <CardTitle>
                Hi, my name is {cat && this.props.cat.name}!
              </CardTitle>
              <img src={cat && this.props.cat.image} className="catimage" alt="adorable cat" style={{height:550, margin:"auto"}}/>
              <CardText>
                I am {cat && this.props.cat.age} years old. I enjoy{" "}
                {cat && this.props.cat.enjoys}.
              </CardText>
            </Card>
          </Col>
        
      </>
    );
  }
}
export default CatShow;
