"use client";

import { Key, memo, useState } from "react";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { IconCaretDownFilled } from "@tabler/icons-react";

type QueryButtonProps = {
  title: string;
  items?: Array<{ id: string; value: string }>;
  onClick?: (key: Key) => void;
}

const QueryButton = memo(function QueryButton ({ title, items, onClick }: QueryButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  console.log("sdfjn");
  return (
    <Dropdown onOpenChange={(isOpen) => {
      setIsOpen(isOpen);
    }}>
      <DropdownTrigger>
        <Button endContent={
          <IconCaretDownFilled
            size={20}
            className={`transition-transform duration-500 rotate-${isOpen ? "180" : "0"}`}/>
        }>
          {title}
        </Button>
      </DropdownTrigger>
      {items &&
        <DropdownMenu onAction={onClick} >
          {items.map((item) => (
            <DropdownItem key={item.id}>{item.value}</DropdownItem>
          ))}
        </DropdownMenu>
      }
    </Dropdown>
  );
});

QueryButton.displayName = "QueryButton";

export default QueryButton;
