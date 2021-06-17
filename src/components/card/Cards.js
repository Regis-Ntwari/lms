import React from 'react'
import { Badge, Card } from 'react-bootstrap'

export const Cards = (props) => {
    return (
        <div className="p-4">
            <Card className="card" style={{backgroundColor : props.color}}>
                <Badge className="card-badge" variant="light">{props.badge}</Badge>
                <Card.Body className="card-text-color card-text">{props.value}</Card.Body>
                <p className="card-text-color card-text-location pt-4">Kigali</p>
              </Card>
        </div>
    )
}
