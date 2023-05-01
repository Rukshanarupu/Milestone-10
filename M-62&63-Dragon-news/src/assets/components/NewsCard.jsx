import moment from 'moment';
import React from 'react';
import {  FaBookmark, FaShare } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const NewsCard = (props) => {
    // console.log(props)
    const { _id, title, details, rating,  image_url, total_view, author } = props
    return (
        <div className='border border-spacing-2 rounded-lg '>
            <div className='bg-gray-300 w-full rounded-lg flex justify-between p-2'>
               <div className='flex justify-center gap-2'>
               <img className='w-[50px] h-[50px] rounded-full ' src={author.img} alt="" />
                <div>
                    <h3>{author.name}</h3>
                    <h3>{moment(author.published_date ).format('MMMM D YYYY')}</h3>
                </div>
               </div>
                <div className='flex justify-center items-center gap-3 '>
<FaBookmark  className=' cursor-pointer'></FaBookmark>
<FaShare     className=' cursor-pointer'></FaShare>
                </div>

            </div>
            <div className='text-center flex flex-col justify-center items-center p-5'>
                <h2 className='font-xl font-bold'>{title}</h2>
                <img src={image_url} alt="" />
                <div>
                  {
                    details > 250 ? <>{details}</> : <>{details.slice(0,250)}...<Link className='text-green-600' to={`/news/${_id}`}>Read more </Link></>
                  } 

                </div>
            </div>
            <div className='flex justify-between p-5 font-bold text-lg'>
                <div>Ratings : {rating.number }</div>
                <div>Views : {total_view}</div>

            </div>
            

        </div>
    );
};

export default NewsCard;