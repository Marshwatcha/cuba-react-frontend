import * as React from "react";
import "./Orreceive.css";
import { Form, Input, Button, Radio, DatePicker} from 'antd';
import barcodeIcon from "./barcode-icon.png";
import { RightOutlined, SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


export class Orreceive extends React.Component {

  state = {
     value: 1,
     msg: "Warehouse",
   };



  render() {
    const data = {
      codeNo: "1111R20674",
              }


    return <div className="form-input">
              <h2 className="topic-content">รับ</h2>
              <label>เอกสารอ้างอิง</label>
              <Form>
                <Form.Item>
                  <Input placeholder={ data.codeNo } />
                </Form.Item>
                <Form.Item>
                <Link to="/orscanner">
                  <Button className="btn-input-scanner">
                     <img className="icon-img " src={barcodeIcon} />
                     <div className="obj-in-btn">
                      <p className="user-name topic">Scan Product</p>
                     </div>
                  </Button>
                  </Link>
                </Form.Item>
                <Form.Item>
                  <DatePicker showTime format="YYYY-MM-DD" />
                </Form.Item>
                <Radio.Group value={this.state.value}>
                   <Radio value={1}>Warehouse</Radio>
                   <Radio value={2}>Vendor</Radio>
                </Radio.Group>
                <div className="search-from">
                    <Input placeholder={ "Search " + this.state.msg } />
                    <Button icon={<RightOutlined />}>
                    </Button>
                </div>
                <div className="search-from">
                    <Input placeholder="Search"  />
                    <Button icon={<SearchOutlined />}>
                    </Button>
                </div>
                <Form.Item>
                    <Input />
                </Form.Item>
              </Form>
    </div>;
  }
}
export default Orreceive;
