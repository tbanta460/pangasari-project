import React from 'react';

const Image = ({src,  iStyle, isStyle,style ,eventEnter, eventOut,...rest }) => {
   
    
    return (
        <>
            <div className={isStyle} >
                <img src={src} {...rest} className={`unupload bg-no-repeat bg-center bg-cover ${style}`} />
            </div>
            
        </>
    )
}

export default Image