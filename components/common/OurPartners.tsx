import React from "react";
import PageTitle from "./PageTitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import OurClientSlider from "./OurClientSlider";
import { v4 as uuid } from "uuid";

const OurPartners = () => {
  const ourParters = [
    {
      id: uuid(),
      title: "General",
      clients: [
        {
          id: uuid(),
          name: "Bajaj Allianz General Insurance",
          logo: "/icon/bajaj-allianz.svg",
        },
        {
          id: uuid(),
          name: "Bajaj Allianz General Insurance",
          logo: "/icon/bajaj-allianz.svg",
        },
        {
          id: uuid(),
          name: "Bajaj Allianz General Insurance",
          logo: "/icon/bajaj-allianz.svg",
        },
        {
          id: uuid(),
          name: "Bajaj Allianz General Insurance",
          logo: "/icon/bajaj-allianz.svg",
        },
        {
          id: uuid(),
          name: "Bajaj Allianz General Insurance",
          logo: "/icon/bajaj-allianz.svg",
        },
      ],
    },
    {
      id: uuid(),
      title: "Car",
      clients: [
        {
          id: uuid(),
          name: "Bajaj Allianz General Insurance",
          logo: "/icon/bajaj-allianz.svg",
        },
        {
          id: uuid(),
          name: "Bajaj Allianz General Insurance",
          logo: "/icon/bajaj-allianz.svg",
        },
        {
          id: uuid(),
          name: "Bajaj Allianz General Insurance",
          logo: "/icon/bajaj-allianz.svg",
        },
        {
          id: uuid(),
          name: "Bajaj Allianz General Insurance",
          logo: "/icon/bajaj-allianz.svg",
        },
        {
          id: uuid(),
          name: "Bajaj Allianz General Insurance",
          logo: "/icon/bajaj-allianz.svg",
        },
      ],
    },
    {
      id: uuid(),
      title: "Bike",
      clients: [
        {
          id: uuid(),
          name: "Bajaj Allianz General Insurance",
          logo: "/icon/bajaj-allianz.svg",
        },
        {
          id: uuid(),
          name: "Bajaj Allianz General Insurance",
          logo: "/icon/bajaj-allianz.svg",
        },
        {
          id: uuid(),
          name: "Bajaj Allianz General Insurance",
          logo: "/icon/bajaj-allianz.svg",
        },
        {
          id: uuid(),
          name: "Bajaj Allianz General Insurance",
          logo: "/icon/bajaj-allianz.svg",
        },
        {
          id: uuid(),
          name: "Bajaj Allianz General Insurance",
          logo: "/icon/bajaj-allianz.svg",
        },
      ],
    },
    {
      id: uuid(),
      title: "General",
      clients: [
        {
          id: uuid(),
          name: "Bajaj Allianz General Insurance",
          logo: "/icon/bajaj-allianz.svg",
        },
        {
          id: uuid(),
          name: "Bajaj Allianz General Insurance",
          logo: "/icon/bajaj-allianz.svg",
        },
        {
          id: uuid(),
          name: "Bajaj Allianz General Insurance",
          logo: "/icon/bajaj-allianz.svg",
        },
        {
          id: uuid(),
          name: "Bajaj Allianz General Insurance",
          logo: "/icon/bajaj-allianz.svg",
        },
        {
          id: uuid(),
          name: "Bajaj Allianz General Insurance",
          logo: "/icon/bajaj-allianz.svg",
        },
      ],
    },
  ];

  const tabCss = "";

  return (
    <section className="my-8">
      <PageTitle
        title="Our Insurance Partners"
        subheading="We're associated with india's popular insurance companies."
      />

      {/* Tab Content */}
      <div className="flex items-center justify-center gap-x-6 max-w-7xl w-full mx-auto">
        <Tabs defaultValue={ourParters[0].id}>
          <TabsList className="bg-transparent flex items-center justify-center max-w-2xl w-full mx-auto">
            {ourParters.map((item) => (
              <TabsTrigger
                key={item.id}
                value={item.id}
                className={
                  "cursor-pointer text-gray-700 data-[state=active]:bg-transparent data-[state=active]:rounded-none data-[state=active]:border-0 data-[state=active]:border-b-2 data-[state=active]:text-blue-500 data-[state=active]:border-blue-500 data-[state=active]:shadow-none data-[state=active]:font-semibold"
                }
              >
                {item.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {ourParters.map((item) => (
            <TabsContent key={item.id} value={item.id} className="h-96">
              <OurClientSlider />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default OurPartners;
