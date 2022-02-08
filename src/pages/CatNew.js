import React, { Component } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { Redirect } from "react-router-dom";

class CatNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newCat: {
        name: "",
        age: "",
        enjoys: "",
        image: "",
      },
      submitted: false,
    };
  }
  handleChange = (e) => {
    console.log(e.target.value)
    let { newCat } = this.state;
    newCat[e.target.name] = e.target.value;
    this.setState({ newCat: newCat });
  };

  handleSubmit = () => {
    this.props.createCat(this.state.newCat);
    this.setState({ submitted: true });
  };

  render() {
    return (
      <>
        <h3> Create a new profile </h3>
        <Form className="form">
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.newCat.name}
            />
            </FormGroup>
            <FormGroup>
            <Label for="age">Age</Label>
            <Input
              type="number"
              name="age"
              onChange={this.handleChange}
              value={this.state.newCat.age}
            />
            </FormGroup>
            <FormGroup>
            <Label for="enjoys">Enjoys</Label>
            <Input
              type="text"
              name="enjoys"
              onChange={this.handleChange}
              value={this.state.newCat.enjoys}
            />
            </FormGroup>
            <FormGroup>
            <Label for="image">Upload an image</Label>
            <Input
              type="text"
              name="image"
              onChange={this.handleChange}
              value={this.state.newCat.image}
            />
            </FormGroup>

            <Button name="submit" onClick={this.handleSubmit}>
              Create a New Profile
            </Button>
        </Form>
        {this.state.submitted && <Redirect to="/catindex" />}
      </>
    );
  }
}
export default CatNew;
