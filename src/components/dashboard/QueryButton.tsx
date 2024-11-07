"use client";

import { Key, memo, useState } from "react";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { IconCaretDownFilled, IconCheck } from "@tabler/icons-react";

import { cn } from "@/lib/utils";

type QueryButtonProps = {
  title: string;
  items?: Array<string>;
  onClick?: (key: Key) => void;
  value?: string;
  values?: Array<string>;
  isDisabled?: boolean;

}

const QueryButton = memo(function QueryButton ({ title, items, onClick, value, values, isDisabled}: QueryButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dropdown isDisabled={isDisabled} onOpenChange={(isOpen) => {
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
          {items.map((item, idx) => (
            <DropdownItem
              key={idx}
              className={cn((value === item || values?.includes(item)) && "bg-emerald-600", )}
              endContent={(value === item || values?.includes(item)) && <IconCheck/>}
            >
              {item}
            </DropdownItem>
          ))}
        </DropdownMenu>
      }
    </Dropdown>
  );
});

QueryButton.displayName = "QueryButton";

export default QueryButton;
