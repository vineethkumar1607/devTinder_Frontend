import { useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { DEFAULT_PROFILE_IMAGE } from '../utils/constants';
import { useAuth } from '../hooks/useAuth';

function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const userData = useSelector((state) => state.user.user, shallowEqual);
    console.log("Navbar - userData:", userData); 
    const userprofileImage = userData?.photoUrl || DEFAULT_PROFILE_IMAGE;
    const { logout } = useAuth();

    const handleLinkClick = () => setDropdownOpen(false);

    return (
        <nav className="navbar bg-base-300 shadow-sm px-4" aria-label="Main navigation">
            {/* Brand */}
            <div className="flex-1">
                <Link
                    to="/"
                    className="btn btn-ghost text-xl font-semibold hover:bg-base-200 focus:ring-2 focus:ring-primary"
                    aria-label="Home"
                >
                    devTinder
                </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex">
                <ul className="menu menu-horizontal px-1 gap-1">
                    <li>
                        <NavLink to="/" end className={({ isActive }) =>
                            `rounded-md hover:bg-base-200 ${isActive ? 'font-bold text-primary bg-base-200' : ''}`
                        }>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/connections" className={({ isActive }) =>
                            `rounded-md hover:bg-base-200 ${isActive ? 'font-bold text-primary bg-base-200' : ''}`
                        }>
                            Connections
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/messages" className={({ isActive }) =>
                            `rounded-md hover:bg-base-200 ${isActive ? 'font-bold text-primary bg-base-200' : ''}`
                        }>
                            Messages
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* User Actions */}
            <div className="flex-none gap-2 items-center">
                {/* Mobile Menu */}
                <div className="md:hidden dropdown dropdown-end">
                    <button
                        tabIndex={0}
                        className="btn btn-ghost btn-square"
                        aria-label="Menu"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <ul
                        tabIndex={0}
                        className="dropdown-content menu menu-sm bg-base-100 rounded-box shadow-lg mt-3 z-[100] w-56 p-2"
                    >
                        <li><NavLink to="/" onClick={handleLinkClick}>Home</NavLink></li>
                        <li><NavLink to="/connections" onClick={handleLinkClick}>Connections</NavLink></li>
                        <li><NavLink to="/messages" onClick={handleLinkClick}>Messages</NavLink></li>
                        {userData && (
                            <>
                                <div className="divider my-1"></div>
                                <li><NavLink to="/profile" onClick={handleLinkClick}>Profile</NavLink></li>
                                <li><NavLink to="/settings" onClick={handleLinkClick}>Settings</NavLink></li>
                                <li><button onClick={() => { logout(); setDropdownOpen(false); }}>Logout</button></li>
                            </>
                        )}
                    </ul>
                </div>

                {/* Avatar Dropdown (Only on md+ screens) */}
                {userData ? (
                    <div className="hidden md:block dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar hover:ring-2 hover:ring-primary focus:ring-2 focus:ring-primary">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="User profile"
                                    src={userprofileImage}
                                    width={40}
                                    height={40}
                                    loading="lazy"
                                />
                            </div>
                        </label>
                        <ul tabIndex={0} className="dropdown-content menu menu-sm bg-base-100 rounded-box shadow-lg mt-3 z-[100] w-52 p-2">
                            <li>
                                <NavLink to="/profile" className="justify-between">
                                    Profile
                                    <span className="badge badge-primary">{userData.firstName}</span>
                                </NavLink>
                            </li>
                            <li><NavLink to="/requests">Requests</NavLink></li>
                            <li><NavLink to="/settings">Settings</NavLink></li>
                            <li><button onClick={logout}>Logout</button></li>
                        </ul>
                    </div>

                ) : (
                    <Link to="/login" className="btn btn-sm btn-outline btn-primary">
                        Login
                    </Link>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
