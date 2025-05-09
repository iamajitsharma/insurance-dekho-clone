"use client";
import Container from "@/components/common/Container";
import ProductTitle from "../components/ProductTitle";
import InsuranceAdvisorList from "../components/InsuranceAdvisorList";
import { AdvisorType } from "@/lib/types";
import { useParams } from "next/navigation";
import AdvisorsFilters from "../components/AdvisorsFilters";
import { useAppSelector } from "@/store";
import { useEffect, useState } from "react";

export default function Index({ data }: { data: AdvisorType[] }) {
  const [advisorsData, setAdvisorsData] = useState<AdvisorType[]>([]);

  const filterItems = useAppSelector((state) => state.advisor.filters);

  const { location } = useParams();
  console.log(location);

  const { city, experience, expertise, rating } = filterItems;

  useEffect(() => {
    if (experience || expertise || city || rating) {
      const filteredAdvisors = data.filter((advisor: AdvisorType) => {
        const matchesExpertise = expertise
          ? advisor.category.includes(expertise)
          : true;

        const matchesExperience = experience
          ? advisor.experience.includes(experience)
          : true;
        // const matchesCity = city ? advisor.city === city : true;
        const matchesRating = (() => {
          if (rating === "4.6") {
            return Number(advisor.rating) > 4.5;
          } else if (rating === "4.5") {
            return Number(advisor.rating) > 4 && Number(advisor.rating) <= 4.5;
          } else if (rating === "4") {
            return Number(advisor.rating) >= 3 && Number(advisor.rating) <= 4;
          } else if (rating === "3") {
            return Number(advisor.rating) < 3;
          } else {
            return true;
          }
        })();

        return matchesExpertise && matchesExperience && matchesRating;
      });

      console.log("Filtered Advisors", filteredAdvisors);
      setAdvisorsData(filteredAdvisors);
    } else {
      setAdvisorsData(data);
    }
  }, [data, expertise, experience, city, rating]);

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
