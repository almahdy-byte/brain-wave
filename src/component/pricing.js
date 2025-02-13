
import { Button } from "./Button"
import { Check } from "./checkBox"
import { Header } from "./heading"

export const Pricing = ()=>{
    return(
        <>
        <div className="pricing my-5">
            <div className="images position-relative my-5 w-100 d-none d-lg-grid d-md-grid ">
            <img className="h-100 w-100 cover-image position-absolute" src="data:image/svg+xml,%3csvg%20width='952'%20height='396'%20viewBox='0%200%20952%20396'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.35'%3e%3ccircle%20cx='417'%20cy='161'%20r='4'%20fill='white'/%3e%3ccircle%20opacity='0.5'%20cx='515'%20cy='116'%20r='2'%20fill='white'/%3e%3ccircle%20opacity='0.5'%20cx='423'%20cy='279'%20r='4'%20fill='white'/%3e%3ccircle%20opacity='0.3'%20cx='366'%20cy='394'%20r='2'%20fill='white'/%3e%3ccircle%20cx='265'%20cy='327'%20r='2'%20fill='white'/%3e%3ccircle%20opacity='0.2'%20cx='362'%20cy='209'%20r='2'%20fill='white'/%3e%3ccircle%20opacity='0.3'%20cx='548'%20cy='211'%20r='2'%20fill='white'/%3e%3ccircle%20opacity='0.2'%20cx='607'%20cy='281'%20r='2'%20fill='white'/%3e%3ccircle%20opacity='0.21'%20cx='789'%20cy='281'%20r='2'%20fill='white'/%3e%3ccircle%20cx='362'%20cy='65'%20r='2'%20fill='white'/%3e%3ccircle%20opacity='0.3'%20cx='192'%20cy='132'%20r='2'%20fill='white'/%3e%3ccircle%20cx='743'%20cy='2'%20r='2'%20fill='white'/%3e%3c/g%3e%3cpath%20d='M834%20150C827.373%20150%20822%20144.627%20822%20138C822%20131.373%20827.373%20126%20834%20126C840.627%20126%20846%20131.373%20846%20138C846%20144.627%20840.627%20150%20834%20150Z'%20fill='url(%23paint0_linear_701_17365)'/%3e%3cpath%20d='M4%20206C1.79086%20206%204.76837e-07%20204.209%204.76837e-07%20202C4.76837e-07%20199.791%201.79086%20198%204%20198C6.20914%20198%208%20199.791%208%20202C8%20204.209%206.20914%20206%204%20206Z'%20fill='url(%23paint1_linear_701_17365)'/%3e%3cpath%20d='M948%20206C945.791%20206%20944%20204.209%20944%20202C944%20199.791%20945.791%20198%20948%20198C950.209%20198%20952%20199.791%20952%20202C952%20204.209%20950.209%20206%20948%20206Z'%20fill='url(%23paint2_linear_701_17365)'/%3e%3cpath%20d='M154%20326C149.582%20326%20146%20322.418%20146%20318C146%20313.582%20149.582%20310%20154%20310C158.418%20310%20162%20313.582%20162%20318C162%20322.418%20158.418%20326%20154%20326Z'%20fill='url(%23paint3_linear_701_17365)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_701_17365'%20x1='834'%20y1='126'%20x2='834'%20y2='150'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2388E5BE'/%3e%3cstop%20offset='1'%20stop-color='%231A1A32'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_701_17365'%20x1='4'%20y1='198'%20x2='4'%20y2='206'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23DD734F'/%3e%3cstop%20offset='1'%20stop-color='%231A1A32'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_701_17365'%20x1='948'%20y1='198'%20x2='948'%20y2='206'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23DD734F'/%3e%3cstop%20offset='1'%20stop-color='%231A1A32'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint3_linear_701_17365'%20x1='154'%20y1='310'%20x2='154'%20y2='326'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23B9AEDF'/%3e%3cstop%20offset='1'%20stop-color='%231A1A32'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"/>
            <img className="position-absolute top-50 start-50 translate-middle w-25 " src="https://jsm-brainwave.com/assets/4-small-Dl1zRJyK.png"/>
            </div>
        <div className="container ">
        <div className="d-flex w-100 justify-content-center align-items-center mb-3"><span className="left-bracket"/><span className="p-0 mx-1 fw-light text-white-50 quote">Get started with Brainwave </span><span className="right-bracket"/></div>
        <Header header={"Pay once, use forever"} />
        <div className="row justify-content-center align-items-center my-5">
        <div className="col-12 col-lg-4 p-2 price-boxes">
            <div className="price-box">
            <div className='text mx-3 my-3'>
                        <h2 className='mb-4 text-warnning'>Basic</h2>
                        <p className='text-white-50 pe-lg-5'>AI chatbot, personalized recommendations</p>
                        <h1 className="fw-semibold position-relative ps-1">0<span className="fs-6 position-absolute start-0">$</span></h1>
                    </div>
            <div className="w-100 d-flex justify-content-center mt-1 align-items-center mb-4">
            <Button text={"get started"} className={'w-75'} />
            </div>
            <ul className="list-unstyled m-3">
                <li className="text-white-50 m-2"><Check check={"An AI chatbot that can understand your queries"}/></li>
                <li className="text-white-50 m-2"><Check check={"An AI chatbot that can understand your queriesPersonalized recommendations based on your preferences"}/></li>
                <li className="text-white-50 m-2"><Check check={"Ability to explore the app and its features without any cost"}/></li>
            </ul>
            </div>
        </div>
        <div className="col-12 col-lg-4  p-2 price-boxes">
            <div className="price-box longest">
            <div className='text m-3'>
                        <h2 className='mb-4 text-v'>Premium</h2>
                        <p className='text-white-50 pe-lg-5'>Advanced AI chatbot, priority support, analytics dashboard</p>
                        <h1 className="fw-semibold position-relative ps-1">9.99<span className="fs-6 position-absolute start-0">$</span></h1>

                    </div>
                    <div className="w-100 d-flex justify-content-center mt-1 align-items-center mb-4">
                    <Button text={"get started"} className={'w-75'} />
            </div>
            <ul className="list-unstyled m-3">
                <li className="text-white-50 m-2"><Check check={"An AI chatbot that can understand your queries"}/></li>
                <li className="text-white-50 m-2"><Check check={"An AI chatbot that can understand your queriesPersonalized recommendations based on your preferences"}/></li>
                <li className="text-white-50 m-2"><Check check={"Ability to explore the app and its features without any cost"}/></li>
            </ul>
            </div>
        </div>
        <div className="col-12 col-lg-4 p-2  price-boxes">
            <div className="price-box">
            <div className='text mx-3 my-3'>
            <h2 className='mb-4 text-red '>Enterprise</h2>
            <p className='text-white-50 pe-lg-5'>Custom AI chatbot, advanced analytics, dedicated account</p>
                        <h1 className="fw-semibold position-relative ps-1">0<span className="fs-6 position-absolute start-0">$</span></h1>
                    </div>
            <div className="w-100 d-flex justify-content-center mt-1 align-items-center mb-4">
            <Button text={"get started"} className={'w-75'} colorfull={{subValue:true}}/>
            </div>
            <ul className="list-unstyled m-3">
                <li className="text-white-50 m-2"><Check check={"An AI chatbot that can understand your queries"}/></li>
                <li className="text-white-50 m-2"><Check check={"An AI chatbot that can understand your queriesPersonalized recommendations based on your preferences"}/></li>
                <li className="text-white-50 m-2"><Check check={"Ability to explore the app and its features without any cost"}/></li>
            </ul>
            </div>
            </div>
        </div>
        <span className="d-flex justify-content-center align-items-center w-100"><a href="" className="m-auto"> See the full details</a></span>
        </div>
        </div>
        </>
    )
} 