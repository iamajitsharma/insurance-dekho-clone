"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { v4 as uuid } from "uuid";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";
import { ScrollArea } from "../ui/scroll-area";

interface MenuItemProps {
  id: string;
  title: string;
  url: string;
  icon?: string;
}

interface NavLinksProps extends MenuItemProps {
  children: MenuItemProps[];
}

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition >= 90) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const navLinks: NavLinksProps[] = [
    {
      id: uuid(),
      title: "Insurance",
      url: "/insurance",
      children: [
        {
          id: uuid(),
          title: "Health Insurance",
          url: "/health",
          icon: "/icon/v2_icon_health.svg",
        },
        {
          id: uuid(),
          title: "Car Insurance",
          url: "/car",
          icon: "/icon/v2_icon_car.svg",
        },
        {
          id: uuid(),
          title: "Bike Insurance",
          url: "/bike",
          icon: "/icon/v2_icon_bike.svg",
        },
        {
          id: uuid(),
          title: "Life Insurance",
          url: "/life",
          icon: "/icon/life_insurance.svg",
        },
        {
          id: uuid(),
          title: "Term Insurance",
          url: "/term",
          icon: "/icon/v2_icon_life.svg",
        },
        {
          id: uuid(),
          title: "Investment",
          url: "/investment",
          icon: "/icon/v2_icon_investment.svg",
        },
        {
          id: uuid(),
          title: "Business Insurance",
          url: "/business",
          icon: "/icon/business_insurance.svg",
        },
        {
          id: uuid(),
          title: "Travel Insurance",
          url: "/travel",
          icon: "/icon/v2_icontravel.svg",
        },
      ],
    },
    {
      id: uuid(),
      title: "Insurance Advisors",
      url: "/insurance-advisors",
      children: [
        {
          id: uuid(),
          title: "Insurance Advisors in New Delhi",
          url: "/insurance-advisors/new-delhi",
        },
        {
          id: uuid(),
          title: "Insurance Advisors in New Faridabad",
          url: "/insurance-advisors/new-faridabad",
        },
        {
          id: uuid(),
          title: "Insurance Advisors in New Ghaziabad",
          url: "/insurance-advisors/new-ghaziabad",
        },
        {
          id: uuid(),
          title: "Insurance Advisors in New Noida",
          url: "/insurance-advisors/new-noida",
        },
        {
          id: uuid(),
          title: "Insurance Advisors in New Kolkata",
          url: "/insurance-advisors/new-kolkata",
        },
        {
          id: uuid(),
          title: "Insurance Advisors in New Hyderabad",
          url: "/insurance-advisors/new-hyderabad",
        },
        {
          id: uuid(),
          title: "Insurance Advisors in New Lucknow",
          url: "/insurance-advisors/new-lucknow",
        },
        {
          id: uuid(),
          title: "Insurance Advisors in New Mumbai",
          url: "/insurance-advisors/new-mumbai",
        },
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
        {
          id: uuid(),
          title: "Renew Policy",
          url: "/support/renew",
          icon: "/icon/v2_icon_policyrenew.svg",
        },
        {
          id: uuid(),
          title: "Track Policy",
          url: "/support/track",
          icon: "/icon/v2_icon_policytrack.svg",
        },
        {
          id: uuid(),
          title: "Download Policy",
          url: "/support/download",
          icon: "/icon/v2_icon_policydownload.svg",
        },
        {
          id: uuid(),
          title: "Call Us",
          url: "/support/call",
          icon: "/icon/v2_call-green.svg",
        },
      ],
    },
    {
      id: uuid(),
      title: "NEWS",
      url: "/news",
      children: [
        {
          id: uuid(),
          title: "Health News",
          url: "/news/health",
          icon: "/icon/v2_icon_health.svg",
        },
        {
          id: uuid(),
          title: "Car News",
          url: "/news/car",
          icon: "/icon/v2_icon_car.svg",
        },
        {
          id: uuid(),
          title: "Bike News",
          url: "/news/bike",
          icon: "/icon/v2_icon_bike.svg",
        },
        {
          id: uuid(),
          title: "Life News",
          url: "/news/life",
          icon: "/icon/life_insurance.svg",
        },
        {
          id: uuid(),
          title: "Term News",
          url: "/news/term",
          icon: "/icon/v2_icon_life.svg",
        },
        {
          id: uuid(),
          title: "Investment News",
          url: "/news/investment",
          icon: "/icon/v2_icon_investment.svg",
        },
        {
          id: uuid(),
          title: "Business News",
          url: "/news/business",
          icon: "/icon/business_insurance.svg",
        },
        {
          id: uuid(),
          title: "Travel News",
          url: "/news/travel",
          icon: "/icon/v2_icontravel.svg",
        },
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
    <header
      className={`w-full py-5 px-5 sticky top-0 overflow-hidden ease-in-out duration-300 ${
        isScrolled ? "bg-white z-50 shadow-md" : ""
      }`}
    >
      <div className="flex items-center justify-between h-fit">
        <Link href="/" className="mt-1.5 w-[200px] h-auto">
          <Image
            src="/logo.svg"
            alt="logo"
            width={200}
            height={200}
            className="w-full h-full"
          />
        </Link>

        <div className="flex flex-col md:flex-row items-center gap-1.5">
          {navLinks.map((item) => {
            if (item.children.length > 0) {
              return (
                <DropdownMenu key={item.id}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="text-[15px] font-semibold text-gray-700 focus-visible:ring-0 cursor-pointer"
                    >
                      {item.title}

                      <Image
                        src="/icon/downarrow.svg"
                        alt="down arrow"
                        width={8}
                        height={8}
                      />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-72" align="start">
                    <ScrollArea className="h-72">
                      {item.children.map((child) => (
                        <DropdownMenuItem
                          key={child.id}
                          asChild
                          className="my-3"
                        >
                          <Link
                            href={child.url}
                            className="cursor-pointer text-sm"
                          >
                            {child.icon && (
                              <Image
                                src={child.icon}
                                alt={child.title}
                                width={20}
                                height={20}
                                className="mr-2"
                              />
                            )}
                            {child.title === "Call Us" ? (
                              <div>
                                <span className="text-xs">{child.title}</span>
                                <p>75111175111</p>
                              </div>
                            ) : (
                              child.title
                            )}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </ScrollArea>
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

        <div className="flex items-center gap-3">
          <p className="text-[10px] text-gray-700">Track & Policy Download</p>
          <Button size={"sm"}>Login</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
