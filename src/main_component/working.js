import { Header } from "./heading"
import { WorkingData } from "./workingData"

export const Working = () =>
{
    return(
        <>
        <div className="working pt-5 my-3 mb-0 "> 
            <div className="container">
                <div className="text"> 
                <div className="d-flex w-100 justify-content-center align-items-center mb-3"><span className="left-bracket"/><span className="p-0 mx-1 fw-light text-white-50 quote">Get started with Brainwave </span><span className="right-bracket"/></div>
                <Header header={"What we’re working on"}/>
                </div>
                <div className="row mt-5 ">
                    <div className="col-12 col-md-6 working-boxes col-lg-6 p-3 pb-0 pb-lg-3 pb-md-3">
                        <div className="working-box active  my-3 mb-0">
                        <span />
                        <div className="image w-100 position-absolute top-0"><img className="w-100" src="https://jsm-brainwave.com/assets/grid-coKqRXJ5.png"/></div>
                        <WorkingData img={"https://jsm-brainwave.com/assets/image-1-BL_C2sN6.png"} title={"Voice recognition"} def={"Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free."}/>
                        </div>
                        <div className="working-box  my-3 mb-0">
                        <span />
                        <div className="image w-100 position-absolute top-0"><img className="w-100" src="https://jsm-brainwave.com/assets/grid-coKqRXJ5.png"/></div>
                        <WorkingData img={"https://jsm-brainwave.com/assets/image-3-DL8wGSR2.png"} title={"Chatbot customization"} def={"Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with."}/>
                        </div>
                    </div>
                    <div className="col-12 working-boxes col-md-6 col-lg-6 mt-lg-5 mt-md-5 p-3 pt-0  pt-lg-5"> 
                    <div className="working-box my-3 mb-0">
                        <span />
                        <div className="image w-100 position-absolute top-0"><img className="w-100" src="https://jsm-brainwave.com/assets/grid-coKqRXJ5.png"/></div>
                        <WorkingData img={"https://jsm-brainwave.com/assets/image-2-C8poHMFX.png"} title={"Gamification"} def={"Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently."}/>
                    </div>
                    <div className="working-box  my-3 mb-0">
                    <span />
                        <div className="image w-100 position-absolute top-0"><img className="w-100" src="https://jsm-brainwave.com/assets/grid-coKqRXJ5.png"/></div>
                        <WorkingData img={"https://jsm-brainwave.com/assets/image-4-Cbi5cq1J.png"} title={"Integration with APIs"} def={"Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations."}/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}