import React, {Component} from 'react'


import './style.css'
import logo from '../../img/logo.png'
import sProducts1 from '../../img/s-products1.png'
import sProducts2 from '../../img/s-products2.png'
import item1 from '../../img/item1.jpg'
import item2 from '../../img/item2.jpg'
import item3 from '../../img/item3.jpg'
import item4 from '../../img/item4.jpg'
import item5 from '../../img/item5.jpg'
import item6 from '../../img/item6.jpg'

class Shop extends Component {
    render () {


        return (
            <div>
                <a href="" id="home-link">&nbsp;</a>
                <div id="wrapper">
                    <div className="panel-top">
                        <div className="center clearfix">
                            <div className="social">
                                <a href="" className="s-fb">&nbsp;</a>
                                <a href="" className="s-dribble">&nbsp;</a>
                                <a href="" className="s-tw">&nbsp;</a>
                                <a href="" className="s-mail">&nbsp;</a>
                                <a href="" className="s-vimeo">&nbsp;</a>
                            </div>
                            <div className="basket">
                                <a href="">
                                    <span>Cart (2)</span>
                                </a>
                            </div>
                            <div className="login">
                                <a href="">Login</a>
                                <span>/</span>
                                <a href="">Register</a>
                            </div>
                        </div>
                    </div>
                    <div id="header" className="center clearfix">
                        <div id="logo" className="left">
                            <a href="">
                                <img src={logo} alt=""/>
                                    <span>Store</span>
                            </a>
                        </div>
                        <ul className="nav right clearfix">
                            <li  className="active"><a href="">HOME</a></li>
                            <li><a href="">CD’s</a></li>
                            <li><a href="">DVD’s</a></li>
                            <li><a href="">NEWS</a></li>
                            <li><a href="">PORTFOLIO</a></li>
                            <li><a href="">CONTACT US</a></li>
                        </ul>
                    </div>

                    <div id="home">
                        <div className="home-bg">
                            <div className="center">
                                <a href="/" className="link-home">&nbsp;</a>
                                <h2 className="title-home">SHOP - SIDEBAR ON THE RIGHT</h2>
                                <ul className="breadcrums clearfix">
                                    <li><a href="">Home</a><span className="sp">&raquo;</span></li>
                                    <li><a href="">Shop</a><span className="sp">&raquo;</span></li>
                                    <li><span>Sidebar on the right</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="sorting center clearfix">
                        <ul className="s-category clearfix">
                            <li className="active"><a href="">ALL</a></li>
                            <li><a href="">ROCK</a></li>
                            <li><a href="">POP</a></li>
                            <li><a href="">METAL</a></li>
                            <li><a href="">DANCE</a></li>
                            <li><a href="">CLASSICAL</a></li>
                        </ul>

                        <div className="s-list">
                            <a href="" className="ic-square">&nbsp;</a>
                            <a href="" className="ic-list">&nbsp;</a>
                        </div>

                        <div className="sel-sorting">
                            <span>Sort by:</span>
                            <select name="" id="" style={{width: '110px'}}>
                                <option value="Alphabetically">Alphabetically</option>
                                <option value="Alphabetically">Alphabetically</option>
                                <option value="Alphabetically">Alphabetically</option>
                                <option value="Alphabetically">Alphabetically</option>
                                <option value="Alphabetically">Alphabetically</option>
                                <option value="Alphabetically">Alphabetically</option>
                                <option value="Alphabetically">Alphabetically</option>
                                <option value="Alphabetically">Alphabetically</option>
                                <option value="Alphabetically">Alphabetically</option>
                                <option value="Alphabetically">Alphabetically</option>
                            </select>
                        </div>
                    </div>

                    <div className="middle center clearfix">
                        <div className="sidebar">
                            <h4 className="s-title">Price filter <span className="s-title-br"></span> </h4>

                            <div className="s-slider">
                                <div id="slider-range"></div>
                                <p>
                                    <label for="amount">Price:</label>
                                    <input type="text" id="amount" readonly style={{border:'0', color:'#f6931f'}}/>
                                        <button className="btn-bl">Filter</button>
                                </p>
                            </div>

                            <h4 className="s-title">Best sellers <span className="s-title-br"></span></h4>

                            <div className="s-products">
                                <div className="s-products-item clearfix">
                                    <div className="s-products-img">
                                        <a href=""><img src={sProducts1} alt=""/></a>
                                    </div>
                                    <div className="s-products-info">
                                        <h6><a href="">Awaken the Hero</a></h6>
                                        <div className="rate">
                                            <div style={{width: '80%'}}></div>
                                        </div>
                                        <span className="comennts"><i className="ic-comment"></i> 12 comments</span>
                                    </div>
                                </div>
                                <div className="s-products-item clearfix">
                                    <div className="s-products-img">
                                        <a href=""><img src={sProducts2} alt=""/></a>
                                    </div>
                                    <div className="s-products-info">
                                        <h6><a href="">Caribou</a></h6>
                                        <div className="rate">
                                            <div style={{width: '80%'}}></div>
                                        </div>
                                        <span className="comennts"><i className="ic-comment"></i> 25 comments</span>
                                    </div>
                                </div>
                            </div>

                            <h4 className="s-title">Our categories<span className="s-title-br"></span> </h4>

                            <ul className="cat-list">
                                <li><a href="">Rock & Roll </a><span>(5)</span></li>
                                <li><a href="">Hardcore & Metal </a><span>(3)</span></li>
                                <li><a href="">Dance & Pop </a><span>(8)</span></li>
                                <li><a href="">Classical Music </a><span>(12)</span></li>
                                <li><a href="">Jazz </a><span>(7)</span></li>
                                <li><a href="">Country </a><span>(15)</span></li>
                            </ul>

                            <h4 className="s-title">Search our albums<span className="s-title-br"></span> </h4>

                            <form action="#" className="s-search">
                                <input type="text" placeholder="Search..."/>
                                    <input type="submit" value=""/>
                            </form>

                        </div>
                        <div className="content">
                            <div className="product-catalog clearfix">
                                <div className="products">
                                    <div className="p-img">
                                        <span className="sale">Sale</span>
                                        <a href=""><img src={item1} alt=""/></a>
                                    </div>
                                    <div className="p-footer">
                                        <h6><a href="">Aqualung <span>  by Artist</span></a></h6>

                                        <div className="rate">
                                            <div style={{width: '80%'}}></div>
                                        </div>

                                        <p><a><strong>Lorem ipsum</strong> dolor sit amet an
                                            adipiscing elit, sed diam nonu. </a></p>

                                    <div className="p-footer-price clearfix">
                                        <span className="price">$14.99</span>
                                        <span className="price-new">$8.99</span>
                                        <a href="" className="right add-cart">ADD TO CART</a>
                                    </div>
                                </div>
                            </div>
                            <div className="products">
                                <div className="p-img">
                                    <a href=""><img src={item2} alt=""/></a>
                                </div>
                                <div className="p-footer">
                                    <h6><a href="">Awaken the Hero <span>  by Artist</span></a></h6>

                                    <div className="rate">
                                        <div style={{width: '80%'}}></div>
                                    </div>

                                    <p><a href=""><strong>Lorem ipsum </strong>dolor sit amet an
                                        adipiscing elit, sed diam nonu. </a></p>

                                <div className="p-footer-price clearfix">
                                    <span className="price-lg">$17.99</span>
                                    <a href="" className="right add-cart">ADD TO CART</a>
                                </div>
                            </div>
                        </div>
                        <div className="products">
                            <div className="p-img">
                                <a href=""><img src={item3} alt=""/></a>
                            </div>
                            <div className="p-footer">
                                <h6><a href="">Ravenna    <span>  by Artist</span></a></h6>

                                <div className="rate">
                                    <div style={{width: "80%"}}></div>
                                </div>

                                <p><a href=""><strong>Lorem ipsum </strong>dolor sit amet an
                                    adipiscing elit, sed diam nonu. </a></p>

                            <div className="p-footer-price clearfix">
                                <span className="price-lg">$17.99</span>
                                <a href="" className="right add-cart">ADD TO CART</a>
                            </div>
                        </div>
                    </div>
                    <div className="products">
                        <div className="p-img">
                            <span className="sale">Sale</span>
                            <a href=""><img src={item4} alt=""/></a>
                        </div>
                        <div className="p-footer">
                            <h6><a href="">Oh my Deer <span>  by Artist</span></a></h6>

                            <div className="rate">
                                <div style={{width: "80%"}}></div>
                            </div>

                            <p><a href=""><strong>Lorem ipsum</strong> dolor sit amet an
                                adipiscing elit, sed diam nonu. </a></p>

                        <div className="p-footer-price clearfix">
                            <span className="price">$14.99</span>
                            <span className="price-new">$8.99</span>
                            <a href="" className="right add-cart">ADD TO CART</a>
                        </div>
                    </div>
                </div>
                <div className="products">
                    <div className="p-img">
                        <a href=""><img src={item5} alt=""/></a>
                    </div>
                    <div className="p-footer">
                        <h6><a href="">Caribou    <span>  by Artist</span></a></h6>

                        <div className="rate">
                            <div style={{width: "80%"}}></div>
                        </div>

                        <p><a href=""><strong>Lorem ipsum</strong> dolor sit amet an
                            adipiscing elit, sed diam nonu. </a></p>

                    <div className="p-footer-price clearfix">
                        <span className="price-lg">$17.99</span>
                        <a href="" className="right add-cart">ADD TO CART</a>
                    </div>
                </div>
            </div>
        <div className="products">
            <div className="p-img">
                <a href=""><img src={item6} alt=""/></a>
            </div>
            <div className="p-footer">
                <h6><a href="">Bad Dreams <span>  by Artist</span></a></h6>

                <div className="rate">
                    <div style={{width: "80%"}}></div>
                </div>

                <p><a href=""><strong>Lorem ipsum</strong> dolor sit amet an
                    adipiscing elit, sed diam nonu. </a></p>

            <div className="p-footer-price clearfix">
                <span className="price-lg">$23.59</span>
                <a href="" className="right add-cart">ADD TO CART</a>
            </div>
        </div>
    </div>
    </div>

        <div className="paglinations">
            <ul className="clearfix">
                <li className="active"><a href="">1</a></li>
                <li><a href="">2</a></li>
                <li><a href="">3</a></li>
                <li><a href="">4</a></li>
                <li><a href="">5</a></li>
                <li><a href="">6</a></li>
                <li><a href="">&raquo;</a></li>
            </ul>
        </div>

    </div>
    </div>
    </div>

        <div id="footer">
            <a href="#home-link" className="home-link">&nbsp;</a>
            <div className="center clearfix">
                <div className="f-about">
                    <h5 className="f-title">Little about us</h5>
                    <p><b>Sed posuere</b> consectetur  est at.
                        Nulla vitae elit libero, a pharetra.
                        Lorem ipsum <b>dolor sit</b> amet, conse
                        ctetuer adipiscing elit.</p>
                    <h5 className="f-title">Socialize with us</h5>
                    <div className="f-Social">
                        <a href="" className="s-fb">&nbsp;</a>
                        <a href="" className="s-dribble">&nbsp;</a>
                        <a href="" className="s-tw">&nbsp;</a>
                        <a href="" className="s-diqq">&nbsp;</a>
                        <a href="" className="s-mail">&nbsp;</a>
                    </div>
                </div>
                <div className="f-archives">
                    <h5 className="f-title">Our Archives</h5>
                    <ul className="f-list">
                        <li><a href="">March 2012</a></li>
                        <li><a href="">February 2012</a></li>
                        <li><a href="">January 2012</a></li>
                        <li><a href="">December 2011</a></li>
                    </ul>
                </div>
                <div className="f-populars">
                    <h5 className="f-title">Popular Posts</h5>
                    <div className="s-products-item clearfix">
                        <div className="s-products-img">
                            <a href=""><img src={sProducts1} alt=""/></a>
                        </div>
                        <div className="s-products-info">
                            <h6><a href="">Great Album</a></h6>
                            <span className="comennts"><i class="ic-comment-white"></i> 12 comments</span>
                        </div>
                    </div>
                    <div className="s-products-item clearfix">
                        <div className="s-products-img">
                            <a href=""><img src={sProducts2} alt=""/></a>
                        </div>
                        <div className="s-products-info">
                            <h6><a href="">Great Album</a></h6>
                            <span className="comennts"><i class="ic-comment-white"></i> 25 comments</span>
                        </div>
                    </div>
                </div>
                <div className="f-search">
                    <h5 className="f-title">Search our Site</h5>
                    <form action="#" >
                        <input type="text" class="f-search-inp" placeholder="Enter Search ..."/>
                    </form>
                    <h5 className="f-title">Tag Cloud</h5>
                    <a href="" className="tags">Audio CD</a>
                    <a href="" className="tags">Video</a>
                    <a href="" className="tags">Playlist</a>
                    <a href="" className="tags">Avantgarde</a>
                    <a href="" className="tags">Melancholic</a>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="center clearfix">
                    <a href="">Home</a>
                    <a href="">Portfolio</a>
                    <a href="">Sitemap</a>
                    <a href="">Contact</a>
                    <p className="right">Musica @2013 by PremiumCoding | All Rights Reserved</p>
                </div>
            </div>
        </div>
            </div>
        )
    }
}

export default Shop