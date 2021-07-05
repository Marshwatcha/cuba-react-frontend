import * as React from "react";
import "./Orsummary.css";
import { Tabs, Form, Input,Button } from 'antd';
import { FileSearchOutlined } from '@ant-design/icons';
import { Link, Route, Switch } from "react-router-dom";
const { TabPane } = Tabs;

export class Orsummary extends React.Component {

  render() {
  const data = {
      codeNumber: "000000000051037440",
      name: "Royal Umbrella Glutinous Rice 1KG",
      piece: "20/20 ถุง",
      newNo : "NEW",
      refNo : "111R20674",
      refDate : "01/01/20",
  }
    return <div>
      <h2 className="topic-content">สแกนสินค้า</h2>
      <div className="text-content">
        <label>เลขที่ {data.newNo}</label>
        <label>Ref. เลขที่ {data.refNo}</label>
        <label>วันที่เอกสารอ้างอิง {data.refDate}</label>
      </div>
    <div className="form-input">
      <Tabs>
          <TabPane tab="ใบรับ" key="1">
            <Form >
              <Form.Item>
                <label>เลขที่อ้างอิง</label>
                <Input placeholder={ data.refNo } />
              </Form.Item>
              <Form.Item>
                <label>วันที่เอกสาร</label>
                <Input placeholder={ data.refDate } />
              </Form.Item>
            </Form>
          </TabPane>
          <TabPane tab="สินค้า" key="2">
            <div className="content">
                <div className="product-content">
                  <label>{data.codeNumber}</label>
                  <label>{data.name}</label>
                  <label>{data.piece}</label>
                </div>
                <div className="icon-in-content">
                   <Button icon={<FileSearchOutlined />}></Button>
                </div>
                </div>
                <Link to="/">
                  <Button className="btn-orscanner sum-btn" >Save</Button>
                </Link>
                <Link to="/">
                  <Button className="btn-orscanner" >Close</Button>
                </Link>
          </TabPane>
        </Tabs>
      </div>
    </div>;
  }
}
export default Orsummary;
