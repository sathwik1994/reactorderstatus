import logo from './logo.svg';
import './App.css';
import SampleOrder from "./Assets/sampleOrder.PNG";
import HomeIcon from "./Assets/homeIcon.png";
import React from "react";
import MainContentRouter from "./mainContentRouter.js";
import {Switch} from "react-router-dom";
import {Route} from "react-router-dom";
import {Router} from "react-router-dom";

export default class App extends React.Component {
  state = {
    orderDropdown: "initial"
  }

  handleChange = e => {
    this.setState({
      orderDropdown: e.target.value
    })
  }

  clickedonHome(){
    this.setState({
      orderDropdown: "initial"
    })
  }
  render() {
    return (
      <div className="App">
        <div className="globalnavHeader">
          <div className="headerLeft">
            <img src={HomeIcon} style={{width:"10%"}} onClick={() => this.clickedonHome()}/>
            <label style={{ marginLeft: "10px", marginRight: "10px" }}>
              Products
            <select style={{ backgroundColor: "transparent", color: "white" }}>
                <option>
                </option>
              </select>
            </label>
            <label style={{ marginRight: "10px" }}>
              Brands
            <select style={{ backgroundColor: "transparent", color: "white" }}>
                <option>
                </option>
              </select>
            </label>
            <label style={{ marginRight: "10px" }}>
              Deals
            <select style={{ backgroundColor: "transparent", color: "white" }}>
                <option>
                </option>
              </select>
            </label>
            <label style={{ marginRight: "10px" }}>
              Services
            <select style={{ backgroundColor: "transparent", color: "white" }}>
                <option>
                </option>
              </select>
            </label>
          </div>

          <div className="headerCenter">

          </div>

          <div className="headerRight">
            <label style={{ marginRight: "10px" }}>
              Account
            <select style={{ backgroundColor: "transparent", color: "white" }}>
                <option>
                </option>
              </select>
            </label>
            <label style={{ marginRight: "10px" }}>
              Recently Viewed
            <select style={{ backgroundColor: "transparent", color: "white" }}>
                <option>
                </option>
              </select>
            </label>
            <label style={{ marginRight: "10px" }}>

              <select style={{ backgroundColor: "transparent", color: "white" }}
                value={this.state.orderDropdown}
                onChange={this.handleChange}>
                <option value="initial" style={{color:"black"}}>
                  Order Status
              </option>
                <option value="recent" style={{color:"black"}}>
                  Go to recent Order
              </option>
              </select>
            </label>
            <label style={{ marginRight: "10px" }}>
              Saved Items
            <select style={{ backgroundColor: "transparent", color: "white" }}>
                <option>
                </option>
              </select>
            </label>
          </div>
        </div>
        <div className="body">
        {this.state.orderDropdown=== "initial" ?
          <label style={{position:"absolute", top:"50%", left:"33vw", width:"33vw"}}>
            Select order details from the order status menu on the top
          </label>
          :
          <label style={{position:"absolute", top:"50%", left:"33vw", width:"33vw"}}>
            No order data available. Click the home icon on top left to go back to home page 
          </label>
          }
        </div>
        
      </div>
    );
  }
}

// export default App;
