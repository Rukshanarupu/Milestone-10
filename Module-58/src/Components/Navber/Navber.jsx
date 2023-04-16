import React, { useState } from 'react';

const Navber = () => {
    const [open, setOpen]=useState(false)

  const routes = [
                    { id: 1, name: 'Home', path: '/' }, 
                    { id: 2, name: 'About', path: '/about' }, 
                    { id: 3, name: 'Contact', path: '/contact'},
                    { id: 5, name: 'Services', path: '/Services' }];

  return (
    <div className="">
        <div onClick={()=>setOpen(!open)} className="md:hidden ml-9">
            
            <div className="btn btn-circle block"> 
                <span>{open===true 
                ? <svg className="swap-on fill-current inline h-10 pt-2"  xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
                : <svg className="swap-off fill-current inline h-10 pt-2" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg> 
                }</span>
            </div>
        </div>
        <div className={`navbar bg-base-100 '`}>        
            <ul className={`menu px-1 md:menu-horizontal absolute md:static duration-500 ${open? 'top-20':"-top-48"}`}>
                {
                    routes.map(route=>
                        <li>
                            <a href={route.path}>{route.name}</a>
                        </li>)          
                }
            </ul>
        </div>
    </div>
  );
};

export default Navber;