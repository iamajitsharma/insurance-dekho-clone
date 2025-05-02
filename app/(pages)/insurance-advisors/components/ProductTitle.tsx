import React from "react";

interface ProductTitleProps {
  title: string;
  desc?: string;
}

const ProductTitle: React.FC<ProductTitleProps> = ({ title, desc }) => {
  return (
    <div className="flex flex-col gap-1 text-gray-700">
      <h2 className="text-2xl font-semibold capitalize">{title}</h2>
      {desc && <p className="text-[13px]">{desc}</p>}
    </div>
  );
};

export default ProductTitle;
