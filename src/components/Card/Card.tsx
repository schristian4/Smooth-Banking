import React from "react";
import './card.css'
interface CardProp {
  balance: number
}
const Card = ({balance}: CardProp) => {
  
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
                  <div>3</div>
                  <div>7</div>
                  <div>9</div>
                  <div>6</div>
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
  