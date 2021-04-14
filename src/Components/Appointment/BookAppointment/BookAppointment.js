import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const bookingData = [
    {
        id: '1',
        subject: 'Teeth Orthodontics',
        visitingHours: '8:00 AM - 9:00 AM',
        totalSpaces:'10'
    },
    {
        id: '2',
        subject: 'Cosmetic Dentistry',
        visitingHours: '9:30 AM - 11:00 AM',
        totalSpaces:'10'
    },
    {
        id: '3',
        subject: 'Teeth Cleaning',
        visitingHours: '11:15 AM - 1:00 PM',
        totalSpaces:'10'
    },
    {
        id: '4',
        subject: 'Cavity Protection',
        visitingHours: '4:00 PM - 5:30 PM',
        totalSpaces:'10'
    },
    {
        id: '5',
        subject: 'Teeth Orthodontics',
        visitingHours: '6:00 PM - 8:00 PM',
        totalSpaces:'10'
    },
    {
        id: '6',
        subject: 'Teeth Orthodontics',
        visitingHours: '8:00 PM - 10:00 PM',
        totalSpaces:'10'
    }
]

const BookAppointment = ({date}) => {
    return (
        <section>
            <h2 className="text-center text-brand mb-5">Available Appointments On {date.toDateString()}</h2>
            <div className="row">
                {
                    bookingData.map(booking => <BookingCard date={date} booking={booking} key={booking.id}></BookingCard> )
                }
            </div>
        </section>
    );
};

export default BookAppointment;