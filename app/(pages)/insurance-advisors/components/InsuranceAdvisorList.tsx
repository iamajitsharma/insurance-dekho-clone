import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AdvisorType } from "@/lib/types";

const InsuranceAdvisorList = ({
  advisors,
  isLoading,
}: {
  advisors: AdvisorType[];
  isLoading?: boolean;
}) => {
  console.log(advisors, "Inside Insurance Advisor LIst");

  const hasAdvisors = Array.isArray(advisors) && advisors?.length > 0;

  if (!hasAdvisors) {
    <div>
      <p>No Advisor Found</p>
    </div>;
  }

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="py-6">
      {advisors.map((item) => (
        <div
          className="flex items-center gap-4 w-full bg-gray-100 p-4 rounded-2xl my-3"
          key={item.id}
        >
          <div className="shrink-0 w-24 h-24 rounded-full overflow-hidden drop-shadow-sm ">
            <Image
              src={item.image || "/profileDesktop.png"}
              alt={item.name || "Advisor Profile"}
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 flex items-center justify-between w-full">
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-semibold text-gray-700">
                {item.name}
              </h3>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <p>Experience {item.experience} Yrs</p>
                <p>Rating {item.rating}</p>
              </div>
              <p className="text-sm">{item.location}</p>
              <div className="flex items-center gap-1">
                <Button
                  variant={"secondary"}
                  size="sm"
                  className="bg-gray-200 font-normal text-xs"
                >
                  Health Insurnace
                </Button>
                <Button
                  variant={"secondary"}
                  size="sm"
                  className="bg-gray-200 font-normal text-xs"
                >
                  Car Insurnace
                </Button>
                <Button
                  variant={"secondary"}
                  size="sm"
                  className="bg-gray-200 font-normal text-xs"
                >
                  Bike Insurnace
                </Button>
              </div>
            </div>
            <div>
              <Button size={"lg"}>Book Home Visit</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InsuranceAdvisorList;
