import React from "react";
import { Generating } from "./generating";
import { ScrollParallax } from "./scrollParalax";
import { listicon , personIcon } from "./scolledlistimg";
import { Button } from "./Button";

export const Hero = ()=>
{
    return(
        <>
        <div className="hero mt-5 pt-5 position-relative">
        <div className="container ">
        <div className="text-center w-75 m-auto mt-5 container ">
        <h1>Explore the Possibilities of AI Chatting with BrainwaveCurve <span> Brainwave </span></h1>
        <h6 className="text-white-50 mt-4">Unleash the power of AI within Brainwave. Upgrade your productivity with Brainwave, the open AI chat app.</h6>
        <Button text={"get started"} colorfull={{subValue:false}} className={" mx-auto my-3 p-3"} />
        </div>
        <div className="robot container position-relative">
            <ScrollParallax
                ele={<ul style={{backgroundColor:'#ffffff1a'}}  className="list-unstyled m-0 d-flex p-4">
                {
                listicon.map(
                    e=><li className="py-0 px-3" key={e.id}><img src={e.img}/></li>
                )
                }
                
                </ul>
            }
            className={'start-0 ms-5 '}
            styled={{top:'50%'}}
            />
            <ScrollParallax
                ele={
                    <div style={{width:'250px' , backgroundColor:'#ffffff1a'}} className="d-flex gap-3 justify-contnet-center align-items-center p-3">
                        <div>
                            <img style={{width:'60px'}} className="ratio-1" src="https://brainwave-one-alpha.vercel.app/assets/image-1-CTP7EhT0.png"/>
                        </div>
                        <div className="">
                            <h6>Code generation</h6>
                            <div className="d-flex gap-3 justify-content-center align-items-center">
                                <ul className="d-flex m-0 list-unstyled">
                                    {
                                        personIcon.map(
                                            e=> <li className="mx-1" key={e.id}><img className="ratio-1 rounded-circle" style={{width:'20px'}} src={e.img}/></li>
                                        )
                                    }
                                </ul>
                                <h6 style={{fontSize:'10px'}} className="text-white-50 m-0">1m ago</h6>
                            </div>
                        </div>
                    </div>
                }
                className={'me-5'}
                styled={{ left: '93%' ,top:'40%'}}
                elecalss={'border broder-white'}
            />
                <div className="w-100 hash first"></div>  
            <div className="image position-relative overflow-hidden w-100">
                <img className="position-absolute top-50 start-50 translate-middle w-100" src="https://jsm-brainwave.com/assets/robot-idimR07Z.jpg"/>
                <Generating />
            </div>
            <div className=" mx-auto hash"></div>  
            <div className=" mx-auto hash"></div>  

        </div>
        </div>
        <div className="shadow position-absolute top-50 start-50 translate-middle w-100 h-100"></div>
        <ul className="container d-none d-lg-flex justify-content-between list-unstyled mt-5 pt-5 ">
            <li><img src="https://jsm-brainwave.com/assets/yourlogo-C6EMCCmQ.svg"/></li>
            <li><img src="https://jsm-brainwave.com/assets/yourlogo-C6EMCCmQ.svg"/></li>
            <li><img src="https://jsm-brainwave.com/assets/yourlogo-C6EMCCmQ.svg"/></li>
            <li><img src="https://jsm-brainwave.com/assets/yourlogo-C6EMCCmQ.svg"/></li>
            <li><img src="https://jsm-brainwave.com/assets/yourlogo-C6EMCCmQ.svg"/></li>
        </ul>
        </div>
        </>
    )
}