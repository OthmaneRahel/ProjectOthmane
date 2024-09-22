import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./navbar";
import Footer from "./Footer";
import jsPDF from "jspdf";
import { useNavigate } from "react-router-dom";
export default function ProfileUser({ panier, setp }) {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        name: "",
        phone: "",
        adresse: "",
        email: "",
        image: "",
    });
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const token = localStorage.getItem('token-user');
        if(token){
                const timerToExpire = setTimeout(()=>{
                    localStorage.removeItem('token-user')
                    localStorage.setItem('messageSession','Votre session a expiré. Veuillez vous reconnecter.')
                    navigate('/login');
                },60000)
                axios.get('http://127.0.0.1:8000/api/Aficher-user-connecte', {
                    headers: { 'Authorization': `Bearer ${token}` }
                })
                .then(response => {
                setUser(response.data);
                setLoading(false);
                })
                .catch(error => {
                    console.error('Erreur', error);
                    setLoading(false);
                });
                return ()=>clearTimeout(timerToExpire);
        }else{
            localStorage.setItem('messageSession','Votre session a expiré. Veuillez vous reconnecter.')
            navigate('/login');
        }
    }, []);

    const getvalue = (e) => {
        if (e.target.name === "image") {
            const file = e.target.files[0];
            setUser((prevU) => ({
                ...prevU,
                image: file
            }));
        } else {
            setUser((prevU) => ({
                ...prevU,
                [e.target.name]: e.target.value
            }));
        }
    }

    // const handleUpdate = async () => {
    //     const formData = new FormData();
    //     formData.append('name', user.name);
    //     formData.append('email', user.email);
    //     formData.append('adresse', user.adresse);
    //     formData.append('phone', user.phone);
    //     if (user.image) {
    //         alert('1');
    //         formData.append('image', user.image);
    //     }else{
    //         alert("user l image dyalo makinach")
    //     }

    //     try {
    //         const response = await axios.put(`http://127.0.0.1:8000/api/update-user/${user.id}`, formData);
    //         if (response.status === 200) {
    //             alert('User updated successfully');
    //             console.log(response.data);
    //         }
    //     } catch (error) {
    //         if (error.response) {
    //             console.log(error.response.data);
    //         } else {
    //             console.log('Error:', error.message);
    //         }
    //     }
    // };
    const handleUpdate = async () => {
        const formData = new FormData();
        formData.append('name', user.name);
        formData.append('email', user.email);
        formData.append('adresse', user.adresse);
        formData.append('phone', user.phone);
        if (user.image) {
            alert('1')
            formData.append('image', user.image);
        }
        alert(user.name)
        alert(user.adresse)
        alert(user.phone)
        alert(user.image)
        alert(user.email)
        formData.forEach((value, key) => {
            if (key === 'image') {
                console.log(`Image file: ${value.name}, size: ${value.size} bytes`);
            } else {
                console.log(`${key}: ${value}`);
            }
        });
        try {
            const response = await axios.post(`http://127.0.0.1:8000/api/update-user/${user.id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            switch (response) {
                case 200:
                    alert('1')
                    alert('User updated successfully');
                    console.log(response.data);
                    break;
                default:
                    alert('0')
                    alert('walo');
                    console.log(response);
                    break;
            }
        } catch (error) {
            if (error.response) {
                console.log(error.response.data);
            } else {
                console.log('Error:', error.message);
            }
        }
    };    

    if (loading) {
        return (
            <div className="flex justify-center">
                <svg viewBox="25 25 50 50" style={{ fontSize: '30px', marginTop: '230px' }}>
                    <circle r="20" cy="50" cx="50"></circle>
                </svg>
            </div>
        );
    }

    return (
        <>
            <Navbar sp={setp} p={panier} />
            <form encType="multipart/form-data">
                <div className="bg-gray-200">
                    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-5">
                        <div className="m-5 bg-white shadow-2xl lg:mr-32 md:mr-32 rounded-md">
                            {user.image && typeof user.image === 'string' ? (
                                <img
                                    src={`http://127.0.0.1:8000/storage/${user.image}`}
                                    className="w-96"
                                    alt="Profile"
                                />
                            ) : user.image ? (
                                <img
                                    src={URL.createObjectURL(user.image)}
                                    className="w-96"
                                    alt="Profile"
                                />
                            ) : (
                                <p>No image available</p>
                            )}
                            <input
                                type="file"
                                className="p-7"
                                name="image"
                                onChange={getvalue}
                            />
                        </div>
                        <div className="mb-8 px-4 sm:px-0 mr-5 mt-5">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block pr-5 pb-2 font-medium text-xl text-gray-700">
                                        Votre Nom:
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="rounded-full w-full px-7 py-2 outline-none focus:ring-2 focus:ring-gray-800 font-medium bg-gray-100 border-2 border-blue-400 focus:border-none transform hover:scale-105"
                                        value={user.name}
                                        onChange={getvalue}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block pr-5 pb-2 font-medium text-xl text-gray-700">
                                        Votre Telephone:
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        className="rounded-full w-full px-7 py-2 outline-none focus:ring-2 focus:ring-gray-800 font-medium bg-gray-100 border-2 border-blue-400 focus:border-none transform hover:scale-105"
                                        value={user.phone}
                                        onChange={getvalue}
                                    />
                                </div>
                            </div>
                            <div className="pt-5">
                                <label htmlFor="email" className="block pr-5 pb-2 font-medium text-xl text-gray-700">
                                    Votre email:
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    className="rounded-full w-full px-7 py-2 outline-none focus:ring-2 focus:ring-gray-800 font-medium bg-gray-100 border-2 border-blue-400 focus:border-none transform hover:scale-105"
                                    value={user.email}
                                    onChange={getvalue}
                                />
                            </div>
                            <div className="pt-5">
                                <label htmlFor="adresse" className="block pr-5 pb-2 font-medium text-xl text-gray-700">
                                    Votre Adresse:
                                </label>
                                <input
                                    type="text"
                                    name="adresse"
                                    className="rounded-full w-full px-7 py-2 outline-none focus:ring-2 focus:ring-gray-800 font-medium bg-gray-100 border-2 border-blue-400 focus:border-none transform hover:scale-105"
                                    value={user.adresse}
                                    onChange={getvalue}
                                />
                            </div>
                            <div className="pt-5">
                                <button
                                    type="button"
                                    className="w-full text-center border border-blue-600 hover:bg-blue-600 hover:text-white p-2.5 font-semibold"
                                    onClick={handleUpdate}
                                >
                                    Edit Your Profile
                                </button>
                                {/* <button
                                    type="button"
                                    className="w-full text-center border border-blue-600 hover:bg-blue-600 hover:text-white p-2.5 font-semibold"
                                    onClick={generatePdf}
                                >
                                    Profile
                                </button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <Footer />
        </>
    );
}