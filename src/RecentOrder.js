import logo from './logo.svg';
import './App.css';
import SampleOrder from "./Assets/sampleOrder.PNG";
import React from "react";

export default class RecentOrder extends React.Component {
  state = {
    orderDropdown: "Order Status"
  }

  render() {
      console.log("inside recent order")
    return (
        <div style={{backgroundColor:"#2d343b"}}>
        <div className="globalnavHeader">
          <div className="headerLeft">
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
                <option style={{color:"black"}}>
                  Order Status
              </option>
                <option style={{color:"black"}}>
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
          <label style={{position:"absolute", top:"50%", left:"33vw", width:"33vw"}}>
            You are in details page
          </label>
        </div>
        </div>
    );
  }
}

// export default App;
