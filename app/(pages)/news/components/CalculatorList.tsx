import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
const CalculatorList = () => {
  const calculators = [
    {
      id: "hlv1",
      title: "Human Life Value Calculator",
      link: "/calculators/human-life-value",
    },
    {
      id: "hipc2",
      title: "Health Insurance Premium Calculator",
      link: "/calculators/health-insurance-premium",
    },
    {
      id: "cic3",
      title: "Car Insurance Calculator",
      link: "/calculators/car-insurance",
    },
    {
      id: "bic4",
      title: "Bike Insurance Calculator",
      link: "/calculators/bike-insurance",
    },
    {
      id: "lic5",
      title: "Life Insurance Calculator",
      link: "/calculators/life-insurance",
    },
    {
      id: "tic6",
      title: "Term Insurance Calculator",
      link: "/calculators/term-insurance",
    },
  ];

  return (
    <Card>
      <CardContent className="max-w-md w-full flex flex-col gap-4">
        <CardTitle className="text-xl font-medium text-gray-700">
          Insurance Calculators
        </CardTitle>
        {/* Rendering list of calculator */}
        <div className="flex flex-col gap-4">
          {calculators.map((calculator, index) => {
            const isNotLastIndex = index !== calculators.length - 1;
            return (
              <Link href={calculator.link} key={calculator.id}>
                <div
                  className={`w-full flex justify-between gap-5 py-3 ${
                    isNotLastIndex ? "border-b" : ""
                  }`}
                >
                  <div className="flex-1 text-[13px]">
                    <p>{calculator.title}</p>
                  </div>
                  <div className="w-16 flex items-center justify-end ">
                    <span>
                      <ChevronRight size={18} />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default CalculatorList;
