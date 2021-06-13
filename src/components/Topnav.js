import React from 'react';
//import logo from './assets/images/logo.png';
//import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Link} from 'react-router-dom';

function Topnav(){
    return (
        <header class="header-area gradient-bg">
        <nav class="navbar navbar-expand-lg main-menu">
            <div class="container-fluid">

                <a class="navbar-brand" href="#e"><img src="assets/images/logo.png" class="d-inline-block align-top" alt=""/></a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="menu-toggle"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav m-auto">
                        <li class="nav-item"><Switch><Link class="nav-link" to="/">Home</Link></Switch></li>
                        <li class="nav-item"><Switch><Link class="nav-link" to="/about">About us</Link></Switch></li>
                        <li class="nav-item"><Switch><Link class="nav-link" to="/inplay">Inplay</Link></Switch></li>
                        <li class="nav-item"><Switch><Link class="nav-link" to="/winlist">Winlist</Link></Switch></li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#d" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                            <ul class="dropdown-menu">
                                <li><Switch><Link class="dropdown-item" to="/upcoming">Upcomming Match</Link></Switch></li>
                                <li><Switch><Link  class="dropdown-item" to="/winlist">Winlist</Link></Switch></li>
                                <li><Switch><Link  class="dropdown-item" to="/promotion">Promotion</Link></Switch></li>
                                <li><Switch><Link  class="dropdown-item" to="/login">Login</Link></Switch></li>
                                <li><Switch><Link  class="dropdown-item" to="/register">Registration</Link></Switch></li>
                                <li><Switch><Link  class="dropdown-item" to="/faq">Faq</Link></Switch></li>
                                <li><Switch><Link  class="dropdown-item" to="/privacy">Privacy</Link></Switch></li>
                                <li><Switch><Link  class="dropdown-item" to="/terms">Terms and Condition</Link></Switch></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#b" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">News</a>
                            <ul class="dropdown-menu">
                                <li><Switch><Link  class="dropdown-item" to="/news">News</Link></Switch></li>
                                <li><Switch><Link  class="dropdown-item" to="/details">News Details</Link></Switch></li>
                            </ul>
                        </li>
                        <li class="nav-item"><Switch><Link class="nav-link" to="/contact">Contact</Link></Switch></li>
                    </ul>
                    <div class="header-btn justify-content-end">
                        <Switch><Link to="/register" class="bttn-small btn-fill"><i class="fa fa-key"></i>Signup</Link></Switch>
                        <Switch><Link to="/login" class="bttn-small btn-fill ml-2"><i class="fa fa-lock"></i>Login</Link></Switch>
                    </div>
                </div>
            </div>
        </nav>
       </header>
    );
}
export default Topnav;