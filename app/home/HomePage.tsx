import * as React from "react";
import "./HomePage.css";
import boxIcon  from "./box-icon.png";
import arrowDown  from "./yellow-arrow-down.png";
import arrowUp  from "./yellow-arrow-up.png";
import { Layout, Button} from "antd";
import { Link, Route, Switch } from "react-router-dom";

class HomePage extends React.Component {
  render() {
      return (
        <div className="container-layout">
           <h2 className="topic-content">กิจกรรม</h2>
                       <div className="card-layout rec-card">
                                         <div className="card-content" >
                                         <Link to="/receivepage">
                                             <Button className="btn-input-home" >
                                               <img className="icon-img home" src={boxIcon} />
                                               <img className="icon-img home" src={arrowDown} />
                                               <div className="obj-in-btn">
                                                 <p className="user-name topic">รับ</p>
                                                 <p className="user-name">เอกสารรับ</p>
                                               </div>
                                             </Button>
                                             </Link>
                                         </div>
                                       </div>

                        <div className="card-layout pay-card">
                          <div className="card-content ">
                          <Link to="/">
                              <Button className="btn-input-home">
                                <img className="icon-img home" src={boxIcon} />
                                <img className="icon-img home" src={arrowUp} />
                                <div className="obj-in-btn">
                                  <p className="user-name topic">จ่าย</p>
                                  <p className="user-name">เอกสารจ่าย</p>
                                </div>
                              </Button>
                              </Link>
                            </div>
                        </div>
                        </div>



      );
    }
}

export default HomePage;
