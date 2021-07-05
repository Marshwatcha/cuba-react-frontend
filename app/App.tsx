import * as React from "react";
import "./App.css";
import boxIcon  from "./img/box-icon.png";
import arrowDown  from "./img/yellow-arrow-down.png";
import arrowUp  from "./img/yellow-arrow-up.png";
import { BarsOutlined, HomeOutlined, InboxOutlined} from "@ant-design/icons";
import { Layout, Menu, Button} from "antd";
import { observer } from "mobx-react";
import Login from "./login/Login";
import Centered from "./common/Centered";
import AppHeader from "./header/AppHeader";


import HomePage from "./home/HomePage";
import ReceivePage from './receivepage/ReceivePage';
import Orreceive from './orreceive/Orreceive';
import Orscanner from "./orscanner/Orscanner";
import Orsummary from "./orsummary/Orsummary";
import Orsaved from "./orsaved/Orsaved";



import { Link, Route, Switch } from "react-router-dom";
import { menuItems } from "../routing";
import {
  injectMainStore,
  MainStoreInjected,
  RouteItem,
  SubMenu
} from "@cuba-platform/react-core";
import { CenteredLoader } from "./CenteredLoader";
import {
  FormattedMessage,
  injectIntl,
  IntlFormatters,
  WrappedComponentProps
} from "react-intl";

@injectMainStore
@observer
class AppComponent extends React.Component<
  MainStoreInjected & WrappedComponentProps
> {
  render() {
    const mainStore = this.props.mainStore!;
    const { initialized, locale, loginRequired } = mainStore;

    if (!initialized || !locale) {
      return <CenteredLoader />;
    }

    if (loginRequired) {
      return (
        <Centered>
          <Login />
        </Centered>
      );
    }

    const menuIdx = 1;
    return (
       <Layout className="main-layout">
         <div className="header-layout">
             <AppHeader />
         </div>
         <div className="content-layout">
             <Switch>
               <Route exact path="/"><HomePage /></Route>
               <Route path="/receivepage"><ReceivePage /></Route>
               <Route path="/orreceive"><Orreceive /></Route>
               <Route path="/orscanner"><Orscanner /></Route>
               <Route path="/orsummary"><Orsummary /></Route>
               <Route path="/orsaved"><Orsaved /></Route>
             </Switch>

         </div>
       </Layout>
    );
  }
}

const App = injectIntl(AppComponent);
export default App;
