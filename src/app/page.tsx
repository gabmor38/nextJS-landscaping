/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */

'use client'

import { useState } from "react";
import About from "./about";
import Contact from "./contact";
import Services from "./services";
import * as React from 'react';
import Footer from "./footer";
//import Reviews from "./reviews";
 



export default function Home() {

  const [nav, setNav] = useState("0");
  const [formData, setFormData] = useState({
    firstName:"",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
 


  const handleClick = (event: any) => {
    setNav(event.target.id)
  }

  const updateFormData = (field:any, value:any) => {
    setFormData({ ...formData, [field]: value });
  };

  const onSubmitForm = (event: any) => {
    event.preventDefault();

    const mailtoLink = `mailto:gabrielamorenor@gmail.com?subject=Service Request from ${formData.firstName} ${formData.lastName}&body=Message: ${formData.message}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AService: ${formData.service}`;
    window.location.href = mailtoLink;
    console.log('Form submitted:', formData);
    setFormData(
      {...formData}, 
    )
  }

  // const getHamburgerMenu = () => {

  // }

    const services = [
      {
        title: "Yard Work (On-Demand)",
        description:
          "Flexible, on-demand services for various garden and yard maintenance needs.",
      },
      {
        title: "Mulch, Soil & Compost Installation",
        description:
          "Professional installation of mulch, triple mix soil, and compost to enhance garden beds.",
      },
      {
        title: "Garden Installation Projects",
        description:
          "Full-service garden design and installation for creating beautiful, functional outdoor spaces.",
      },
      {
        title: "Retaining Walls & Patios",
        description:
          "Professional installation of patios and retaining walls to add structure and style to your landscape.",
      },
      {
        title: "Sod Installation",
        description:
          "Proven sod installation services to create new lawns or replace existing ones.",
      },
      {
        title: "Spring & Fall Clean-Ups",
        description:
          "Seasonal garden clean-up services to prepare your yard for spring growth or get it ready for winter.",
      },
      {
        title: "Sales & Installation of Mulch, River Rock, and Soil",
        description:
          "Supply and installation of high-quality mulch, river rock, and soil for landscaping projects.",
      },
      {
        title: "Overseeding & Top Dressing Services",
        description:
          "Lawn repair services, including overseeding and top dressing, to maintain a healthy, vibrant lawn.",
      },
    ];

  return (
    <>    
    
    <div className="w-100 vh-100 bg-white" >
      <main>
        <nav className={`navbar navbar-expand-lg ${nav !== '0' ? "border-bottom" : ""}`} role="navigation">
          <div className="container-fluid navbarTabs d-flex">
            <a className="navbar-brand" href="#home">
              <img src="/logo3.png" width="150px" alt="logo" />
            </a>
            <button 
              className="navbar-toggler" 
              type="button" 
              data-bs-toggle="button" 
              data-bs-target="#navbarNavDropdown" 
              aria-controls="navbarNavDropdown" 
              aria-expanded= "false"
              aria-label="Toggle navigation"
              >
              <span className="navbar-toggler-icon" id="toggler"></span>
            </button>
            <div className="navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a id={'0'} className="nav-link" href="#home" onClick={handleClick}>Home</a>
                </li>
                <li className="nav-item">
                  <a id={'1'} className="nav-link" href="#about" onClick={handleClick}>About us</a>
                </li>
                <li className="nav-item"> 
                  <a id={'2'} className="nav-link" href="#services" onClick={handleClick}>Services</a>
                </li>
                <li className="nav-item nav-pills">
                  <a id={'3'} className="nav-link" href="#contact" style={{ backgroundColor: '#5C7285', color: 'white' }} onClick={handleClick}>Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      <div className="container mt-3">
      </div>

        {/* <div className="container mt-3 ">
        
        <nav className={`navba-nav  navbar-expand-lg ${nav !== '0' ? "border-bottom":""}`} role="navigation" >
          <div className="container-fluid">          
            <div className="navbarTabs">
              <a className="navbar-brand" href="#home"><img src="/logo3.png" width="150px" alt="logo"/></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="navbar-collapse " id="navbarNavDropdown">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a id={'0'} className="nav-link" href="#home" onClick={handleClick}>Home</a>
                  </li>
                  <li className="nav-item">
                    <a id={'1'}className="nav-link" href="#about" onClick={handleClick}>About us</a>
                  </li>
                  <li className="nav-item">
                    <a id={'2'} className="nav-link " href="#services" onClick={handleClick}>Services</a>
                  </li>
                  <li className="nav-item nav-pills">
                    <a id={'3'} className="nav-link" href='#contact' style={{backgroundColor:'#5C7285', color: 'white'}} onClick={handleClick}>Contact</a>
                  </li>
                </ul>
            </div>
            </div>
          </div>
        </nav>
        </div>
         */}
        <div className="w-100 bg-white mb-5">

          {nav === "0" && (
            <>
            <div className="background-div">
              <h2 className="h2 text" style={{background: '#E2E0C8'}}>Now Booking: Spring, Summer, & Fall 2025!</h2>
            </div>

            {/* <div className="container mt-3">
               <p className="fs-2">Secure your spot for the 2025 season!</p>
               <p className="fs-4" >Offering weekly, biweekly, and monthly lawn care, gardening, and plantings.</p>
            </div> */}
            <section className="px-6 py-12 container mt-5 mb-5">
              <h2 className="mb-5 display-4 text-center">Our Services</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-shadow duration-300" 
                    style={{borderBottom: '5px solid #818C78'}}
                  >
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="container mt-5 mb-5">
              <h2 className="display-4 mb-5 text-center">Explore our Projects </h2>
              <div className="row row-cols-1 row-cols-md-2 g-4 clearfix mb-5" style={{borderTop: '1px solid #818C78', paddingBottom: '50px'}}>
                <div className="col">
                  <div className="card border-white">
                    <img src="/pic2.png" className="card-img-top img-fluid" alt="garden" style={{borderRadius: '20px'}}/>
                  </div>
                </div>
                <div className="col">
                  <div className="card border-white">
                    <img src="/pic3.png" className="card-img-top img-fluid" alt="shrubs" style={{borderRadius: '20px'}}/>
                   
                  </div>
                </div>
                
                <div className="col">
                  <div className="card border-white">
                    <img src="/pic4.png" className="card-img-top img-fluid" alt="lawn" style={{borderRadius: '20px'}}/>
                    
                  </div>
                </div>
                <div className="col">
                  <div className="card border-white">
                    <img src="/pic1.png" className="card-img-top" alt="graden" style={{borderRadius: '20px'}}/>
                    
                  </div>
                </div>
                <div className="col">
                  <div className="card border-white">
                    <img src="/pic5.png " className="card-img-top" alt="flower bed" width="600px" height="300" style={{borderRadius: '20px'}}/>
                  </div>
                  <div className="mb-5"></div>
                </div>
                <div className="col">
                  <div className="card border-white">
                    <img src="/pic6.png " className="card-img-top " width="600px" height="300" alt="sloped flower bed" style={{borderRadius: '20px'}}/>
                  </div>
                </div>
                <div className="col">
                  <div className="card border-white">
                  </div>
                </div>
              </div>
            </div>

            {/* <section>
                <Reviews/>
            </section> */}
            </>
          )}

          { nav === "1" && (
            <About/> 
          ) }

          { nav === "2" && (
            <Services/> 
          ) }

          { nav === "3" && (

            <Contact handleSubmitForm = {onSubmitForm} formData={formData} updateFormData={updateFormData}/>
          )}
        </div>
        <div className="mt-5">
          <Footer handleNavClick={handleClick}/>
        </div>
      </main>
    </div>
    </>

      
   
  );
}
