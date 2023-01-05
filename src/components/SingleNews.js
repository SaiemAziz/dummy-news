import React from 'react';
import { Link } from 'react-router-dom';

const SingleNews = ({ news }) => {

    let { image, title, details, id } = news;
    return (
        <div className='card glass rounded-none shadow-xl'>
            <img src={image} alt="" />
            <div className='p-5 flex flex-col justify-between'>
                <p className='text-xl font-bold mb-5'>{title}</p>
                <div className=''>
                <p className='' dangerouslySetInnerHTML={{ __html: details.slice(0, 350) + '...' }}></p>
                <div className="ml-auto w-fit">
                <Link to={`details/${id}`} className="text-info italic font-bold text-sm ">See More</Link>
                </div>
                </div>
            </div>
        </div>
    );
};

export default SingleNews;