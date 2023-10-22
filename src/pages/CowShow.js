import React from "react"
import { useParams } from "react-router-dom"
import { Card, CardBody, CardSubtitle, CardTitle, CardText } from "reactstrap"

const CowShow = ({ cows }) => {
  const { id } = useParams()
  let currentCow = cows?.find((cow) => cow.id === +id)
  return (
    <>
      <h1 className="heading">CowShow Page</h1>
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
            {/* <CardTitle tag="h6"> 
            Breed: {currentCow.breed}
            </CardTitle> */}
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {currentCow.age}
            </CardSubtitle>
            <CardText tag="h6"> 
            {currentCow.hobby}
            </CardText>
          </CardBody>
        </Card>
          )}
      </main>
    </>
  )
}

export default CowShow