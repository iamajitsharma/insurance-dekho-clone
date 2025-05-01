import React from "react";
import { cn } from "@/lib/utils";

interface PageTitleProps {
  title: string;
  subheading?: string;
  headingClass?: string;
  subheadingClass?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({
  title,
  subheading,
  headingClass,
  subheadingClass,
}) => {
  return (
    <div className="flex flex-col gap-1 items-center justify-center w-full py-6">
      <h2 className={cn("text-3xl font-semibold text-gray-700", headingClass)}>
        {title}
      </h2>
      {subheading && (
        <div>
          <p className={cn("text-base text-gray-600", subheadingClass)}>
            {subheading}
          </p>
        </div>
      )}
    </div>
  );
};

export default PageTitle;
