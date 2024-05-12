import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AfficheHaj } from "./actionsThunk";
import Footer from "./footer";
import { Fade } from "react-reveal";
import { useNavigate } from "react-router-dom";

export default function HajOrg() {
    const Haj = useSelector((state) => state.Haj);
    const Dispatch = useDispatch();
    const [destination, setDestination] = useState('');
    const [dateDepart, setDateDepart] = useState('');
    const [dateArrivee, setDateArrivee] = useState('');
    const [filteredHaj, setFilteredHaj] = useState([]);
    const Navigate = useNavigate();

    useEffect(() => {
        Dispatch(AfficheHaj());
    }, [Dispatch]);

    useEffect(() => {
        setFilteredHaj(Haj);
    }, [Haj]);

    const handleSearch = () => {
        const filteredHaj = Haj.filter(hajItem => {
            const destinationMatches = destination === '' || hajItem.nom.toLowerCase() === destination.toLowerCase();
            const dateDepartMatches = dateDepart === '' || hajItem.date_depart === dateDepart;
            const dateArriveeMatches = dateArrivee === '' || hajItem.date_arrivee === dateArrivee;
            return destinationMatches && dateDepartMatches && dateArriveeMatches;
        });
        setFilteredHaj(filteredHaj);
    };
    return (
        <div>
            <div className="banner_section layout_padding">
                <div className="banner_section layout_padding" style={{backgroundImage: "url('images/hajj.jpg')",backgroundRepeat:'no-repeat' , backgroundSize: 'cover'}}>
                    <div className="container">
                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <h1 className="banner_taital">Recherchez votre haj préféré</h1>
                                            <p className="banner_text">Explorez des destinations exotiques, vivez des aventures inoubliables et découvrez des cultures fascinantes avec notre agence de voyages.</p>
                                            <div className="started_text bg-warning"><Link to={'/contact'}>Contactez-nous</Link></div>
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
                            <h1 className="find_text">Rechercher sur votre Destination</h1>
                            <div className="row">
                                <div className="col-lg-3">
                                    <select className="form-select" value={destination} onChange={(event) => setDestination(event.target.value)}>
                                        <option value="">Destination</option>
                                        {Haj.map((e, index) => (
                                            <option key={index} value={e.nom}>{e.nom}</option>
                                        ))}
                                    </select>
                                </div><br />
                                <br />
                                <div className="col-lg-3">
                                    <input type="date" className="form-control" value={dateDepart} onChange={(event) => setDateDepart(event.target.value)}/>
                                </div><br />
                                <br />
                                <div className="col-lg-3">
                                    <input type="date" className="form-control" value={dateArrivee} onChange={(event) => setDateArrivee(event.target.value)}/>
                                </div><br />
                                <br />
                                <div className="col-lg-3">
                                    <div className="find_btn">
                                        <button type="button" onClick={handleSearch}>Rechercher</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Properties_section layout_padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="Properties_taital_main">
                                    <h1 className="Properties_taital">Haj Disponible</h1>
                                    <hr className="border_main" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {filteredHaj.map((i, index) => (
                                <Fade top key={index}>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="Properties_section_2">
                                            <Link to={`/haj-sel/${i.idHO}`}>
                                                <div className="blog_img"><img src={`http://127.0.0.1:8000/storage/${i.image}`} alt="property"/></div>
                                                <div className="image_box">
                                                    <div className="left_box">
                                                        <h1 className="road_text">{i.nom}</h1>
                                                        <div className="area_main">
                                                            <h3 className="area_text"><a href="#">Date Depart:<br />{i.date_depart}</a></h3>
                                                            <h3 className="area_text"><a href="#">Date Arrivée:<br />{i.date_arrivee}</a></h3>
                                                        </div>
                                                    </div>
                                                    <div className="right_box">
                                                        <div className="rate_text">{i.prix} Dhs</div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </Fade>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
