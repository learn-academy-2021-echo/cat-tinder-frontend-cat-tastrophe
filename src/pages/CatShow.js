import React, { Component } from "react";
import { Col, Card, CardTitle, CardText } from "reactstrap";
class CatShow extends Component {
  render() {
    const { cat } = this.props;

    return (
      <div className="catShow">
        <h3> You Selected </h3>
        <div className="cardcontainer">
          <Col sm="4">
            <Card body>
              <CardTitle>
                Hi, my name is {cat && this.props.cat.name}!
              </CardTitle>
              <img src={cat && this.props.cat.image} alt="adorable cat" />
              <CardText>
                I am {cat && this.props.cat.age} years old. I enjoy{" "}
                {cat && this.props.cat.enjoys}.
              </CardText>
            </Card>
          </Col>
        </div>
      </div>
    );
  }
}
export default CatShow;
