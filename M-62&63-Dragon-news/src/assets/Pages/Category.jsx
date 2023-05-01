import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../components/NewsCard';

const Category = () => {
    const data = useLoaderData()

    // console.log(data)
    return (
        <div>
            <h2 className='text-xl font-bold text-center'>This is category : {data.length}</h2>
            <div className='mt-5'>
                {
                    data.map((news,i) => <NewsCard key={i} {...news}></NewsCard>)
                }

            </div>
        </div>
    );
};

export default Category;