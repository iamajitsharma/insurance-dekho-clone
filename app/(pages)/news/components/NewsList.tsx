import React from "react";
import Image from "next/image";

interface NewsProps {
  id: string;
  title: string;
  description: string;
  image: string;
  publisher: string;
  date: string;
  category: string;
}

const NewsList = ({ news }: { news: NewsProps[] }) => {
  return (
    <div>
      {news.map((newsItem: NewsProps) => (
        <div
          className="flex gap-4 h-52 rounded-lg overflow-hidden border my-5"
          key={newsItem.id}
        >
          <div className="h-52 w-1/3">
            <Image
              src={newsItem.image || "/dummy-news.jpg"}
              alt={newsItem.title}
              width={200}
              height={200}
              className="object-fill w-full h-full"
            />
          </div>
          <div className="flex-1 py-4">
            <div className="text-gray-700 flex flex-col gap-3">
              <h2 className="text-xl font-semibold ">{newsItem.title}</h2>
              <p className="text-sm line-clamp-4">{newsItem.description}</p>

              <div className="flex items-center gap-4">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-400">
                  <span>{newsItem.publisher.substring(0, 1)}</span>
                </div>
                <div className="text-sm ">
                  <p className="font-medium">{newsItem.publisher}</p>
                  <p className="text-gray-600 text-xs">{newsItem.date}</p>
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
