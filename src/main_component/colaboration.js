import React from "react";
import { Check } from "./checkBox";
import { CircledList } from "./circledList";
import { Button } from "./Button";
export const Collaboration =()=> {
return(
    <>
    <div className="collaboration pt-5">
    <div className="container">
        <div className="row gab-5">
            <div className="col-lg-4 col-sm-12 mt-5 ">
                <div className="text-start" >
                    <h1 style={{fontSize:'3rem'}} >AI chat app for<br/>seamless <br/> colllaboration</h1>
                </div>
                <ul className="my-5 pt-3 pb-2 list-unstyled">
                <li className="my-5"> <Check check={"Seamless integration"}/>
                <p className="my-2 mx-0 text-start text-white-50">With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter. </p>
                </li>
                <li className="my-5"><Check check={"Smart Automation"}/></li>
                <li className="my-5"><Check check={"Top-notch Secutity"}/></li>
                </ul>
                <Button colorfull={{subValue:true}} text={'try it now'} />
            </div>
            <div className="col-lg-8 col-sm-12 mt-5">
                <div>
                <div className="d-flex justify-content-center px-lg-5" >
                <p className="px-lg-5  text-start text-white-50 ">With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.</p>
                </div>
                <div className="w-100 d-flex my-5 pt-5 justify-content-center">
                <CircledList />
                </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
)
    } 