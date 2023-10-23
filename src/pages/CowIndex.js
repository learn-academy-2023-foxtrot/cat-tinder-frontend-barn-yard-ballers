import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap"
import { NavLink } from "react-router-dom"

function CowIndex({ cows }) {
  return (
    <div className='main-container-index' id='cards'>
    <main >
    {cows?.map((cow, index) => {
      return (
        <Card className='main-card'
        style={{
          width: "14rem"
        }}
        key={index}
        >
          <img 
          alt={`profile picture for ${cow.name}`} src={cow.image} 
          />
          <CardBody>
            <CardTitle tag="h5">
              {cow.name}
              </CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {cow.age}
            </CardSubtitle>
            <Button>
              <NavLink to={`/cowshow/${cow.id}`} className="nav-link">
              See More Details
              </NavLink>
            </Button>
          </CardBody>
        </Card>
      )
    })}
    </main>
    </div>
  )
}

export default CowIndex