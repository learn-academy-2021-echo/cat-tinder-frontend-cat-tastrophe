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
      <div className="createNew">
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
            <Label for="age">Age</Label>
            <Input
              type="text"
              age="age"
              onChange={this.handleChange}
              value={this.state.newCat.age}
            />
            <Label for="enjoys">Enjoys</Label>
            <Input
              type="text"
              enjoys="enjoys"
              onChange={this.handleChange}
              value={this.state.newCat.enjoys}
            />
            <Label for="image">Upload an image</Label>
            <Input
              type="url"
              image="image"
              onChange={this.handleChange}
              value={this.state.newCat.name}
            />

            <Button name="submit" onClick={this.handleSubmit}>
              Create a New Profile
            </Button>
          </FormGroup>
        </Form>
        {this.state.submitted && <Redirect to="/catindex" />}
      </div>
    );
  }
}
export default CatNew;
