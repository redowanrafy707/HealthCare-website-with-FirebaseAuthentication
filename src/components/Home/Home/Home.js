import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DemoServices from '../DemoServices/DemoServices';
import Testimonials from '../Testimonial/Testimonial';
import AboutHome from './../AboutHome/AboutHome';
import MedInfo from './../MedInfo/MedInfo';


const Home = () => {

    return (
        <div className="">
            <div>
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src="https://image.freepik.com/free-vector/flat-hand-drawn-hospital-reception-scene_52683-54613.jpg"
                            alt="First slide" width="50%" 

                        />
                        {/* <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            src="https://image.freepik.com/free-vector/people-walking-sitting-hospital-building-city-clinic-glass-exterior-flat-vector-illustration-medical-help-emergency-architecture-healthcare-concept_74855-10130.jpg"
                            alt="Second slide" width="50%"
                        />
                        {/* <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://image.freepik.com/free-vector/flat-hand-drawn-patient-taking-medical-examination_52683-57828.jpg"
                            alt="Third slide" width="50%"
                        />
                        {/* <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                </Carousel>
            </div>
            

            <AboutHome></AboutHome>
            <MedInfo></MedInfo>
            <h1 className="fs-2 fw-900 mb-5">All Our Specialized Services</h1>
            <DemoServices></DemoServices>
             <Link  to="/services"><Button variant="outline-info" className=" m-3 p-1 mt-5 rounded-pill"> Our More Services </Button></Link>
            
            <Testimonials></Testimonials>
            
        </div>
    );
};

export default Home;