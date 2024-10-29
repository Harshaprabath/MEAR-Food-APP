import React, { useEffect , useState} from 'react';
import Sessionservice from '../../Services/Sessionservice';
import AuthService from '../../Services/Authservices';
import { useNavigate } from 'react-router-dom';



function NavBar() {

    //usersession
    const session = Sessionservice();
    AuthService.Authorization();

    //log out
    const navigate = useNavigate();

    const handleLogout = () => {
        // Remove token from localStorage
        AuthService.logout();

        // Redirect to login page
        navigate('/');
    };

    //active link 
    const [isActive, setIsHidden] = useState(false);

    const handleActivate = () => setIsHidden(true);
    const handleDeactivate = () => setIsHidden(false);


    return (

        <div>
            <div class="bg-box ">
                <img src="./images/hero-bg.jpg" alt=""></img>
            </div>
            <header class="header_section">
                <div class="container">
                    <nav class="navbar navbar-expand-lg custom_nav-container ">
                        <a class="navbar-brand" href="index.html">
                            <span>
                                Feane
                            </span>
                        </a>

                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class=""> </span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav  mx-auto ">
                                <li class="nav-item active">
                                    <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/menu">Menu</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/about">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/book">Book Table</a>
                                </li>
                            </ul>
                            <div class="user_option">
                                <a href="/profile" class="user_link">
                                    <i class="fa fa-user" aria-hidden="true"></i>
                                    {session && (
                                        <div class="dropdown-custom hide_area_navbar">
                                            <a class="dropbtn-custom dropdown-content-icon-custom">{session.username}</a>
                                            <i class="fa-solid fa-caret-down"></i>
                                            <div class="dropdown-content-custom">
                                                <a href="/profile">
                                                    <i class="fa-solid fa-user dropdown-content-icon-custom"></i>
                                                    Profile
                                                </a>
                                                <a href="#" onClick={handleLogout}>
                                                    <i class="fa-solid fa-right-from-bracket dropdown-content-icon-custom"></i>
                                                    Log Out
                                                </a>
                                            </div>
                                        </div>
                                    )}
                                </a>
                                <a class="cart_link customcart" href="#">
                                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                </a>
                                <form class="form-inline">
                                    <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                                        <i class="fa fa-search" aria-hidden="true"></i>
                                    </button>
                                </form>
                               
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            <home></home>
        </div>
    )
}

export default NavBar
