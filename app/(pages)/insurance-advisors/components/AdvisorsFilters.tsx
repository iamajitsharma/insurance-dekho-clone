"use client";
import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { AdvisorType } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import { applyFilter } from "@/store/slices/advisorSlice";
import { useDispatch } from "react-redux";
import { useParams, useRouter } from "next/navigation";

const AdvisorsFilters = () => {
  const [rating, setRating] = useState("");
  const [expertise, setExpertise] = useState("");
  const [experience, setExperience] = useState("");

  const dispatch = useDispatch();
  const { location } = useParams();
  const router = useRouter();

  const { data: advisors = [] } = useQuery<AdvisorType[]>({
    queryKey: ["advisors"],
    queryFn: async () => {
      const response = await fetch("http://localhost:4000/advisors");
      const responseData: AdvisorType[] = await response.json();

      return responseData;
    },
  });

  const cityNames = advisors.map((advisor: AdvisorType) => advisor.location);
  const expertiseData = advisors.map(
    (advisor: AdvisorType) => advisor.category
  );
  const experieceData = advisors.map(
    (advisor: AdvisorType) => advisor.experience
  );

  const cities = [...new Set(cityNames)];
  const uniqueExpertise = [...new Set(expertiseData)];
  const uniqueExperience = [...new Set(experieceData)];

  const handleExperienceCheck = (item: string) => {
    setExperience(item);
    dispatch(applyFilter({ key: "experience", filterValue: item }));
  };

  const handleExpertiseCheck = (item: string) => {
    setExpertise(item);
    dispatch(applyFilter({ key: "expertise", filterValue: item }));
  };

  const handleRatingCheck = (item: string) => {
    setRating(item);
    dispatch(applyFilter({ key: "rating", filterValue: item }));
  };

  const handleCityCheck = (item: string) => {
    dispatch(applyFilter({ key: "city", filterValue: item }));
    router.push(`/insurance-advisors/${item}`);
  };
  console.log(expertise);

  return (
    <div className="py-6 min-h-fit">
      <div className="my-4 flex items-center justify-between px-1">
        <div className="text-base font-semibold text-gray-700">
          <p>Filters</p>
        </div>
        <div className="text-xs font-semibold text-blue-600 cursor-pointer">
          <p>Clear All</p>
        </div>
      </div>
      <Accordion
        type="single"
        collapsible
        className="w-full flex flex-col gap-5"
        defaultValue="city"
      >
        <AccordionItem value="city">
          <AccordionTrigger>City</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-4">
              {cities.map((item: string) => (
                <div key={item} className="flex items-center gap-2 ">
                  <Checkbox
                    className="rounded-full w-5 h-5"
                    checked={location === item}
                    onCheckedChange={() => handleCityCheck(item)}
                  />
                  <p className="text-xs text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Expertise</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-4">
              {uniqueExpertise.map((item: string) => (
                <div key={item} className="flex items-center gap-2 ">
                  <Checkbox
                    className="rounded-full w-5 h-5"
                    checked={expertise === item}
                    onCheckedChange={() => handleExpertiseCheck(item)}
                  />
                  <p className="text-xs text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Rating</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 ">
                <Checkbox
                  className="rounded-full w-5 h-5"
                  checked={rating === "4.6"}
                  onCheckedChange={() => handleRatingCheck("4.6")}
                />
                <p className="text-xs text-gray-700">More than 4.5 Stars</p>
              </div>
              <div className="flex items-center gap-2 ">
                <Checkbox
                  className="rounded-full w-5 h-5"
                  checked={rating === "4.5"}
                  onCheckedChange={() => handleRatingCheck("4.5")}
                />
                <p className="text-xs text-gray-700">4 to 4.5 Stars</p>
              </div>
              <div className="flex items-center gap-2 ">
                <Checkbox
                  className="rounded-full w-5 h-5"
                  checked={rating === "4"}
                  onCheckedChange={() => handleRatingCheck("4")}
                />
                <p className="text-xs text-gray-700">3 to 4 Stars</p>
              </div>
              <div className="flex items-center gap-2 ">
                <Checkbox
                  className="rounded-full w-5 h-5"
                  checked={rating === "3"}
                  onCheckedChange={() => handleRatingCheck("3")}
                />
                <p className="text-xs text-gray-700">Less than 3 Stars</p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Experience</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-4">
              {uniqueExperience.map((item: string) => (
                <div key={item} className="flex items-center gap-2 ">
                  <Checkbox
                    className="rounded-full w-5 h-5"
                    checked={experience === item}
                    onCheckedChange={() => handleExperienceCheck(item)}
                  />
                  <p className="text-xs text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default AdvisorsFilters;
