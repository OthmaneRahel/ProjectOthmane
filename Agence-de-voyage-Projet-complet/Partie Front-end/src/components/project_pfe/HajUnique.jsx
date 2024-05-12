import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "./footer";
import { Fade } from "react-reveal";
//import { useParams } from "react-router-dom";
export default function HajUnique(){
    const {id} = useParams()
    const hajs =  useSelector((state)=>state.Haj)
    const navigate = useNavigate()
    const haj = hajs.find((i)=>i.idHO == id)
    const NavigateTohajs = () =>{
        navigate('/haj-omra')
    }
    return <div>
    <div>
        <Fade top>
    <div className="row px-5 hubqalbifati">
        <div className="col-8">
            <div className="Omrifati">
                <span> <i class="bi bi-geo-alt-fill"></i> {haj.nom} {' '} <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star"></i></span><br />
            </div>
            <div className="fati">
                <img src={`http://127.0.0.1:8000/storage/${haj.image}`}/>
            </div>
        </div>
        <div className="col-4 fati2">
            <div className="pr"><b className="">A partir de <br /> <span className="prixhaj">{haj.prix}</span> MAD <br /> Par Personne</b></div>
            <br />
            <br />
            <div className="kk">
                <div className="row">
                        <div className='col-6'>
                            <b className="text-center"><i style={{fontSize:'30px'}} class="fa-solid fa-stopwatch"></i> 8 jours / 7 nuits</b>
                        </div>
                        <div className='col-6'>
                            <b className="text-center"><i style={{fontSize:'30px'}} class="fa-solid fa-utensils"></i> Petit déjeuner</b>
                        </div>
                </div><br />
                <div className="row py-3">
                        <div className='col-6'>
                            <b className="text-center"><i style={{fontSize:'30px'}} class="fa-solid fa-plane-up"></i> Vol A/R</b>
                        </div>
                        <div className='col-6'>
                            <b className="text-center"><i style={{fontSize:'30px'}} class="fa-solid fa-bus"></i> Transfert Aeroport</b>
                        </div>
                </div>
            </div>
            <div className="monbebefati">
                <b style={{fontSize:'30px'}}>Réservez directement au</b><br />
                <b style={{fontSize:'25px'}}><i class="fa-solid fa-square-phone"></i> 00212522302548</b>
            </div>
            <div><br /> 
            </div>
            <div data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="50">
                <ul class="navbar-nav">
                    <div className="d-grid">
                        <li><a className="btn btn-primary btn-block" href="#tarif"><b style={{textAlign:'center',fontSize:'23px'}}>جدول الأسعار</b></a></li>
                    </div>
                </ul>
            </div>
        </div>
        <br />
    </div>
        <Fade top>
            <div className="description">
                <b>Description :</b><br />
                <p>{haj.description}</p>
                <br/>
            </div>
        </Fade>
        <Fade top>
        <div id="tarif" className=" col-10 ms-5">
         <br/>
         <table className="table table-bordered content-table" border={1} width={'100%'}>
             <tr>
             <th className="bg-primary text-light">سعر الفرد في العرفة الرباعية</th><th className="bg-primary text-light">سعر الفرد في العرفة الثلاثية</th><th className="bg-primary text-light">سعر الفرد في العرفة الثنائية</th><th className="bg-primary text-light">فندق المدينة المنورة</th><th className="bg-primary text-light">فنذق مكة المكرمة</th><th className="bg-primary text-light">البرنامج</th>
             </tr>
             <tr>
              <td>35.400</td> <td>30.400</td> <td>27.400</td> <td>المركزية إقامة فقط</td> <td>منازل الحياةإقامة فقط</td> <td>1</td> 
             </tr>
             <tr>
              <td>37.400</td> <td>31.400</td> <td>28.400</td> <td>المركزية إقامة فقط</td> <td>براج الكسوة إقامة فقط</td> <td>2</td> 
             </tr>
             <tr>
              <td>45.400</td> <td>36.400</td> <td>45.400</td> <td>المركزية إقامة فقط</td> <td>لؤلؤة الصفاء إقامة فقط</td> <td>3</td> 
             </tr>
             <tr>
              <td>53.400</td> <td>42.400</td> <td>36.400</td> <td>المركزية إقامة فقط</td> <td>ضيافة الرجاء إقامة فقط</td> <td>4</td> 
             </tr>
            
         </table>
       </div>
         <div className="d-grid p-5 mybabefati" id="buttonTarif">
             <button className="btn btn-warning" onClick={NavigateTohajs}>Retour</button>
         </div>
        </Fade>
    </Fade>
    </div>
</div>
//     <div>
//             <div className="row px-5">
//                 <div className="col-8">
//                     <img src={`http://127.0.0.1:8000/storage/${haj.image}`} alt="" srcset="" width={'100%'} />
//                 </div>
//                 <div className="col-4">
//                     <b style={{fontSize:'33px'}}>A partir de {haj.p} Dhs Par Personne</b>
//                     <br />
//                     <br />
//                     <div className="row">
//                             <div className='col-6'>
//                                 <b className="text-center"><i style={{fontSize:'30px'}} class="fa-solid fa-stopwatch"></i> 8 jours / 7 nuits</b>
//                             </div>
//                             <div className='col-6'>
//                                 <b className="text-center"><i style={{fontSize:'30px'}} class="fa-solid fa-utensils"></i> Petit déjeuner</b>
//                             </div>
//                     </div><br />
//                     <div className="row py-3">
//                             <div className='col-6'>
//                                 <b className="text-center"><i style={{fontSize:'30px'}} class="fa-solid fa-plane-up"></i> Vol A/R</b>
//                             </div>
//                             <div className='col-6'>
//                                 <b className="text-center"><i style={{fontSize:'30px'}} class="fa-solid fa-bus"></i> Transfert Aeroport</b>
//                             </div>
//                     </div>
//                     <b style={{textAlign:'center' , fontSize:'30px'}}>Réservez directement au</b><br />
//                     <b style={{fontSize:'25px'}}><i class="fa-solid fa-square-phone"></i>+21277-083904</b><br />
//                     <div>
//                     </div>
//                     <ul className="p-4">
//                         <li>Hôtel - Petit déjeuner - Vol A / R - Transfert Aeroport</li>
//                         <li>Hôtel 4 étoiles</li>
//                     </ul>
//                     <div className="d-grid">
//                         <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">معلومات حول هذه الرحله</button>
//                         <br/>
//                         <a className="btn btn-warning" href="#tarif">جدول الأسعار </a>
//                     </div>
//                 </div>
//                 <div className="d-grid p-5" id="buttonTarif">
//                     <button className="btn btn-warning" onClick={NavigateTohajs}>Retour</button>
//                 </div>

//             </div>
//         <div class="modal" id="myModal">
//   <div class="modal-dialog">
//     <div class="modal-content">
     
//       <div class="modal-header">
//         <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
//         <h4 class="modal-title">
//           عمرة<br/>
//           !احجز الآن للحصول على أفضل العروض<br/>
//           :?ماذا تتضمن رحلتك<br/>
//           تأشيرة سفر<br/>
//           تذكرة طيران ذهاب و عودة<br/>
//           مرشدين خبراء<br/>
//           إقامة مريحة في أفخم الفنادق
//         </h4>
//       </div>

//       <div class="modal-footer">
//         <a href="+212617125803" class="btn btn-warning" style={{width:"100%"}}>Contactez-nous</a>
//       </div>
//     </div>
//   </div>
// </div>

//       <div id="tarif" className=" col-10 ms-5">
//         <div className="bg-primary p-3 ms-5">
//             <h1 >جدول الأسعار</h1>
//         </div>
//         <br/>
//         <table className="table table-bordered" border={1}>
//             <tr>
//             <th className="bg-primary text-light">سعر الفرد في العرفة الرباعية</th><th className="bg-primary text-light">سعر الفرد في العرفة الثلاثية</th><th className="bg-primary text-light">سعر الفرد في العرفة الثنائية</th><th className="bg-primary text-light">فندق المدينة المنورة</th><th className="bg-primary text-light">فنذق مكة المكرمة</th><th className="bg-primary text-light">البرنامج</th>
//             </tr>
//             <tr>
//              <td>35.400</td> <td>30.400</td> <td>27.400</td> <td>المركزية إقامة فقط</td> <td>منازل الحياةإقامة فقط</td> <td>1</td> 
//             </tr>
//             <tr>
//              <td>37.400</td> <td>31.400</td> <td>28.400</td> <td>المركزية إقامة فقط</td> <td>براج الكسوة إقامة فقط</td> <td>2</td> 
//             </tr>
//             <tr>
//              <td>45.400</td> <td>36.400</td> <td>45.400</td> <td>المركزية إقامة فقط</td> <td>لؤلؤة الصفاء إقامة فقط</td> <td>3</td> 
//             </tr>
//             <tr>
//              <td>53.400</td> <td>42.400</td> <td>36.400</td> <td>المركزية إقامة فقط</td> <td>ضيافة الرجاء إقامة فقط</td> <td>4</td> 
//             </tr>
            
//         </table>
//       </div>
//         <div className="d-grid p-5" id="buttonTarif">
//             <button className="btn btn-warning" onClick={NavigateTohajs}>Retour</button>
//         </div>
//     </div>
}