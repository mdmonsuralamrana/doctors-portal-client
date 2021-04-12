import React from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    return (
        <section className="doctors">
            <div className="container">
                <h5 className="text-center  text-primary mb-5">Our Doctors</h5>
                <div style={{width:'100%', height:'100%'}} className="row col-md-4 float-left d-flex justify-content-center mt-5">
                    <Doctor />
                    <Doctor />
                    <Doctor />
                </div>
            </div>
        </section>
    );
};

export default Doctors;