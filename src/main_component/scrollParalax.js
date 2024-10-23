import { Parallax , ParallaxProvider } from "react-scroll-parallax";
export const ScrollParallax = ({ele ,className , styled , elecalss})=>
{
return(
    <>
    <div style={styled||{}} className={`d-none d-xl-block scrollParallax rounded-3  position-absolute z-3 translate-middle ${className || ''}`}>
    <ParallaxProvider>
        <Parallax speed={-7.5}>
            <div className={`overflow-hidden rounded-3 d-felx align-items-center justify-content-center ${elecalss || ''}`} style={{backgroundColor:`#47406066`}}>
            {ele}
            </div>
        </Parallax>
</ParallaxProvider>
    </div>
    </>
)
}