import * as React from "react";
import { Input, Form, Button } from 'antd';
import "./Orscanner.css";
import { FileSearchOutlined } from '@ant-design/icons';
import { Link, Route, Switch } from "react-router-dom";
export class Orscanner extends React.Component {
  render() {

  const data = {
      codeNumber: "000000000051037440",
      name: "Royal Umbrella Glutinous Rice 1KG",
      mfg: "01/01/21",
      exp: "01/01/22",
      lot: "0/20 ถุง",
  }
    return <div>
                <h2 className="topic-content">สแกนสินค้า</h2>
                <Form.Item>
                    <Input placeholder="Scan Product" />
                </Form.Item>


                <div className="card-content-scan">
                <div className="product-content-scan">
                  <label>{data.codeNumber}</label>
                  <label>{data.name}</label>
                  <label>{data.codeNumber}</label>
                  <label>MFG: {data.mfg}</label>
                  <label>EXP: {data.exp}</label>
                  <label>Lot: {data.lot}</label>
                </div>
                <div className="icon-in-content">
                   <Button icon={<FileSearchOutlined />}></Button>
                </div>
                </div>

                <Link to="/orsaved">
                <Button className="btn-orscanner sum-btn" >Summary</Button>
                </Link>
                <Link to="/">
                <Button className="btn-orscanner" >Clear</Button>
                </Link>
             </div>;

  }
}
export default Orscanner;
