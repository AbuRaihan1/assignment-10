import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const data =useLoaderData();
    console.log(data)
    return (
        <div>
            <h2>detail course</h2>
        </div>
    );
};

export default CourseDetails;