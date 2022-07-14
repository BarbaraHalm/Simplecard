import React from 'react';

import './myStyles.css';

export function Image(props) {
      return (
        <div>
      <img src={props.src} alt={props.alt} width={'200%'} height={'304vh'} marginButtom={"100px"}/>    
      
        </div>
      );
    }
    










/*import React from 'react';
export function Image (props) {
    return(
        <>
        <img src={props.src} alt={props.alt} width= {"100%"} height= {"300vh"}/>
        </>
    )
}*/

