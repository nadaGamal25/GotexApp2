import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Wallet() {
    useEffect(()=>{
        getUserBalance()
      },[])
    
          const [userBalance,setUserBalance]=useState('')
          async function getUserBalance() {
            try {
              const response = await axios.get('https://dashboard.go-tex.net/gotex-co-test/user/get-user-balance',
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem('userToken')}`,
                },
              });
              const balance = response.data.data.balance;
              console.log(balance)
              setUserBalance(balance)
            } catch (error) {
              console.error(error);
            }
          }
  return (
    <>    
    <div className='p-4' id='content'>
          <div className="heading py-2 d-flex justify-content-between">
            <h3><i class="fa-solid fa-sack-dollar bx"></i>
    المحفظة</h3>
            {/* <Link to="/companies" className='btn'><i class="fa-solid fa-plus"></i>إنشاء  </Link> */}
          </div>
          
          <div className="balance-box d-flex p-4 mt-4 justify-content-center align-items-center">
            <h5>الرصيد الحالى : </h5>
            <h3 className='pe-2'> {userBalance} ر.س </h3>
            
          </div>
        </div>  </>    
  )
}
