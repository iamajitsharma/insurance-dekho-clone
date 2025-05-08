import { AdvisorType } from "@/lib/types";
import Index from "./Index";

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

export default async function Page({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;

  const advisors: AdvisorType[] = await getAdvisorsByLocation(location);

  return <Index data={advisors} />;
}
