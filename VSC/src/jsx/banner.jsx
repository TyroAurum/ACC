import React from 'react';

const Banner = ({message:{Title,Content,Src}}) => {
    return(
        <div className='banner'>
            <a href={Src}><h3>{Title}</h3></a>
            <p>{Content}</p>
        </div>
    );
}

export default Banner;