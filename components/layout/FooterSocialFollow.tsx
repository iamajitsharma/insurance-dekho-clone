import Image from "next/image";
import React from "react";
import { v4 as uuid } from "uuid";
import Link from "next/link";

const FooterSocialFollow = () => {
  const socials = [
    {
      id: uuid(),
      icon: "/icon/social-facebook.svg",
      title: "Insurance Dekho Facebook",
      link: "https://www.facebook.com/InsurnaceDekho/",
    },
    {
      id: uuid(),
      icon: "/icon/social-insta.svg",
      title: "Insurance Dekho Instagram",
      link: "https://www.facebook.com/InsurnaceDekho/",
    },
    {
      id: uuid(),
      icon: "/icon/social-linkedin.svg",
      title: "Insurance Dekho LinkedIn",
      link: "https://www.facebook.com/InsurnaceDekho/",
    },
    {
      id: uuid(),
      icon: "/icon/social-youtube.svg",
      title: "Insurance Dekho Youtube",
      link: "https://www.facebook.com/InsurnaceDekho/",
    },
    {
      id: uuid(),
      icon: "/icon/v2_tw.svg",
      title: "Insurance Dekho X",
      link: "https://www.facebook.com/InsurnaceDekho/",
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      {/* Brand Logo */}
      <div>
        <Image
          src="/logo.svg"
          alt="Insurnace Dekho"
          width={200}
          height={200}
          className="w-52 h-auto"
        />
      </div>

      {/* Social Icon */}
      <div className="flex items-center gap-2">
        {socials.map((item) => (
          <Link key={item.id} href={item.link} target="_blank">
            <span className="w-10 h-10">
              <Image
                src={item.icon}
                alt={item.title}
                width={64}
                height={64}
                className="w-full h-full"
              />
            </span>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="flex flex-col gap-1">
        <p>
          Email:<span>support@insurancedekho.com</span>
        </p>
        <p>
          Call:<span> 755 1196 989</span>
        </p>
      </div>
    </div>
  );
};

export default FooterSocialFollow;
