import React from 'react';

const BoardCard = ({member:{Name,Posting,imgsrc,gitSrc}}) => {
    return(
        <div className='profile'>
            <div>
                <a href={gitSrc}>
                <img
                alt='Board Member'
                src={imgsrc}
                />
                </a>
            </div>
            <div>
                <span>{Name}</span><br/>
                <span><b>{Posting}</b></span>
            </div>
        </div>
    );
}
export default BoardCard;