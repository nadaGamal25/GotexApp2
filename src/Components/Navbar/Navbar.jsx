import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
// import generateApiKey from 'generate-api-key';


export default function Navbar({userData ,logout}) {
    let navigate= useNavigate(); //hoke
  const [sideToggle ,setSideToggle]=useState(false);

  


  useEffect(()=>{
    // console.log(userData)
  },[])

 
     
      useEffect(() => {
        const handleClick = (e) => {
          const allSideMenu = document.querySelectorAll('.side-menu.top li a');
          const li = e.currentTarget.parentElement;
    
          allSideMenu.forEach((i) => {
            i.parentElement.classList.remove('active');
          });
          
          li.classList.add('active');
        };
    
        const allSideMenu = document.querySelectorAll('.side-menu.top li a');
        allSideMenu.forEach((item) => {
          item.addEventListener('click', handleClick);
        });
    
        return () => {
          allSideMenu.forEach((item) => {
            item.removeEventListener('click', handleClick);
          });
        };
      }, []);
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
          const [showModal, setShowModal] = useState(false);
          const [depositAmount, setDepositAmount] = useState('');
          async function addDepositToUser() {
            try {
              const response = await axios.post(
                'https://dashboard.go-tex.net/gotex-co-test/user/add-user-balance',
                {
                  amount: depositAmount,
                },
                {
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem('userToken')}`,
                  },
                }
    
              );
              // Handle the response as per your requirement
              console.log(response.data);
              window.alert('يرجى ملئ جميع البيانات التالية ')
              // navigate(response.data.data.order.url);
              const stickerUrl = `${response.data.data.order.url}`;
           const newTab = window.open();
           newTab.location.href = stickerUrl;

              // if (response.data.msg === 'ok') {
                closeModal();
                // getUsersListsAdmin();
              // }
            } catch (error) {
              console.error(error);
            }
          }
          const openModal = () => {
            setShowModal(true);
          };
        
          const closeModal = () => {
            setShowModal(false);
            setDepositAmount('');
          };
          const handleDepositChange = (event) => {
            setDepositAmount(Number(event.target.value));
          };

          const [testKey,setTestKey]=useState('')
       
  async function getTestKey() {
    try {
      const response = await axios.get(
        'https://dashboard.go-tex.net/gotex-co-test/user/get-test-api-key',
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('userToken')}`,
          },
        }
      );
      const apiKeyData = response.data.data;
      console.log(response)
      console.log(response.data.data)
      // const apiKey = generateApiKey(apiKeyData, 150);

      setTestKey(response.data.data);
      setShowModalKey(true);
    } catch (error) {
      console.error(error);
    }
  }

  // function generateApiKey(input, length) {
  //   if (input.length >= length) {
  //     return input.substring(0, length);
  //   } else {
  //     const padding = Array(length - input.length).fill('#').join('');
  //     return input + padding;
  //   }
  // }
        
        
          const [showModalKey, setShowModalKey] = useState(false);

  const openModalKey = () => {
    setShowModalKey(true);
  };

  const closeModalKey = () => {
    setShowModalKey(false);
  };
  return (
    <>
    {/* <!-- start side navbar --> */} 
    <section id="sidebar" className={sideToggle? "hide" :""}>
        <a href="#" class="brand">
            <img src={logo} alt='logo'/>
        </a>
       
        <ul class="side-menu top">
            
        <li>
                <Link to="/wallet">
                <i class="fa-solid fa-sack-dollar bx"></i>
                <span class="text">المحفظة
                ({userBalance} ر.س)
                </span>
                </Link>
            </li>
            <li>
                <Link to="#" onClick={openModal}>
                <i class="fa-solid fa-credit-card bx"></i>
                  <span class="text">إضافة رصيد </span>
                </Link>
            </li>
            <li>
                <Link to="/paymentOrders">
                <i class="fa-solid fa-file-invoice bx"></i>
                    <span class="text">طلبات الدفع
                </span>
                </Link>
            </li>
            <li>
                <Link to="#" onClick={getTestKey}>
                <i class="fa-solid fa-key bx"></i>
                                  <span class="text">Generate api-test-key 
                </span>
                </Link>
            </li>
            <li>
                <Link to="/apis">
                <i class="fa-solid fa-file-lines bx"></i>
                  <span class="text">APIs Documentation 
                </span>
                </Link>
            </li>
            {/* <li className=''>
                <Link  to="/companies">
                    <i class="fa-solid fa-truck-fast bx"></i>
                    <span class="text">شركات الشحن</span>
                </Link>
            </li> */}
            
            
            <li>
            <Link onClick={logout} class="logout" to='/'>
                <i class="fa-solid fa-right-from-bracket bx"></i>
                    <span class="text">تسجيل الخروج</span>
                </Link>
            </li>
        </ul>
    </section>
    
        {/* <!-- end side navbar --> */}
    <section id="content">
        {/* <!--start navbar --> */}
        <nav class="d-flex align-items-center">
            <i class="fa-solid fa-bars" onClick={()=> setSideToggle(!sideToggle)}></i>
          
        </nav>
        {/* <!--end navbar --> */}
        </section>
        {showModal && (
        <div className='modal bg-d' style={{ display: 'block' }}>
          <div className='modal-dialog'>
            <div className='modal-content '>
              <div className='modal-header'>
                <h5 className='modal-title'>إضافة رصيد </h5>
                {/* <button
                  type='button'
                  className='close'
                  onClick={closeModal}
                >
                  <span aria-hidden='true'>&times;</span>
                </button> */}
              </div>
              <div className='modal-body'>
                <div className='form-group'>
                  <label htmlFor='deposit'>الرصيد :</label>
                  <input
                    type='number'
                    className='form-control'
                    id='deposit'
                    value={depositAmount}
                    onChange={handleDepositChange}
                   
                  />
                </div>
              </div>
              <div className='modal-footer'>
                <button
                  type='button'
                  className='btn btn-primary'
                  onClick={addDepositToUser}
                >
                  إضافة
                </button>
                <button
                  type='button'
                  className='btn btn-secondary'
                  onClick={closeModal}
                >
                  إلغاء
                </button>
              </div>
            </div>
          </div>
        </div>
      )}   
      <Modal show={showModalKey} onHide={closeModalKey}>
        <Modal.Header >
          <Modal.Title>Generated api-test-key
             </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Your content inside the modal */}
          <div style={{ wordWrap: 'break-word', whiteSpace: 'pre-wrap' }}>
            {testKey}
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModalKey}>
          إغلاق
          </Button>
          {/* Additional buttons or actions can be added here */}
        </Modal.Footer>
      </Modal>  
    </>
  )
}