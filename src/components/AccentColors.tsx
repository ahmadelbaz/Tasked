"use client";

import { Button } from "@/components/ui/button";
import { RiArrowDownSFill } from "react-icons/ri";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { accentColors } from "@/config/consts";
import { useColor } from "@/context/ColorContext";

type Props = {
  value: string;
  setSelectedVersion: React.Dispatch<React.SetStateAction<string>>;
};

export function AccentColors(/*{ value, setSelectedVersion }: Props*/) {
  const { color, setAccentColor } = useColor();

  const onValueChange = (e: string) => {
    console.log(`Before we change accent color ${e}`);
    setAccentColor(e);
  };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <RiArrowDownSFill /> {color}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 z-[2000]" sideOffset={8}>
        <DropdownMenuLabel>All versions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={color} onValueChange={onValueChange}>
          {accentColors.map((color, index) => {
            return (
              <DropdownMenuRadioItem value={color} key={index}>
                {color}
              </DropdownMenuRadioItem>
            );
          })}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
