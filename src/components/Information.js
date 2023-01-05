import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import Helmet from 'react-helmet'
const Information = () => {
    let [news, setNews] = useState(null)
    let location = useLocation()
    let id = location.pathname.replace('/details/', '')


    useEffect(() => {
        fetch('/news.json')
            .then(res => res.json())
            .then(data => {
                let newss = data.find(n => n.id === id)
                setNews(newss)
            })
    }, [id])
    return (
        <div className='bg-cover bg-no-repeat bg-fixed bg-opacity-50 bg-center' style={{ backgroundImage: `url(${news?.image})` }}>
            <Helmet>
                <title>Details - Dummy News</title>
                <meta name='description' content={news?.details} />
                <meta name='keywords' content={`news, bitcoin, digital currency, ${news?.title}`} />
            </Helmet>
            <div className='backdrop-blur-md px-10'>
                <div className=' max-w-7xl mx-auto bg-white'>
                    <img className='w-full' src={news?.image} alt="" />
                    <div className='md:p-10 p-5'>
                        <h1 className='lg:text-4xl text-2xl text-center mb-10 font-bold'>{news?.title}</h1>
                        <div className='lg:text-xl' dangerouslySetInnerHTML={{ __html: news?.details }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Information;