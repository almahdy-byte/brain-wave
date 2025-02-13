import React from "react";
import { Button } from "./Button";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
export const NavBar =() =>
{
const toggleScroll = () => {
  const button = document.querySelector('.navbar-toggler')
  const ariaExpand = button.getAttribute('aria-expanded') ==='true';
  console.log(ariaExpand)
  document.body.style.overflow = ariaExpand ? 'hidden' : 'visible';
};
    return(
        <>
<nav className="navbar navbar-expand-lg sticky sticky-top  m-0 p-2" style={{background:'#0f0c15f5'}}>
  <div class="container-fluid flex-nowrap p-2">
  <div className="logo">
  <img src='https://jsm-brainwave.com/assets/brainwave-DM3_Zh2I.svg' />
  </div>
    <div class="collapse navbar-collapse justify-content-between " id="navbarSupportedContent">
    <ul className="navbar-nav m-0 mx-auto d-flex justify-content-center align-items-center">
      <li className="nav-item mx-4"> 
        <a style={{fontSize:'.75rem'}} className="nav-link  text-white-50 link active" aria-current="page" href="#">features</a>
      </li>
      <li className="nav-item mx-4">
        <a style={{fontSize:'.75rem'}} className="nav-link text-white-50 link" href="#">pricing</a>
      </li>
      <li className="nav-item mx-4">
        <a style={{fontSize:'.75rem'}} className="nav-link text-white-50 link" href="#">how to use</a>
      </li>
      <li className="nav-item mx-4">
        <a style={{fontSize:'.75rem'}} className="nav-link text-white-50 link" href="#">roadmap</a>
      </li>
        <li className="nav-item mx-4">
        <a style={{fontSize:'.75rem'}} className="nav-link text-white-50 link" href="#">new account</a>
      </li>
      <li className="nav-item mx-4">
      <Button className={'d-block d-lg-none m-auto'} text={'Sing in'} colorfull={{subValue:true}} />
      </li>
    </ul>
      <form class="d-flex">
      <a style={{fontSize:'.75rem'}} className= "d-none d-lg-block text-white-50 link nav-link m-auto me-3" href="#">new account</a>
      <Button className={'d-none d-lg-block'} text={'sign-in'} colorfull={{subValue:true}} />
    </form>
    </div>
    <button onClick={toggleScroll} class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"  aria-label="Toggle navigation">
    <Button className={'ms-auto'} text={<FontAwesomeIcon icon={faBars}/>} colorfull={{subValue:true}} />
    </button>
  </div>
</nav>
        </>
    );
};