import * as React from "react";

import { LogoutOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";

import { observer } from "mobx-react";
import "./AppHeader.css";
import logo from "./Ham_icon.png";
import { injectMainStore, MainStoreInjected } from "@cuba-platform/react-core";
import { LanguageSwitcher } from "../../i18n/LanguageSwitcher";
import { injectIntl, WrappedComponentProps } from "react-intl";

@injectMainStore
@observer
class AppHeader extends React.Component<
  MainStoreInjected & WrappedComponentProps
> {
  render() {

    const data = {
          name: "1111 CPFT-FMB-Hub-บางซื่อ",
          code: "000000"}


    return (
      <div className="header-style">
        <div>
          <img src={logo}/>

         </div>
         <div className="user-name-style">
           <LanguageSwitcher className="panelelement language-switcher -header" />
           <p className="user-name">{data.name}</p>
           <p className="user-name">{data.code}</p>
         </div>
         <Button
                     className="panelelement"
                     id="button_logout"
                     ghost={true}
                     icon={<LogoutOutlined />}
                     onClick={this.showLogoutConfirm}
                   />
</div>
    );
  }


  showLogoutConfirm = () => {
    Modal.confirm({
      title: this.props.intl.formatMessage({ id: "header.logout.areYouSure" }),
      okText: this.props.intl.formatMessage({ id: "header.logout.ok" }),
      cancelText: this.props.intl.formatMessage({ id: "header.logout.cancel" }),
      onOk: () => {
        this.props.mainStore!.logout();
      }
    });
  };
}

export default injectIntl(AppHeader);
