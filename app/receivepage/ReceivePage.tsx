import * as React from "react";
import "./ReceivePage.css";
import {Button} from "antd";
import { Route,Link } from 'react-router-dom';


export class ReceivePage extends React.Component {
  render() {
  const Home = () => <h1>Home</h1>
    return <div>
                     <h2 className="topic-content">รับ</h2>
                     <div className="card-layout pay-card">

                         <div className="card-content ">
                          <Link to="/">
                           <Button className="btn-input-rec">
                             <div className="obj-in-btn">
                             <p className="user-name topic">ใบ PO</p>
                             </div>
                           </Button>
                           </Link>

                         </div>
                         </div>
                           <div className="card-layout pay-card">
                             <div className="card-content ">
                             <Link to="/orreceive">
                               <Button className="btn-input-rec">
                                 <div className="obj-in-btn">
                                 <p className="user-name topic">ใบ OR</p>
                                 </div>
                               </Button>
                               </Link>
                             </div>
                           </div>
                           <div className="card-layout pay-card">
                           <div className="card-content ">
                           <Link to="/">
                             <Button className="btn-input-rec">
                              <div className="obj-in-btn">
                              <p className="user-name topic">ใบ PREPARE</p>
                              </div>
                             </Button>
                             </Link>
                           </div>
                           </div>
                       </div>;
  }
}
export default ReceivePage;
