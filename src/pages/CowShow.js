import React from "react"
import { useParams, NavLink } from "react-router-dom"
import { Card, CardBody, CardSubtitle, CardTitle, CardText, Button } from "reactstrap"

const CowShow = ({ cows }) => {
  const { id } = useParams()
  let currentCow = cows?.find((cow) => cow.id === +id)
  return (
    <div className="main-container-show">
      <h1 className="heading">Say hello to</h1>
      <main className="card">
        {currentCow && (
          <Card
          style={{
            width: "18rem"
          }}
          >
          <img 
          alt={`profile picture for ${currentCow.name}`} 
          src={currentCow.image} 
          />
          <CardBody>
            <CardTitle tag="h5">
              Name: {currentCow.name}
              </CardTitle>
            <CardTitle tag="h6"> 
            Breed: {currentCow.breed}
            </CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {currentCow.age}
            </CardSubtitle>
            <CardText tag="h6"> 
            Hobby: {currentCow.hobby}
            </CardText>
            <NavLink to="/catindex">
            <Button> Delete Cow Profile </Button>
            </NavLink>
            <NavLink to={`/cowedit/${currentCow.id}`}>
              <Button name="submit">
                Edit this Cow
              </Button>
            </NavLink>
          </CardBody>
        </Card>
          )}
      </main>
    </div>
  )
}

export default CowShow