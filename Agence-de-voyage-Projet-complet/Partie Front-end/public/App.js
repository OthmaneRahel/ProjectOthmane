import logo from './logo.svg';
import './App.css';

export default function App() {
  return (
      <div className="header_section">
         <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
               <a className="navbar-brand"href="index.html"><img src="images/logo.png"/></a>
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto">
                     <li className="nav-item active">
                        <a className="nav-link text-dark" href="index.html">Home</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link text-dark" href="about.html">About</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link text-dark" href="property.html">Property</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link text-dark" href="testimonial.html">Testimonial</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link text-dark" href="blog.html">Blog</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link text-dark" href="contact.html">Contact Us</a>
                     </li>
                  </ul>
                  <form className="form-inline my-2 my-lg-0">
                     <div className="login_bt">
                        <ul>
                           <li><a href="#"><span className="user_icon"><i className="fa fa-user" aria-hidden="true"></i></span>Login</a></li>
                           <li><a href="#"><i className="fa fa-search" aria-hidden="true"></i></a></li>
                        </ul>
                     </div>
                  </form>
               </div>
            </nav>
         </div>
      <div className="banner_section layout_padding">
         <div className="container">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
               <div className="carousel-inner">
                  <div className="carousel-item active">
                     <div className="row">
                        <div className="col-sm-12">
                           <h1 className="banner_taital">Find A Property</h1>
                           <p className="banner_text">page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to</p>
                           <div className="started_text"><a href="#">Contact Us</a></div>
                        </div>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <div className="row">
                        <div className="col-sm-12">
                           <h1 className="banner_taital">Find A Property</h1>
                           <p className="banner_text">page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to</p>
                           <div className="started_text"><a href="#">Contact Us</a></div>
                        </div>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <div className="row">
                        <div className="col-sm-12">
                           <h1 className="banner_taital">Find A Property</h1>
                           <p className="banner_text">page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to</p>
                           <div className="started_text"><a href="#">Contact Us</a></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="container">
         <div className="select_box_section">
            <div className="select_box_main">
               <h1 className="find_text">Find Property</h1>
               <div className="row">
                  <div className="col-lg-3 select-outline">
                     <select className="mdb-select md-form md-outline colorful-select dropdown-primary">
                       <option value="" disabled selected>City</option>
                       <option value="1">Option 1</option>
                       <option value="2">Option 2</option>
                       <option value="3">Option 3</option>
                     </select>
                  </div>
                  <div className="col-lg-3 select-outline">
                     <select className="mdb-select md-form md-outline colorful-select dropdown-primary">
                       <option value="" disabled selected>Austin</option>
                       <option value="1">Option 1</option>
                       <option value="2">Option 2</option>
                       <option value="3">Option 3</option>
                     </select>
                  </div>
                  <div className="col-lg-3 select-outline">
                     <select className="mdb-select md-form md-outline colorful-select dropdown-primary">
                       <option value="" disabled selected>Street</option>
                       <option value="1">Option 1</option>
                       <option value="2">Option 2</option>
                       <option value="3">Option 3</option>
                     </select>
                  </div>
                  <div className="col-lg-3 select-outline">
                     <div className="find_btn"><a href="#">Find Now</a></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="feature_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-sm-12">
                  <div className="feature_taital_main">
                     <h1 className="feature_taital">FEATURED</h1>
                     <hr className="border_main"/>
                  </div>
               </div>
            </div>
         </div>
         <div className="container-fluid">
            <div id="main_slider" className="carousel slide" data-ride="carousel">
               <div className="carousel-inner">
                  <div className="carousel-item active">
                     <div className="feature_section_2">
                        <div className="row">
                           <div className="col-md-4">
                              <div className="container_main">
                                 <img src="images/img-1.png" alt="" className="image"/>
                                 <div className="overlay">
                                    <div className="text">
                                       <div className="some_text"><a href="#">See More</a></div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-4">
                              <div className="container_main">
                                 <img src="images/img-2.png" alt="" className="image"/>
                                 <div className="overlay">
                                    <div className="text">
                                       <div className="some_text"><a href="#">See More</a></div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-4">
                              <div className="container_main">
                                 <img src="images/img-3.png" alt="" className="image"/>
                                 <div className="overlay">
                                    <div className="text">
                                       <div className="some_text"><a href="#">See More</a></div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <div className="feature_section_2">
                        <div className="row">
                           <div className="col-md-4">
                              <div className="container_main">
                                 <img src="images/img-1.png" alt="" className="image"/>
                                 <div className="overlay">
                                    <div className="text">
                                       <div className="some_text"><a href="#">See More</a></div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-4">
                              <div className="container_main">
                                 <img src="images/img-2.png" alt="" className="image"/>
                                 <div className="overlay">
                                    <div className="text">
                                       <div className="some_text"><a href="#">See More</a></div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-4">
                              <div className="container_main">
                                 <img src="images/img-3.png" alt="" className="image"/>
                                 <div className="overlay">
                                    <div className="text">
                                       <div className="some_text"><a href="#">See More</a></div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <div className="feature_section_2">
                        <div className="row">
                           <div className="col-md-4">
                              <div className="container_main">
                                 <img src="images/img-1.png" alt="" className="image"/>
                                 <div className="overlay">
                                    <div className="text">
                                       <div className="some_text"><a href="#">See More</a></div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-4">
                              <div className="container_main">
                                 <img src="images/img-2.png" alt="" className="image"/>
                                 <div className="overlay">
                                    <div className="text">
                                       <div className="some_text"><a href="#">See More</a></div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-4">
                              <div className="container_main">
                                 <img src="images/img-3.png" alt="" className="image"/>
                                 <div className="overlay">
                                    <div className="text">
                                       <div className="some_text"><a href="#">See More</a></div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
                <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
                <i className="fa fa-angle-left"></i>
                </a>
                <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
                <i className="fa fa-angle-right"></i>
                </a>
            </div>
         </div>
      </div>
      <div className="Properties_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-sm-12">
                  <div className="Properties_taital_main">
                     <h1 className="Properties_taital">New Properties for You</h1>
                     <hr className="border_main"/>
                  </div>
               </div>
            </div>
            <div className="Properties_section_2">
               <div className="row">
                  <div className="col-lg-4 col-md-6col-lg-4 col-md-6">
                     <div className="blog_img"><img src="images/img-4.png"/></div>
                     <div className="image_box">
                        <div className="left_box">
                           <h1 className="road_text">2186 Lohariya Road</h1>
                           <div className="area_main">
                              <h3 className="area_text active"><a href="#">Area:<br/>240m2</a></h3>
                              <h3 className="area_text"><a href="#">Beds:<br/>3</a></h3>
                              <h3 className="area_text"><a href="#">Baths:<br/>1</a></h3>
                              <h3 className="area_text"><a href="#">Garages:<br/>1</a></h3>
                           </div>
                        </div>
                        <div className="right_box">
                           <div className="rate_text">$14000</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                     <div className="blog_img"><img src="images/img-5.png"/></div>
                     <div className="image_box">
                        <div className="left_box">
                           <h1 className="road_text">2186 Lohariya Road</h1>
                           <div className="area_main">
                              <h3 className="area_text active"><a href="#">Area:<br/>240m2</a></h3>
                              <h3 className="area_text"><a href="#">Beds:<br/>3</a></h3>
                              <h3 className="area_text"><a href="#">Baths:<br/>1</a></h3>
                              <h3 className="area_text"><a href="#">Garages:<br/>1</a></h3>
                           </div>
                        </div>
                        <div className="right_box">
                           <div className="rate_text">$14000</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                     <div className="blog_img"><img src="images/img-6.png"/></div>
                     <div className="image_box">
                        <div className="left_box">
                           <h1 className="road_text">2186 Lohariya Road</h1>
                           <div className="area_main">
                              <h3 className="area_text active"><a href="#">Area:<br/>240m2</a></h3>
                              <h3 className="area_text"><a href="#">Beds:<br/>3</a></h3>
                              <h3 className="area_text"><a href="#">Baths:<br/>1</a></h3>
                              <h3 className="area_text"><a href="#">Garages:<br/>1</a></h3>
                           </div>
                        </div>
                        <div className="right_box">
                           <div className="rate_text">$14000</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                     <div className="blog_img"><img src="images/img-7.png"/></div>
                     <div className="image_box">
                        <div className="left_box">
                           <h1 className="road_text">2186 Lohariya Road</h1>
                           <div className="area_main">
                              <h3 className="area_text active"><a href="#">Area:<br/>240m2</a></h3>
                              <h3 className="area_text"><a href="#">Beds:<br/>3</a></h3>
                              <h3 className="area_text"><a href="#">Baths:<br/>1</a></h3>
                              <h3 className="area_text"><a href="#">Garages:<br/>1</a></h3>
                           </div>
                        </div>
                        <div className="right_box">
                           <div className="rate_text">$14000</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                     <div className="blog_img"><img src="images/img-8.png"/></div>
                     <div className="image_box">
                        <div className="left_box">
                           <h1 className="road_text">2186 Lohariya Road</h1>
                           <div className="area_main">
                              <h3 className="area_text active"><a href="#">Area:<br/>240m2</a></h3>
                              <h3 className="area_text"><a href="#">Beds:<br/>3</a></h3>
                              <h3 className="area_text"><a href="#">Baths:<br/>1</a></h3>
                              <h3 className="area_text"><a href="#">Garages:<br/>1</a></h3>
                           </div>
                        </div>
                        <div className="right_box">
                           <div className="rate_text">$14000</div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                     <div className="blog_img"><img src="images/img-9.png"/></div>
                     <div className="image_box">
                        <div className="left_box">
                           <h1 className="road_text">2186 Lohariya Road</h1>
                           <div className="area_main">
                              <h3 className="area_text active"><a href="#">Area:<br/>240m2</a></h3>
                              <h3 className="area_text"><a href="#">Beds:<br/>3</a></h3>
                              <h3 className="area_text"><a href="#">Baths:<br/>1</a></h3>
                              <h3 className="area_text"><a href="#">Garages:<br/>1</a></h3>
                           </div>
                        </div>
                        <div className="right_box">
                           <div className="rate_text">$14000</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="blog_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-sm-12">
                  <div className="blog_taital_main">
                     <h1 className="blog_taital">Book Now Property</h1>
                     <hr className="blog_border_main"/>
                  </div>
               </div>
            </div>
         </div>
         <div className="blog_section_2">
            <div className="container-fluid">
                <div className="row">
                   <div className="col-md-6">
                     <div className="blog_text_main">
                        <p className="blog_text">Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web</p>
                        <div className="readmore_bt"><a href="#">Read More</a></div>
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div className="blog_img"><img src="images/blog-img.png"/></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="newsletter_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-sm-12">
                  <div className="newsletter_taital_main">
                     <h1 className="newsletter_taital">subscribe Our newsletter</h1>
                     <hr className="newsletter_border_main"/>
                  </div>
               </div>
            </div>
            <form action="">
               <textarea className="email_bt" placeholder="Enter Your Email" rows="5" id="comment" name="Massage"></textarea>
               <div className="subscribe_bt"><a href="#">Subscribe</a></div>
            </form>
         </div>
      </div>
      <div className="customer_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-sm-12">
                  <div className="customer_taital_main">
                     <h1 className="customer_taital">SATISFIED CLIENT Says</h1>
                     <hr className="customer_border_main"/>
                  </div>
               </div>
            </div>
         </div>
         <div id="my_slider" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
               <div className="carousel-item active">
                  <div className="customer_section_2">
                     <div className="container">
                        <div className="row">
                           <div className="col-md-12">
                              <div className="box_main">
                                 <div className="customer_main">
                                    <div className="customer_left">
                                       <div className="customer_img"><img src="images/customer-img.png"/></div>
                                    </div>
                                    <div className="customer_right">
                                       <h3 className="customer_name">DenoMark <span className="quick_icon"><img src="images/quick-icon.png"/></span></h3>
                                       <p className="enim_text">anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internetanything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <div className="customer_section_2">
                     <div className="container">
                        <div className="row">
                           <div className="col-md-12">
                              <div className="box_main">
                                 <div className="customer_main">
                                    <div className="customer_left">
                                       <div className="customer_img"><img src="images/customer-img.png"/></div>
                                    </div>
                                    <div className="customer_right">
                                       <h3 className="customer_name">DenoMark <span className="quick_icon"><img src="images/quick-icon.png"/></span></h3>
                                       <p className="enim_text">anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internetanything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <div className="customer_section_2">
                     <div className="container">
                        <div className="row">
                           <div className="col-md-12">
                              <div className="box_main">
                                 <div className="customer_main">
                                    <div className="customer_left">
                                       <div className="customer_img"><img src="images/customer-img.png"/></div>
                                    </div>
                                    <div className="customer_right">
                                       <h3 className="customer_name">DenoMark <span className="quick_icon"><img src="images/quick-icon.png"/></span></h3>
                                       <p className="enim_text">anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internetanything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <a className="carousel-control-prev" href="#my_slider" role="button" data-slide="prev">
              <i className="fa fa-arrow-left"></i>
            </a>
            <a className="carousel-control-next" href="#my_slider" role="button" data-slide="next">
              <i className="fa fa-arrow-right"></i>
            </a>
         </div>
      </div>
      <div className="contact_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-sm-12">
                  <div className="contact_taital_main">
                     <h1 className="contact_taital">Requeste A Call Back</h1>
                     <hr className="contact_border_main"/>
                  </div>
               </div>
            </div>
         </div>
         {/* <div className="container-fluid">
            <div className="contact_section_2">
                <div className="row">
                  <div className="col-md-6">
                      <div className="mail_section map_form_container">
                        <input type="text" className="mail_text" placeholder="Name" name="Name"/>
                        <input type="text" className="mail_text" placeholder="Phone Number" name="Phone Number"> 
                        <input type="text" className="mail_text" placeholder="Email" name="Email">
                        <textarea className="massage-bt" placeholder="Massage" rows="5" id="comment" name="Massage"></textarea>
                        <div className="btn_main">
                           <div className="send_bt active"><a href="#">Send Now</a></div>
                           <div className="map_bt"><a href="#" id="showMap">Map</a></div>
                        </div>
                        <div className="map_main map_container">
                           <div className="map-responsive">
                              <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eiffel+Tower+Paris+France" width="600" height="368" frameborder="0" style="border:0; width: 100%;" allowfullscreen=""></iframe>
                               <div className="btn_main">
                                 <div className="map_bt d-flex justify-content-center w-100 map_center"><a href="#" id="showForm">Form</a></div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div className="contact_img"><img src="images/contact-img.png"/></div>
                  </div>
                </div>
            </div>
         </div>
         </div> */}
      </div>
      <div className="footer_section layout_padding">
         <div className="container">
            <div className="row">
                <div className="col-md-12">
                  <div className="location_text">
                     <ul>
                        <li>
                           <a href="#"><i className="fa fa-map-marker" aria-hidden="true"></i></a>
                        </li>
                        <li>
                           <a href="#"><i className="fa fa-phone" aria-hidden="true"></i></a>
                        </li>
                        <li>
                           <a href="#"><i className="fa fa-envelope" aria-hidden="true"></i></a>
                        </li>
                     </ul>
                  </div>
                </div>
               <div className="social_icon">
                     <ul>
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                     </ul>
                  </div>
            </div>
            <div className="row">
               <div className="col-md-4">
                  <h3 className="footer_text">About Us</h3>
                  <p className="lorem_text">Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web</p>
               </div>
               <div className="col-md-4">
                  <h3 className="footer_text">Recent Properties</h3>
                  <div className="image_main">
                     <div className="image_10"><img src="images/img-10.png"/></div>
                  <div className="image_10"><img src="images/img-10.png"/></div>
                  </div>
               </div>
               <div className="col-md-4">
                  <h3 className="footer_text">Useful Links</h3>
                  <div className="footer_menu">
                     <ul>
                        <li className="active"><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="property.html">Property</a></li>
                        <li><a href="testimonial.html">Testimonial</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="copyright_section">
         <div className="container">
            <p className="copyright_text">2020 All Rights Reserved. Design by <a href="https://html.design">Free Html Templates</a></p>
         </div>
      </div>
      </div>
  );
}
