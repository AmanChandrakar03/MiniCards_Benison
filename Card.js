import React from 'react';
import './Card.scss'; //  CSS file for styling

const Card = ({ fullName, contactNo, email, joiningDate }) => {
    // Function to calculate total count in days since joining
    const calculateDaysSinceJoining = () => {
        const today = new Date();// creates a new Date object representing the current date and time.
        const joinDate = new Date(joiningDate);//creates a new Date object representing the joining date, which is passed as an argument to the component
        const diffTime = (today - joinDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    };


    //   const formatDate = (dateString) => {
    //     const date = new Date(dateString);
    //     const day = date.getDate().toString();
    //     const month = (date.getMonth() ).toString();
    //     const year = date.getFullYear();
    //     return `${day}-${month}-${year}`;
    //   };

    return (
        <div className="card">
            <div className="content">
                <div className="header">
                    <h2>{fullName}</h2>
                </div>
                <div className="body">
                    <p>Contact No.: {contactNo}</p>
                    <p>Email: {email}</p>
                    <div className="joining-info">
                        <p>Joining Date: {joiningDate}</p>
                        <p>Total count in days: {calculateDaysSinceJoining()}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
