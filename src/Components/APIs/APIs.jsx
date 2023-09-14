
import React, { useEffect, useState } from 'react'
import glt from '../../assets/glt.jpg'
import imile from '../../assets/imile.jpg'
import sae from '../../assets/sae.jpg'
import sms from '../../assets/sms.jpg'
import spl from '../../assets/spl.jpg'
import armx from '../../assets/armx.jpg'
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom'
import axios from 'axios'
import pdfSaee from '../../assets/saeeDocs.pdf'
import pdfImile from '../../assets/Gotex_Doc_Imile.pdf'
export default function APIs() {
 
  
  
  return (
    <>
    <div className='paddingCompanies p-3' id='content'>
      <div className="container">
      
        <div className="row g-4">
        <div className="col-md-6">
            <div className="company">
              <div className="text-center">
              <img src={sae} alt="company" />
              
              </div>
              <div className="d-flex pt-4 justify-content-between">
                <h4></h4>
                
              <a href={pdfSaee} target='_blank' className="btn btn-lightblue" Download>
                Download Documentation
              </a>
             </div>
            
              
            </div>
          </div>
          <div className="col-md-6">
            <div className="company">
              <div className="text-center">
              <img src={imile} alt="company" />
              </div>
              <div className="d-flex pt-4 justify-content-between">
                <h4></h4>
                <a href={pdfImile} target='_blank' className="btn btn-lightblue" Download>
                Download Documentation
              </a>
             </div>
             
            </div>
          </div>
         
          
            <div className="col-md-6 ">
            <div className="company ">
            
              <div className="text-center">
              <img src={logo} className='bg-white' alt="company" />
              </div>
              <div className="d-flex pt-4 justify-content-between">
                <h4></h4>
              <button className="btn btn-lightblue">
                غير متاح حاليا
              </button>
             </div>
            </div>
          </div>
    {/* </div >
    
          </div> */}
       
        
        
         
          <div className="col-md-6">
            <div className="company">
              <div className="text-center">
              <img src={armx} alt="company" />
              </div>
              <div className="d-flex pt-4 justify-content-between">
                <h4></h4>
              <button className="btn btn-lightblue">
                غير متاح حاليا
              </button>
             </div>
             
            </div>
          </div>
          <div className="col-md-6">
            <div className="company">
              <div className="text-center">
              <img src={sms} alt="company" />
              </div>
              <div className="d-flex pt-4 justify-content-between">
                <h4></h4>
              <button className="btn btn-lightblue">
                غير متاح حاليا
              </button>
             </div>
            
            </div>
          </div>
          <div className="col-md-6">
            <div className="company">
              <div className="text-center">
              <img src={spl} alt="company" />
              </div>
              <div className="d-flex pt-4 justify-content-between">
                <h4></h4>
              <button className="btn btn-lightblue">
                غير متاح حاليا
              </button>
             </div>
              
              
            </div>
          </div>
          
        
          <div className="col-md-6">
            <div className="company">
              <div className="text-center">
              <img src={glt} alt="company" />
              </div>
              <div className="d-flex pt-4 justify-content-between">
                <h4></h4>
              <button className="btn btn-lightblue">
                غير متاح حاليا
              </button>
             </div>
           
            </div>
          </div>
          
        </div>
      </div>
    </div>
    
    </>
      )
}



