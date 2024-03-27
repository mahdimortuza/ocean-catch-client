"use client";

import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

type Checked = DropdownMenuCheckboxItemProps["checked"];

export function DropDown({ items }: { items: string[] }) {
  const [saltWater, setSaltWater] = React.useState<Checked>(true);
  const [sweetWater, setSweetWater] = React.useState<Checked>(false);
  const [lobsterAndShrimp, setLobsterAndShrimp] =
    React.useState<Checked>(false);
  const [squidAndCrabs, setSquidAndCrabs] = React.useState<Checked>(false);
  const [smallAndBig, setSmallAndBig] = React.useState<Checked>(false);
  const [caviarAndInsects, setCaviarAndInsects] =
    React.useState<Checked>(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-white hover:bg-white text-black border border-[#008ECC] flex gap-2 items-center">
          {" "}
          <span>Filter by Category</span> <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Category</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={saltWater}
          onCheckedChange={setSaltWater}
        >
          {items[0]}
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={sweetWater}
          onCheckedChange={setSweetWater}
        >
          {items[1]}
        </DropdownMenuCheckboxItem>

        <DropdownMenuCheckboxItem
          checked={lobsterAndShrimp}
          onCheckedChange={setLobsterAndShrimp}
        >
          {items[2]}
        </DropdownMenuCheckboxItem>

        <DropdownMenuCheckboxItem
          checked={squidAndCrabs}
          onCheckedChange={setSquidAndCrabs}
        >
          {items[3]}
        </DropdownMenuCheckboxItem>

        <DropdownMenuCheckboxItem
          checked={smallAndBig}
          onCheckedChange={setSmallAndBig}
        >
          {items[4]}
        </DropdownMenuCheckboxItem>

        <DropdownMenuCheckboxItem
          checked={caviarAndInsects}
          onCheckedChange={setCaviarAndInsects}
        >
          {items[5]}
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
