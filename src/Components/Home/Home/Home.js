import React from 'react';
import Appointment from '../Appointment/Appointment';
import Exceptional from '../Exceptional/Exceptional';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Exceptional></Exceptional>
            <Appointment></Appointment>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;