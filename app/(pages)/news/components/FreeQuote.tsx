import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { UserRound } from "lucide-react";

const FreeQuote = () => {
  return (
    <Card>
      <CardContent className="max-w-md w-full flex flex-col gap-4">
        <CardTitle className="text-2xl font-normal text-gray-700">
          <span className="font-medium">Find</span> the right health insurance
          for you
        </CardTitle>
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <Button className="bg-blue-500 rounded py-5 hover:bg-blue-500 border-blue-500">
              <span>
                <UserRound />
              </span>
              Male
            </Button>
            <Button
              variant={"outline"}
              className="border-blue-500 rounded py-5 hover:bg-transparent "
            >
              <span>
                <UserRound />
              </span>
              Female
            </Button>
          </div>
          <Input placeholder="Name" className="h-14" />
          <div>
            <Button variant={"default"} size={"lg"} className="w-full rounded">
              Get Free Quotes
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FreeQuote;
