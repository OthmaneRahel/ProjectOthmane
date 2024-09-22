import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Fade } from 'react-reveal';
import { Link, useNavigate } from 'react-router-dom';
export default function Navbar({ p , sp }) {
  const res = localStorage.getItem('response');
  const response = JSON.parse(res);
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quantities, setQuantities] = useState({});
  const [user,setuser]=useState([])
  const navigate = useNavigate()
  const token = localStorage.getItem('token-user')
  useEffect(() => {
    const token = localStorage.getItem('token-user');
    axios.get('http://127.0.0.1:8000/api/Aficher-user-connecte', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => {
      setuser(response.data)
    })
    .catch(error => {
        console.error('Erreur', error);    
    });
  }, []);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const logout = async() =>{
    try{
      const token = localStorage.getItem('token-user');
      await axios.post('http://127.0.0.1:8000/api/logout', {
          headers: {
              'Authorization': `Bearer ${token}`
          }
      })
      localStorage.removeItem('token-user')
      localStorage.removeItem('response')
      // window.location.href='/'
      navigate('/')
    }catch(error){
      console.log('Error' + error)
      console.log(error.response.data.message)
    }
  }
  const incrementerQte = (id) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] || 0) + 1,
    }));
  };

  const diminuerQte = (id) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] > 0 ? prevQuantities[id] - 1 : 0),
    }));
  };
  const toggleCartMenu = () => {
    setIsCartOpen(!isCartOpen);
  };

  const total = p.reduce((sum, product) => {
    const quantity = quantities[product.idpro] || 0;
    return sum + product.prix * quantity;
  }, 0);
  const deleteItemFromPanier = (id) =>{
    const proInPanier = p.filter((item)=>item.idpro != id)
    return sp(proInPanier)
  }
  const navigateToFo = () =>{
    navigate('/confirm-product',{state:total})
    localStorage.setItem('dataqte',JSON.stringify(quantities))
  }
  return (
    <nav className="bg-gray-800 p-4 shadow-inner">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="hidden text-white hover:bg-gray-700 px-3 py-2 rounded-md lg:text-3xl lg:flex md:flex font-bold md:text-3xl">Electro&Mostafa</Link>
        {/* <Link to="/" className=" text-white hover:bg-gray-700 px-3 py-2 rounded-md lg:hidden md:hidden font-bold sm:hidden"><img src="/LOGOELECTRO.png" className='w-full object-cover' alt="" /></Link> */}
        <div className="hidden md:flex space-x-4 justify-center w-full">
          <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
          <Link to="/products" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Products</Link>
          <Link to="/services" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</Link>
          <Link to="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
          <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={toggleCartMenu}><i className="fa-solid fa-cart-shopping"></i></button>
        </div>
        {
          token && token ?
            <>
              <div className='flex items-center pr-32'>
                <img src={`http://127.0.0.1:8000/storage/${user.image}`} className='w-10 rounded-full' style={{height:'55px',width:'50px'}} alt="" />
                <Link to={'/profile'} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">{user.name}</Link>
                <button className="bg-red-600 text-white p-2.5 font-semibold flex rounded-full" onClick={logout}><i class="fa-solid fa-right-from-bracket"></i></button>
              </div>
            </>
            :
            <div>
              <Link to={'/signup'} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">SignUp</Link>
              <Link to={'/login'} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</Link>
            </div>
        }
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium h-14 w-14">
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col items-center">
          <Link to="/" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 my-2 rounded-md text-sm font-medium">Home</Link>
          <Link to="/products" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 my-2 rounded-md text-sm font-medium">Products</Link>
          <Link to="/services" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 my-2 rounded-md text-sm font-medium">Services</Link>
          <Link to="/contact" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 my-2 rounded-md text-sm font-medium">Contact</Link>
          <div className='flex space-x-10'>
            <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={toggleCartMenu}><i className="fa-solid fa-cart-shopping"></i></button>
          </div>
        </div>
      )}
      {isCartOpen && (
        <Fade right>
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
            <div className="bg-white w-96 h-full overflow-auto">
              <button className="text-gray-900 px-3 py-2" onClick={toggleCartMenu}><i className="fa-solid fa-xmark"></i></button>
              <div className='text-gray-900 border-b-4 text-2xl border-gray-800 hover:border-yellow-400 font-bold m-5 pb-3'>Votre Panier</div>
              <div className="relative overflow-x-auto h-96">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Product image
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Product name
                      </th>
                      <th scope="col" className="px-6 py-3" width={'30%'}>
                        Quantité
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Prix
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      p.length > 0 ?
                        p.map((e) => (
                          <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700' key={e.idpro}>
                            <td className='pl-5'><img src={`http://127.0.0.1:8000/storage/${e.image}`} alt="Product" className="h-auto object-cover transform hover:scale-110" width={'80%'} /></td>
                            <td className="px-6 py-4">{e.name}</td>
                            <td className='px-6 py-4' width={'100%'}>
                              <div className="flex items-center space-x-2">
                                <button className='border border-yellow-400 px-3 py-2 focus:bg-yellow-300' onClick={() => diminuerQte(e.idpro)}>-</button>
                                <span>{quantities[e.idpro] || 0}</span>
                                <button className='border border-yellow-400 px-3 py-2 focus:bg-yellow-300' onClick={() => incrementerQte(e.idpro)}>+</button>
                              </div>
                            </td>
                            <td>{e.prix} Dhs</td>
                            <td className='flex justify-center pt-3'><button type='button' onClick={()=>deleteItemFromPanier(e.idpro)} className='text-center border border-gray-800 px-3 py-3 hover:bg-gray-800 hover:text-white focus:ring-4 focus:ring-gray-600'>X</button></td>
                          </tr>
                        ))
                        :
                        <tr>
                          <td colSpan="5" className="text-center font-bold bg-gray-200 p-3 uppercase">Votre Panier est Vide</td>
                        </tr>
                    }
                  </tbody>
                </table>
              </div>
              <div className='absolute right-0 bottom-20 p-5 bg-yellow-400 w-96 font-medium'>
                Votre Total A Payer est : {total} Dhs
              </div>
              <div className='absolute bottom-0 right-0 p-5'>
                <button className='border border-gray-800 p-2.5 hover:bg-gray-800 hover:text-white font-bold rounded-md' type='button' onClick={navigateToFo}>Acheter Maintenant</button>
              </div>
            </div>
          </div>
        </Fade>
      )}
    </nav>
  );
}
