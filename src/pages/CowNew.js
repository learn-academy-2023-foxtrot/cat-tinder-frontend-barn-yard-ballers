import React, { useState } from 'react'
import { Form, FormGroup, Input, Label, Button } from "reactstrap"
import { useNavigate } from "react-router-dom"


function CowNew({createCow}) {
  const [newCow, setNewCow] = useState({
    name: "",
    breed: "",
    age: "",
    hobby: "",
    image: ""
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setNewCow({...newCow, [e.target.name]: e.target.value})
  }
  const handleSubmit = () => {
    createCow(newCow)
    navigate("/cowindex")
  }

  return (
    <div className='main-container-new'>
      <h2>Add a Cow</h2>
      <Form>
        <FormGroup>
          <Label for="name">
            Name
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="Place your name here"
            type="text"
            onChange={handleChange}
            value={newCow.name}
          />
        </FormGroup>
        <FormGroup>
          <Label for="breed">
            breed
          </Label>
          <Input
            id="breed"
            name="breed"
            placeholder="Place your breed here"
            type="text"
            onChange={handleChange}
            value={newCow.breed}
          />
        </FormGroup>
        <FormGroup>
          <Label for="age">
            Age
          </Label>
          <Input
            id="age"
            name="age"
            placeholder="Place your age here"
            type="number"
            onChange={handleChange}
            value={newCow.age}
            />
        </FormGroup>
        <FormGroup>
          <Label for="hobby">
            hobby
          </Label>
          <Input
            id="hobby"
            name="hobby"
            placeholder="Place your hobby here"
            type="text"
            onChange={handleChange}
            value={newCow.hobby}
            />
        </FormGroup>
        <FormGroup>
          <Label for="image">
            Image
          </Label>
          <Input
            id="image"
            name="image"
            placeholder="Place your image url here"
            type="url"
            onChange={handleChange}
            value={newCow.image}
            />
        </FormGroup>
        <Button onClick={handleSubmit} name="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default CowNew