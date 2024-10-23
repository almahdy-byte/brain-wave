import { items } from "./listeditems";

export const CircledList = () =>{

    
    return(<>
    <div className="rounded-circle border border-1 border-white big-circle position-relative  d-flex justify-content-center align-items-center">
            {
                items.map((e)=><span value={e.id} className="position-absolute" rotate={e.id} key={e.id} ><div rotate={-e.id} className="border border-white rounded-3 p-2"><img src={e.link}/></div></span>)
            }
            <div style={{width:'70%' , height:'70%'}} className="rounded-circle border border-1 m-auto border-white md-circle  d-flex justify-content-center align-items-center">
                <div className="center-icon m-0 p-0 "><img src="https://jsm-brainwave.com/assets/brainwave-symbol-BpglIlwE.svg" className=""/></div>
            </div>
{
    console.log(items)
}

</div>
    </>
    );
};