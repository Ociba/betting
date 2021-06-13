import React from 'react';
import {Table} from 'react-bootstrap';
import slideImage1 from "./hero-2.jpg";
import {Switch, Link} from 'react-router-dom';

function Home() {
    return <section>
        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-2 col-lg-2 col-md-3 col-sm-6">
                    <aside class="content-sidebar">
                        <h3>Leagues</h3>
                        <ul>
                            <li><a href="#sss"><img src="assets/images/icons/leagues/1.png" alt=""/> <Switch><Link to="/games">Premier League</Link></Switch></a></li>
                            <li><a href="#sss"><img src="assets/images/icons/leagues/2.png" alt=""/> <Switch><Link to="/games">Laliga</Link></Switch></a></li>
                            <li><a href="#sss"><img src="assets/images/icons/leagues/3.png" alt=""/> <Switch><Link to="/games">UEA Champions League</Link></Switch></a></li>
                            <li><a href="#sss"><img src="assets/images/icons/leagues/4.png" alt=""/> <Switch><Link to="/games">Premier League</Link></Switch></a></li>
                            <li><a href="#sss"><img src="assets/images/icons/leagues/5.png" alt=""/> <Switch><Link to="/games">Laliga</Link></Switch></a></li>
                            <li><a href="#sss"><img src="assets/images/icons/leagues/1.png" alt=""/> <Switch><Link to="/games">UEA Champions League</Link></Switch></a></li>
                            <li><a href="#sss"><img src="assets/images/icons/leagues/1.png" alt=""/> <Switch><Link to="/games">Premier League</Link></Switch></a></li>
                            <li><a href="#sss"><img src="assets/images/icons/leagues/2.png" alt=""/> <Switch><Link to="/games">Laliga</Link></Switch></a></li>
                            <li><a href="#sss"><img src="assets/images/icons/leagues/3.png" alt=""/> <Switch><Link to="/games">UEA Champions League</Link></Switch></a></li>
                            <li><a href="#sss"><img src="assets/images/icons/leagues/4.png" alt=""/> <Switch><Link to="/games">Premier League</Link></Switch></a></li>
                            <li><a href="#sss"><img src="assets/images/icons/leagues/5.png" alt=""/> <Switch><Link to="/games">Laliga</Link></Switch></a></li>
                            <li><a href="#sss"><img src="assets/images/icons/leagues/1.png" alt=""/> <Switch><Link to="/games">UEA Champions League</Link></Switch></a></li>
                        </ul>
                    </aside>
                    <aside class="content-sidebar">
                        <h3>Countries</h3>
                        <ul>
                            <li><a href="#sss"><img src="assets/images/icons/country/1.png" alt=""/> <Switch><Link to="/games">England</Link></Switch></a></li>
                            <li><a href="#sss"><img src="assets/images/icons/country/2.png" alt=""/> <Switch><Link to="/games">Spain</Link></Switch></a></li>
                            <li><a href="#sss"><img src="assets/images/icons/country/3.png" alt=""/> <Switch><Link to="/games">Germany</Link></Switch></a></li>
                            <li><a href="#sss"><img src="assets/images/icons/country/4.png" alt=""/> <Switch><Link to="/games">Italy</Link></Switch></a></li>
                            <li><a href="#sss"><img src="assets/images/icons/country/5.png" alt=""/> <Switch><Link to="/games">France</Link></Switch></a></li>
                            <li><a href="#sss"><img src="assets/images/icons/country/6.png" alt=""/> <Switch><Link to="/games">Netherlands</Link></Switch></a></li>
                            <li><a href="#sss"><img src="assets/images/icons/country/1.png" alt=""/> <Switch><Link to="/games">England</Link></Switch></a></li>
                            <li><a href="#sss"><img src="assets/images/icons/country/2.png" alt=""/> <Switch><Link to="/games">Spain</Link></Switch></a></li>
                            <li><a href="#sss"><img src="assets/images/icons/country/3.png" alt=""/> <Switch><Link to="/games">Germany</Link></Switch></a></li>
                            <li><a href="#sss"><img src="assets/images/icons/country/4.png" alt=""/> <Switch><Link to="/games">Italy</Link></Switch></a></li>
                            <li><a href="#sss"><img src="assets/images/icons/country/5.png" alt=""/> <Switch><Link to="/games">France</Link></Switch></a></li>
                            <li><a href="#sss"><img src="assets/images/icons/country/6.png" alt=""/> <Switch><Link to="/games">Netherlands</Link></Switch></a></li>
                        </ul>
                    </aside>
                </div>
                <div class="col-xl-8 col-lg-8 col-md-6 col-sm-6">
                <img src="assets/images/banner/hero-2.jpg" alt=""/> 
                    <div class="main-content-slider owl-carousel">
                        <div class="single-slider"  style={{backgroundImage:"url(" + slideImage1 + ")", backgroundRepeat:'no-repeat'}}>
                            <div class="row">
                                <div class="col-xl-6">
                                    <h3>Lever of Soccer</h3>
                                    <p>Amet consectetur adipisicing elit. Debitis, et totam nisi est praesentium maxime mollitia earum aut temporibus aliquid esse eveniet impedit? Doloribus</p>

                                    <div class="hero-score">Venture <span>2.5</span></div>
                                    <div class="hero-score">Lebor <span>8.3</span></div>
                                    <div class="hero-score">122+ Bets</div>
                                </div>
                            </div>
                        </div>
                        <div class="single-slider">
                            <div class="row">
                                <div class="col-xl-6">
                                    <h3>Lever of Games</h3>
                                    <p>Amet consectetur adipisicing elit. Debitis, et totam nisi est praesentium maxime mollitia earum aut temporibus aliquid esse eveniet impedit? Doloribus</p>
                                    <div class="hero-score">Venture <span>2.5</span></div>
                                    <div class="hero-score">Lebor <span>8.3</span></div>
                                    <div class="hero-score">122+ Bets</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="game-box">
                        <div class="card">
                            <div class="card-header">
                                <h3>Football Games</h3>
                                <span>Live Play</span><input type="checkbox" id="switch"/><label for="switch">Toggle</label>
                            </div>
                            <div class="card-body">
                                <ul class="nav nav-tabs" id="myTab" role="tablist">
                                    <li class="nav-item">
                                      <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Today</a>
                                    </li>
                                    <li class="nav-item">
                                      <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Tomorrow</a>
                                    </li>
                                    <li class="nav-item">
                                      <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">All Matches</a>
                                    </li>
                                    <li class="search-game">
                                        <input type="text" placeholder="Search"/>
                                        <i class="fa fa-print"></i>
                                    </li>
                                  </ul>
                                  <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div class="table-responsive">
                                            <Table class="table table-hover table-borderless table-striped">
                                                <thead>
                                                  <tr>
                                                    <th scope="col">Date</th>
                                                    <th scope="col">Logo</th>
                                                    <th scope="col">Teams</th>
                                                    <th scope="col">1</th>
                                                    <th scope="col">3 Way <br />X</th>
                                                    <th scope="col">2</th>
                                                    <th scope="col">Yes</th>
                                                    <th scope="col">No</th>
                                                    <th scope="col">Sta</th>
                                                    <th scope="col">+</th>
                                                  </tr>
                                                </thead>
                                                <tbody>
                                                  <tr>
                                                    <td>04:15 <br /> 13th Feb</td>
                                                    <td>
                                                        <img src="assets/images/icons/teams/1.png" alt=""/><br />
                                                        <img src="assets/images/icons/teams/2.png" alt=""/>
                                                    </td>
                                                    <td>
                                                        <strong>EC Noroeste SP</strong>
                                                        <strong>Batatais FC SP</strong>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <Switch><Link to="/morebet" class="btnn">more</Link></Switch>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td>04:15 <br /> 13th Feb</td>
                                                    <td>
                                                        <img src="assets/images/icons/teams/3.png" alt=""/><br />
                                                        <img src="assets/images/icons/teams/4.png" alt=""/>
                                                    </td>
                                                    <td>
                                                        <strong>EC Noroeste SP</strong>
                                                        <strong>Batatais FC SP</strong>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                    <Switch><Link to="/morebet" class="btnn">more</Link></Switch>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td>04:15 <br /> 13th Feb</td>
                                                    <td>
                                                        <img src="assets/images/icons/teams/5.png" alt=""/><br />
                                                        <img src="assets/images/icons/teams/6.png" alt=""/>
                                                    </td>
                                                    <td>
                                                        <strong>EC Noroeste SP</strong>
                                                        <strong>Batatais FC SP</strong>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                    <Switch><Link to="/morebet" class="btnn">more</Link></Switch>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                  <td>04:15 <br /> 13th Feb</td>
                                                    <td>
                                                        <img src="assets/images/icons/teams/9.png" alt=""/><br />
                                                        <img src="assets/images/icons/teams/10.png" alt=""/>
                                                    </td>
                                                    <td>
                                                        <strong>EC Noroeste SP</strong>
                                                        <strong>Batatais FC SP</strong>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                    <Switch><Link to="/morebet" class="btnn">more</Link></Switch>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td>04:15 <br /> 13th Feb</td>
                                                    <td>
                                                        <img src="assets/images/icons/teams/9.png" alt=""/><br />
                                                        <img src="assets/images/icons/teams/10.png" alt=""/>
                                                    </td>
                                                    <td>
                                                        <strong>EC Noroeste SP</strong>
                                                        <strong>Batatais FC SP</strong>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                    <Switch><Link to="/morebet" class="btnn">more</Link></Switch>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td>04:15 <br /> 13th Feb</td>
                                                    <td>
                                                        <img src="assets/images/icons/teams/9.png" alt=""/><br />
                                                        <img src="assets/images/icons/teams/10.png" alt=""/>
                                                    </td>
                                                    <td>
                                                        <strong>EC Noroeste SP</strong>
                                                        <strong>Batatais FC SP</strong>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                    <Switch><Link to="/morebet" class="btnn">more</Link></Switch>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td>04:15 <br /> 13th Feb</td>
                                                    <td>
                                                        <img src="assets/images/icons/teams/9.png" alt=""/><br />
                                                        <img src="assets/images/icons/teams/10.png" alt=""/>
                                                    </td>
                                                    <td>
                                                        <strong>EC Noroeste SP</strong>
                                                        <strong>Batatais FC SP</strong>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                    <Switch><Link to="/morebet" class="btnn">more</Link></Switch>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td>04:15 <br /> 13th Feb</td>
                                                    <td>
                                                        <img src="assets/images/icons/teams/9.png" alt=""/><br />
                                                        <img src="assets/images/icons/teams/10.png" alt=""/>
                                                    </td>
                                                    <td>
                                                        <strong>EC Noroeste SP</strong>
                                                        <strong>Batatais FC SP</strong>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                    <Switch><Link to="/morebet" class="btnn">more</Link></Switch>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td>04:15 <br /> 13th Feb</td>
                                                    <td>
                                                        <img src="assets/images/icons/teams/9.png" alt=""/><br />
                                                        <img src="assets/images/icons/teams/10.png" alt=""/>
                                                    </td>
                                                    <td>
                                                        <strong>EC Noroeste SP</strong>
                                                        <strong>Batatais FC SP</strong>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                    <Switch><Link to="/morebet" class="btnn">more</Link></Switch>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td>04:15 <br /> 13th Feb</td>
                                                    <td>
                                                        <img src="assets/images/icons/teams/9.png" alt=""/><br />
                                                        <img src="assets/images/icons/teams/10.png" alt=""/>
                                                    </td>
                                                    <td>
                                                        <strong>EC Noroeste SP</strong>
                                                        <strong>Batatais FC SP</strong>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                    <Switch><Link to="/morebet" class="btnn">more</Link></Switch>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td>04:15 <br /> 13th Feb</td>
                                                    <td>
                                                        <img src="assets/images/icons/teams/9.png" alt=""/><br />
                                                        <img src="assets/images/icons/teams/10.png" alt=""/>
                                                    </td>
                                                    <td>
                                                        <strong>EC Noroeste SP</strong>
                                                        <strong>Batatais FC SP</strong>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                    <Switch><Link to="/morebet" class="btnn">more</Link></Switch>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td>04:15 <br /> 13th Feb</td>
                                                    <td>
                                                        <img src="assets/images/icons/teams/9.png" alt=""/><br />
                                                        <img src="assets/images/icons/teams/10.png" alt=""/>
                                                    </td>
                                                    <td>
                                                        <strong>EC Noroeste SP</strong>
                                                        <strong>Batatais FC SP</strong>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                    <Switch><Link to="/morebet" class="btnn">more</Link></Switch>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td>04:15 <br /> 13th Feb</td>
                                                    <td>
                                                        <img src="assets/images/icons/teams/9.png" alt=""/><br />
                                                        <img src="assets/images/icons/teams/10.png" alt=""/>
                                                    </td>
                                                    <td>
                                                        <strong>EC Noroeste SP</strong>
                                                        <strong>Batatais FC SP</strong>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                    <Switch><Link to="/morebet" class="btnn">more</Link></Switch>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <div class="table-responsive">
                                            <Table class="table table-hover table-borderless table-striped">
                                                <thead>
                                                  <tr>
                                                    <th scope="col">Date</th>
                                                    <th scope="col">Logo</th>
                                                    <th scope="col">Teams</th>
                                                    <th scope="col">1</th>
                                                    <th scope="col">3 Way <br />X</th>
                                                    <th scope="col">2</th>
                                                    <th scope="col">Yes</th>
                                                    <th scope="col">No</th>
                                                    <th scope="col">Sta</th>
                                                    <th scope="col">+</th>
                                                  </tr>
                                                </thead>
                                                <tbody>
                                                  <tr>
                                                    <td>04:15 <br /> 13th Feb</td>
                                                    <td>
                                                        <img src="assets/images/icons/teams/1.png" alt=""/><br />
                                                        <img src="assets/images/icons/teams/2.png" alt=""/>
                                                    </td>
                                                    <td>
                                                        <strong>EC Noroeste SP</strong>
                                                        <strong>Batatais FC SP</strong>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                    <Switch><Link to="/morebet" class="btnn">more</Link></Switch>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td>04:15 <br /> 13th Feb</td>
                                                    <td>
                                                        <img src="assets/images/icons/teams/3.png" alt=""/><br />
                                                        <img src="assets/images/icons/teams/4.png" alt=""/>
                                                    </td>
                                                    <td>
                                                        <strong>EC Noroeste SP</strong>
                                                        <strong>Batatais FC SP</strong>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                    <Switch><Link to="/morebet" class="btnn">more</Link></Switch>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td>04:15 <br /> 13th Feb</td>
                                                    <td>
                                                        <img src="assets/images/icons/teams/5.png" alt=""/><br />
                                                        <img src="assets/images/icons/teams/6.png" alt=""/>
                                                    </td>
                                                    <td>
                                                        <strong>EC Noroeste SP</strong>
                                                        <strong>Batatais FC SP</strong>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                    <Switch><Link to="/morebet" class="btnn">more</Link></Switch>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                  <td>04:15 <br /> 13th Feb</td>
                                                    <td>
                                                        <img src="assets/images/icons/teams/9.png" alt=""/><br />
                                                        <img src="assets/images/icons/teams/10.png" alt=""/>
                                                    </td>
                                                    <td>
                                                        <strong>EC Noroeste SP</strong>
                                                        <strong>Batatais FC SP</strong>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                    <Switch><Link to="/morebet" class="btnn">more</Link></Switch>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td>04:15 <br /> 13th Feb</td>
                                                    <td>
                                                        <img src="assets/images/icons/teams/9.png" alt=""/><br />
                                                        <img src="assets/images/icons/teams/10.png" alt=""/>
                                                    </td>
                                                    <td>
                                                        <strong>EC Noroeste SP</strong>
                                                        <strong>Batatais FC SP</strong>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                    <Switch><Link to="/morebet" class="btnn">more</Link></Switch>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td>04:15 <br /> 13th Feb</td>
                                                    <td>
                                                        <img src="assets/images/icons/teams/9.png" alt=""/><br />
                                                        <img src="assets/images/icons/teams/10.png" alt=""/>
                                                    </td>
                                                    <td>
                                                        <strong>EC Noroeste SP</strong>
                                                        <strong>Batatais FC SP</strong>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                    <Switch><Link to="/morebet" class="btnn">more</Link></Switch>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td>04:15 <br /> 13th Feb</td>
                                                    <td>
                                                        <img src="assets/images/icons/teams/9.png" alt=""/><br />
                                                        <img src="assets/images/icons/teams/10.png" alt=""/>
                                                    </td>
                                                    <td>
                                                        <strong>EC Noroeste SP</strong>
                                                        <strong>Batatais FC SP</strong>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                    <Switch><Link to="/morebet" class="btnn">more</Link></Switch>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td>04:15 <br /> 13th Feb</td>
                                                    <td>
                                                        <img src="assets/images/icons/teams/9.png" alt=""/><br />
                                                        <img src="assets/images/icons/teams/10.png" alt=""/>
                                                    </td>
                                                    <td>
                                                        <strong>EC Noroeste SP</strong>
                                                        <strong>Batatais FC SP</strong>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                    <Switch><Link to="/morebet" class="btnn">more</Link></Switch>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td>04:15 <br /> 13th Feb</td>
                                                    <td>
                                                        <img src="assets/images/icons/teams/9.png" alt=""/><br />
                                                        <img src="assets/images/icons/teams/10.png" alt=""/>
                                                    </td>
                                                    <td>
                                                        <strong>EC Noroeste SP</strong>
                                                        <strong>Batatais FC SP</strong>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                         <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                    <Switch><Link to="/morebet" class="btnn">more</Link></Switch>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td>04:15 <br /> 13th Feb</td>
                                                    <td>
                                                        <img src="assets/images/icons/teams/9.png" alt=""/><br />
                                                        <img src="assets/images/icons/teams/10.png" alt=""/>
                                                    </td>
                                                    <td>
                                                        <strong>EC Noroeste SP</strong>
                                                        <strong>Batatais FC SP</strong>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                    <Switch><Link to="/morebet" class="btnn">more</Link></Switch>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td>04:15 <br /> 13th Feb</td>
                                                    <td>
                                                        <img src="assets/images/icons/teams/9.png" alt=""/><br />
                                                        <img src="assets/images/icons/teams/10.png" alt=""/>
                                                    </td>
                                                    <td>
                                                        <strong>EC Noroeste SP</strong>
                                                        <strong>Batatais FC SP</strong>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                    <Switch><Link to="/morebet" class="btnn">more</Link></Switch>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                        <div class="table-responsive">
                                            <Table class="table table-hover table-borderless table-striped">
                                                <thead>
                                                  <tr>
                                                    <th scope="col">Date</th>
                                                    <th scope="col">Logo</th>
                                                    <th scope="col">Teams</th>
                                                    <th scope="col">1</th>
                                                    <th scope="col">3 Way <br />X</th>
                                                    <th scope="col">2</th>
                                                    <th scope="col">Yes</th>
                                                    <th scope="col">No</th>
                                                    <th scope="col">Sta</th>
                                                    <th scope="col">+</th>
                                                  </tr>
                                                </thead>
                                                <tbody>
                                                  <tr>
                                                    <td>04:15 <br /> 13th Feb</td>
                                                    <td>
                                                        <img src="assets/images/icons/teams/1.png" alt=""/><br />
                                                        <img src="assets/images/icons/teams/2.png" alt=""/>
                                                    </td>
                                                    <td>
                                                        <strong>EC Noroeste SP</strong>
                                                        <strong>Batatais FC SP</strong>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                         <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                    <Switch><Link to="/morebet" class="btnn">more</Link></Switch>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td>04:15 <br /> 13th Feb</td>
                                                    <td>
                                                        <img src="assets/images/icons/teams/3.png" alt=""/><br />
                                                        <img src="assets/images/icons/teams/4.png" alt=""/>
                                                    </td>
                                                    <td>
                                                        <strong>EC Noroeste SP</strong>
                                                        <strong>Batatais FC SP</strong>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                    <Switch><Link to="/morebet" class="btnn">more</Link></Switch>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td>04:15 <br /> 13th Feb</td>
                                                    <td>
                                                        <img src="assets/images/icons/teams/5.png" alt=""/><br />
                                                        <img src="assets/images/icons/teams/6.png" alt=""/>
                                                    </td>
                                                    <td>
                                                        <strong>EC Noroeste SP</strong>
                                                        <strong>Batatais FC SP</strong>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                    <Switch><Link to="/morebet" class="btnn">more</Link></Switch>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                  <td>04:15 <br /> 13th Feb</td>
                                                    <td>
                                                        <img src="assets/images/icons/teams/9.png" alt=""/><br />
                                                        <img src="assets/images/icons/teams/10.png" alt=""/>
                                                    </td>
                                                    <td>
                                                        <strong>EC Noroeste SP</strong>
                                                        <strong>Batatais FC SP</strong>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                          <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                    <Switch><Link to="/morebet" class="btnn">more</Link></Switch>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td>04:15 <br /> 13th Feb</td>
                                                    <td>
                                                        <img src="assets/images/icons/teams/9.png" alt=""/><br />
                                                        <img src="assets/images/icons/teams/10.png" alt=""/>
                                                    </td>
                                                    <td>
                                                        <strong>EC Noroeste SP</strong>
                                                        <strong>Batatais FC SP</strong>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                    <Switch><Link to="/morebet" class="btnn">more</Link></Switch>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td>04:15 <br /> 13th Feb</td>
                                                    <td>
                                                        <img src="assets/images/icons/teams/9.png" alt=""/><br />
                                                        <img src="assets/images/icons/teams/10.png" alt=""/>
                                                    </td>
                                                    <td>
                                                        <strong>EC Noroeste SP</strong>
                                                        <strong>Batatais FC SP</strong>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                    <Switch><Link to="/morebet" class="btnn">more</Link></Switch>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td>04:15 <br /> 13th Feb</td>
                                                    <td>
                                                        <img src="assets/images/icons/teams/9.png" alt=""/><br />
                                                        <img src="assets/images/icons/teams/10.png" alt=""/>
                                                    </td>
                                                    <td>
                                                        <strong>EC Noroeste SP</strong>
                                                        <strong>Batatais FC SP</strong>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                    <Switch><Link to="/morebet" class="btnn">more</Link></Switch>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td>04:15 <br /> 13th Feb</td>
                                                    <td>
                                                        <img src="assets/images/icons/teams/9.png" alt=""/><br />
                                                        <img src="assets/images/icons/teams/10.png" alt=""/>
                                                    </td>
                                                    <td>
                                                        <strong>EC Noroeste SP</strong>
                                                        <strong>Batatais FC SP</strong>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                         <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                    <Switch><Link to="/morebet" class="btnn">more</Link></Switch>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td>04:15 <br /> 13th Feb</td>
                                                    <td>
                                                        <img src="assets/images/icons/teams/9.png" alt=""/><br />
                                                        <img src="assets/images/icons/teams/10.png" alt=""/>
                                                    </td>
                                                    <td>
                                                        <strong>EC Noroeste SP</strong>
                                                        <strong>Batatais FC SP</strong>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                    <Switch><Link to="/morebet" class="btnn">more</Link></Switch>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td>04:15 <br /> 13th Feb</td>
                                                    <td>
                                                        <img src="assets/images/icons/teams/9.png" alt=""/><br />
                                                        <img src="assets/images/icons/teams/10.png" alt=""/>
                                                    </td>
                                                    <td>
                                                        <strong>EC Noroeste SP</strong>
                                                        <strong>Batatais FC SP</strong>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                         <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                    <Switch><Link to="/morebet" class="btnn">more</Link></Switch>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td>04:15 <br /> 13th Feb</td>
                                                    <td>
                                                        <img src="assets/images/icons/teams/9.png" alt=""/><br />
                                                        <img src="assets/images/icons/teams/10.png" alt=""/>
                                                    </td>
                                                    <td>
                                                        <strong>EC Noroeste SP</strong>
                                                        <strong>Batatais FC SP</strong>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                         <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                    <Switch><Link to="/morebet" class="btnn">more</Link></Switch>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td>04:15 <br /> 13th Feb</td>
                                                    <td>
                                                        <img src="assets/images/icons/teams/9.png" alt=""/><br />
                                                        <img src="assets/images/icons/teams/10.png" alt=""/>
                                                    </td>
                                                    <td>
                                                        <strong>EC Noroeste SP</strong>
                                                        <strong>Batatais FC SP</strong>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                         <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                    <Switch><Link to="/morebet" class="btnn">more</Link></Switch>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td>04:15 <br /> 13th Feb</td>
                                                    <td>
                                                        <img src="assets/images/icons/teams/9.png" alt=""/><br />
                                                        <img src="assets/images/icons/teams/10.png" alt=""/>
                                                    </td>
                                                    <td>
                                                        <strong>EC Noroeste SP</strong>
                                                        <strong>Batatais FC SP</strong>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                        <a href="#sss" class="btnn">2.36</a>
                                                    </td>
                                                    <td>
                                                    <Switch><Link to="/morebet" class="btnn">more</Link></Switch>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </div>
                                  </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-2 col-md-3 col-sm-6">
                    <div class="web-sidebar-widget">
                        <div class="widget-head">
                            <h3>Betsb ads</h3>
                        </div>
                        <div class="widget-body p-0">
                            <a href="#sss"><img class="w-100" src="assets/images/ads.jpg" alt=""/></a>
                        </div>
                    </div>
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
                            <h3>Betsb Chat</h3>
                        </div>
                        <div class="widget-body">
                            <div class="chat-boxed">
                                <div class="single-chat">
                                    <div class="img"><img src="assets/images/icons/chat/1.jpg" alt=""/></div>
                                    <div class="chat-text">
                                        <h4>Wakiritho <span>01.25</span></h4>
                                        <p>Nani ako na program ya men's conference anidungie whatsapp?</p>
                                    </div>
                                </div>
                                <div class="single-chat">
                                    <div class="img"><img src="assets/images/icons/chat/2.jpg" alt=""/></div>
                                    <div class="chat-text">
                                        <h4>Wakiritho <span>01.25</span></h4>
                                        <p>Nani ako na program ya men's conference anidungie whatsapp?</p>
                                    </div>
                                </div>
                                <div class="single-chat">
                                    <div class="img"><img src="assets/images/icons/chat/3.jpg" alt=""/></div>
                                    <div class="chat-text">
                                        <h4>Wakiritho <span>01.25</span></h4>
                                        <p>Nani ako na program ya men's conference anidungie whatsapp?</p>
                                    </div>
                                </div>
                                <div class="single-chat">
                                    <div class="img"><img src="assets/images/icons/chat/4.jpg" alt=""/></div>
                                    <div class="chat-text">
                                        <h4>Wakiritho <span>01.25</span></h4>
                                        <p>Nani ako na program ya men's conference anidungie whatsapp?</p>
                                    </div>
                                </div>
                                <div class="single-chat">
                                    <div class="img"><img src="assets/images/icons/chat/2.jpg" alt=""/></div>
                                    <div class="chat-text">
                                        <h4>Wakiritho <span>01.25</span></h4>
                                        <p>Nani ako na program ya men's conference anidungie whatsapp?</p>
                                    </div>
                                </div>
                                <div class="single-chat">
                                    <div class="img"><img src="assets/images/icons/chat/2.jpg" alt=""/></div>
                                    <div class="chat-text">
                                        <h4>Wakiritho <span>01.25</span></h4>
                                        <p>Nani ako na program ya men's conference anidungie whatsapp?</p>
                                    </div>
                                </div>
                                <a href="#sss" class="bttn-small btn-fill w-100 centered">Login to chat</a>
                            </div>
                        </div>
                    </div>
                    <aside class="content-sidebar pt-0">
                        <h3>Sports</h3>
                        <ul>
                            <li><a href="#sss"><img src="assets/images/icons/leagues/1.png" alt=""/> <Switch><Link to="/games">Premier League</Link></Switch></a></li>
                            <li><a href="#sss"><img src="assets/images/icons/leagues/2.png" alt=""/> <Switch><Link to="/games">Laliga</Link></Switch></a></li>
                            <li><a href="#sss"><img src="assets/images/icons/leagues/3.png" alt=""/> <Switch><Link to="/games">UEA Champions League</Link></Switch></a></li>
                            <li><a href="#sss"><img src="assets/images/icons/leagues/4.png" alt=""/> <Switch><Link to="/games">Premier League</Link></Switch></a></li>
                            <li><a href="#sss"><img src="assets/images/icons/leagues/5.png" alt=""/> <Switch><Link to="/games">Laliga</Link></Switch></a></li>
                            <li><a href="#sss"><img src="assets/images/icons/leagues/1.png" alt=""/> <Switch><Link to="/games">UEA Champions League</Link></Switch></a></li>
                        </ul>
                    </aside>                    
                </div>
                </div>
                </div>
            </section>;
}
export default Home;
