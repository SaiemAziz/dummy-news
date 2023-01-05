import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className=" bg-base-300 sticky top-0 shadow-xl z-50">
            <div className='max-w-7xl mx-auto navbar'>
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case text-xl">DummyNews</Link>
            </div>
            <div className="">
                
                <div className="dropdown dropdown-end">
                    <label className="btn btn-ghost btn-circle avatar border-[2px] border-success">
                        <div className="w-10 rounded-full">
                            <img alt='' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlCT6xeoTVvmsbCzHxihZD6JHlSZd-mpshRbdsB67X-24y-LAVYzG1MeID5XwAAIMJjdo&usqp=CAU" />
                        </div>
                    </label> 
                </div>
            </div>
            </div>
        </div>
    );
};

export default Navbar;