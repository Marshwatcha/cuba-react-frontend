import * as React from "react";
import "./Orsaved.css";
import {Button} from "antd";
import { Link } from "react-router-dom";
export class Orsaved extends React.Component {
  render() {
  const data = {
        piece: "20/20 ถุง",
        newNo : "1111ID2007961",
        refNo : "111R20674",
        refDate : "01/01/20",


    }
    return <div>

     <div className="text-content">
       <label>เลขที่ {data.newNo}</label>
       <label>Ref. เลขที่ {data.refNo}</label>
       <label>วันที่เอกสารอ้างอิง {data.refDate}</label>
     </div>
     <h1>บันทึกสำเร็จ</h1>
     <div className="product-content">
        <div className="left-content">
         <a>ใบรับ</a>
        </div>
       <div className="right-content">
       <label>เลขที่: { data.newNo}</label>
       <label>Ref. เลขที่ : {data.refNo}</label>
               </div>
     </div>
     <Link to="/">
        <Button className="btn-orscanner" >Close</Button>
     </Link>
     </div>;
  }
}
export default Orsaved;
