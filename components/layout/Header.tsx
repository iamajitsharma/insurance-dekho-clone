import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { v4 as uuid } from "uuid";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const navLinks = [
    {
      id: uuid(),
      title: "Insurance",
      url: "/insurance",
      children: [
        { id: uuid(), title: "Health Insurance", url: "/health" },
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
        { id: uuid(), title: "Health Insurance", url: "/health" },
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
        { id: uuid(), title: "Health Insurance", url: "/health" },
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
        { id: uuid(), icon: "", title: "Health Insurance", url: "/health" },
        { id: uuid(), icon: "", title: "Car Insurance", url: "/travel" },
        { id: uuid(), icon: "", title: "Bike Insurance", url: "/life" },
        { id: uuid(), icon: "", title: "Life Insurance", url: "/motor" },
        { id: uuid(), icon: "", title: "Term Insurance", url: "/property" },
        { id: uuid(), icon: "", title: "Investment", url: "/health" },
        { id: uuid(), icon: "", title: "Business Insurance", url: "/health" },
        { id: uuid(), icon: "", title: "Travel Insurance", url: "/health" },
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
    <header className="flex items-center justify-between w-full bg-white py-4 px-6">
      <Link href="/" className="mt-1">
        <Image
          src="/logo.svg"
          alt="logo"
          width={200}
          height={200}
          className="w-48 h-auto"
        />
      </Link>

      <div className="flex items-center gap-1.5">
        {navLinks.map((item) => {
          if (item.children.length > 0) {
            return (
              <DropdownMenu key={item.id}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-[15px] font-semibold text-gray-700"
                  >
                    {item.title}
                    <ChevronDown size={18} className="ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  {item.children.map((child) => (
                    <DropdownMenuItem key={child.id} asChild>
                      <Link href={child.url}>{child.title}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            );
          } else {
            return (
              <Link key={item.id} href={item.url}>
                <Button
                  variant="ghost"
                  className="text-[15px] font-semibold text-gray-700"
                >
                  {item.title}
                </Button>
              </Link>
            );
          }
        })}
      </div>

      <div className="flex items-center gap-4">
        <p className="text-xs text-neutral-500">Track & Policy Download</p>
        <Button className="bg-[#f34653]">Login</Button>
      </div>
    </header>
  );
};

export default Header;
