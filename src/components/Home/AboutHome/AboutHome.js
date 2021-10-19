import React from 'react';
import ".//AboutHome.css"
const AboutHome = () => {
    return (
        <div className="row g-5">
            <div className=" col-sm-12 col-md-6  col-lg-6">
                <img className="images" src="https://image.freepik.com/free-vector/old-man-hospital-room_82574-2898.jpg"  alt=""></img>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
                <h1 className="">Who We ARE</h1>
                <p className="">Asgar Ali Hospital is the Best Hospital in Bangladesh. We are a 250 bedded multi-disciplinary tertiary-care Hospital, situated at Gandaria, Dhaka. It is a concern of the ‘City Group’ (www.citygroup.com.bd) which is one of the top Conglomerates in Bangladesh, started its journey back in 1972 and in a span of four decades, it has grown-up as one of the largest Industrial & Commercial Icons.</p>
            </div>
        </div>
    );
};

export default AboutHome;