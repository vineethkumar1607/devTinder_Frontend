import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar bg-base-300 shadow-sm px-4" aria-label="Main navigation">
            {/* Logo/Brand */}
            <div className="flex-1">
                <Link
                    to="/"
                    className="btn btn-ghost text-xl font-semibold hover:bg-base-200 focus:ring-2 focus:ring-primary"
                    aria-label="Home"
                >
                    devTinder
                </Link>
            </div>

            {/* Navigation Links - Now properly aligned */}
            <div className="flex-none hidden md:flex">
                <ul className="menu menu-horizontal px-1 gap-1">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `rounded-md hover:bg-base-200 ${isActive ? 'font-bold text-primary bg-base-200' : ''}`
                            }
                            end
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/connections"
                            className={({ isActive }) =>
                                `rounded-md hover:bg-base-200 ${isActive ? 'font-bold text-primary bg-base-200' : ''}`
                            }
                        >
                            Connections
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/messages"
                            className={({ isActive }) =>
                                `rounded-md hover:bg-base-200 ${isActive ? 'font-bold text-primary bg-base-200' : ''}`
                            }
                        >
                            Messages
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* User Profile and Mobile Menu */}
            <div className="flex-none gap-2">
                {/* Mobile Menu Button */}
                <div className="md:hidden dropdown dropdown-end">
                    <button
                        tabIndex={0}
                        className="btn btn-ghost btn-square"
                        aria-label="Menu"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <ul
                        tabIndex={0}
                        className="dropdown-content menu menu-sm bg-base-100 rounded-box shadow-lg mt-3 z-[100] w-56 p-2"
                    >
                        <li><NavLink to="/" end>Home</NavLink></li>
                        <li><NavLink to="/connections">Connections</NavLink></li>
                        <li><NavLink to="/messages">Messages</NavLink></li>
                        <div className="divider my-1"></div>
                        <li><NavLink to="/profile">Profile</NavLink></li>
                        <li><NavLink to="/settings">Settings</NavLink></li>
                        <li><button>Logout</button></li>
                    </ul>
                </div>

                {/* User Profile Dropdown */}
                <div className="dropdown dropdown-end">
                    <button
                        tabIndex={0}
                        className="btn btn-ghost btn-circle avatar hover:ring-2 hover:ring-primary focus:ring-2 focus:ring-primary"
                        aria-label="User menu"
                    >
                        <div className="w-10 rounded-full">
                            <img
                                alt="User profile"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                width={40}
                                height={40}
                                loading="lazy"
                            />
                        </div>
                    </button>
                    <ul
                        tabIndex={0}
                        className="dropdown-content menu menu-sm bg-base-100 rounded-box shadow-lg mt-3 z-[100] w-52 p-2"
                        aria-label="User dropdown menu"
                    >
                        <li>
                            <NavLink to="/profile" className="justify-between">
                                Profile
                                <span className="badge badge-primary">New</span>
                            </NavLink>
                        </li>
                        <li><NavLink to="/settings">Settings</NavLink></li>
                        <li><button>Logout</button></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;