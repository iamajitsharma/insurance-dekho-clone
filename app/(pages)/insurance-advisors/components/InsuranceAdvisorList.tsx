import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";

interface AdvisorProps {}

const InsuranceAdvisorList = () => {
  return (
    <div className="py-6">
      {Array.from({ length: 20 }).map((item, index) => (
        <div
          className="flex items-center gap-4 w-full bg-gray-100 p-4 rounded-2xl my-3"
          key={index}
        >
          <div className="shrink-0 w-24 h-24 rounded-full overflow-hidden drop-shadow-sm ">
            <Image
              src={"/GCD40936.jpg"}
              alt="profile image"
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 flex items-center justify-between w-full">
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-semibold text-gray-700">
                K Vinod Kumar
              </h3>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <p>Experience 10 Yrs</p>
                <p>Rating 4.5</p>
              </div>
              <p className="text-sm">Gurgaon</p>
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
