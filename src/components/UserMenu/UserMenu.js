import React    from "react";
import template from "./UserMenu.jsx";

class UserMenu extends React.Component {
  render() {
    return template.call(this);
  }
}

export default UserMenu;
