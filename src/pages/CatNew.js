import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap'
 




class CatNew extends Component {
  
  
  
  
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
                />
                <Label for="age">Age</Label>
                <Input
                  type="text"
                  age="age"
                />
                <Label for="enjoys">Enjoys</Label>
                <Input
                  type="text"
                  enjoys="enjoys"
                />
                 <Label for="image">Upload an image</Label>
                <Input
                  type="url"
                  image="image"
                />
              </FormGroup>
            </Form>




        </div>
    )
  }
}
export default CatNew 