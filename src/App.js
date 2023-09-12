import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignUp from './Components/SignUp/SignUp';
import Layout from './Components/Layout/Layout';
import Login from './Components/Login/Login';
import Main from './Components/Main/Main';
import { useState } from 'react';
import { useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import Wallet from './Components/Wallet/Wallet';
import PaymentOrders from './Components/PaymentOrders/PaymentOrders';
import Companies from './Components/Companies/Companies';


function App() {
  useEffect(()=>{
    if(localStorage.getItem('userToken') !== null){
      saveUserData();
    }
  },[])

  const [userData, setuserData] = useState(null)

  async function saveUserData(){
    let encodedToken =localStorage.getItem('userToken')
    let decodedToken = jwtDecode(encodedToken);
    console.log(decodedToken);
    setuserData(decodedToken)
    console.log(userData)
  }

  let routers =createBrowserRouter([
    {index:true,element:<Login saveUserData={saveUserData} setuserData={setuserData} userData={userData}/>},
    // {index:true,element:<Login/>},
    // {path:'signUp',element:<SignUp setuserData={setuserData} userData={userData} />},
    {path:'signUp',element:<SignUp/>},
    
    // {path:'/',element:<Layout setuserData={setuserData} userData={userData}/> ,children:[
      {path:'/',element:<Layout/> ,children:[
        {path:'main',element:<Main/>},
        {path:'wallet',element:<Wallet/>},
        {path:'paymentOrders',element:<PaymentOrders/>},
        {path:'companies',element:<Companies/>},
      ]},
    
  ])
  return (
    <> 
            <RouterProvider router={routers} />
    </>
  );
}

export default App;
