"use client";
import Container from "@/components/common/Container";
import ProductTitle from "../components/ProductTitle";
import InsuranceAdvisorList from "../components/InsuranceAdvisorList";
import { AdvisorType } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

const getAdvisorsByLocation = async (location: string) => {
  // Get all advisors
  const response = await fetch("http://localhost:4000/advisors");
  const data = await response.json();

  // Applied filter based on the location
  const advisors = data.filter(
    (advisor: AdvisorType) =>
      advisor.location.trim().toLowerCase() === location.trim().toLowerCase()
  );

  // Return filtered advisors based on the selected location
  return advisors;
};

export default function Index({ location }: { location: string }) {
  const { data: advisors = [], isLoading: isAdvisorsLoading } = useQuery({
    queryKey: ["advisors"],
    queryFn: async () => {
      if (location) {
        return await getAdvisorsByLocation(location);
      }
    },
  });

  return (
    <section className="w-full ">
      <Container>
        <div className="flex w-full h-full">
          <div className="w-3/12 bg-gray-300">
            <p>Sidebar</p>
          </div>
          <div className="w-9/12 p-4">
            <ProductTitle
              title={`Insurance Advisors in ${location}`}
              desc="Get expert advice at your home to buy the right insurance plan. Here is a list of the best insurance agents in Faridabad. These agents have an experience of selling Health, Life Insurance and have a rating up to 4.5"
            />

            <InsuranceAdvisorList
              advisors={advisors}
              isLoading={isAdvisorsLoading}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
