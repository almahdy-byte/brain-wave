export const WorkingData = ({img , title ,def}) =>
{
return(
    <>
    <div className="workingData">
        <head className="d-flex jusrify-content-between m-5">
            <div className="d-flex"><div className="left-bracket"/><date className="text-white-50">MAY 2023</date><div className="right-bracket"/> </div>
        </head>
        <div className="image w-100 position-absolute m-3 start-50 translate-middle">
            <img  className="w-100" src={img}/>
        </div>
        <div className='text position-absolute bottom-0 m-5'>
                <h2 className='mb-4'>{title}</h2>
                <p className='text-white-50'>{def}</p>
        </div>
    </div>
    </>
)
}