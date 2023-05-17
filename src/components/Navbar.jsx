import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

function Navbar() {
  const menuItems = [
    {
        label: (
            <Link to="">Home</Link>
        ),
        key: 'alipay',
      },
      {
        label: (
            <Link to="about">About</Link>
        ),
        key: 'alipay',
      },
  ];

  return (
    <Menu theme="light" mode="horizontal" defaultSelectedKeys={["1"]} items={menuItems}>
      {menuItems.map((item) => (
        <Menu.Item key={item.key}>
          <Link to={item.path}>{item.label}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
}

export default Navbar;
