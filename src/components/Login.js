import React from 'react';
import {Link,Switch} from 'react-router-dom';

function Login(){
    return <section>
    <div class="container-fluid">
        <div class="row">
            <div class="col-xl-2 col-lg-2 col-md-3 col-sm-6">
                <aside class="content-sidebar">
                    <h3>Leagues</h3>
                    <ul>
                        <li><a href="#ss"><img src="assets/images/icons/leagues/1.png" alt=""/> Premier League</a></li>
                        <li><a href="#ss"><img src="assets/images/icons/leagues/2.png" alt=""/> LaLiga</a></li>
                        <li><a href="#ss"><img src="assets/images/icons/leagues/3.png" alt=""/> UEFA Champions League</a></li>
                        <li><a href="#ss"><img src="assets/images/icons/leagues/4.png" alt=""/> Premier League</a></li>
                        <li><a href="#ss"><img src="assets/images/icons/leagues/5.png" alt=""/> LaLiga</a></li>
                        <li><a href="#ss"><img src="assets/images/icons/leagues/1.png" alt=""/> UEFA Champions League</a></li>
                        <li><a href="#ss"><img src="assets/images/icons/leagues/1.png" alt=""/> Premier League</a></li>
                        <li><a href="#ss"><img src="assets/images/icons/leagues/2.png" alt=""/> LaLiga</a></li>
                        <li><a href="#ss"><img src="assets/images/icons/leagues/3.png" alt=""/> UEFA Champions League</a></li>
                        <li><a href="#ss"><img src="assets/images/icons/leagues/4.png" alt=""/> Premier League</a></li>
                        <li><a href="#ss"><img src="assets/images/icons/leagues/5.png" alt=""/> LaLiga</a></li>
                        <li><a href="#ss"><img src="assets/images/icons/leagues/1.png" alt=""/> UEFA Champions League</a></li>
                    </ul>
                </aside>
                <aside class="content-sidebar">
                    <h3>Countries</h3>
                    <ul>
                        <li><a href="#ss"><img src="assets/images/icons/country/1.png" alt=""/> England</a></li>
                        <li><a href="#ss"><img src="assets/images/icons/country/2.png" alt=""/> Spain</a></li>
                        <li><a href="#ss"><img src="assets/images/icons/country/3.png" alt=""/> Germany</a></li>
                        <li><a href="#ss"><img src="assets/images/icons/country/4.png" alt=""/> Italy</a></li>
                        <li><a href="#ss"><img src="assets/images/icons/country/5.png" alt=""/> France</a></li>
                    </ul>
                </aside>
            </div>
            <div class="col-xl-8 col-lg-8 col-md-6 col-sm-6 mt-40">
                <div class="content-center cl-white">
                    <div class="row justify-content-center">
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                            <div class="account-form">
                                <div class="title">
                                    <h3>Login to your account</h3>
                                </div>
                                <div class="via-login">
                                    <a href="#ss" class="facebook-bg"><i class="fa fa-facebook"></i>Login with Facebook</a>
                                    <a href="#ss" class="google-plus-bg"><i class="fa fa-google"></i>Login with Google</a>
                                </div>
                                <form action="#ss">
                                    <div class="row">
                                        <div class="col-xl-12">
                                            <p>Or with your username and password</p>
                                        </div>
                                        <div class="col-xl-12">
                                            <input type="text" placeholder="Username"/>
                                        </div>
                                        <div class="col-xl-12">
                                            <input type="password" placeholder="Password"/>
                                        </div>
                                        
                                        <div class="col-xl-12">
                                            <button type="submit" class="bttn-small btn-fill w-100">Login Account</button>
                                        </div>
                                        <div class="col-xl-12">
                                            <p><Switch><Link to="#ss">Forgot password</Link></Switch> | <Switch><Link to="#ss">Retrieve username</Link></Switch></p>
                                        </div>
                                        <div class="col-xl-12">
                                            <p>Don't you have an account?</p>
                                        </div>
                                        <div class="col-xl-12 centered">
                                            <Switch><Link to="/register" class="bttn-small btn-wht w-100">Create a new account</Link></Switch>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-2 col-lg-2 col-md-3 col-sm-6">
                <div class="web-sidebar-widget">
                    <div class="widget-head">
                        <h3>Betsb info</h3>
                    </div>
                    <div class="widget-body">
                        <p><strong>Register:</strong> SMS 'JOIN' to 26587</p>
                        <p><strong>Customer care:</strong> 987654123</p>
                        <p><strong>Customer care 2:</strong> 987654123</p>
                        <p><strong>Email:</strong> info@betsb.com</p>
                    </div>
                </div>
                <div class="web-sidebar-widget">
                    <div class="widget-head">
                        <h3>Betsb ads</h3>
                    </div>
                    <div class="widget-body p-0">
                        <a href="#ss"><img class="w-100" src="assets/images/ads.jpg" alt=""/></a>
                    </div>
                </div>                 
            </div>
        </div>
    </div>
</section>;
}
export default Login;