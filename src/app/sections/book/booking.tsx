"use client"
import React, { useEffect, useState } from "react";
import './booking.css';
import SectionTitle from "@/app/components/sectTitle/sectionTitle";

export default function Booking() {
    const initialState = {
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '',
        message: '',
        validate: '',
    };

    const [text, setText] = useState(initialState);

    const handleTextChange = (e:Event | any) =>{
        const {name, value} = e.target;
        setText({...text, [name]: value, validate: ''});
    }

    const handleSubmitBooking = async (e:Event|any) =>{
        e.preventDefault();
        if(
            text.name === '' ||
            text.email === '' ||
            text.date === '' ||
            text.time === '' 
        ) {
            setText({...text, validate: 'Please fill in all fields'});
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/api/booking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(text),
            });

            setText({...text, validate: 'loading'});

            const result = await response.json();
            if (result){
                setText({...text, validate:'success'});
                console.log('success', result);
            }
        }  catch (error) {
            setText({...text, validate:'error'});
            console.log('error', error);
        }
    };

    return(
        <section id="book-a-table" className="book-a-table">
            <div className="container" data-aos="fade-up">
                <SectionTitle title="What are you waiting for?" subtitle="reserve now" />
                <form 
                    onSubmit={handleSubmitBooking}
                    className="booking-form"    
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <div className="row">
                        <div className="col-lg-4 col-md-6 form-group">
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Your Name"
                                onChange={handleTextChange}
                                value={text.name}
                            />
                        </div>
                    
                        <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                placeholder="Your Email"
                                onChange={handleTextChange}
                                value={text.email}
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                            <input
                                type="text"
                                className="form-control"
                                name="phone"
                                placeholder="Your Phone"
                                onChange={handleTextChange}
                                value={text.phone}
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 form-group mt-3">
                            <input
                                type="date"
                                name="date"
                                className="form-control"
                                placeholder="Date"
                                onChange={handleTextChange}
                                value={text.date}
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 form-group mt-3">
                            <input
                                type="time"
                                className="form-control"
                                name="time"
                                placeholder="Time"
                                onChange={handleTextChange}
                                value={text.time}
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 form-group mt-3">
                            <input
                                type="text"
                                className="form-control"
                                name="guests"
                                placeholder="Guests"
                                onChange={handleTextChange}
                                value={text.guests}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <textarea
                                className="form-control"
                                name="message"
                                placeholder="Message"
                                rows={5}
                                onChange={handleTextChange}
                                value={text.message}
                            ></textarea>
                        </div>
                        <div className="mb-3">
                            {text.validate === 'loading' && (
                                <div className="loading">send booking</div>
                            )}
                            {text.validate === 'incomplete' && (
                                <div className="error-message">Please fill in all the fields</div>
                            )}
                            {text.validate === 'success' && (
                                <div className="sent-message">Your booking request was sent. We will call back or send an email to confirm your reservation. Thank you</div>
                            )}  
                            {text.validate === 'error' && (
                                <div className="error-message">Something went wrong</div>
                            )}
                        </div>
                        <div className="text-center"><button type="submit">Book a Table</button>
                        </div>
                    </div>
                </form>
            </div>    
        </section>
    )
}