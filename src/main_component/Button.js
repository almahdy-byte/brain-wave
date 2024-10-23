export const Button = ({className , text , colorfull ={subValue:false}})=>
{
    const {subValue} = colorfull ;
    return(
        <>
        
        <div className={(subValue) ? `colorfull ${className || ""} position-relative p-4 rounded-3  ` : `default ${className || ""} position-relative p-4 bg-white rounded-3  ` } style={{width:'100px'}}>
            <button style={{fontSize:'10px'}} className="position-absolute text-center p-0 m-0 top-50 start-50 translate-middle rounded-3 text-uppercase border-0">{text}</button>
        </div>
        </>
    )
}