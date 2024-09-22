import React from "react";
import './Footer.css'
export default function Footer(){
    return <div className="bg-gray-900">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 md:grid-cols-2 p-5">
            <div>
                <h1 className="text-white font-bold text-2xl mb-5 underline">About Us</h1>
                <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla inventore fugit eveniet. Error enim, quae doloribus voluptatibus quaerat eos eligendi eius veritatis minima ipsam sunt et dignissimos fugiat, neque quisquam?</p>
            </div>
            <div>
                <h1 className="text-white font-bold text-2xl underline">Notre Ecole</h1>
                <img src="/logoimage.png" alt="" />
            </div>
            <div>
                <h1 className="text-white font-bold text-2xl mb-5 underline">Notre Localisation</h1>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.8654284824547!2d-7.624055324997818!3d33.53088427335777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda63297ade686c5%3A0xe4a5f74e90762ac6!2sBd%20El%20Qods%2C%20Casablanca!5e0!3m2!1sfr!2sma!4v1725884014949!5m2!1sfr!2sma" width="400" height="300" loading="lazy"></iframe>
            </div>
        </div>
    </div>
}