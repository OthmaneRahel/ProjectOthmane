import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AfficherVoyage } from "./actionsThunk";
import { Link } from "react-router-dom";
import './InfosBVoyage.css';
import Footer from "./footer";
import { Fade } from "react-reveal";

export default function VoyageOrg() {
    const allVoyages = useSelector((state) => state.voyages);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [destination, setDestination] = useState('');
    const [dateDepart, setDateDepart] = useState('');
    const [dateArrivee, setDateArrivee] = useState('');
    const [filteredVoyages, setFilteredVoyages] = useState([]);

    useEffect(() => {
        dispatch(AfficherVoyage());
    }, [dispatch]);

    useEffect(() => {
        setFilteredVoyages(allVoyages);
    }, [allVoyages]);

    const handleSearch = () => {
        const filteredVoyages = allVoyages.filter(voyage => {
            const destinationMatches = destination === '' || voyage.nomVille.toLowerCase() === destination.toLowerCase();
            const dateDepartMatches = dateDepart === '' || voyage.date_depart === dateDepart;
            const dateArriveeMatches = dateArrivee === '' || voyage.date_arrivee === dateArrivee;
            return destinationMatches && dateDepartMatches && dateArriveeMatches;
        });
        setFilteredVoyages(filteredVoyages);
    };
    return (
        <>
            <div className="banner_section layout_padding">
                <div className="banner_section"
                     style={{backgroundImage: "url('images/imageVyg.jpg')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                    <div className="container">
                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <h1 className="banner_taital">Recherchez votre voyage préféré</h1>
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
                    <div className="select_box_section ">
                        <div className="select_box_main">
                            <h1 className="find_text">Rechercher sur votre Destination</h1>
                            <div className="row">
                                <div className="col-lg-3">
                                    <select className="form-select" name="destination" value={destination} onChange={(event) => setDestination(event.target.value)}>
                                        <option value="">Destination</option>
                                        {allVoyages.map((e, index) => (
                                            <option key={index} value={e.nomVille}>{e.nomVille}</option>
                                        ))}
                                    </select>
                                </div><br />
                                <br />
                                <div className="col-lg-3">
                                    <input type="date" name="dateDepart" className="form-control" value={dateDepart} onChange={(event) => setDateDepart(event.target.value)}/>
                                </div><br />
                                <br />
                                <div className="col-lg-3">
                                    <input type="date" name="dateArrivee" className="form-control" value={dateArrivee} onChange={(event) => setDateArrivee(event.target.value)}/>
                                </div>
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
                                    <h1 className="Properties_taital">Voyages Disponible</h1>
                                    <hr className="border_main" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {filteredVoyages.map((i, index) => (
                                <Fade top key={index}>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="Properties_section_2">
                                            <Link to={`/voyage-sel/${i.idVoyage}`}>
                                                <div className="blog_img"><img src={`http://127.0.0.1:8000/storage/${i.image}`} alt=""/></div>
                                                <div className="image_box">
                                                    <div className="left_box">
                                                        <h1 className="road_text">{i.nomVille}</h1>
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
        </>
    );
}
