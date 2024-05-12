import React from 'react';
import './NavBar.css';
export default function Accueil() {
    return (
        <div className='row content-p'>
            <div className="accueil">
    {/* <!-- contenu section --> */}
    <section className="slider_section ">
      <div id="customCarousel1" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container ">
              <div className="row">
                <div className="col-md-7 col-lg-6 fs">
                  <div className="detail-box">
                  <div className="bg-box">
                       <img src="images/img1.png" alt=""/>
                  </div>
                    <h1> Bienvenue chez Nezaha Voyages </h1>
                    <p>
                    Découvrez une expérience de réservation simplifiée, une sélection diversifiée de destinations et des services transparents chez Nezaha Voyages. Que vous soyez un voyageur chevronné ou novice, commencez votre aventure dès aujourd'hui avec Nezaha Voyages. 
                    </p>

                    <div className="btn-box">
                      <a href="" className="btn1">voir plus</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container ">
              <div className="row">
                <div className="col-md-7 col-lg-6 fs">
                  <div className="detail-box">
                  <div className="bg-box">
                       <img src="images/img4.png" alt=""/>
                  </div>
                     <h1> Bienvenue chez Nezaha Voyages </h1>
                     <p>
                     Découvrez une expérience de réservation simplifiée, une sélection diversifiée de destinations et des services transparents chez Nezaha Voyages. Que vous soyez un voyageur chevronné ou novice, commencez votre aventure dès aujourd'hui avec Nezaha Voyages. 
                     </p>                
                      <div className="btn-box">
                        <a href="" className="btn1">voir plus</a>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container ">
              <div className="row">
                <div className="col-md-7 col-lg-6 fs">
                  <div className="detail-box">
                  <div className="bg-box">
                       <img src="images/img3.png" alt=""/>
                  </div>
                     <h1> Bienvenue chez Nezaha Voyages </h1>
                     <p>
                     Découvrez une expérience de réservation simplifiée, une sélection diversifiée de destinations et des services transparents chez Nezaha Voyages. Que vous soyez un voyageur chevronné ou novice, commencez votre aventure dès aujourd'hui avec Nezaha Voyages. 
                     </p>                
                    <div className="btn-box">
                      <a href="#services" className="btn1">voir plus</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <ol className="carousel-indicators">
            <li data-target="#customCarousel1" data-slide-to="0" className="active"></li>
            <li data-target="#customCarousel1" data-slide-to="1"></li>
            <li data-target="#customCarousel1" data-slide-to="2"></li>
          </ol>
        </div>
      </div>

    </section>
    {/* <!-- end contenu section --> */}
            </div>
            <div className="feature_section layout_padding" >
         <div className="container">
            <div className="row">
               <div className="col-sm-12 fs">
                  <div className="feature_taital_main">
                     <h1 className="feature_taital">Nos Services</h1>
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
                        <div className="row"  id='services'>
                           <div className="col-md-4">
                              <div className="container_main">
                                 <img src="images/S3.jpg" alt="" className="image" style={{width:'100%',height:'410px'}}/>
                                 <div className="overlay">
                                    <div className="text">
                                       <div className="some_text">Service clientèle 100%</div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-4">
                              <div className="container_main">
                                 <img src="images/S17.png" alt="" className="image" style={{width:'100%',height:'410px'}}/>
                                 <div className="overlay">
                                    <div className="text">
                                       <div className="some_text">Offres et Promotions Sur Notre Voyages</div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-4">
                              <div className="container_main">
                                 <img src="images/S18.png" alt="" className="image" style={{width:'100%',height:'410px'}}/>
                                 <div className="overlay">
                                    <div className="text">
                                       <div className="some_text">Visites guidées et excursions</div>
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
                                 <img src="images/S19.png" alt="" className="image" style={{width:'100%',height:'410px'}}/>
                                 <div className="overlay">
                                    <div className="text">
                                       <div className="some_text">Services de transfert</div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-4">
                              <div className="container_main">
                                 <img src="images/S20.png" alt="" className="image" style={{width:'100%',height:'410px'}}/>
                                 <div className="overlay">
                                    <div className="text">
                                       <div className="some_text">Locations des Voitures</div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-4">
                              <div className="container_main">
                                 <img src="images/S21.png" alt="" className="image" style={{width:'100%',height:'410px'}}/>
                                 <div className="overlay">
                                    <div className="text">
                                       <div className="some_text">Assurance voyage</div>
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
            <div className="customer_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-sm-12 fs">
                  <div className="customer_taital_main">
                     <h1 className="customer_taital">Pourquoi choisir notre Agence de voyage</h1>
                     <hr className="customer_border_main"/>
                  </div>
               </div>
            </div>
         </div>
         <div id="my_slider" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner py-5">
               <div className="carousel-item active">
                  <div className="customer_section_2">
                     <div className="container">
                        <div className="row">
                           <div className="col-md-12">
                              <div className="box_main">
                                 <div className="customer_main">
                                    <div className="customer_left">
                                       <div className="customer_img"><i style={{fontSize:'190px'}} class="fa-solid fa-medal p-4"></i></div>
                                    </div>
                                    <div className="customer_right">
                                       <h3 className="customer_name">La garantie du meilleur prix <span className="quick_icon"><img src="images/quick-icon.png"/></span></h3>
                                       <p className="enim_text">Nezaha Voyage pourrait promettre à ses clients qu'ils obtiendront toujours le meilleur prix disponible pour leurs voyages. Si un client trouve un tarif inférieur ailleurs pour le même voyage, Nezaha Voyage pourrait s'engager à égaler ce prix ou même à le battre.</p>
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
                                       <div className="customer_img"><i style={{fontSize:'190px'}} class="fa-solid fa-plane-circle-check p-4"></i></div>
                                    </div>
                                    <div className="customer_right">
                                       <h3 className="customer_name">Hôtels d'exception et vols variés avec Nezaha Voyage</h3>
                                       <p className="enim_text">Nezaha Voyage propose une sélection d'hôtels de charme dans le monde entier et un vaste choix parmi plus de 1200 compagnies aériennes. Cette offre garantit aux voyageurs une expérience de réservation complète et personnalisée, avec des hébergements uniques et une flexibilité maximale pour trouver les vols qui leur conviennent le mieux.</p>
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
                                       <div className="customer_img"><i style={{fontSize:'190px'}} class="fa-solid fa-ranking-star p-4"></i></div>
                                    </div>
                                    <div className="customer_right">
                                       <h3 className="customer_name">Des Experts Qui Vous Connaissent et Vous Guident. </h3>
                                       <p className="enim_text">Nezaha Voyage offre à ses clients l'expertise d'une équipe de spécialistes du voyage ayant visité toutes les destinations proposées. Grâce à leur connaissance approfondie et leur expérience directe, ces experts fournissent des conseils personnalisés et précieux pour aider les clients à planifier des voyages inoubliables en toute confiance.</p>
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
         </div>
    )
}