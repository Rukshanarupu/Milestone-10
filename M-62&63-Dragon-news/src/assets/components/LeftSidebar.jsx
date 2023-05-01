import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSidebar = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/categories')
            .then(res => res.json())
            .then(data => {
                setCategories(data)
            })
            .catch(e => console.log(e))
    }, [])
    // console.log(categories)
    return (
        <div>
            <div>
                <h2>All Catgeories</h2>
                <div className='text-[#9F9F9F]'>
                    {
                        categories.map((item,i) => <p key={item.id}><Link  to={`/category/${item.id}`}>{item.name}</Link></p>)
                    }
                </div>
            </div>
        </div>
    );
};

export default LeftSidebar;