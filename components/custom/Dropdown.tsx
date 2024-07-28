"use client";
import { Montserrat } from "next/font/google";
import * as React from "react";
import Link from "next/link";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
const mont = Montserrat({
  weight: "900",
  subsets: ["latin"],
  style: "normal",
});
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Checked = DropdownMenuCheckboxItemProps["checked"];

export function DropdownMenuCheckboxes() {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center justify-between w-full h-auto mr-[15px]  text-gray-200">
          Courses
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-gray-200">
        <DropdownMenuLabel>Available Programs</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href={"/Q5"}>
          <DropdownMenuCheckboxItem onCheckedChange={setShowStatusBar}>
            <Link href={"/Q4"}>Web 3.O and Metaverse</Link>
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem onCheckedChange={setShowStatusBar}>
            Artificial Intelligence
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem onCheckedChange={setShowStatusBar}>
            Cloud-Native Computing
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem onCheckedChange={setShowStatusBar}>
            Ambient Computing
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem onCheckedChange={setShowStatusBar}>
            Bio-Computing
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem onCheckedChange={setShowStatusBar}>
            Network Automation
          </DropdownMenuCheckboxItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
