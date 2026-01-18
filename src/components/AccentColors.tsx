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

export function AccentColors(/*{ value, setSelectedVersion }: Props*/) {
  const { color, setAccentColor } = useColor();

  const onValueChange = (e: string) => {
    setAccentColor(e);
  };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="rounded-full">
          <RiArrowDownSFill />{" "}
          <div
            style={{ "--accent": color } as React.CSSProperties}
            className="w-4 h-4 rounded-full bg-[hsl(var(--accent))] text-[hsl(var(--accent))]"
          ></div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-4 z-[2000]" sideOffset={8}>
        <DropdownMenuLabel>All versions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={color} onValueChange={onValueChange}>
          {accentColors.map((color, index) => {
            return (
              <DropdownMenuRadioItem value={color} key={index}>
                <div
                  style={{ "--accent": color } as React.CSSProperties}
                  className="w-4 h-4 rounded-full bg-[hsl(var(--accent))] text-[hsl(var(--accent))]"
                ></div>
              </DropdownMenuRadioItem>
            );
          })}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
