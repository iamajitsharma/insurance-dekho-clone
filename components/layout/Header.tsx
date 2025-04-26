import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { v4 as uuid } from "uuid";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const Header = () => {
  const navLinks = [
    {
      id: uuid(),
      title: "Insurance",
      url: "/insurance",
      children: [
        { id: uuid(), title: "Health Insurance", url: "/health", children: [] },
        { id: uuid(), title: "Car Insurance", url: "/travel" },
        { id: uuid(), title: "Bike Insurance", url: "/life" },
        { id: uuid(), title: "Life Insurance", url: "/motor" },
        { id: uuid(), title: "Term Insurance", url: "/property" },
        { id: uuid(), title: "Investment", url: "/health" },
        { id: uuid(), title: "Business Insurance", url: "/health" },
        { id: uuid(), title: "Travel Insurance", url: "/health" },
      ],
    },
    {
      id: uuid(),
      title: "Insurance Advisors",
      url: "/insurance-advisors",
      children: [
        { id: uuid(), title: "Health Insurance", url: "/health", children: [] },
        { id: uuid(), title: "Car Insurance", url: "/travel" },
        { id: uuid(), title: "Bike Insurance", url: "/life" },
        { id: uuid(), title: "Life Insurance", url: "/motor" },
        { id: uuid(), title: "Term Insurance", url: "/property" },
        { id: uuid(), title: "Investment", url: "/health" },
        { id: uuid(), title: "Business Insurance", url: "/health" },
        { id: uuid(), title: "Travel Insurance", url: "/health" },
      ],
    },
    {
      id: uuid(),
      title: "Renew",
      url: "/renew",
      children: [],
    },
    {
      id: uuid(),
      title: "Support",
      url: "/support",
      children: [
        { id: uuid(), title: "Health Insurance", url: "/health", children: [] },
        { id: uuid(), title: "Car Insurance", url: "/travel" },
        { id: uuid(), title: "Bike Insurance", url: "/life" },
        { id: uuid(), title: "Life Insurance", url: "/motor" },
        { id: uuid(), title: "Term Insurance", url: "/property" },
        { id: uuid(), title: "Investment", url: "/health" },
        { id: uuid(), title: "Business Insurance", url: "/health" },
        { id: uuid(), title: "Travel Insurance", url: "/health" },
      ],
    },
    {
      id: uuid(),
      title: "NEWS",
      url: "/news",
      children: [
        { id: uuid(), title: "Health Insurance", url: "/health", children: [] },
        { id: uuid(), title: "Car Insurance", url: "/travel" },
        { id: uuid(), title: "Bike Insurance", url: "/life" },
        { id: uuid(), title: "Life Insurance", url: "/motor" },
        { id: uuid(), title: "Term Insurance", url: "/property" },
        { id: uuid(), title: "Investment", url: "/health" },
        { id: uuid(), title: "Business Insurance", url: "/health" },
        { id: uuid(), title: "Travel Insurance", url: "/health" },
      ],
    },
    {
      id: uuid(),
      title: "Become POSP Agent",
      url: "/become-posp-agent",
      children: [],
    },
  ];

  return (
    <div className="flex items-center justify-between w-full bg-white py-3 px-6">
      <div>
        <Image
          src="/logo.svg"
          alt="logo"
          width={200}
          height={200}
          className="w-48 h-auto"
        />
      </div>
      <div className="flex items-center gap-2">
        {navLinks.map((item) => {
          if (item.children.length > 0) {
            return (
              <DropdownMenu key={item.id}>
                <DropdownMenuTrigger asChild>
                  <Button variant={"ghost"} className="text-base font-semibold">
                    {item.title}
                    <span>
                      <ChevronDown size={20} />
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      Profile
                      <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      Billing
                      <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      Settings
                      <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      Keyboard shortcuts
                      <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>
                        Invite users
                      </DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                          <DropdownMenuItem>Email</DropdownMenuItem>
                          <DropdownMenuItem>Message</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>More...</DropdownMenuItem>
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                    <DropdownMenuItem>
                      New Team
                      <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>GitHub</DropdownMenuItem>
                  <DropdownMenuItem>Support</DropdownMenuItem>
                  <DropdownMenuItem disabled>API</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    Log out
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            );
          } else {
            return (
              <div key={item.id}>
                <Button variant={"ghost"} className="text-base font-semibold">
                  {item.title}
                </Button>
              </div>
            );
          }
        })}
      </div>
      <div className="flex items-center gap-4">
        <p className="text-xs text-neutral-500">Track & Policy Download</p>
        <Button className="bg-[#f34653]">Login</Button>
      </div>
    </div>
  );
};

export default Header;
