import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="w-full bg-blue-300 py-2">
            <nav className="w-4/5 mx-auto">
                <div className="flex items-center justify-between">
                    <div>
                        {/* title  */}
                        <Link to='/home'>
                            <h1 className="uppercase text-3xl font-bold">meals</h1>
                        </Link>
                    </div>
                    {/* navigation  */}
                    <div className="flex">
                        <div>
                            <Link to='/home'>
                                <span className="p-4 font-bold cursor-pointer focus:border-blue-300">Home</span>
                            </Link>
                        </div>
                        <div>
                            <Link to='/meals'>
                                <span className="p-4 font-bold cursor-pointer focus:border-blue-300">Meals</span>
                            </Link>
                        </div>
                        <div>
                            <Link to='/about'>
                                <span className="p-4 font-bold cursor-pointer focus:border-blue-300">About</span>
                            </Link>
                        </div>
                        <div>
                            <Link to='/contact'>
                                <span className="p-4 font-bold cursor-pointer focus:border-blue-300">Contact</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;