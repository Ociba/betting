import React from 'react';

function Contact(){
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
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div class="account-form">
                                    <div class="title">
                                        <h3>Say Hi to us!</h3>
                                    </div>
                                    <form action="#ss">
                                        <div class="row">
                                            <div class="col-xl-6">
                                                <input type="text" placeholder="First Name"/>
                                            </div>
                                            <div class="col-xl-6">
                                                <input type="text" placeholder="Last Name"/>
                                            </div>
                                            <div class="col-xl-12">
                                                <input type="email" placeholder="Email"/>
                                            </div>
                                            <div class="col-xl-12">
                                                <input type="text" placeholder="Phone number"/>
                                            </div>
                                            <div class="col-xl-12">
                                                <textarea name="msg" rows="4" placeholder="Message"></textarea>
                                            </div>
                                            <div class="col-xl-12">
                                                <button type="submit" class="bttn-small btn-fill w-100">Send it</button>
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
    </section>
    ;
}
export default Contact;