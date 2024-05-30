import React, { useState } from 'react';

const Appointment = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const date = e.target.date.value;
        const time = e.target.time.value;
        const doctor = e.target.doctor.value;
        const formData = {name,email,date,time,doctor}
     
        console.log('Appointment Data:', formData);
        alert('Appointment successfully made!');
        e.target.reset();
      
   
    };

    return (
        <div className="max-w-md mx-auto p-6 border rounded-lg shadow-lg bg-white">
            <h2 className="text-2xl font-bold text-center text-gray-800">Make a Medical Appointment</h2>
            <p className='text-xl text-center text-gray-800'>You can choose date & time</p>
            <p className='text-xl text-center text-gray-800 mb-6'>I will give you feed back your E-mail</p>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col">
                    <label htmlFor="name" className="mb-2 font-semibold text-gray-600">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"                
                        className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email" className="mb-2 font-semibold text-gray-600">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"                  
                        className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="date" className="mb-2 font-semibold text-gray-600">Date:</label>
                    <input
                        type="date"
                        id="date"
                        name="date"                  
                        className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="time" className="mb-2 font-semibold text-gray-600">Time:</label>
                    <input
                        type="time"
                        id="time"
                        name="time"
                        className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="doctor" className="mb-2 font-semibold text-gray-600">Doctor:</label>
                    <input
                        type="text"
                        id="doctor"
                        name="doctor"
                        className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
                >
                    Make Appointment
                </button>
            </form>
        </div>
    );
};

export default Appointment;
