"use client";

import { Dropdown } from "flowbite-react";

const DropDown = ({ items }) => {
  return (
    <Dropdown label="Dropdown button">
      {items.map((item, index) => (
        <Dropdown.Item key={index}>{item}</Dropdown.Item>
      ))}
    </Dropdown>
  );
};

export default DropDown;