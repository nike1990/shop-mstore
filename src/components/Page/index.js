import React, {Component} from 'react'


import './style.css'
import logo from '../img/logo.png'
import item1 from '../img/item-1.png'
import item2 from '../img/item-2.png'
import item3 from '../img/item-3.png'
import item4 from '../img/item-4.png'
import item5 from '../img/item-5.png'
import item6 from '../img/item-6.png'
import about1 from '../img/about1.png'
import about2 from '../img/about2.png'
import about3 from '../img/about3.png'
import about4 from '../img/about4.png'
import teamImg from '../img/team-img.png'
import brand1 from '../img/brand-1.jpg'
import brand2 from '../img/brand-2.png'
import brand3 from '../img/brand-3.png'
import brand4 from '../img/brand-4.png'

class Golden extends Component {
    render () {


        return (
            <div>
                <a className=""  title=""     href=""></a>
                <div id="wrapper">
                    <div id="header">
                        <div className="container clearfix">
                            <div className="logo">
                                <a href=""><img src={logo} alt=""/></a>
                            </div>
                            <ul className="nav">
                                <li><a href="">Home</a></li>
                                <li><a href="">Services</a></li>
                                <li><a href="">Portfolio</a></li>
                                <li><a href="">About</a></li>
                                <li><a href="">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div id="home">
                        <div className="container">
                            <h3>Welcome To Our Studio!</h3>
                            <h1>It’s nice to Meet you</h1>
                            <button className="btn">Tell Me More</button>
                        </div>
                    </div>
                    <div id="services" className="box">
                        <div className="container">
                            <h2 className="title">Services</h2>
                            <p className="descr">Proin iaculis purus consequat sem cure. </p>
                            <div className="services-wrap clearfix">
                                <div className="services-item commerce">
                                    <h5 className="title">E-Commerce</h5>
                                    <p>
                                        Proin iaculis purus consequat sem cure
                                        digni ssim. Donec porttitora entum suscipit
                                        aenean rhoncus posuere odio in tincidunt.
                                    </p>
                                </div>
                                <div className="services-item responsive">
                                    <h5 className="title">E-Responsive Web</h5>
                                    <p>
                                        Proin iaculis purus consequat sem cure
                                        digni ssim. Donec porttitora entum suscipit
                                        aenean rhoncus posuere odio in tincidunt.
                                    </p>
                                </div>
                                <div className="services-item security">
                                    <h5 className="title">Web Security</h5>
                                    <p>
                                        Proin iaculis purus consequat sem cure
                                        digni ssim. Donec porttitora entum suscipit
                                        aenean rhoncus posuere odio in tincidunt.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="portfolio" className="box">
                        <div className="container">
                            <h2 className="title">Our portfolio</h2>
                            <p className="descr">Proin iaculis purus consequat sem cure. </p>
                            <div className="portfolio-wrap clearfix">
                                <div className="portfolio-item">
                                    <a href=""><img src={item1} height="300" alt=""/></a>
                                    <div className="p-item-footer">
                                        <h5 className="title">Ebony & Ivory</h5>
                                        <span>Branding</span>
                                    </div>
                                </div>
                                <div className="portfolio-item">
                                    <a href=""><img src={item2} height="300" alt=""/></a>
                                    <div className="p-item-footer">
                                        <h5 className="title">Ebony & Ivory</h5>
                                        <span>Branding</span>
                                    </div>
                                </div>
                                <div className="portfolio-item">
                                    <a href=""><img src={item3} height="300" alt=""/></a>
                                    <div className="p-item-footer">
                                        <h5 className="title">Ebony & Ivory</h5>
                                        <span>Branding</span>
                                    </div>
                                </div>
                                <div className="portfolio-item">
                                    <a href=""><img src={item4} height="300" alt=""/></a>
                                    <div className="p-item-footer">
                                        <h5 className="title">Ebony & Ivory</h5>
                                        <span>Branding</span>
                                    </div>
                                </div>
                                <div className="portfolio-item">
                                    <a href=""><img src={item5} height="300" alt=""/></a>
                                    <div className="p-item-footer">
                                        <h5 className="title">Ebony & Ivory</h5>
                                        <span>Branding</span>
                                    </div>
                                </div>
                                <div className="portfolio-item">
                                    <a href=""><img src={item6} height="300" alt=""/></a>
                                    <div className="p-item-footer">
                                        <h5 className="title">Ebony & Ivory</h5>
                                        <span>Branding</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="about" name="about" className="box">
                        <div className="container">
                            <h2 className="title">About Us</h2>
                            <p className="descr">Proin iaculis purus consequat sem cure. </p>
                            <div className="about-wrap">
                                <div className="about-item clearfix">
                                    <div className="about-text left text-right">
                                        <h5 className="title"><span>July 2010</span><br/>Our Humble Beginnings</h5>
                                        <p>Proin iaculis purus consequat sem cure
                                            digni ssim. Donec porttitora entum suscipit
                                            aenean rhoncus posuere odio in tincidunt. Proin
                                            iaculis purus consequat sem cure digni
                                            ssim. Donec porttitora entum suscipit.</p>
                                    </div>
                                    <div className="about-img left">
                                        <img src={about1} alt=""/>
                                    </div>
                                </div>
                                <div className="about-item clearfix">
                                    <div className="about-text right text-left">
                                        <h5 className="title"><span>January 2011</span><br/>Facing Startup Battles</h5>
                                        <p>Proin iaculis purus consequat sem cure
                                            digni ssim. Donec porttitora entum suscipit
                                            aenean rhoncus posuere odio in tincidunt. Proin
                                            iaculis purus consequat sem cure digni
                                            ssim. Donec porttitora entum suscipit.</p>
                                    </div>
                                    <div className="about-img right">
                                        <img src={about2} alt=""/>
                                    </div>
                                </div>
                                <div className="about-item clearfix">
                                    <div className="about-text left text-right">
                                        <h5 className="title"><span>December 2012</span><br/>Enter The Dark Days</h5>
                                        <p>Proin iaculis purus consequat sem cure
                                            digni ssim. Donec porttitora entum suscipit
                                            aenean rhoncus posuere odio in tincidunt. Proin
                                            iaculis purus consequat sem cure digni
                                            ssim. Donec porttitora entum suscipit.</p>
                                    </div>
                                    <div className="about-img left">
                                        <img src={about3} alt=""/>
                                    </div>
                                </div>
                                <div className="about-item clearfix">
                                    <div className="about-text right text-left">
                                        <h5 className="title"><span>february 2014 </span><br/>Our Triumph</h5>
                                        <p>Proin iaculis purus consequat sem cure
                                            digni ssim. Donec porttitora entum suscipit
                                            aenean rhoncus posuere odio in tincidunt. Proin
                                            iaculis purus consequat sem cure digni
                                            ssim. Donec porttitora entum suscipit.</p>
                                    </div>
                                    <div className="about-img right">
                                        <img src={about4} alt=""/>
                                    </div>
                                </div>
                                <a href="" className="about-link">Our<br/>Story<br/>Continues<br/>...</a>
                            </div>
                        </div>
                    </div>

                    <div id="team" className="box">
                        <div className="container">
                            <h2 className="title">our amazing team</h2>
                            <p className="descr">Proin iaculis purus consequat sem cure. </p>
                            <div className="team-wrap clearfix">
                                <div className="team-item">
                                    <img src={teamImg} height="220" width="220" alt=""/>
                                        <h5 className="title">Kimberly Thompson</h5>
                                        <p className="cat">Marketer</p>
                                        <div className="social">
                                            <a href="#" className="ic-tw">&nbsp;</a>
                                            <a href="#" className="ic-fb">&nbsp;</a>
                                            <a href="#" className="ic-pn">&nbsp;</a>
                                        </div>
                                </div>
                                <div className="team-item">
                                    <img src={teamImg} height="220" width="220" alt=""/>
                                        <h5 className="title">Rico Massimo</h5>
                                        <p className="cat">Coder</p>
                                        <div className="social">
                                            <a href="#" className="ic-tw">&nbsp;</a>
                                            <a href="#" className="ic-gl">&nbsp;</a>
                                            <a href="#" className="ic-pn">&nbsp;</a>
                                        </div>
                                </div>
                                <div className="team-item">
                                    <img src={teamImg} height="220" width="220" alt=""/>
                                        <h5 className="title">Uku Mason</h5>
                                        <p className="cat">Graphic Designer</p>
                                        <div className="social">
                                            <a href="#" className="ic-fb">&nbsp;</a>
                                            <a href="#" className="ic-pn">&nbsp;</a>
                                        </div>
                                </div>
                            </div>
                            <p className="descr team-info">Proin iaculis purus consequat sem cure
                                digni ssim donec porttitora entum suscipit<br/>
                                aenean rhoncus posuere odio in tincidunt proin iaculis.</p>
                        </div>
                    </div>

                    <div id="brand">
                        <div className="container">
                            <a href="*"><img src={brand1} alt=""/></a>
                            <a href="*"><img src={brand2} alt=""/></a>
                            <a href="*"><img src={brand3} alt=""/></a>
                            <a href="*"><img src={brand4} alt=""/></a>
                        </div>
                    </div>

                    <div id="contact" name="contact" className="box">
                        <div className="container">
                            <h2 className="title">Contact us</h2>
                            <p className="descr">Proin iaculis purus consequat sem cure. </p>
                            <form action="#" id="messege">
                                <div className="clearfix">
                                    <div className="left">
                                        <input type="text" placeholder="your Name *"/>
                                            <input type="text" placeholder="your e-mail *"/>
                                                <input type="text" placeholder="subject"/>
                                    </div>
                                    <div className="right">
                                        <textarea cols="0" rows="0" placeholder="Your message *"></textarea>
                                    </div>
                                </div>
                                <input type="submit" value="Send Messege" className="btn"/>
                            </form>
                        </div>
                    </div>

                    <div id="copiright">
                        <div className="container clearfix">
                            <p className="left">
                                &copy; Copyright 2014 FreebiesXpress.com
                            </p>
                            <div className="social">
                                <a href="#" className="ic-tw black">&nbsp;</a>
                                <a href="#" className="ic-fb black">&nbsp;</a>
                                <a href="#" className="ic-pn black">&nbsp;</a>
                                <a href="#" className="ic-gl black">&nbsp;</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Golden