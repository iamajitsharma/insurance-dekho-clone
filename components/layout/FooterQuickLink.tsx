import React from "react";

interface FooterMenuProps {
  title: string;
  links: string[];
}

const FooterQuickLink: React.FC<FooterMenuProps> = ({ title, links }) => {
  return (
    <div>
      <div>
        <h5 className="font-semibold text-sm">{title}</h5>
      </div>
      <div className="py-2">
        <ul className="flex flex-col gap-1.5">
          {links.map((item, idx) => (
            <li key={idx} className="text-xs text-gray-700 hover:underline">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FooterQuickLink;
