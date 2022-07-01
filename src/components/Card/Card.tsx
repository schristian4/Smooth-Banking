import React from "react";
import './card.css'
interface CardProp {
  balance: number, 
  digits?: number[]
}
const Card = ({balance, digits}: CardProp) => {

    function RenderDigits(digitArray?:number[]){
      if(digitArray){
        return digitArray.map((x, i)=> {return(<div key={i}>{x}</div>)})
      }
    }
    return (
        <div className="card" >
          <div className="card-wrapper" > 
            <div className="left-header">
              <p style={{ fontSize: '1em' }}>Total Balance</p>
              <p style={{ fontSize: '2em', fontWeight: 'bolder' }}>${balance.toLocaleString("en-US")}</p>
            </div>
            <div className="icon-header">
              <i className="fa">&#xf1f0;</i>
            </div>
            <div className="digits-wrapper">
              <div className="status">Platinum</div>
              <div className="dot-digit-container">
                <div className="dot-digit-wrapper">
                  <div>•</div>
                  <div>•</div>
                  <div>•</div>
                  <div>•</div>
                </div>
                <div className="dot-digit-wrapper">
                  <div>•</div>
                  <div>•</div>
                  <div>•</div>
                  <div>•</div>
                </div>
                <div className="dot-digit-wrapper">
                  <div>•</div>
                  <div>•</div>
                  <div>•</div>
                  <div>•</div>
                </div>
                <div className="dot-digit-wrapper">
                  <div>•</div>
                  <div>•</div>
                  <div>•</div>
                  <div>•</div>
                </div>
                <div className="dot-digit-wrapper">
                  {RenderDigits(digits)}
                </div>
              </div>
            </div>
          </div>
          <div className="shape" ></div>
          <div className="shape2" ></div>
        </div>
    );
  };
  
  export default Card;
  