import React, { useState } from 'react'
import { NavLink, useParams, useNavigate } from "react-router-dom"
import { Form, FormGroup, Label, Input, Button } from "reactstrap"

function CowEdit({cows, updateCow}) {
  const {id} = useParams()
  let currentCow = cows?.find((cow) => cow.id === +id)
  
  const [editCow, setEditCow] = useState({
    name: currentCow?.name,
    age: currentCow?.age,
    breed: currentCow?.breed,
    hobby: currentCow?.hobby,
    image: currentCow?.image
  })
  const handleChange = (e) => {
    setEditCow({...editCow, [e.target.name]: e.target.value})
  }
  const navigate = useNavigate()

  const handleSubmit = () => {
    updateCow(editCow, currentCow.id)
    navigate("/cowindex")
  }

  return (
    <>
      <h2>Add a Cow</h2>
      <Form>
        <FormGroup>
          <Label for="name">
            Name
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            onChange={handleChange}
            value={editCow.name}
          />
        </FormGroup>
        <FormGroup>
          <Label for="age">
            Age
          </Label>
          <Input
            id="age"
            name="age"
            type="number"
            onChange={handleChange}
            value={editCow.age}
          />
        </FormGroup>
        <FormGroup>
          <Label for="breed">
            breed
          </Label>
          <Input
            id="breed"
            name="breed"
            type="text"
            onChange={handleChange}
            value={editCow.breed}
          />
        </FormGroup>
        <FormGroup>
          <Label for="hobby">
            hobby
          </Label>
          <Input
            id="hobby"
            name="hobby"
            type="text"
            onChange={handleChange}
            value={editCow.hobby}
          />
        </FormGroup>
        <FormGroup>
          <Label for="image">
            Image
          </Label>
          <Input
            id="image"
            name="image"
            type="url"
            onChange={handleChange}
            value={editCow.image}
          />
        </FormGroup>
        <Button name="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </>
  )
}

export default CowEdit