import React from "react";
export const SectionSmarter = ({heading , p ,imgsrc}) =>{
    return(
        <>
            <div className='col-lg-4 col-md-6 col-sm-12 overflow-hidden text-start p-2' >
                <div className="sectionsmarter overflow-hidden position-relative">
                <h3>{heading}</h3>
                <p className="text-white-50 mt-4">{p}</p>
                <footer className="d-flex align-items-center justify-content-between pt-5 mt-5">
                <img
                src={imgsrc}/>
                <a
                className="text-white 
                text-decoration-none 
                text-uppercase
                 fw-bold" href="#"><span>Learn more &nbsp; &nbsp; &nbsp;</span> </a>
                </footer>
            <img className="img-fluid cover position-absolute top-0 end-0 opacity-0" src="https://jsm-brainwave.com/assets/image-2-DhSZK1Xt.png"/>
            </div>
            </div>
        </>
    )
}
