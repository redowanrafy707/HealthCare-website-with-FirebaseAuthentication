import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
const DemoServicesCard = (props) => {
    const { id, title, img } = props.service
    const history = useHistory()
    const handleCardDetails = (id) => {
        console.log(id);
        history.push(`/services/${id}`)
    }
    return (
        <div><Col className="mb-3 ">
            <Card>
                <Card.Img variant="top" src={img} className="w-100 mx-auto p-2 mb-3" height="300px" />
                <Card.Body >
                    <Card.Title>{title}</Card.Title>
                    <Button variant="info" onClick={() => handleCardDetails(id)}>See Details
                </Button>
                </Card.Body>
                
            </Card>
        </Col>

        </div>
    );
};

export default DemoServicesCard;