import React, { useEffect } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import logo from '../../images/logo.png'
import { Link } from "react-router-dom"
import toast from 'react-hot-toast'
import '../../styles/navbar.css'
import { useAuth } from '../../context/auth'

const Navbar = () => {

    const [auth, setAuth] = useAuth();

    const handleSubmit = () => {
        setAuth({
            ...auth,
            user: null,
            token: ''
        })
        localStorage.removeItem('auth')
        toast.success('Logged Out Successfully')
    }

    


    useEffect(() => {
        const navBar = document.querySelectorAll(".nav-link");
        const navCollapse = document.querySelector(".navbar-collapse.collapse");

        const handleNavClick = () => {
            navCollapse.classList.remove("show");
        };

        navBar.forEach((a) => {
            a.addEventListener("click", handleNavClick);
        });

        return () => {
            navBar.forEach((a) => {
                a.removeEventListener("click", handleNavClick);
            });
        };
    }, []);

    return (
        <>
            {auth?.user?.role ? (
                <>
                    <header className='header_wrapper'>
                        <nav className="navbar navbar-expand-lg fixed-top">
                            <div className="container-fluid mx-3">
                                <Link to='/'>
                                    <img src={logo} style={{ width: '60px' }} alt='no logo' />
                                </Link>
                                <button className="navbar-toggler pe-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <BiMenuAltRight size={35} />
                                </button>
                                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                                    <ul className="navbar-nav menu-navbar-nav">
                                        <Link to='/' style={{ textDecoration: 'none' }}>
                                            <li className="nav-item">
                                                <span className="nav-link clickbtn" aria-current="page">Home</span>
                                            </li>
                                        </Link>
                                        <Link to='/about' style={{ textDecoration: 'none' }}>
                                            <li className="nav-item">
                                                <span className="nav-link clickbtn" aria-current="page">About Us</span>
                                            </li>
                                        </Link>
                                        <Link to='/contact' style={{ textDecoration: 'none' }}>
                                            <li className="nav-item">
                                                <span className="nav-link clickbtn" aria-current="page">Contact Us</span>
                                            </li>
                                        </Link>
                                    </ul>

                                    {!auth.user ? (<ul className='mt-2 text-center'>
                                        <Link to='/login' style={{ textDecoration: 'none' }} className="nav-item text-center">
                                            <span className="nav-link learn-more-btn btn-extra-header clickbtn" aria-current="page">Login</span>
                                        </Link>
                                        <Link to='/register' style={{ textDecoration: 'none' }} className="nav-item text-center">
                                            <span className="nav-link learn-more-btn clickbtn" aria-current="page">Register</span>
                                        </Link>
                                    </ul>) : (<ul className='mt-2 text-center'>
                                        <Link to={`/dashboard${auth?.user?.role === 1 ? "/" : "/profile"}`} style={{ textDecoration: 'none' }} className="nav-item text-center">
                                            <span className="nav-link learn-more-btn clickbtn" aria-current="page">Dashboard</span>
                                        </Link>
                                        <Link onClick={handleSubmit} to='/login' style={{ textDecoration: 'none' }} className="nav-item text-center">
                                            <span className="nav-link learn-more-btn-logout clickbtn" aria-current="page">Logout</span>
                                        </Link>
                                    </ul>)
                                    }
                                </div>
                            </div>
                        </nav>
                    </header>
                </>
            ) : (<>

                <header className='header_wrapper'>
                    <nav className="navbar navbar-expand-lg fixed-top">
                        <div className="container-fluid mx-3">
                            <Link to='/'>
                                <img src={logo} style={{ width: '60px' }} />
                            </Link>
                            <button className="navbar-toggler pe-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <BiMenuAltRight size={35} />
                            </button>
                            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                                <ul className="navbar-nav menu-navbar-nav">
                                    <Link to='/emergency' style={{ textDecoration: 'none' }} className="nav-item text-center">
                                        <span className="nav-link learn-more-btn-logout clickbtn" aria-current="page">Emergency</span>
                                    </Link>
                                    <Link to='/' style={{ textDecoration: 'none' }}>
                                        <li className="nav-item">
                                            <span className="nav-link clickbtn" aria-current="page">Home</span>
                                        </li>
                                    </Link>
                                    <Link to='/about' style={{ textDecoration: 'none' }}>
                                        <li className="nav-item">
                                            <span className="nav-link clickbtn" aria-current="page">About Us</span>
                                        </li>
                                    </Link>
                                    <Link to='/contact' style={{ textDecoration: 'none' }}>
                                        <li className="nav-item">
                                            <span className="nav-link clickbtn" aria-current="page">Contact Us</span>
                                        </li>
                                    </Link>
                                    <Link to='/report' style={{ textDecoration: 'none' }}>
                                        <li className="nav-item">
                                            <span className="nav-link clickbtn" aria-current="page">Report Incident</span>
                                        </li>
                                    </Link>
                                </ul>

                                {!auth.user ? (<ul className='mt-2 text-center'>
                                    <Link to='/login' style={{ textDecoration: 'none' }} className="nav-item text-center">
                                        <span className="nav-link learn-more-btn btn-extra-header clickbtn" aria-current="page">Login</span>
                                    </Link>
                                    <Link to='/register' style={{ textDecoration: 'none' }} className="nav-item text-center">
                                        <span className="nav-link learn-more-btn clickbtn" aria-current="page">Register</span>
                                    </Link>
                                </ul>) : (<ul className='mt-2 text-center'>
                                    <Link to={`/dashboard/${auth?.user?.role === 1 ? "/" : "profile"}`} style={{ textDecoration: 'none' }} className="nav-item text-center">
                                        <span className="nav-link learn-more-btn clickbtn" aria-current="page">Profile</span>
                                    </Link>
                                    <Link onClick={handleSubmit} to='/login' style={{ textDecoration: 'none' }} className="nav-item text-center">
                                        <span className="nav-link learn-more-btn-logout clickbtn" aria-current="page">Logout</span>
                                    </Link>
                                </ul>)
                                }
                            </div>
                        </div>
                    </nav>
                </header>
            </>)}
        </>
    )
}

export default Navbar