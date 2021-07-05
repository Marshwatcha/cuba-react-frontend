import { Orsummary } from "./app/orsummary/Orsummary";
import { ReceivePage } from "./app/receivepage/ReceivePage";
import { Orscanner } from "./app/orscanner/Orscanner";
import { Orsaved } from "./app/orsaved/Orsaved";
import { Orreceive } from "./app/orreceive/Orreceive";
import { getMenuItems } from "@cuba-platform/react-core";

export const menuItems = getMenuItems();

// Code below demonstrates how we can create SubMenu section
// Remove '/*' '*/' comments and restart app to get this block in menu

/*
// This is RouteItem object that we want to see in User Settings sub menu
const backToHomeRouteItem = {
  pathPattern: "/backToHome",
  menuLink: "/",
  component: null,
  caption: "home"
};
// SubMenu object
const userSettingsSubMenu = {
  caption: 'UserSettings', // add router.UserSettings key to src/i18n/en.json for valid caption
  items: [backToHomeRouteItem]};
// Add sub menu item to menu config
menuItems.push(userSettingsSubMenu);
*/

menuItems.push({
  pathPattern: "/orreceive",
  menuLink: "/orreceive",
  component: Orreceive,
  caption: "Orreceive"
});

menuItems.push({
  pathPattern: "/rsaved",
  menuLink: "/rsaved",
  component: Orsaved,
  caption: "Rsaved"
});

menuItems.push({
  pathPattern: "/orscanner",
  menuLink: "/orscanner",
  component: Orscanner,
  caption: "Orscanner"
});

menuItems.push({
  pathPattern: "/receivePage",
  menuLink: "/receivePage",
  component: ReceivePage,
  caption: "ReceivePage"
});

menuItems.push({
  pathPattern: "/orsummary",
  menuLink: "/orsummary",
  component: Orsummary,
  caption: "Orsummary"
});
