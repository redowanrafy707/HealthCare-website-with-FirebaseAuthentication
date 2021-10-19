import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import AboutCard from './AboutCard';

const About = () => {
    const [ doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('/doctors_details.json')
            .then(res => res.json())
            .then(data =>  setDoctors(data))
    }, [])
    return (
        <div className="container"> 
                    <h1 className="mt-5 fs-2 fw-bold">Our Specialize Doctors</h1>
                <Row xs={1} md={2} lg={3} className="">
                    {
                        doctors.map((doctor) => (<AboutCard key={doctor._id} doctor={doctor}></AboutCard> 
                        ))}
               </Row>
        </div>
    );
};

export default About;