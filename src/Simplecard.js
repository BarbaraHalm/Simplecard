import React, { Component } from 'react';
import { Home} from "./Comp/Home";
import { WelcomeComponents } from './Comp/WelcomeComponents';
import { Image } from "./Comp/Image";
import './Comp/myStyles.css';

export class SimpleCard extends Component {
    render() { 
      return (
        <div className='container'>
          {/* <div className='img'> */}
            <Image src={require("./Comp/Tesla.jpg")} alt="a car" className="image"/>
            {/* </div> */}


        <div className='info'>
        <Home text="SLEEK CARS"/>
         <WelcomeComponents place="EBAY, CARMAX, TOYATA, HYUNDAI" contact="0000 000 000" price="$600.000"/>
        </div>


        </div>
      );
    }
  }









/*import React, { Component } from 'react';
import Title from './Title';
/*import Image from './Component/Image';
import Description from './Component/Description';
export class Simplecard extends Component {
    render() { 
        return (
            <>
            <Title name= "TESLA"/>
            <Description/>
            </>
        );
    }
}*/

