import React, { Component } from 'react';

export class WelcomeComponents extends Component {
    render() { 
      return (
        <div>
         <h3> Launching our new Tesla Model 3. You can purchase your Tesla Model 3 on; {this.props.place} or on my website at an affordable price. 
         We offer worldwide shipment.</h3>
            <p><h3>Tesla Model 3 costs: {this.props.price} </h3></p>
            <p><h3>Contact us on: {this.props.contact}</h3></p>
          
        </div>
      );
    }
  }








