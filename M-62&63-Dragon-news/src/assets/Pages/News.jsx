import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import moment from 'moment';
import {  FaBookmark, FaLongArrowAltLeft, FaShare } from 'react-icons/fa';

const News = () => {

    const  { _id, title, details, rating,  image_url, total_view, author,category_id   }  = useLoaderData()
 
    return (
        <div className='border border-spacing-2 rounded-lg '>

        <div className='text-center flex flex-col justify-center items-center p-5'>
            <h2 className='font-xl font-bold'>{title}</h2>
            <img src={image_url} alt="" />
            <div>
            {details}

            </div>
        </div>

       <Link className='btn' to={`/category/${category_id}`}> <FaLongArrowAltLeft> </FaLongArrowAltLeft> All news this category </Link>
    
        

    </div>
    );
};

export default News;