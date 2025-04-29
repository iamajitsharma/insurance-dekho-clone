import Image from "next/image";
import React from "react";
import { v4 as uuid } from "uuid";
import { Badge } from "@/components/ui/badge";

interface ProductProps {
  id: string;
  title: string;
  type: string;
  icon: string;
  badge: string;
}

const FeaturedProducts = () => {
  const products: ProductProps[] = [
    {
      id: uuid(),
      title: "Car",
      type: "Insurance",
      icon: "/icon/v2_icon_car.svg",
      badge: "",
    },
    {
      id: uuid(),
      title: "Bike",
      type: "Insurance",
      icon: "/icon/v2_icon_bike.svg",
      badge: "",
    },
    {
      id: uuid(),
      title: "Health",
      type: "Insurance",
      icon: "/icon/v2_icon_car.svg",
      badge: "Upto 25% Off*",
    },
    {
      id: uuid(),
      title: "Term",
      type: "Insurance",
      icon: "/icon/v2_icon_car.svg",
      badge: "Save on tax*",
    },
    {
      id: uuid(),
      title: "Investment",
      type: "Plans",
      icon: "/icon/v2_icon_car.svg",
      badge: "",
    },
    {
      id: uuid(),
      title: "Business",
      type: "Insurance",
      icon: "/icon/v2_icon_car.svg",
      badge: "New",
    },
    {
      id: uuid(),
      title: "Family Health",
      type: "Insurance",
      icon: "/icon/v2_icon_car.svg",
      badge: "",
    },
    {
      id: uuid(),
      title: "Guaranteed",
      type: "Return Plans",
      icon: "/icon/v2_icon_car.svg",
      badge: "",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl w-full p-6 rounded-4xl bg-white shadow">
      <div className="grid grid-cols-5 gap-y-4">
        {products.map((item: ProductProps) => (
          <div
            key={item.id}
            className="relative flex flex-col items-center justify-center p-4 hover:bg-sky-50 rounded-2xl"
          >
            <div className="w-[46px] h-[46px]">
              <Image src={item.icon} alt="" width={46} height={46} />
            </div>
            <div className="flex flex-col gap-0 items-center justify-center">
              <h4 className="text-base font-medium">{item.title}</h4>
              <p className="text-xs font-light">{item.type}</p>
            </div>

            {item.badge && (
              <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                {item.badge === "New" ? (
                  <Badge className="rounded bg-rose-600">{item.badge}</Badge>
                ) : (
                  <Badge className="rounded bg-green-600">{item.badge}</Badge>
                )}
              </div>
            )}
          </div>
        ))}
        <div className="flex flex-col items-center justify-center p-4 hover:bg-sky-50 rounded-2xl">
          <div className="w-[46px] h-[46px]">
            <Image
              src="/icon/v2_icon_viewmore.svg"
              alt=""
              width={46}
              height={46}
            />
          </div>
          <div className="flex flex-col gap-0 items-center justify-center">
            <h4 className="text-base font-medium">View More</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
