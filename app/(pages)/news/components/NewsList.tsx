import React from "react";
import Image from "next/image";

interface NewsProps {}

const NewsList = () => {
  return (
    <div>
      {[...Array(10)].map((_, index) => (
        <div
          className="flex gap-4 h-48 rounded-lg overflow-hidden border my-5"
          key={index}
        >
          <div className="h-48 w-1/3">
            <Image
              src="/dummy-news.jpg"
              alt="new items"
              width={200}
              height={200}
              className="object-fill w-full h-full"
            />
          </div>
          <div className="flex-1 py-4">
            <div className="text-gray-700 flex flex-col gap-3">
              <h2 className="text-xl font-semibold ">
                Union Budget 2025: Key Highlights
              </h2>
              <p className="text-sm ">
                Major announcements and highlights of the 2025 Union Budget.
                From zero income tax on earnings up to ₹12lakhs and revised tax
                slabs to increased FDI in insurance, boost in support for
                agriculture and i...
              </p>

              <div className="flex items-center gap-4">
                <div>
                  <span>MS</span>
                </div>
                <div className="text-sm ">
                  <p className="font-medium">Manwendra Singh</p>
                  <p className="text-gray-600 text-xs">02 Feb 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
