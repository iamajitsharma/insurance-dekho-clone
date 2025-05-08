"use client";
import Container from "@/components/common/Container";
import ProductTitle from "../components/ProductTitle";
import InsuranceAdvisorList from "../components/InsuranceAdvisorList";
import { AdvisorType } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import AdvisorsFilters from "../components/AdvisorsFilters";
import { useAppSelector } from "@/store";
import { useEffect, useState } from "react";

const getAdvisorsByLocation = async (location: string) => {
  // Get all advisors
  const response = await fetch("http://localhost:4000/advisors");
  const data = await response.json();

  // Applied filter based on the location
  const advisors = data.filter(
    (advisor: AdvisorType) =>
      advisor.location.trim().toLowerCase() === location.trim().toLowerCase()
  );

  console.log(advisors, "Ins");

  // Return filtered advisors based on the selected location
  return advisors;
};

export default function Index({ data }: { data: AdvisorType[] }) {
  const [advisorsData, setAdvisorsData] = useState<AdvisorType[]>([]);

  const filterItems = useAppSelector((state) => state.advisor.filters);

  const { location } = useParams();
  console.log(location);

  // const { data: advisors = [], isLoading: isAdvisorsLoading } = useQuery({
  //   queryKey: ["advisors"],
  //   queryFn: async () => {
  //     if (location) {
  //       return await getAdvisorsByLocation(location);
  //     } else {
  //       return [];
  //     }
  //   },
  // });

  useEffect(() => {
    if (filterItems) {
      console.log("Fillter Applied");
      const filteredAdvisors = data.filter(
        (advisor: AdvisorType) =>
          advisor.category.trim().toLowerCase() ===
            filterItems.expertise.trim().toLowerCase() ||
          Number(advisor.rating) >= 4 ||
          advisor.experience.trim().toLowerCase() ===
            filterItems.experience.trim().toLowerCase()
      );

      setAdvisorsData(filteredAdvisors);
    } else {
      setAdvisorsData(data);
    }
  }, [data, filterItems]);

  console.log(advisorsData, "Advisor List");

  return (
    <section className="w-full ">
      <Container>
        <div className="flex w-full h-full">
          <div className="w-3/12">
            <AdvisorsFilters />
          </div>
          <div className="w-9/12 p-4">
            <ProductTitle
              title={`Insurance Advisors in ${location}`}
              desc="Get expert advice at your home to buy the right insurance plan. Here is a list of the best insurance agents in Faridabad. These agents have an experience of selling Health, Life Insurance and have a rating up to 4.5"
            />

            <InsuranceAdvisorList advisors={advisorsData} />
          </div>
        </div>
      </Container>
    </section>
  );
}
