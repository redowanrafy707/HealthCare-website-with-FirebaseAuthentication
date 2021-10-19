import React from 'react';
import { Row } from 'react-bootstrap';
import ServicesApi from '../../Hooks/ServicesApi';
import ServicesCard from './ServicesCard';

const Services = () => {
    const { services } = ServicesApi()
    return (
        <div className="container">
            <Row xs={1} md={3} className="mt-5">
                {
                    services.map((service) => (<ServicesCard key={service.id} service={service}></ServicesCard>
                    ))}
            </Row>
        </div>
    );
};

export default Services;