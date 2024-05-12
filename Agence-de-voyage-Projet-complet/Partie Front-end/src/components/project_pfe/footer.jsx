import React from "react";
function Footer() {
    return (
        // <div className="bg-primary">
        //     <br/><br/><br/>
        //     <div className="row">
                
        //         <div className="col-1"></div>
        //         <div className="col-4">
        //         <h3 className='text text-warning'>  <img className="rounded-circle" src='logopfe.jpg' width={'60px'} /> NEZAHA VOYAGE</h3>
        //         <p className='text text-light'>NEZAHA Voyages, leader du voyage au Maroc: plus de 500 000 hôtels au Maroc et dans le monde,
        //             billets d'avion, voyages organisés, omra, hajj, croisières. paiement en dirhams</p>
        //         </div>
                
        //         <div className="col-2">
        //             <h6 className='text text-warning'>NEZAHA Voyages</h6>
        //             <p className='text text-light'>Nos Agences<br/>Contact</p>
        //         </div>
        //         <div className="col-1"></div>
        //         <div className="col-3">
        //             <p className='text text-light'><i class="fas fa-mobile-alt"></i>  00212522302548</p>
        //             <p className='text text-light'><i class="far fa-envelope"></i> contact@nezahavoyages.com </p>

        //         </div>
               
        //     </div>
        //     <div className="row">
        //     <div className="col-12 px-md-5 px-3">
        //             <h1 className="flex-footer-child text-center text-light payment-footer">
        //                 <i  class="fab fa-cc-mastercard mx-2" ></i>
        //                 <i class="fab fa-cc-visa mx-2"></i>
        //                 <i class="fab fa-cc-amex mx-2"></i>
        //                 <i class="fab fa-cc-jcb mx-2"></i>
        //             </h1>
        //     </div>
        //     <div className="col-12 px-md-5 px-3">
        //         <h1 className="text text-light text-center">
        //                 <i class="fab fa-facebook mx-2"></i>
        //                 <i class="fab fa-instagram mx-2"></i>
        //                 <i class="fab fa-whatsapp mx-2"></i>
                    
        //         </h1>
        //         <p className="px-md-5 px-0 mb-0 text-center text-white py-3">
        //         N°108 Espace Paquet 1° Etage Angle rue Med Smiha et Pierre Parent Casablanca - Maroc<br/>
        //         Téléphone : 00212522302548 Téléphone : 00212522302561 Email :
        //         contact@nezahavoyages.com
        //         </p>
        //     </div>
        //     <br/><br/>
        //     </div>

        // </div>
        <>
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
                  <p className="lorem_text">Nezaha Voyage vous invite à découvrir le monde à travers des expériences authentiques et des voyages sur mesure. Plongez dans des destinations extraordinaires, où chaque détail est soigneusement conçu pour créer des souvenirs inoubliables. Que vous soyez à la recherche d'aventures en plein air, de détente sur des plages paradisiaques ou d'explorations culturelles, Nezaha Voyage vous accompagne dans la réalisation de vos rêves de voyage.</p>
               </div>
               <div className="col-md-4">
                  <h3 className="footer_text">Nezaha Voyage</h3>
                  <div className="image_main">
                     <div className="image_10"><img src="images/logopfe.png"/></div>
                    {/* <div className="image_10"><img src="images/img-10.png"/></div> */}
                  </div>
               </div>
               <div className="col-md-4">
                  <h3 className="footer_text">Links</h3>
                  <div className="footer_menu">
                     <ul>
                        <li className="active"><a href="/acceuil">Acceuil</a></li>
                        <li><a href="/listeVoyage">Voyage</a></li>
                        <li><a href="/listVol">Vol</a></li>
                        <li><a href="/haj-omra">Haj et Omra</a></li>
                        <li><a href="/Contact">Contact</a></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="copyright_section">
         <div className="container">
            <p className="copyright_text">2024 All Rights Reserved. Design by <a href="https://github.com/OthmaneRahel/Project-PFE">Othmane et Mostafa</a></p>
         </div>
      </div>
        </>
    )
}
export default Footer