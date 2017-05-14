/**
 * Created by asher on 9/05/17.
 */
import React from "react";

import "./DeviceResult.css";

class DeviceResult extends React.Component{

  render(){
    let device = this.props.device;

    return (
        <div>
          <a href={device.url} className="DeviceResult">
            <div className="DeviceResultIcon">
              <i className="material-icons">{device.type}</i>
            </div>
            <div className="DeviceResultText">
              <h2>{device.name}</h2>
              <p>
                {device.manufacturer} <span className="DeviceResultCodename">({device.codename})</span>
              </p>
            </div>
          </a>
        </div>
    )
  }
}

export default DeviceResult;
